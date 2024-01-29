import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./users/Adduser.js";
import EditUser from "./users/Edituser.js";
import ViewUser from "./users/Viewuser.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addStudent" element={<AddUser />} />
          <Route exact path="/updatestudent" element={<EditUser />} />
          <Route exact path="/getstudentbyid/:id" element={<ViewUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
