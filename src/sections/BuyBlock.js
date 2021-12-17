import React from "react";
import rare1 from "../assets/modificator/rear1.png";
import legendary1 from "../assets/modificator/legendary1.png";
import notFound from "../assets/modificator/notFound.svg";
import hero1 from "../assets/nft-hero/hero1.png";
import hero2 from "../assets/nft-hero/hero2.png";
import hero3 from "../assets/nft-hero/hero3.png";
import hero4 from "../assets/nft-hero/hero4.png";
import modifier_1 from "../assets/modificator/modifier_1.png";
import empty from "../assets/hero-stacking/empty.svg";
const BuyBlock = () => {
  return (
    <section className="Buy_buyBlock__container__mZR1I">
      <h3 className="Title_title__SM0ON Buy_buyBlock__title__vOO1r">
        NFT HERO - YOUR REINCARNATION IN THE SIDUS UNIVERSE
      </h3>
      <div className="buy-hero_buyHero__3Xqxt">
        <div className="buy-hero_buyHero__info__1qEkg">
          <p className="text_text__qMNiw buy-hero_buyHero__title__35DL5">
            THE FOUNDING FATHERS OF SIDUS
          </p>
          <p className="text_text__qMNiw buy-hero_buyHero__text__2XCWl">
            The Original SIDUS: NFT Heroes collection consists of 6,000 unique
            characters that have different levels of rarity (Original, Rare,
            Legendary, Exclusive and Partnership) and 13 different inherited
            traits. This combination of attributes determines each Hero &#x27;s
            rarity level. Besides serving as an entrance ticket to SIDUS, NFT
            Heroes from the Founders collection can be used for NFT staking and
            NFT wrapping.
          </p>
        </div>
        <div className="buy-hero_buyHero__form__1FhF_">
          <div className="buy-hero_buyHero__heroesHolder__18Uad"></div>
          <div className="buy-hero_form__fZsnB">
            <div className="buy-hero_input__container__3Eu_g">
              <button
                className="
                    button_button__2NpT5
                    button_button_color_white__3PqNb
                    buy-hero_form__buttonMinus__3A_9d
                  "
              >
                <span className="button_button__text__1Soec undefined">-</span>
              </button>
              <div
                className="
                    Input_input__container__3pQ1p Input_input__wrapper__3I1rg
                  "
              >
                <input
                  type="text"
                  className="
                      Input_input__input__CjoHG
                      buy-hero_form__input__b7_sH
                    "
                  defaultValue="1"
                  placeholder="1"
                />
              </div>
              <button
                className="
                    button_button__2NpT5
                    button_button_color_white__3PqNb
                    buy-hero_form__buttonPlus__25Bgu
                  "
              >
                <span className="button_button__text__1Soec undefined">+</span>
              </button>
            </div>
            <div className="buy-hero_form__submit__container__2Umei">
              <button
                className="
                    button_button__2NpT5
                    button_button_color_default__1xI3m
                  "
              >
                <span className="button_button__text__1Soec undefined">
                  BUY ON OPENSEA
                </span>
              </button>
              <button
                className="button_button__2NpT5 button_button_color_dark__31Zjo"
                id="claim"
              >
                <span className="button_button__text__1Soec undefined">
                  CLAIM
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modificator_modificator__2eihL">
        <div className="modificator_modificator__section__27L_F">
          <div className="modificator_modificator__info__dgc3T">
            <p className="text_text__qMNiw modificator_modificator__title__3QEWH">
              CHOOSE AN UPGRADE CARD - RARE OR LEGENDARY
            </p>
            <p className="text_text__qMNiw modificator_modificator__text__2l0o9">
              Every original NFT Hero has a chance to become one of 1,000 Rare
              Heroes or 500 Legendary Heroes by collecting special modificators
              - upgrade cards. To become a Rare NFT Hero, it takes 1 upgrade
              card. To become a Legendary Hero, 3 Legendary cards are needed.
              NFT Heroes with higher rarity have a higher status in the SIDUS
              community and enjoy bigger rewards in Galaxy Staking.
            </p>
          </div>
          <div className="modificator_modificator__cardsBlock__1Ew6Q">
            <div className="modificator_modificator__cardsBlock__card__Gdb4X">
              <div className="modificator-item_modificatorItem__175uE">
                <input
                  type="radio"
                  id="rare"
                  name="modificator"
                  className="modificator-item_modificatorItem__input__2VJXY"
                  readOnly=""
                />
                <label
                  htmlFor="rare"
                  className="modificator-item_modificatorItem__content__3GjYc"
                >
                  <div
                    className="
                        modificator-item_modificatorItem__label__1chs9
                        modificator-item_modificatorItem__label_rare__26-On
                      "
                  >
                    <div>
                      <span>rare</span>
                    </div>
                  </div>
                  <img src={rare1} alt="rare" />
                </label>
              </div>
              <div className="modificator_input__container__1dJ-Q">
                <button
                  className="
                      button_button__2NpT5
                      button_button_color_white__3PqNb
                      modificator_form__buttonMinus__3IfWH
                    "
                >
                  <span className="button_button__text__1Soec undefined">
                    -
                  </span>
                </button>
                <div
                  className="
                      Input_input__container__3pQ1p
                      Input_input__wrapper__3I1rg
                    "
                >
                  <input
                    type="text"
                    className="
                        Input_input__input__CjoHG
                        modificator_form__input__1jin1
                      "
                    defaultValue="0"
                    placeholder="0"
                  />
                </div>
                <button
                  className="
                      button_button__2NpT5
                      button_button_color_white__3PqNb
                      modificator_form__buttonPlus__31IEW
                    "
                >
                  <span className="button_button__text__1Soec undefined">
                    +
                  </span>
                </button>
              </div>
            </div>
            <div className="modificator_modificator__cardsBlock__card__Gdb4X">
              <div className="modificator-item_modificatorItem__175uE">
                <input
                  type="radio"
                  id="legendary"
                  name="modificator"
                  className="modificator-item_modificatorItem__input__2VJXY"
                  readOnly=""
                />
                <label
                  htmlFor="legendary"
                  className="modificator-item_modificatorItem__content__3GjYc"
                >
                  <div
                    className="
                        modificator-item_modificatorItem__label__1chs9
                        modificator-item_modificatorItem__label_legendary__9qBUe
                      "
                  >
                    <div>
                      <span>legendary</span>
                    </div>
                  </div>
                  <img src={legendary1} alt="legendary" />
                </label>
              </div>
              <div className="modificator_input__container__1dJ-Q">
                <button
                  className="
                      button_button__2NpT5
                      button_button_color_white__3PqNb
                      modificator_form__buttonMinus__3IfWH
                    "
                >
                  <span className="button_button__text__1Soec undefined">
                    -
                  </span>
                </button>
                <div
                  className="
                      Input_input__container__3pQ1p
                      Input_input__wrapper__3I1rg
                    "
                >
                  <input
                    type="text"
                    className="
                        Input_input__input__CjoHG
                        modificator_form__input__1jin1
                      "
                    defaultValue="0"
                    placeholder="0"
                  />
                </div>
                <button
                  className="
                      button_button__2NpT5
                      button_button_color_white__3PqNb
                      modificator_form__buttonPlus__31IEW
                    "
                >
                  <span className="button_button__text__1Soec undefined">
                    +
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="modificator_modificator__countersBlock__2LLbd"></div>
          <div className="modificator_modificator__section__buttons__1BRZP">
            <button
              className="
                  button_button__2NpT5
                  button_button_color_default__1xI3m
                  modificator_modificator__section__button__2okAW
                "
            >
              <span className="button_button__text__1Soec undefined">
                BUY ON OPENSEA
              </span>
            </button>
            <button
              className="
                  button_button__2NpT5
                  button_button_color_dark__31Zjo
                  modificator_modificator__section__button__2okAW
                "
            >
              <span className="button_button__text__1Soec undefined">
                CLAIM
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="check_hero_modificator__1ZEsk">
        <p className="text_text__qMNiw check_hero_modificator__title__2OkZx">
          Badass Rare or Still One of the Boys?
        </p>
        <p className="text_text__qMNiw check_hero_modificator__subTitle__3Crkr">
          Check the upgrade status of your NFT Hero
        </p>
        <div className="check_hero_modificator__wrapper__2TJgh">
          <div className="check_hero_modificator__info__3cqKr">
            <div className="check_hero_modificator__avatar__1Trvm">
              <img src={notFound} alt="Heroes" />
            </div>
            <p className="check_hero_modificator__text__SnMQl">
              <span>
                {" "}
                Hero: <span>-</span>{" "}
              </span>
              <span>
                {/* Status:
                  <!-- -->
                  <span className="check_hero_modificator__heroStatus__39yq6"
                    >-</span
                  > */}
              </span>
            </p>
          </div>
          <form className="check_hero_modificator__checkForm__59hzl">
            <label className="check_hero_modificator__inputBox___FsFZ">
              <span className="check_hero_modificator__inputLabel__1SW4x">
                ENTER YOUR HERO’S ID NUMBER
              </span>
              <input
                type="number"
                className="check_hero_modificator__input__2_lVD"
                placeholder="ex. #2036"
              />
            </label>
            <button
              className="
                  button_button__2NpT5
                  button_button_color_default__1xI3m
                  check_hero_modificator__upgradeButton__1Pc_z
                "
              disabled=""
            >
              <span className="button_button__text__1Soec undefined">
                Check
              </span>
            </button>
          </form>
        </div>
      </div>
      <div className="modification-hero_stakingHero__12QCy">
        <div className="modification-hero_stakingHero__modification__3aQoD">
          <div className="modification-hero_stakingHero__slider_orange__259cE">
            <div className="modification-hero_stakingHero__slider__2PC9C">
              <div
                className="
                    staking-hero_stakingHero__slider__arrow__3yyWY
                    modification-hero_stakingHero__slider__arrow__3toB2
                    modification-hero_stakingHero__slider__arrowLeft__2HrDK
                  "
              >
                <button></button>
              </div>
              <div className="modification-hero_stakingHero__slider__items__38F3J">
                <div className="hero-item_heroItem__1K7pW">
                  <span className="hero-item_heroItem__name__1r-uQ">test1</span>
                  <input
                    type="checkbox"
                    id="test1"
                    name="hero"
                    className="hero-item_heroItem__input__3U1hy"
                  />
                  <label
                    htmlFor="test1"
                    className="hero-item_heroItem__content__3QzzN"
                  >
                    <img src={hero1} alt="test1" />
                  </label>
                </div>
              </div>
              <div
                className="
                    staking-hero_stakingHero__slider__arrow__3yyWY
                    modification-hero_stakingHero__slider__arrow__3toB2
                    modification-hero_stakingHero__slider__arrowRight__phR2L
                  "
              >
                <button></button>
              </div>
            </div>
            <p
              className="
                  modification-hero_stakingHero__modification__subTitle__40Enn
                "
            >
              1. pick one nft you want to upgrade
            </p>
          </div>
          <div className="modification-hero_stakingHero__dna__Hcmo2"></div>
          <div className="modification-hero_stakingHero__slider_blue__2TvcI">
            <div className="modification-hero_stakingHero__slider__2PC9C">
              <div
                className="
                    staking-hero_stakingHero__slider__arrow__3yyWY
                    modification-hero_stakingHero__slider__arrow__3toB2
                    modification-hero_stakingHero__slider__arrowLeft__2HrDK
                  "
              >
                <button></button>
              </div>
              <div className="modification-hero_stakingHero__slider__items__38F3J">
                <div className="hero-item_heroItem__1K7pW">
                  <span className="hero-item_heroItem__name__1r-uQ">Rare</span>
                  <input
                    type="checkbox"
                    id="Rare"
                    name="hero"
                    className="hero-item_heroItem__input__3U1hy"
                    readOnly=""
                  />
                  <label
                    htmlFor="Rare"
                    className="hero-item_heroItem__content__3QzzN"
                  >
                    <img src={modifier_1} alt="Rare" />
                  </label>
                </div>
              </div>
              <div
                className="
                    staking-hero_stakingHero__slider__arrow__3yyWY
                    modification-hero_stakingHero__slider__arrow__3toB2
                    modification-hero_stakingHero__slider__arrowRight__phR2L
                  "
              >
                <button></button>
              </div>
            </div>
            <p
              className="
                  modification-hero_stakingHero__modification__subTitle__40Enn
                "
            >
              2. pick a modificator and press upgrade
            </p>
          </div>
        </div>
        <div className="modification-hero_stakingHero__form__tt619">
          <div className="modification-hero_stakingHero__form__buttons__3ZrT2">
            <button
              className="
                  button_button__2NpT5
                  button_button_color_dark__31Zjo
                  modification-hero_stakingHero__form__button__25F_J
                "
              disabled=""
            >
              <span className="button_button__text__1Soec undefined">
                upgrade
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="staking-hero_stakingHero__YwqMU">
        <p className="text_text__qMNiw staking-hero_stakingHero__title__2Fj5Y">
          galaxy staking
        </p>
        <p className="text_text__qMNiw staking-hero_stakingHero__subTitle__33JX_">
          Stake Your Hero to Earn NFTS
        </p>
        <div className="staking-hero_stakingHero__slider__3A8OJ">
          <div
            className="
                staking-hero_stakingHero__slider__arrow__3yyWY
                staking-hero_stakingHero__slider__arrow__3yyWY
                staking-hero_stakingHero__slider__arrowLeft__2Ikyj
              "
          >
            <button></button>
          </div>
          <div
            className="
                swiper-container
                staking-hero_stakingHero__sliderBlock__2BpcD
              "
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide staking-hero_stakingHero__slide__3De5g">
                <div
                  className="
                      hero-item_heroItem__1K7pW
                      staking-hero_stakingHero__stakingHolder__24zVb
                    "
                >
                  <input
                    type="checkbox"
                    id="test1"
                    name="hero"
                    className="hero-item_heroItem__input__3U1hy"
                    readOnly=""
                  />
                  <label
                    htmlFor="test1"
                    className="
                        hero-item_heroItem__content__3QzzN
                        staking-hero_stakingHero__stakingItem__2Oub6
                      "
                  >
                    <img src={hero1} alt="test1" />
                  </label>
                </div>
              </div>
              <div className="swiper-slide staking-hero_stakingHero__slide__3De5g">
                <div
                  className="
                      hero-item_heroItem__1K7pW
                      staking-hero_stakingHero__stakingHolder__24zVb
                    "
                >
                  <input
                    type="checkbox"
                    id="test2"
                    name="hero"
                    className="hero-item_heroItem__input__3U1hy"
                    readOnly=""
                  />
                  <label
                    htmlFor="test2"
                    className="
                        hero-item_heroItem__content__3QzzN
                        staking-hero_stakingHero__stakingItem__2Oub6
                      "
                  >
                    <img src={hero2} alt="test2" />
                  </label>
                </div>
              </div>
              <div className="swiper-slide staking-hero_stakingHero__slide__3De5g">
                <div
                  className="
                      hero-item_heroItem__1K7pW
                      staking-hero_stakingHero__stakingHolder__24zVb
                    "
                >
                  <input
                    type="checkbox"
                    id="test3"
                    name="hero"
                    className="hero-item_heroItem__input__3U1hy"
                    readOnly=""
                  />
                  <label
                    htmlFor="test3"
                    className="
                        hero-item_heroItem__content__3QzzN
                        staking-hero_stakingHero__stakingItem__2Oub6
                      "
                  >
                    <img src={hero3} alt="test3" />
                  </label>
                </div>
              </div>
              <div className="swiper-slide staking-hero_stakingHero__slide__3De5g">
                <div
                  className="
                      hero-item_heroItem__1K7pW
                      staking-hero_stakingHero__stakingHolder__24zVb
                    "
                >
                  <input
                    type="checkbox"
                    id="test4"
                    name="hero"
                    className="hero-item_heroItem__input__3U1hy"
                    readOnly=""
                  />
                  <label
                    htmlFor="test4"
                    className="
                        hero-item_heroItem__content__3QzzN
                        staking-hero_stakingHero__stakingItem__2Oub6
                      "
                  >
                    <img src={hero4} alt="test4" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div
            className="
                staking-hero_stakingHero__slider__arrow__3yyWY
                staking-hero_stakingHero__slider__arrow__3yyWY
                staking-hero_stakingHero__slider__arrowRight__1GwNi
              "
          >
            <button></button>
          </div>
        </div>
        <div className="staking-hero_stakingHero__form__1N6kc">
          <p className="staking-hero_stakingHero__form__title__2FdAM">
            PICK NFT HERO(ES) YOU WANT TO STAKE AND PRESS «STAKE»
          </p>
          <div className="staking-hero_stakingHero__form__buttons__3PNE8">
            <button
              className="
                  button_button__2NpT5
                  button_button_color_default__1xI3m
                  staking-hero_stakingHero__form__button__36Shg
                "
            >
              <span className="button_button__text__1Soec undefined">
                pick all
              </span>
            </button>
            <button
              className="
                  button_button__2NpT5
                  button_button_color_dark__31Zjo
                  staking-hero_stakingHero__form__button__36Shg
                "
            >
              <span className="button_button__text__1Soec undefined">
                stake
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="unstake-hero_unstakeHero__3cLzI">
        <p className="text_text__qMNiw unstake-hero_unstakeHero__title__3d1Fy">
          already staked:
        </p>
        <div className="unstake-hero_unstakeHero__slider__3iqms">
          <div className="unstake-hero_unstakeHero__slider__empty__qzJs1">
            <div className="unstake-hero_unstakeHero__slider__emptyImage__Ck1jB">
              <img src={empty} alt="empty" />
            </div>
            <div className="unstake-hero_unstakeHero__slider__notFound__2B6F8">
              <span>YOU DON’T HAVE ANY NFT HEROES YET</span>
            </div>
          </div>
        </div>
        <div className="unstake-hero_unstakeHero__form__38yvS">
          <p className="unstake-hero_unstakeHero__form__title__3RdTC">
            PICK an NFT HERO YOU WANT TO unSTAKE AND PRESS «UNSTAKE»
          </p>
          <div className="unstake-hero_unstakeHero__form__buttons__3D-_U">
            <button
              className="
                  button_button__2NpT5
                  button_button_color_default__1xI3m
                  unstake-hero_unstakeHero__form__button__3qYCo
                "
              disabled=""
            >
              <span className="button_button__text__1Soec undefined">
                unstake
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyBlock;
