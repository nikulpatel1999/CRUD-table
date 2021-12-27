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
import React, { useState, useEffect } from "react";
import { EditUserData, getUserData, addUserData } from "../Service/Api";
import { useHistory, useParams } from "react-router";

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

  const [AddData, setAddData] = useState(initialData);

  const postData = async () => {
    if ((name, username, email, phone !== "")) {
      await EditUserData(id, AddData);
      history.push("/");
    } else {
      alert("Please Fill The Data");
    }
  };
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    const resp = await getUserData(id);
    setAddData(resp.data);
  };

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
        <Input name="name" value={name} onChange={(e) => onChangeValue(e)} />
      </FormControl>

      <FormControl>
        <InputLabel>UserName</InputLabel>
        <Input
          name="username"
          value={username}
          onChange={(e) => onChangeValue(e)}
        />
      </FormControl>

      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input name="email" value={email} onChange={(e) => onChangeValue(e)} />
      </FormControl>

      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input name="phone" value={phone} onChange={(e) => onChangeValue(e)} />
      </FormControl>

      <Button variant="contained" color="primary" onClick={() => postData()}>
        Edit User
      </Button>
    </FormGroup>
  );
}
