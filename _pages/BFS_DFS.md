---
permalink: /BFS_DFS/
title: "BFS and DFS"
author_profile: true
header:
  image: "/image/portfolio/header/BFSDFSHeader.png"
---

간단한 BFS DFS 알고리즘을 *python turtle* 에게 적용 함으로서 BFS 와 DFS 의 장점에 대해서 파악하는 프로그램을 만들었습니다.

<img src="/image/BFS.png" height="300" width="300">
<img src="/image/DFS.png" height="300" width="300">

## What I learned
 - BFS 와 DFS는 각각의 장단점이 있다
 - 가장 당연한 말이지만 실제로 사용할 때에는 둘 중에 어떤 알고리즘을 사용하는가 라는 의문을 가지기 보다는
   어떻게 둘을 골고루 써서 더 빠른 알고리즘을 만드는가가 더 중요 (AI와 딥러닝의 필요성을 느낌)
 - 하지만 용량이 너무나도 클 경우에는 **DFS** 가 더욱 더 실용적



## BFS and DFS
1. BFS
 - Breadth-first search
 - Code
```python
def find_path(start_node):
    start_node.set_color("gray")
    start_node.depth = 0
    start_node.prev = None
    Q = deque()
    Q.append(start_node)  # setting up the start node as gray.
    tempNode = start_node
    while tempNode.val != 2:
        tempNode = Q.popleft()
        for vertex in tempNode.adj:
            if vertex.get_color() == "white":
                vertex.set_color("gray")
                vertex.depth = tempNode.depth + 1
                vertex.prev = tempNode
                Q.append(vertex)
        tempNode.set_color("black")
    list = []
    while tempNode != None:
        list.insert(0, tempNode)
        tempNode = tempNode.prev
    return list
```

2. DFS
 - Depth-first search
 - Code
```python
def find_path(start_node):
    start_node.set_color("gray")
    start_node.prev = None
    destination = DFS_Visit(start_node)
    print(destination)
    list = []
    while destination != None:
        list.insert(0,destination)
        destination = destination.prev
    return list
```
```python
def DFS_Visit(u):
    global saveVertex
    u.set_color("gray")
    for vertex in u.adj:
        if vertex.val == 2:
            saveVertex = vertex
        if vertex.get_color() == "white":
            vertex.prev = u
            DFS_Visit(vertex)
    return saveVertex
```

- from [my github folder (Algorithm/PA7 and PA8)](https://github.com/donghakang/Algorithms)
- for more algorithms, [click here](https://github.com/donghakang/Algorithms)
