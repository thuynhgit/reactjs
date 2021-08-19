import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandle = (event) => {
    event.preventDefault();
    console.log(enteredUsername, enteredAge);
  };
  const usernameChangeHandle = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandle = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandle}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={usernameChangeHandle} />
        <label htmlFor="username">Age (Years</label>
        <input id="age" type="number" onChange={ageChangeHandle} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};
export default AddUser;
