## 💁🏻‍♂️ Let’s Encrypt란?

기본적으로 https를 웹에 사용하기 위해서는, CA (Certified Authority)로 부터 인증서를 발급 받아야하는데, Let’s Encrypt는 CA라고 생각하면된다. Let’s Encrypt가 차별화 되는 이유는 대부분의 인증서가 유료인 반면, let’s encrypt는 무료라는 장점이 있다.

## 😒 단점..

1. domain validated SSL certificate 이다 보니, 그 웹사이트를 개발한 사람에 대한 정보를 저장하지 않아서 만약 virus나 악성코드가 있다면 누가 그 나쁜짓을 했는지 추적하기가 어렵다.
2. 인증서 유효기간이 짧다, 하지만 자동 갱신 설정도 있다는것. 그래도 docker를 사용한다면 한번 씩 build를 다시 해줘야 한다.
3. 한개의 웹사이트만 지원된다. 예를들어 [www.website.com](http://www.website.com) 이 있고 blog.website.com이 있다면 따로 2개의 웹사이트로 만들어야하며 두개의 인증을 받아야한다

꽁짜인거 치고는 괜찮다.

SSL Ceritficate을 재갱신하는데는 [acme.sh](http://acme.sh) 를 사용할 예정이다. **acme.sh**는 아주 쉽고 빠르게 ssl certificate을 갱신/재발급 해준다.

## 🚀 Installation

본인은 centos/mac 환경에서 진행했다.

1. 우선 certbot, Let’s encrypt를 다운받는다.

```bash
sudo apt-get install certbot # centos
brew install certbot # macos
```

[acme.sh](http://acme.sh) 도 다운 받는다

```bash
curl https://get.acme.sh | sh -s email=my@example.com         # curl
wget -O -  https://get.acme.sh | sh -s email=my@example.com   # wget
```

다운 받고, bash나 zsh에 alias로 [acme.sh](http://acme.sh) 를 설정 해준다.

```bash
alias acme.sh=~/.acme.sh/acme.sh    # 맥 환경, centos는 root계정에 추가된다.
```

## ✨ 인증서 생성

본인 같은 경우는 좀 다르게 port 80를 사용할 수 없었다. 그래서 [여기](https://jmorahan.net/articles/lets-encrypt-without-port-80/)를 참고했다. 우선, 그것을 배제하고 원래대로라면 아래와 같이 인증서를 생성한다.

```bash
acme.sh --issue --dns -d <my domain>
```

각 상황 별로 `—dns` 가 `—webroot`, `—nginx`등 다양한 flag가 필요할 수 도 있으니, 그에 알맞는 flag를 넣어서 인증서를 생성해보자. [여기](https://github.com/acmesh-official/acme.sh)를 참고하자

여기 까지 다 완료가 되었다면 /root/.acme.sh 라는 폴더가 생성이 되었을 것이고, 그와 동시에 /root/.acme.sh/<my domain> 이라는 폴더도 생성 되었으며, 그 안에 실행 후 폴더를 확인해보면 `<url>.cer`, `<url>.key`, `ca.cer`, `fullchain.cer` 등 다양한 certificate 파일들이 생성이 되었을 것이다. 이렇게 되면 갱신이 완료 되었으며, `service nginx start` 으로 nginx service가 시작이 된다.

재갱신 같은 경우

```bash
acme.sh --renew -d <my domain>
```

를 실행 시키면 알아서 폴더에 저장이된다. 실행 후 폴더를 확인해보면 `<url>.cer`, `<url>.key`, `ca.cer`, `fullchain.cer` 등 다양한 certificate 파일들이 생성이 되었을 것이다. 이렇게 되면 갱신이 완료 되었으며, `service nginx start` 으로 nginx service가 시작이 된다.