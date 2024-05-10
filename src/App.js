import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>📖 Dictionary</h1>
        <main>
          <Dictionary defaultKeyword="beautiful" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by Georgina Pobi is{" "}
            <a
              href="https://github.com/afuap/dictionary-app"
              target="_blank"
              rel="noreferrer"
            >
              opened sourced on GitHub
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://warm-concha-2ded23.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
            .
          </small>
        </footer>
      </div>
    </div>
  );
}
