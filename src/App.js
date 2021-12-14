import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to my test app....</p>
        <p>
          <a href="http://www.ec2-54-168-201-149.ap-northeast-1.compute.amazonaws.com">
            AWS EC2 server link added.......
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
