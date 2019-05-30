---
title: "L-System"
permalink: /l_system/
header:
  image: "/image/portfolio/header/L-System.png"
---

L-System 은 Lindenmayer System 의 약자이며, Axiom (주로 알파벳)을 나열한 식을 변환해서 기하학적인
모습으로 나타내는 메커니즘중 하나입니다.
> An L-system consists of an alphabet of symbols that can be used to make strings, a collection of production rules that expand each symbol into some larger string of symbols, an initial "axiom" string from which to begin construction, and a mechanism for translating the generated strings into geometric structures.
[click here for Wikipedia](https://en.wikipedia.org/wiki/L-system)

이 메커니즘을 만든 식물학자였던 Aristid Lindenmayer는 L-System이라는 메커니즘을 사용하여 식물을 구상하기도
하였습니다.

L-System을 Processing 이라는 언어로 구상해보았습니다.

##### L-System Example 1
variables : A B
constants : none
axiom : A
rules : (A → AB), (B → A)

**n = 0 : A
n = 1 : AB
n = 2 : ABA
n = 3 : ABAAB
n = 4 : ABAABABA
n = 5 : ABAABABAABAAB**


## Programming Example
<img src="/image/L-system/1.png" width="45%" height="45%">
<img src="/image/L-system/2.png" width="45%" height="45%">
<img src="/image/L-system/3.png" width="45%" height="45%">
<img src="/image/L-system/4.png" width="45%" height="45%">

- for actual code, [click here](https://github.com/donghakang/L-System)
