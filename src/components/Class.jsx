import data from "../CLASS_DATA.json";
import StudyMaterial from "./StudyMaterial";

const Class = (keyWord) => {
  console.log(keyWord);
  return (
    <div className="class">
      {data
        .filter((group) => group.class_name.toLowerCase().includes("hy"))
        .map((obj, i) => (
          <div key={i}>
            <h1 className="class-name" key={i}>
              <span className="class-id">{obj.class_id}</span>. {obj.class_name}
            </h1>
            <StudyMaterial />
          </div>
        ))}
    </div>
  );
};

export default Class;
