import "./App.css";
import logo from "./Dictionary.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container>">
        <header className="App-header"></header>
        <img src={logo} className="App-logo" alt="logo" />
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer small">Coded by Maggie Recio</footer>
      </div>
    </div>
  );
}
