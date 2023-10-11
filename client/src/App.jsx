import "bootstrap/dist/css/bootstrap.min.css";
import User from "./components/User";
import { useEffect } from "react";
import axios from "axios";
import { getUser } from "./redux/userSlice";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateUser from "./components/CreareUser";
import Update from "./components/Update";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001");
        dispatch(getUser(response.data));
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
