# SWR이란 ?

> **SWR**은 리액트상에서 http로 데이터를 가져오거나 fetch 할때 유용할때 쓰이는 라이브러리인데, 캐시/스태일 로부터 데이터를 반환한 후, fetch요청을 재검증하고 새로운 데이터를 가져오는 방식입니다.
> 

```jsx
const fetcher = url => axios.get(url).then(res => res.data);
const { data, error } = useSWR(URL + '/fetch_practice/', fetcher);
```

위에 예시를 보면 key는 `URL + '/fetch_practice/'` 이며, 이 식별자는 나중에 사용이됩니다. `fetcher`는 데이터를 변환하는 비동기 함수 입니다. 

일반적인 fetching 뿐만 아니라 위에 예시처럼 axios를 사용해도 가능합니다. 

하지만, SWR의 빛은 당연컨데 재사용 가능 인 것 같다.

```jsx
function useUser (id) {
  const { data, error } = useSWR(`/api/user/${id}`, fetcher)

  return {
    user: data,
    isLoading: !error && !data,
    isError: error
  }
}
```

```jsx
function Avatar ({ id }) {
  const { user, isLoading, isError } = useUser(id)

  if (isLoading) return <Spinner />
  if (isError) return <Error />
  return <img src={user.avatar} />
}
```

이런식으로 custom hook 을 만들어서 데이터 가져오기를 사용할 수 있다.

이 SWR 를 사용하게 된 계기는 바로 `mutate`라는 기능 때문이다.

**뮤테이트**란 mutate(key)를 사용해서 동일한 키를 가진 함수를 브로드캐스팅하며 리로딩 하는 작업을 뜻한다. 

```jsx
import { mutate } from 'swr';

...
function handleClick(groupName) {
  axios.post(URL + '/groups/', { id: -1, name: groupName })
  .then(() => {
    setStatus('ok');
    onClose();
  })
  .catch(err => setError({ status: true, message: 'Connection failed' }));
}
```

이런 식에 코드가 있었다고 가정하면, `post` 통신이 종료 되었을때, status 를 ok 로 바꾸어주는 `useState`만 사용된다라는 것을 파악할 수 있다. 

만약에 parent 컴포넌트에 다른 통신이 진행이되고 있고 위에 코드가 물려받은 데이터를 이용한 통신이라면 component 통신이 완전히 업데이트 되는것이 아닌 status 만 변경된다. 물론 `useState`를 다시 이용해서 parent component를 re-render해도 되지만, 만약 그냥 캐시 통신을 이용해서 새로운 데이터로 re-rendering 할 수 있는 방법도 있을 것이다. 

```jsx
import { mutate } from 'swr';

...
function handleClick(groupName) {
  axios.post(URL + '/groups/', { id: -1, name: groupName })
  .then(() => {
    setStatus('ok');
    mutate(URL + '/fetch_practice/');
    onClose();
  })
  .catch(err => setError({ status: true, message: 'Connection failed' }));
}
```

이 처럼 swr 를 이용해서 기존에 캐시에 저장되었던 swr를 키로 불러와서 다시 렌더링 한다면, 처음 그 data가 fetch 되었던 컴포넌트는 다시 렌더링 되고 그렇게 되면 모든 child component도 다시 업데이트 될 것이다.

아직 SWR를 제대로 사용해보지도, 제대로 완벽히 이해하지는 못했지만, 이런 두가지만 잘 사용해도 굉장히 빠르고 편리한 데이터 통신이 되지 않을까 싶다.