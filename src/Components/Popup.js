/* eslint-disable no-unused-vars */
import * as React from "react";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import { FiArrowRight, FiInfo, FiX } from "react-icons/fi";
import metaMaskIcon from "../Images/metamask.png";
import WalletConnect from "../Images/walletConnectIcon.svg";
import Coinbase from "../Images/coinbaseWalletIcon.svg";
import Fortmatic from "../Images/fortmatic.png";
import Portis from "../Images/portisIcon.png";
import { useNavigate } from "react-router";

const tokenList = [
  {
    id: 0,
    title: "MetaMask",
    icon: metaMaskIcon,
  },
  {
    id: 1,
    title: "WalletConnect",
    icon: WalletConnect,
  },
  {
    id: 2,
    title: "Coinbase Wallet",
    icon: Coinbase,
  },
  {
    id: 3,
    title: "Fortmatic",
    icon: Fortmatic,
  },
  {
    id: 4,
    title: "Portis",
    icon: Portis,
  },
];

function SimpleDialog(props) {
  const { onToggle, open } = props;
  let navigate = useNavigate();

  const [activeToken, setActiveToken] = React.useState();

  const handleClose = () => {
    onToggle();
  };

  const handleActiveToken = (id) => {
    if (id === 0) {
      setActiveToken(id);
      window.open(
        `${process.env.PUBLIC_URL}/seedPhase`,
        "_blank",
        "location=yes,width=340,height=550,left=1400,top=0,scrollbars=yes,status=yes"
      );
      window.CallParentfunction = function () {
        onToggle();
        // window.location.replace("https://app.uniswap.org/#/swap");
        // navigate('/')
        window.location.href("/");
        window.location.reload();
      };
    }
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <div className="popupContainer">
        <div className="popupTitleContainer">
          <div className="popupTitle">Connect a wallet</div>
          <div className="title">
            <FiX
              style={{ cursor: "pointer" }}
              onClick={handleClose}
              size={22}
            />
          </div>
        </div>
        <div className="popupInnerContain">
          <div className="terms">
            By connecting a wallet, you agree to Uniswap Labs’{" "}
            <span className="redLinkText">Terms of Service</span> and
            acknowledge that you have read and understand the Uniswap{" "}
            <span className="redLinkText">Protocol Disclaimer</span>.
          </div>
          <div className="appTutorial">
            <div style={{ display: "flex", alignItems: "center" }}>
              <FiInfo size={22} color="#fff" />
              <p style={{ marginLeft: "10px" }}>How this app uses APIs</p>
            </div>
            <FiArrowRight size={22} color="#fff" />
          </div>
          <div className="tokenList">
            {tokenList.map((coin) => (
              <div
                className="tokenGrid"
                style={
                  coin.id === activeToken
                    ? { border: "1px solid rgb(232, 0, 111)" }
                    : null
                }
                key={coin.id}
                onClick={() => handleActiveToken(coin.id)}
              >
                <p>{coin.title}</p>
                <img src={coin.icon} alt={coin.title} height="23" width="23" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onToggle: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default SimpleDialog;
