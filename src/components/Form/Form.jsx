import { useBooks } from "../../context/BooksContext";
import { useNavigate } from "react-router-dom";
import styles from "./form.module.css";
function Form() {
  const { searchName, setSearchName, setSearchedName } = useBooks();

  //   const onChange = ;

  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault(); // enter tıklandığında formun yenilenmesini engeller
    navigate("/");
    setSearchedName(searchName);
    setSearchName("");
  };
  return (
    <div className={styles.Container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <span className={styles.pressEnter}>Press Enter</span>
          <input
            placeholder="Enter the name"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
