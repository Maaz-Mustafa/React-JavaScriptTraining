import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./component/Home";
import AddToList from "./component/AddToDoList";
import Task from "./component/Task";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addTask" element={<AddToList />} />
        <Route path="/openTask/:id" element={<Task />} />
      </Routes>
    </div>
  );
}

export default App;

export const LocationDisplay = () => {
  const location = useLocation();
  return <div data-testid="location">{location.pathname}</div>;
};
