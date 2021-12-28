import React from "react";
import { useTrail, a } from "@react-spring/web";

interface TrailProps {
  children: React.ReactNode;
  sx?: object;
  className?: string;
}

const Trail: React.FC<TrailProps> = ({ children, sx, className }) => {
  const horizontalTrail = {
    config: { mass: 5, tension: 2000, friction: 200 },
    from: { opacity: 0, x: 20 },
    to: { opacity: 1, x: 0 },
  };

  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, horizontalTrail);

  return (
    <>
      {trail.map(({ ...style }, index) => (
        <a.div key={index} style={{ ...style, ...sx }} className={className}>
          {items[index]}
        </a.div>
      ))}
    </>
  );
};

export default Trail;
