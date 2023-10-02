import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import ChatScreen from "./Screens/ChatScreen";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen />} exact />
        <Route path="/chats" element={<ChatScreen />} />
      </Routes>
    </div>
  );
}

export default App;
