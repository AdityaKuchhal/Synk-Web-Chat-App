import "./App.css";
import { Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";

function App() {
  return (
    <div className="App">
      <Route path="/" component={HomeScreen} />
      {/* <Route path="/chats" /> */}
    </div>
  );
}

export default App;
