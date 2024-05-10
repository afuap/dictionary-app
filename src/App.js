import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Dictionary</h1>
        <main>
          <Dictionary defaultKeyword="beautiful" />
        </main>
      </div>
    </div>
  );
}
