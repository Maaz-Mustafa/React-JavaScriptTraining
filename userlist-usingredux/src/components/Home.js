import { useEffect, useState } from "react";
import { getUsers } from "../services/users.services";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoading, setUsers } from "../actions/actions";

import "../styles/styles.css";
import UserList from "./UserList";
const Home = () => {
  const { users, isLoading } = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    const users = getUsers({ page: 2 }).then((res) => {
      console.log(res);
      dispatch(setIsLoading(false));
      return dispatch(setUsers(res.data));
    });
    console.log(users);
  }, []);

  return (
    <>
      {isLoading ? <div className="loader"></div> : <UserList users={users} />}
    </>
  );
};
export default Home;
