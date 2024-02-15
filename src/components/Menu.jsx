import { NavLink } from "react-router-dom";
import "./styles/menu.css";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
// import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
// import BadgeRoundedIcon from "@mui/icons-material/BadgeRounded";
// import PeopleOutlineRoundedIcon from "@mui/icons-material/PeopleOutlineRounded";
// import LockResetRoundedIcon from "@mui/icons-material/LockResetRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import NaturePeopleRoundedIcon from "@mui/icons-material/NaturePeopleRounded";
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';

const Menu = () => {
  const handleButtonClick = () => {
    const shouldClose = window.confirm(
      "Are you sure you want to close this tab?"
    );
    if (shouldClose) {
      window.close();
    }
  };

  const componentStyle = {
    fontSize: 40,
    color: "transparent",
    stroke: "black",
  };

  const style = {
    display: "flex",
    gap: "1rem",
  };
  return (
    <div style={{ backgroundColor: "white" }}>
      <div>
        <nav style={{ fontSize: "2rem" }}>
          <NavLink to="/" style={style}>
            {" "}
            <HomeRoundedIcon sx={componentStyle} />
            <span>Overview</span>
          </NavLink>
          <NavLink to="/sales" style={style}>
            <TrendingDownRoundedIcon sx={componentStyle} /> <span>Sales</span>
          </NavLink>
          <NavLink to="/products" style={style}>
            <CategoryRoundedIcon sx={componentStyle} /> <span>Products</span>
          </NavLink>
          <NavLink to="/Customers" style={style}>
            <NaturePeopleRoundedIcon sx={componentStyle} />{" "}
            <span>Customers</span>
          </NavLink>
        </nav>
        <button onClick={handleButtonClick} style={style}>
          <ExitToAppRoundedIcon sx={componentStyle} /> <span>Customers</span>
        </button>
      </div>
    </div>
  );
};

export default Menu;
