import { NavLink } from "react-router-dom";
import "./styles/menu.css";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import PeopleOutlineRoundedIcon from '@mui/icons-material/PeopleOutlineRounded';
import LockResetRoundedIcon from '@mui/icons-material/LockResetRounded';
const Menu = () => {
  const handleButtonClick = () => {
    const shouldClose = window.confirm(
      "Are you sure you want to close this tab?"
    );
    if (shouldClose) {
      window.close();
    }
  };
  return (
    <div style={{ backgroundColor: "white" }}>
      <div>
        <nav>
          <NavLink to="/"> <HomeRoundedIcon  sx={{ fontSize: 40 ,color:"transparent",stroke:"grey" }}/></NavLink>
          <NavLink to="/sales"> <MonetizationOnRoundedIcon sx={{ fontSize: 40 ,color:"transparent",stroke:"grey" }}/> </NavLink>
          <NavLink to="/products"><BadgeRoundedIcon sx={{ fontSize: 40, color:"transparent",stroke:"grey" }}/></NavLink>
          <NavLink to="/Customers"><PeopleOutlineRoundedIcon sx={{ fontSize: 40,color:"transparent",stroke:"grey"  }}/></NavLink>
        </nav>
        <button onClick={handleButtonClick}>< LockResetRoundedIcon sx={{ fontSize: 40 ,color:"transparent",stroke:"grey" }}/></button>
      </div>
    </div>
  );
};

export default Menu;
