아래 코드는 Srcoll-to-Top 으로서, 버튼을 생성하고 그 버튼을 누르면 현재 스크롤 위치 상관없이 가장 위로 스크롤이 올라간다.

```jsx
import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

export const Scroll = ({ showBelow }) => {
  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      console.log("window.pageYOffset", window.pageYOffset, showBelow, show);
      if (!show) {
        setShow(true);
      }
    } else {
      if (show) {
        setShow(false);
      }
    }
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  });

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {show && (
        <div
          style={{
            zIndex: 2,
            position: "fixed",
            bottom: "10%",
            right: "5%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "25px",
            width: "50px",
            height: "50px",
            backgroundColor: "pink",
            cursor: "pointer",
          }}
          onClick={handleClick}
        >
          <IoIosArrowUp />
        </div>
      )}
    </>
  );
};
```