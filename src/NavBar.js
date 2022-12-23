import Form from "./Form";

function NavBar({ addGrocery }) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Grocery Helper</h1>
        <Form addGrocery={addGrocery}/>
      </header>
    </div>
  );
}

export default NavBar;