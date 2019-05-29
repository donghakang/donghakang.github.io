---
title: "Flashphoto Application"
permalink: /flashphoto/
header:
  image: "/image/portfolio/header/FlashphotoHeader.png"
---

## *Flashphoto* 는?
 - 그림판과 유사한 소프트웨어로서, C++를 이용해 그림판에 그림을 그릴 수 있는 프로그램을 응용하여, 분필 효과 (chalk)나 하이라이터 (highligher)효과 등
   많은 효과들을 추가시켰습니다. 또한 사진을 저장하고 불러올 수 있게 하고 그 사진들에게 블러 (blur)나,
   채도조절 (saturation), 이미지 양자화 (quantize) 등 필터를 적용시킬 수 있도록 프로그램 하였습니다.
 - MIA 같은 경우는 터미널에 직접 입력하여 사진을 input 과 output 을 시킬 수 있도록 적용하였습니다.
 - 학교에 기존에 깔려있는 MingFX 라는 라이브러리를 사용해서 그림판을 만들어서 로컬 컴퓨터로는 실행이 불가능한 것이 장애물 요소.



## 그림판 예시
<img src="/image/Flashphoto/FlashphotoApp1.png">
<img src="/image/Flashphoto/FlashphotoApp2.png">


## 그리기 도구 예시
<img src="/image/Flashphoto/chalk_example.png">
<img src="/image/Flashphoto/highlighter_example.png">
<img src="/image/Flashphoto/eraser_example.png">

 - 도구 총 8개

<img src="/image/Flashphoto/classimage__tools_1_1Tool__inherit__graph.png">


## 필터 효과 예시
 - picture by sambypen / copyright by sambypen
<img src="/image/Flashphoto/blur-5.0-out.png" width="33%" height="33%">
<img src="/image/Flashphoto/green-5.0-out.png" width="200" height="200">
<img src="/image/Flashphoto/saturate-5.0-out.png" width="200" height="200">

 - 필터 (Convolution Filter, Normal Filter) 총 8개
 <img src="/image/Flashphoto/classimage__tools_1_1Filter__inherit__graph.png">


## Factory method
 - 팩터리 메소드 패턴을 사용해서 더 편리한 프로그램을 할 수 있었습니다.
  - 더 나아가 Filter 도 Convolution filter 를 sub class 로 만들어서 Kernel을 사용하는지 안하는지도
    나누어서 에러가 발생했을때 더욱 더 빠르게 처리 할 수 있었습니다.

### UML Diagram
<img src="/image/Flashphoto/Template.png">
<img src="/image/kangx637_Iteration1_UML.pdf">
