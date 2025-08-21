import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AppDispatch } from "../../store/store";
import { getAllUsers } from "../../store/users/actions";
import { GlobalState } from "../../types/globalState";
import { ProgressSpinner } from "primereact/progressspinner";
import { UsersStatistics } from "../../components/static-area";
import { MenuBar } from "../../components/menu-bar";
import { UserCard } from "../../components/user";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { users, loading } = useSelector(
    (state: GlobalState) => state.userReducer
  );

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  if (loading) {
    return (
      <div className="flex justify-content-center">
        <ProgressSpinner />
      </div>
    );
  }

  return (
    <>
      <UsersStatistics />
      <UsersStatistics />
      <MenuBar />
      <div className="flex flex-wrap">
        {users &&
          users.length !== 0 &&
          users.map((user) => <UserCard key={user.id} user={user} />)}
      </div>
    </>
  );
};
export default Home;
