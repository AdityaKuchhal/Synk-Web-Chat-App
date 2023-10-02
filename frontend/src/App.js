import "./App.css";
import { Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import ChatScreen from "./Screens/ChatScreen";

function App() {
  return (
    <div className="App">
      <Route path="/" component={HomeScreen} exact />
      <Route path="/chats" component={ChatScreen} />
    </div>
  );
}

export default App;
