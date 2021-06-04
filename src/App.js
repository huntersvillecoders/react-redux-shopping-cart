import "./App.css";
import RouterConfig from "./routes/routes";
import Navbar from "./pages/navbar/navBarContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <RouterConfig />
    </div>
  );
}

export default App;
