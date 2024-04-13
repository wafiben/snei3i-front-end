import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { AutoComplete } from "primereact/autocomplete";
import { Button } from "primereact/button";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../store/users/actions";
import { useNavigate } from "react-router-dom";
import { ProgressSpinner } from "primereact/progressspinner";
import { GlobalState } from "../../types/globalState";

export const AddUser = () => {
  const {  loading } = useSelector(
    (state: GlobalState) => state.userReducer
  );

const dispatch=useDispatch()
const navigate=useNavigate()

  const [value, setValue] = useState("Male");
  const [items, setItems] = useState<string[]>([]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = async() => {
    const userDto = {
      firstName: firstName,
      lastName: lastName,
      gender: value,
      age: parseInt(age),
      city: city,
    };

    await dispatch(createUser(userDto)); 
    navigate('/users')
  };


  const search = (event: any) => {
    let items = ["Male", "Female"];
    setItems(items);
  };

  if (loading) {
    return (
      <div className="flex justify-content-center">
        <ProgressSpinner />
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-content-center">
        <div>
          <div className="mt-3">
            <InputText
              type="text"
              className="p-inputtext-lg"
              placeholder="firts name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="mt-3">
            <InputText
              type="text"
              className="p-inputtext-lg"
              placeholder="last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="mt-3">
            <InputText
              type="number"
              className="p-inputtext-lg"
              placeholder="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <InputText
              type="text"
              className="p-inputtext-lg"
              placeholder="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <AutoComplete
              value={value}
              suggestions={items}
              completeMethod={search}
              onChange={(e) => setValue(e.value)}
              dropdown
            />
          </div>
          <div className="mt-1">
            <Button label="Send" severity="info" onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </>
  );
};

