import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";

const Header = () => {
  const [autocomplete, setAutocomplete] = useState(null);

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h4" color="neutral.main">
          Travel Advisory
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
