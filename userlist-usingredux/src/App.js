import Home from "./components/Home";
import { Route, Router, Routes } from "react-router-dom";

import "./App.css";
import AddForm from "./components/AddForm";
import UpdateForm from "./components/UpdateForm";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addForm" element={<AddForm />} />
        <Route path="/updateForm" element={<UpdateForm />} />
      </Routes>
    </div>
  );
}

export default App;
