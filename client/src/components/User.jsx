import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../redux/userSlice";
function User() {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const deleUser = (id) => {
    axios
      .delete("http://localhost:3001/delete/" + id)
      .then(() => {
        dispatch(deleteUser({ id }));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-100 bg-white rounded p-3 m-5">
        <Link to="/create" className="btn btn-success btn-sm">
          Add+
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="w-50">
            {users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>
                    <Link
                      to={`/update/${user.id}`}
                      className="btn btn-sm btn-success m-2 "
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => deleUser(user.id)}
                      className="btn btn-sm btn-danger m-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default User;
