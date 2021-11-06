import { useBooks } from "../../context/BooksContext";

function Form() {
  const { searchName, setSearchName, setSearchedName } = useBooks();

  //   const onChange = ;

  const handleSubmit = (e) => {
    e.preventDefault(); // enter tıklandığında formun yenilenmesini engeller
    setSearchedName(searchName);
    setSearchName("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter the name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        {/* <button onClick={handleSubmit}>anan</button> */}
      </form>
    </div>
  );
}

export default Form;
