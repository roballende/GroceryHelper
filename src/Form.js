
function Form() {
  return (
    <form className="new-grocery-form">
      <input placeholder="Grocery" />
      <select id="category">
        <option value="" disabled selected hidden>Select a Category</option>
        <option value="Fruits">Fruits</option>
        <option value="Vegetables">Vegetables</option>
        <option value="Meats">Meats</option>
      </select>
      <input type="submit" value="Add to List" />
    </form>
  );
}

export default Form;