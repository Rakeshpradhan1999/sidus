import React from "react";

const Harvest = () => {
  return (
    <section className="harvest_harvest__container__15-pa">
      <div className="harvest_harvest__header__3hFdP">
        <p className="text_text__qMNiw harvest_harvest__title__1hq13" type="h4">
          get your harvest
        </p>
        <p
          className="text_text__qMNiw harvest_harvest__subTitle__3LYGF"
          type="p"
        >
          ENTER THE NUMBER OF COINS YOU WANT TO WITHDRAW AND PRESS “harvest”
        </p>
      </div>
      <div className="harvest_harvest__formBlock__2IKxf">
        <div className="harvest_harvest__balanceBlock__1eur0">
          <p
            className="text_text__qMNiw harvest_harvest__balanceTitle__37tfj"
            type="p"
          >
            YOUR BALANCE:
          </p>
          <div className="harvest_harvest__balanceFrame__1B4p1">
            <span className="harvest_harvest__balanceText__Yo366">
              0
              <span className="harvest_harvest__balanceSymbol__1-aVh">
                NFTS
              </span>
            </span>
          </div>
        </div>
        <form className="harvest_harvest__checkForm__25lTf">
          <button className="harvest_harvest__section_upgrade_btn__2hkYI">
            harvest
          </button>
        </form>
      </div>
    </section>
  );
};

export default Harvest;
