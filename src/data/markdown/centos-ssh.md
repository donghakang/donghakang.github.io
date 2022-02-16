# Hi, CentOS

현재 근무지에서 새로운 서버를 구축하기로 했고, 이 CentOS 로 다른 컴퓨터에서도 ssh 원격으로 접속 할 수 있게끔 설정을 처음부터 해보는 시간을 가졌다.

## ⁇ 너의 ip, port는

우선 현재 통신망이 global 로 (iptime)으로 설정된 상태이니, 192.168.0.1 을 접속해서 현재 통신망 설정을 알아본다.

아이디와 비밀번호를 입력해서 로그인을 한뒤에 제일 먼저 보이는 Static IP WAN IP를 확인하면 되는데, 그것이 바로 global IP(X.X.X.X) 라고 생각하면 되고 그것을 이용해서 나중에 통신을 할 예정이다.

---

## 🔁 Port forwarding

**port forwarding**이란, 외부에서 공유기로 진입이 외부 IP를 통해 진입이 되고 내부 IP 로 넘어 오게 되는데 이 때 새로운 주소를 줘서 네트워크의 주소를 변경해주는, 즉 외부에서 접속이 가능하도록 Port를 주는것이 바로 포트 포워딩 입니다. 다시말해, 컴퓨터들에게 특정 포트를 개방시켜서 서로 통신이 될 수 있돌록 만들어 주는 것입니다. 

우선 새로운 서버를 Port forwarding 하기전 새 컴퓨터를 네트워크에 연결 시킨 후, 어떤 것이 자신의 내부 IP 인지 확인한다 (192.X.X.X). 

(iptime 기준) Advance setting → NAT/Routing → Port forwarding 에서 +Add new rules 를 눌러서 새로운 rule을 만든다 (ssh, 이 port 기준 TCP 22) 

저장이 된뒤에 ssh 를 접속 해보자 

```bash
ssh -p 12080 root@<global IP>
```

---

## ✨ Web hosting

나의 궁극적인 목표는 `ssh -p 12080 root@ssh.<web hosting name>` 로 했을때 ssh 로그인이 되는것이다.

이럴때는 웹 호스팅이 있어야하며 도메인 이름도 가지고 있어야한다. 즉 도메인 접속시 web hosting으로 접속, Global IP 로 우회 후 접속이 되야하는것이다.

현재 Web hosting과 domain은 bluehost에서 진행이 되고 있다. (bluehost 기준) Domains > Manage (물론 원하는 도메인) > DNS 에 Host record에 이름을 추가하고 Points To 에 Global IP 를 넣으면 된다. 그렇게되면 나중에 ssh로 연결 할때 `ssh -p <포트넘버> <id>@<host record>.<domain name>` 로 실행 시키면 된다. easy.

---

## 🖥 Remote desktop

remote desktop control 같은경우 에는 TCP, SSH, SFTP 와는 다르게 RDP (Remote Desktop Protocol)을 설정 해주어야 한다. 웃긴것은 RDP를 하기위해서는 그냥 TCP internal port 3389를 개방하면 된다. 즉, ssh 는 TCP 22를, RDP는 TCP 3389만 개방하면 된다.

그와 동시에 centos 에서는 rdp를 허용해야하는데 이것은 xrdp 로 실행된다. 

### 🏗 download xrdp in centOS

1. 우선 centOS 에 EPEL 을 설치한다
  
  ```bash
  yum install epel-release
  # yum info epel-release 로 기존에 다운로드 했는지 안되어있는지 확인할 수 있다.
  ```
  
2. xrdp와 tigervnc-server를 설치한다
  
  ```bash
  yum -y install xrdp tigervnc-server # -y는 질문 없이 항상 yes 로 다운로드 한다.
  ```
  
  ```bash
  # xrdp 가 잘 다운로드 되어있는지 확인한다.
  # 요청을 전송하고, Created symlink ... 가 나오면 잘 실행이 되는것이다.
  chkconfig xrdp on
  chkconfig vncserver on
  ```
  
3. xrdp 서비스가 부팅때 자동으로 실행이 되도록 설정한다.
  
  ```bash
  systemctl enable xrdp.service
  ```
  
4. 방화벽에서 xrdp 포트를 열고 재시작한다.
  
  ```bash
  # 실행되지 않는다면 firewalld 를 확인하자
  sudo firewall-cmd --permanent --zone=public --add-port=3389/tcp
  sudo firewall-cmd --reload
  ```
  
  더 많은 방화벽 cmd 는 [https://www.manualfactory.net/10153](https://www.manualfactory.net/10153)
  
  ```bash
  sudo firewall-cmd --state
  sudo firewall-cmd --list-all
  ```
  
5. xrdp 서비스 시작
  
  ```bash
  systemctl start xrdp.service
  ```
  

[출처](https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=jkssleeky&logNo=220813507540)📝