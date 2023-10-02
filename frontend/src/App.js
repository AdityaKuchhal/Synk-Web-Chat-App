import "./App.css";
// import { Button } from "@chakra-ui/react";
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

// function App() {
//   return (
//     <div className="App">
//       <Button colorScheme="blue">Button</Button>
//     </div>
//   );
// }

export default App;
