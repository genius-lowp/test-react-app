import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to my test app....</p>
        <p>
          <a href="#">Link added</a>
        </p>
      </header>
    </div>
  );
}

export default App;
