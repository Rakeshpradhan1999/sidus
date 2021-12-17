/* eslint-disable no-unused-vars */
import { useState } from "react";
import SimpleDialog from "../Components/Popup";
import NewWindowElement from "../Components/NewWindow";
import "../App.css";
const WalletButton = () => {
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
const HeroSection = () => {
  return (
    <>
      <div className="HeaderMessage_headerMessage__2EcxX"></div>
      <section className="welcome_welcome__container__2rd8w">
        <div className="welcome_welcome__logoLine__buUrd"></div>
        <div className="welcome_welcome__intro__302uu">
          <div className="welcome_welcome__introBlock__2SX8g">
            <h2 className="welcome_welcome__introBlockTitle__1bAuv">
              WELCOME TO
            </h2>
            <div className="welcome_welcome__introBlockImg__1oiMG"></div>
          </div>
          <p className="text_text__qMNiw welcome_welcome__cityText__Y_H_z">
            Build up your collection of NFT Heroes and explore the endless
            gaming metaverse of SIDUS
          </p>
          <WalletButton />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
