# 오늘 시도한 것

- Gatsby JS GraphQL 을 받아서 blogPost들을 받아온 뒤, .md파일에 있는 tag 라는 frontmatter를 설정. 그 이후로 태그를 이용하여 태그 메뉴바를 설정, 설정 후 카테고리에 맞는 포스트 들을 보여준다.

# 오늘 배운 것

- query-string

```jsx
import qs from 'query-string';

console.log(location.search);
// --> '?foo=bar'

const parsed = qs.parse(location.search);
console.log(parsed);
// --> {foo: 'bar'}

// http://localhost:8000/blog?tag=something
// returns --> something
const { tag } = qs.parse(window.location.search); 
```

query-string 을 사용시 window.locationㅡㄹ 좀 더 깔끔하게 원하는 object 데이터로 가져올수 있다.

GET 형식의 데이터 패싱일 경우 굉장히 유용하게 쓰일것 같다 !