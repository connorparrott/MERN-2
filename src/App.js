import Counter from "./components/MyCounter"
import MyGitHub from "./components/MyGitHub";

function App() {
  return (
    <div className="App">
      <h1>
        Hello React!
      </h1>
      <h2>
        Connor Parrott - g86k652
      </h2>

      <Counter incBy={1} /><hr />
      <Counter incBy={2} /><hr />
      <MyGitHub /><hr />
    </div>
  );
}

export default App;
