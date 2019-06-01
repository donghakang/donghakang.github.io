---
title: "Unreal Engine4 를 사용한 자동차 게임"
permalink: /UnrealEngine/
header:
  image: "/image/portfolio/header/UnrealHeader.png"
---

## How To Download The Game
1. [링크](https://github.com/donghakang/Simple_Driving) zip 파일을 다운 받는다.
2. *NoDrinkingAndDriving* 이라는 .exe 파일을 다운받는다.

## How To Play The Game
- 몇초동안 트랙을 벗어나지 않는지 체크하는 게임
### 컨트롤
- [A] [D] 버튼을 사용해서 왼쪽 오른쪽으로 방향을 바꾼다.
- [W] [S] 버튼을 사용해서 앞으로 뒤로 움직인다.

<img src="/image/unreal/normal.png" alt="Normal Game Play">
Normal Game Play
- [Spacebar] 버튼을 눌러서 카메라의 방향을 수직으로 바꾼다.

<img src="/image/unreal/top.png" alt="Top View Game Play">
Top View Game Play

### 게임플레이
- 오랫동안 차를 움직이지 않으면 트랙이 없어진다. 그 트랙이 없어지는지는 옆에있는 불들이 경고하는데, 불이 파랑색에서 보라, 보라색에서
빨강색으로 변경된다.

<img src="/image/unreal/1.png" alt="Red Lights each sides on the track">
Red Lights each sides on the track
- 시간이 더 지나갈수록 트랙이 없어지는 속도는 빨라지고, 운전하는 것도 조금씩 어려워지고 더 쉽게 미끄러 진다.
- 트랙 밖으로 떨어지게 되면 게임 오버가 스크린 (**GAME OVER**) 뜨고 약 2초뒤 다시 게임이 시작된다.

<img src="/image/unreal/2.png" alt="Game Over">
Game Over

### 테마
- 영화 '트론' 에서 영향을 받아 어둡고 파란색 네온으로 꾸밈. 차를 포함, 배경도 파랑색과 검정색으로 꾸밈.
<img src="/image/unreal/vehicle.png">
<img src="/image/unreal/landscape.png">
<img src="/image/unreal/material.png" alt="This is the Material That I created by Increasing Emissive Light" align="middle">

This is the Material That I created by Increasing Emissive Light

### 블루 프린트
<img src="/image/unreal/a.png" alt="Blueprint about game ending and respawn">
Blueprint about game ending and respawn


<img src="/image/unreal/b.png" alt="Blueprint about vehicle movement">
Blueprint about vehicle movement

### C++
<img src="/image/unreal/c++.png" alt="C++ implementation about time on the screen">
C++ implementation about time on the screen


### 개선사항 및 배운 것들
- 첫 Unreal 과제이다 보니 Unreal에서 주어진 기본 블루프린트를 잘 활용하지 못한 것 같음
- 떨어져서 landscape 에 부딪힐때 부자연 스러운 부딪힘을 재연
- 운전 컨트롤이 더 어려워지고 트랙이 없어지는 속도가 더 빨라지지만, 굉장히 미세한 변화라서 눈에 띄게 레벨이 바뀌는 거를 느낄 수 없음. 게임의 다이내믹이 많이 부족
- 스코어를 기록하거나, 온라인으로 더 개발하면 더욱 더 재미있는 게임이 될 거 같음.
