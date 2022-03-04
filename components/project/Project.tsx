
import work from "../../data/work.json";

const Project: React.FC = () => {
  return (
    <div>
      {work.map((item, index) => (
        <h1 key={index}>{item.title}</h1>
      ))}
    </div>
  );
};

export default Project;
