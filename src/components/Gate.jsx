import { useState } from "react";
import Class from "./Class";

const Gate = () => {
  const [search, setSearch] = useState("");
  const [submitValue, setSubmitValue] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitValue(search);
    setSearch("");
  };

  return (
    <>
      <form className="gate" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a class"
          onChange={handleChange}
          value={search}
        />
        <input type="button" value={"Search"} onClick={handleSubmit} />
        <p>searching for {submitValue} ...</p>
      </form>
      {/*ratomgac ver miaqvs Class shi da filter ver dzebnis, filtershi tu vutiteb pirdapir values mashin edzebs */}
      <Class keyWord={submitValue} />
    </>
  );
};

export default Gate;
