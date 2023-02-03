import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteUser, setId } from "../actions/actions";
import "../styles/styles.css";

const UserList = ({ users }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div>
      <div className="add-btn">
        <button>
          <Link to="addForm"> Add User</Link>
        </button>
      </div>
      {users?.map((user) => {
        return (
          <div className="user-data" key={user.id}>
            <div className="user-id">{user.id}</div>
            <div className="user-email">{user.email}</div>
            <div className="user-first-name">{user.first_name}</div>
            <div>
              <img src={user.avatar} />
            </div>
            <div>
              <span
                className="material-icons"
                onClick={() => {
                  dispatch(setId(user.id));
                  navigate("/updateForm");
                }}
              >
                <a>edit</a>
              </span>
            </div>
            <div>
              <span
                className="material-icons"
                style={{ fontSize: "36px" }}
                onClick={() => {
                  dispatch(deleteUser(user.id));
                }}
              >
                delete
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default memo(UserList);
