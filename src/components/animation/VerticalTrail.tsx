import React from "react";
import { useTrail, a } from "@react-spring/web";


const Trail: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const verticalTrail = {
    config: { mass: 5, tension: 2000, friction: 200 },
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
  };

  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, verticalTrail);

  return (
    <>
      {trail.map(({ ...style }, index) => (
        <a.div key={index} style={style}>
          {items[index]}
        </a.div>
      ))}
    </>
  );
};

export default Trail;
