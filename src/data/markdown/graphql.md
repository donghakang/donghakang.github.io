# 🤡 **GraphQL**

GraphQL은 API를 위한 쿼리 언어이며, 서버측 런타임으로 클라이언트에게 요청한 만큼의 데이터를 제공하는 데 우선 순위를 둔다.

기존에 사용하는 REST Api 같은 경우, GET/POST/DELETE/UPDATE와 같은 명령어로 하나하나 통신을 보내고 받고 하는 반면에, GraphQL은 통신 뿐만아니라 직접 Query를 넣어서 필요한 데이터만 불러오고 사용할 수 있다.

즉, GraphQL은 웹 클라이언트가 데이터를 서버로부터 효율적으로 가져오는 Query 언어이다.

## **장점**

1. HTTP 요청의 횟수를 줄일 수 있다.

RESTful 은 각 Resource 종류 별로 요청을 해야하고, 따라서 요청 횟수가 필요한 Resource 의 종류에 비례한다.

반면 GraphQL 은 원하는 정보를 하나의 Query 에 모두 담아 요청하는 것이 가능하다.

2. HTTP 응답의 Size 를 줄일 수 있다.

RESTful 은 응답의 형태가 정해져있고, 따라서 필요한 정보만 부분적으로 요청하는 것이 힘들다.

반면 GraphQL 은 원하는 대로 정보를 요청하는 것이 가능하다.

## **단점**

1. File 전송 등 Text 만으로 하기 힘든 내용들을 처리하기 복잡하다.

2. 고정된 요청과 응답만 필요할 경우에는 Query 로 인해 요청의 크기가 RESTful API 의 경우보다 더 커진다.

3. 재귀적인 Query 가 불가능하다.

## **REST 와 얼마나 다르길래 ?**

REST API는 GET, DELETE, POST, PUT 을 사용하여 백엔드와 데이터를 주고 받는다.

간단한 예시로, 저자와 책에 관련된 데이터가 있고, 그 통신을 프론트엔드에서 실행시킬시 아래와 같다.

### **REST API**

```bash
/authors                    ➡️ 저자의 정보를 다 가져온다
```

```json
[
  {
    id: 1,
    name: Dongha Kang,
    age: 28,
    ...
  },
  {
    id: 2,
    ...
  }
]
```

위의 예시만 봤었을때는 REST API의 큰 문제는 없다 하지만 더 세부적인 정보들을 가져올 시 문제가 생길 수 있다.

```bash
/authors/:id/books          ➡️ 저자의 데이터를 불러오고 id를 찾고, id의 맞는 책을 가져온다.
```

이럴 시에 불필요한 통신이 생긴다, authors, id, books 정보를 전부 다 가져오기 때문에 REST API의 단점이 될 수 있다.

즉, 오직 저자만 찾고 싶을때도 불구하고 REST Api는 불필요한 책 정보도 전부다 가져와야한다.

### **GraphQL**

GraphQL같은 경우 불필요한 통신없이 원하는 데이터만 query를 사용해서 건져 낼수 있다.

```graphql
query {
  authors {
    name
    books {
      name
    }
	}
}
```

위와 같은 예시는 저자의 이름과 그가 쓴 책들의 이름만 쏙 빼올 수 있다. query만 잘 쓴다면 필요한 데이터만 가져올 수 있어서 통신 시간을 최소화 시킬수 있다.

## **Installation**

```bash
npm i graphql
```

아래의 예시를 돌리기 위해서 추가적인 다운로드도 진행한다.

```bash
npm i express express-graphql
```

## **Query**

Query는 Database로부터 데이터를 단순히 받는 것.

server.js 와 같은 예시를 보면

```graphql
query {
  authors {
    id
    name
  }
}
```

와 같은 query는

```json
{
  "data": {
    "authors": [
      {
        "id": 1,
        "name": "J. K. Rowling"
      },
      {
        "id": 2,
        "name": "J. R. R. Tolkien"
      },
      {
        "id": 3,
        "name": "Brent Weeks"
      }
    ]
  }
}
```

아래와 같은 데이터를 돌려준다.

**### Mutation**

REST API에서 POST DELETE UPDATE 와 같은 데이터 변경은 Mutation으로 진행이된다. server.js 에서 확인을 해보고 아래 예시는 결과 값만 보여준다.

```graphql
mutation {
  addBook(name: "Dongha Kang", authorId: 1) {
    id
    name
  }
}
```

더 자세한 정보들은 공부를 더 하면서 수정할 계획이다. (20220216)