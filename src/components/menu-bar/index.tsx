import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { useDispatch } from "react-redux";
import {
  searchUsersAge,
  searchUsersWithFirstNameOrLastName,
} from "../../store/users/actions";
import { Slider } from "primereact/slider";
import { useState } from "react";


export const MenuBar = () => {
  const [value, setValue] = useState("50");
  const dispatch = useDispatch();
  const handleChange = (e: any) => {
    dispatch(searchUsersWithFirstNameOrLastName(e.target.value));
  };
  const handleAge = (age: number) => {
    dispatch(searchUsersAge(age));
  };

  const start = (
    <img
      alt="logo"
      src="https://primefaces.org/cdn/primereact/images/logo.png"
      height="40"
      className="mr-2"
    ></img>
  );
  const end = (
    <div className="flex flex-wrap">
      <div className="card flex justify-content-center">
        <div className="w-14rem">
          <div className="mr-4">
            <InputText
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full"
            />
            <Slider
              value={Number(value)}
              onChange={(e) => {
                setValue(String(e.value));
                handleAge(+e.value);
              }}
              className="w-full"
            />
          </div>
        </div>
      </div>
      <div>
        <InputText placeholder="Search" type="text" className="w-full" />
      </div>
    </div>
  );

  return (
    <div className="card mt-3">
      <Menubar start={start} end={end} onChange={(e) => handleChange(e)} />
    </div>
  );
};
