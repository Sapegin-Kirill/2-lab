import React, { useContext } from "react";
import "./comp.css";
import { AppBar, Toolbar, Typography, Stack, Switch } from "@mui/material";
import { ThemeContext } from "../providers/ThemeProvider";

const Header = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className="header_main">
      <AppBar position="static">
        <Toolbar>
          <Typography fontSize={36} flexGrow={2} fontFamily={"Cambria Math"}>
            Мой Сайт
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography>Ночь</Typography>
            <Switch defaultChecked color="warning" onClick={() => changeTheme()}/>
            <Typography>День</Typography>
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Header;