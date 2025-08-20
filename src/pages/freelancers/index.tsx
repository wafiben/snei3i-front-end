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
/*   const dispatch = useDispatch<AppDispatch>();

  const { users, loading, letter, age } = useSelector(
    (state: GlobalState) => state.userReducer
  );
  console.log(users);
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  if (loading) {
    return (
      <div className="flex justify-content-center">
        <ProgressSpinner />
      </div>
    );
  } */

  return (
    <>
    <h1>hello</h1>
{/*       <UsersStatistics />
      <MenuBar />
      <div className="flex flex-wrap">
        {users.length !== 0 &&
          users
            .filter((user) => {
              const firstNameMatches = user.firstName
                .toLowerCase()
                .includes(letter.toLowerCase());
              const lastNameMatches = user.lastName
                .toLowerCase()
                .includes(letter.toLowerCase());
              const isAgeLessThanGlobalAge = user.age <= age;
              return (
                (firstNameMatches || lastNameMatches) && isAgeLessThanGlobalAge
              );
            })
            .map((user) => <UserCard key={user.id} user={user} />)}
      </div> */}
    </>
  );
};
export default Home;
