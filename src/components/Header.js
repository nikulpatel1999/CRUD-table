import React from "react";
import { Toolbar, AppBar, makeStyles, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";
const usestyles = makeStyles({
  header: {
    background: "#111111",
  },
  tabs: {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: 20,
    marginRight: 20,
  },
});

export default function Header() {
  const classes = usestyles();
  return (
    <div>
      <AppBar className={classes.header} position="static">
        <Toolbar>
          <NavLink className={classes.tabs} to="/" exact>
            All User
          </NavLink>
          <NavLink className={classes.tabs} to="adduser" exact>
            Add User
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}
