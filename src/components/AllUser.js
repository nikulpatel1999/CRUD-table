import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  makeStyles,
  Button,
} from "@material-ui/core";
import { React, useState, useEffect } from "react";
import { deleteData, getUserData } from "../Service/Api";
import { Link } from "react-router-dom";
// import SearchBar from "material-ui-search-bar";
import SearchField from "react-search-field";
const useStyle = makeStyles({
  table: {
    width: "90%",
  },
  tHead: {
    "& > *": {
      background: "blue",
      color: "white",
      fontSize: 20,
    },
  },
});

export default function AllUser() {
  const classes = useStyle();
  const [users, setUsers] = useState([]);
  const [searched, setSearched] = useState("");

  useEffect(() => {
    AllData();
  }, []);

  const AllData = async () => {
    const Response = await getUserData();
    setUsers(Response.data);
  };
  console.log(users, "12345");

  const deleteValue = async (id) => {
    await deleteData(id);
    AllData();
  };

  const requestSearch = (searchedVal) => {
    const filteredUser = users.filter((currElem) => {
      return Object.values(currElem)
        .join(" ")
        .toLowerCase()
        .includes(searchedVal.toLowerCase());
    });
    setUsers(filteredUser);
  };

  useEffect(() => {
    requestSearch();
  }, []);

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };
  return (
    <>
      <SearchField
        value={searched}
        placeholder="Search..."
        onChange={(searchVal) => requestSearch(searchVal)}
        onCancelSearch={() => cancelSearch()}
        classNames="test-class"
      />
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>SR</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>UserName</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((currElem, index) => {
            return (
              <TableRow key={currElem.id}>
                <TableCell>{index}</TableCell>
                <TableCell>{currElem.name}</TableCell>
                <TableCell>{currElem.username}</TableCell>
                <TableCell>{currElem.email}</TableCell>
                <TableCell>{currElem.phone}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ margin: "10px" }}
                    component={Link}
                    to={`/edit/${currElem.id}`}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => deleteValue(currElem.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}
