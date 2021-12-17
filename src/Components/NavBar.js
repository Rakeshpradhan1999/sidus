/* eslint-disable no-unused-vars */
import React from "react";
import ethareum from "../Images/ethareum.png";
import {
  FiMoreHorizontal,
  FiInfo,
  FiHelpCircle,
  FiMessageCircle,
  FiCoffee,
  FiGlobe,
  FiSun,
  FiBookOpen,
  FiList,
} from "react-icons/fi";
import logo from "../Images/logo.svg";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

const moreOptions = [
  {
    id: 0,
    title: "About",
    icon: FiInfo,
  },
  {
    id: 1,
    title: "Help Center",
    icon: FiHelpCircle,
  },
  {
    id: 2,
    title: "Request Features",
    icon: FiCoffee,
  },
  {
    id: 3,
    title: "Discord",
    icon: FiMessageCircle,
  },
  {
    id: 4,
    title: "Language",
    icon: FiGlobe,
  },
  {
    id: 5,
    title: "Dark Theme",
    icon: FiSun,
  },
  {
    id: 6,
    title: "Docs",
    icon: FiBookOpen,
  },
  {
    id: 7,
    title: "Legal & Privacy",
    icon: FiList,
  },
];

const NavBar = ({ onToggle }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="navBarContainer">
      <div className="brandLogo">
        <img src={logo} alt="logo" height="30" width="30" />
      </div>
      <div className="middleNavigateTabs">
        <button type="button" className="swapButtonHeader active">
          Swap
        </button>
        <button type="button" className="poolButton">
          Pool
        </button>
        <button type="button" className="voteButton">
          Vote
        </button>
        <button type="button" className="chartsButton">
          Charts<sup>↗</sup>
        </button>
      </div>
      <div className="rightActionButtons">
        <button type="button" className="currencyButton">
          <img src={ethareum} alt="ethareum" height="20" width="20" />{" "}
          <span style={{ marginLeft: "8px" }}>Ethereum</span>
        </button>
        <button
          type="button"
          className="connectWalletButton"
          onClick={() => onToggle()}
        >
          Connect Wallet
        </button>
        <button
          className="moreActionButton"
          aria-describedby={id}
          variant="contained"
          onClick={handleClick}
        >
          <FiMoreHorizontal color="#000" size="24" />
        </button>
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <div className="moreOptionsList">
          {moreOptions.map((option) => (
            <div className="moreOptionsItem" key={option.id}>
              <span>{option.title}</span>
              <option.icon size={18} />
            </div>
          ))}
        </div>
      </Popover>
    </div>
  );
};

export default NavBar;
