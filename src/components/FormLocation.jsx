import getRandomNumber from "../utils/getRandomNumber";
import "./styles/FormLocation.css"

const FormLocation = ({ setIdLocation }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.inputId.value.trim();
    if (inputValue === "" || inputValue === '0') {
      setIdLocation(getRandomNumber(126));
    } else {
      setIdLocation(e.target.inputId.value.trim());
    }
    e.target.inputId.value = "";
  };

  return (
    <form className="search__bar" onSubmit={handleSubmit}>
      <input id="inputId" style={{ boxShadow: "1px 1px 10px " }} type="text" />
      <button className="search__button" style={{ backgroundColor: "green", color: "white" }}>
        Search
      </button>
    </form>
  );
};

export default FormLocation;
