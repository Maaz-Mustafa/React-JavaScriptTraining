import "./App.css";
import Home from "./component/Home";
import { Routes, Route } from "react-router-dom";
import AddToList from "./component/AddToDoList";
import Task from "./component/Task";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addTask" element={<AddToList />} />
        <Route path="/openTask/:id/:task/:status/:ddate" element={<Task />} />
      </Routes>
    </div>
  );
}

export default App;
