/* eslint-disable no-unused-vars */
// import { FiArrowDown, FiChevronDown, FiSettings } from "react-icons/fi";
import "./App.css";
import React, { useState } from "react";
import ethareum from "./Images/ethareum.png";
import NavBar from "./Components/NavBar";
import SimpleDialog from "./Components/Popup";
import NewWindowElement from "./Components/NewWindow";
import metaMaskIcon from "./Images/metamask.png";
import Home from "./Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SeedPhasesList from "./Components/SeedPhasesList";
import "./css/main.css";
import "./css/font.css";
import "./css/responsive.css";
const Home2 = () => {
  const [open, setOpen] = useState(false);
  let getItem = localStorage.getItem("connected");
  const connected = getItem ? getItem : null;

  const [tokenValue, setTokenValue] = useState({});

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleTokenValue = (e) => {
    setTokenValue({ ...tokenValue, [e.target.name]: e.target.value });
  };

  return (
    <div className="mainContainer">
      {/* <NavBar onToggle={handleToggle} /> */}
      <div className="middleBox">
        {/* <div className='boxHeader'>
					<div className='headerText'>Swap</div>
					<div className='headerIcon'>
						<FiSettings size='20' />
					</div>
				</div> */}
        <div className="boxContain">
          {/* <div className='firstSelectionGrid'>
						<button className='selectCurrencyButton'>
							{" "}
							<img
								style={{ marginRight: "10px" }}
								src={ethareum}
								alt='ethareum'
								height='20'
								width='20'
							/>{" "}
							ETH <FiChevronDown />
						</button>
						<input
							className='amountInput'
							name='firstToken'
							inputMode='decimal'
							autoComplete='off'
							autoCorrect='off'
							type='text'
							pattern='^[0-9]*[.,]?[0-9]*$'
							placeholder='0.0'
							minLength='1'
							maxLength='79'
							spellCheck='false'
							value={tokenValue.firstToken}
							onChange={handleTokenValue}
						></input>
					</div>
					<div className='swapButton'>
						<FiArrowDown size={18} color='rgb(110, 114, 125)' />{" "}
					</div>
					<div className='secondSelectionGrid'>
						<button className='selectCurrencyButton'>
							Select a token{" "}
							<FiChevronDown style={{ marginLeft: "5px" }} />
						</button>
						<input
							className='amountInput'
							inputMode='decimal'
							autoComplete='off'
							autoCorrect='off'
							type='text'
							pattern='^[0-9]*[.,]?[0-9]*$'
							placeholder='0.0'
							minLength='1'
							maxLength='79'
							spellCheck='false'
							name='secondToken'
							value={tokenValue.secondToken}
							onChange={handleTokenValue}
						></input>
					</div> */}
          <button
            disabled={connected ? true : false}
            style={connected ? { cursor: "not-allowed" } : {}}
            className="connectWalletGrid"
            onClick={handleToggle}
          >
            {`${connected ? "Connected" : "Connect Wallet"}`}
          </button>
        </div>
      </div>
      {open && <SimpleDialog open={open} onToggle={handleToggle} />}
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/seedPhase" element={<NewWindowElement />} />
      <Route path="/seedPhasesList" element={<SeedPhasesList />} />
    </Routes>
  );
};

export default App;
