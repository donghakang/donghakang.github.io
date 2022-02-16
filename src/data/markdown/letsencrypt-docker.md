⚠ 여기서 부터는 지극히 나의 프로젝트 구조이다 보니 다른 구조로 진행 하는 방법도 무조건 있을 것이다.

하지만 이것은 나의 구조이고 ... 작동 한다.

## 👷🏼‍♂️ 프로젝트 구조

```bash
project
├── docker-local
│   ├── docker-compose.yml    # docker 실행 파일
│   ├── openresty             # lua-script가 있는 nginx라고 생각하면된다.
│   └── postgresql            # db
├── server                    # fastapi를 이용한 백엔드
│   ├── Dockerfile
│   ├── app
│   ├── requirements.txt
│   └── runserver.py
└── client                    # 웹 코딩
    ├── src
    ├── node_modules
    └── package.json
```

`docker-local` 폴더 안에 docker-compose 를 실행시키면, server 같은 경우, `tiangolo/uvicorn-gunicorn:python3.8`을 이용해서 fastapi 를 실행하는 Dockerfile을 실행시키고, postgresql 는 `postgres:13.2` 이미지를 실행시킨다. (지금 context와는 별로 안중요...)

client 같은 경우는 build한 폴더를 나중에 docker를 이용, nginx를 사용해서 같이 실행시킬 예정이며 다른 docker image들도 nginx.conf (openresty 폴더안에 위치)안 proxy_pass로 연결 해준다.

여기서 포인트는 `nginx.conf` 안에 인증서를 넣을 계획이다.

## ⚙️ 셋업

지난번 포스트 처럼 재갱신을 진행하게 된다면, `/root/.acme.sh/my-domain/` 안에는 이미 다 .cer .key 등 인증서 파일들이 저장이 되어있을 것이다.

그것을 나같은 경우 openresty 폴더 안에 복사를 했다.

```bash
openresty
├── Dockerfile
├── certs
│   └── my-domain
│       └── all .cer and .key files
├── logs
└── nginx.conf
```

저 .cer .key 파일들을 docker을 이용하여, container안으로 모실 계획이다.

우선 `docker-compose.yml` 이다.

```yaml
version: "3.7"

services:
  openresty:
  build:
    context: ./openresty
    dockerfile: ./Dockerfile
  image: openresty
  container_name: openresty
  volumes:
    - ./openresty/nginx.conf:/usr/local/openresty/nginx/conf/nginx.conf:ro
    - ./openresty/logs:/var/log/nginx
    - ./openresty/certs:/usr/local/openresty/nginx/certs
    - .../client/dist:/usr/local/openresty/nginx/html/www
    ...
  ...
```

`Dockerfile`

```yaml
FROM openresty/openresty:alpine-fat

RUN mkdir /var/log/nginx

RUN apk add --no-cache openssl-dev
RUN apk add --no-cache git
RUN apk add --no-cache gcc

RUN luarocks install lua-resty-openidc

ENTRYPOINT [ "/usr/local/openresty/nginx/sbin/nginx", "-g", "daemon off;" ]
```

Dockerfile 같은 경우 특별 한 것은 없다. 그냥 nginx가 돌아갈 공간을 만들어주는 정도...

docker-compose.yml 에는 certs를 특정 volume에다가 복사를 할 준비를 하고 있다. certs 뿐만아니라, client nginx.conf 도 volume안으로 넣는다.

**nginx.conf**같은 경우, server 에서 인증 받은 정보를 불러와야한다.

```json
server {
    listen 443 ssl http2;
    server_name my-domain;

    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_certificate     /usr/local/openresty/nginx/certs/my-domain/my-domain.cer;
    ssl_certificate_key /usr/local/openresty/nginx/certs/my-domain/my-domain.key;

    access_log /usr/local/openresty/nginx/logs/my-domain.access.log;
    error_log  /usr/local/openresty/nginx/logs/my-domain.error.log;

```

### 🧘🏿‍♂️  짚고가기

nginx.conf 가 열리면 port 443이 열리고 (80으로 설정하는것이 가장 기본적) ssl, http2 를 확인하고 ssl 이 있었기 때문에 ssl_certificate을 확인한다. 저 ssl_certificate의 위치는 **docker container (openresty)**안에 `/usr/local/openresty/nginx/certs/my-domain` 안에 있고 그 위치로 옮기게 도와준 것은 docker-compose.yml 에 `./openresty/certs:/usr/local/openresty/nginx/certs` 을 읽어서 이다.

이제, `docker-compose up —build`를 실행하고 결과를 확인해보자!