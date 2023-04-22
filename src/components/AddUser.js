import {
  Button,
  emphasize,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  makeStyles,
} from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { addUserData } from "../Service/Api";
import { useHistory } from "react-router";




const useStyle = makeStyles({
  container: { width: "50%", margin: "5% 0 0 25%" },
});

export default function AddUser() {
  const initialData = {
    name: "",
    username: "",
    email: "",
    phone: "",
  };

  const postData = async () => {
    if ((name, username, email, phone !== "")) {
      await addUserData(AddData);
      history.push("/");
    } else {
      alert("Please Fill the Data");
    }
  };
  const history = useHistory();

  const [AddData, setAddData] = useState(initialData);

  const { name, username, email, phone } = AddData;

  const onChangeValue = (e) => {
    setAddData({ ...AddData, [e.target.name]: e.target.value });
    console.log(AddData, "555");
  };

  const classes = useStyle();
  return (
    <FormGroup className={classes.container}>
      <FormControl>
        <InputLabel>User</InputLabel>
        <Input name="name" onChange={(e) => onChangeValue(e)} />
      </FormControl>

      <FormControl>
        <InputLabel>UserName</InputLabel>
        <Input name="username" onChange={(e) => onChangeValue(e)} />
      </FormControl>

      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input name="email" onChange={(e) => onChangeValue(e)} />
      </FormControl>

      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input name="phone" onChange={(e) => onChangeValue(e)} />
      </FormControl>

      <Button variant="contained" color="primary" onClick={() => postData()}>
        Add User
      </Button>
    </FormGroup>
  );
}
