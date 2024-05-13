import React from "react";
import "./PriceCard.css";

const PriceCard = ({ priceCard }) => {
  return (
    <>
      <section className="price-card-section">
        <div className="price-card-container">
          <div className="price-card">
            <div className="card-header">
              <p>
                <span>
                  <b>{priceCard[0].plan}</b>
                </span>
              </p>
              <h2>{priceCard[0].price}</h2>
            </div>
            <div className="offers">
              <p>
                <i className="fa-solid fa-check"></i>
                {priceCard[0].user}
              </p>
              <p>
                <i className="fa-solid fa-check"></i>
                {priceCard[0].storage}
              </p>
              <p>
                <i className="fa-solid fa-check"></i>
                {priceCard[0].publicProject}
              </p>
              <p>
                <i className="fa-solid fa-check"></i>
                {priceCard[0].access}
              </p>
              <p>
                <span>
                  <img src="icons/close.png" alt="" className="close" />
                  {priceCard[0].privateProject}
                </span>
              </p>
              <p>
                <span>
                  <img src="icons/close.png" alt="" className="close" />
                  {priceCard[0].support}
                </span>
              </p>
              <p>
                <span>
                  <img src="icons/close.png" alt="" className="close" />
                  {priceCard[0].domain}
                </span>
              </p>
              <p>
                <span>
                  <img src="icons/close.png" alt="" className="close" />
                  {priceCard[0].reports}
                </span>
              </p>
            </div>
            <div className="button">
              <button className="btn">BUTTON</button>
            </div>
          </div>
          <div className="price-card">
            <div className="card-header">
              <p>
                <span>
                  <b>{priceCard[1].plan}</b>
                </span>
              </p>
              <h2>{priceCard[1].price}</h2>
            </div>
            <div className="offers">
              <p>
                <i className="fa-solid fa-check"></i>
                {priceCard[1].user}
              </p>
              <p>
                <i className="fa-solid fa-check"></i>
                {priceCard[1].storage}
              </p>
              <p>
                <i className="fa-solid fa-check"></i>
                {priceCard[1].publicProject}
              </p>
              <p>
                <i className="fa-solid fa-check"></i>
                {priceCard[1].access}
              </p>
              <p>
                <i className="fa-solid fa-check"></i>
                {priceCard[1].privateProject}
              </p>
              <p>
                <i className="fa-solid fa-check"></i>
                {priceCard[1].support}
              </p>
              <p>
                <i className="fa-solid fa-check"></i>
                {priceCard[1].domain}
              </p>
              <p>
                <span>
                  <img src="icons/close.png" alt="" className="close" />
                  {priceCard[1].reports}
                </span>
              </p>
            </div>
            <div className="button">
              <button className="btn">BUTTON</button>
            </div>
          </div>
          <div className="price-card">
            <div className="card-header">
              <p>
                <span>
                  <b>{priceCard[2].plan}</b>
                </span>
              </p>
              <h2>{priceCard[2].price}</h2>
            </div>
            <div className="offers">
              <p>
                <i className="fa-solid fa-check"></i>
                {priceCard[2].user}
              </p>
              <p>
                <i className="fa-solid fa-check"></i>
                {priceCard[2].storage}
              </p>
              <p>
                <i className="fa-solid fa-check"></i>
                {priceCard[2].publicProject}
              </p>
              <p>
                <i className="fa-solid fa-check"></i>
                {priceCard[2].access}
              </p>
              <p>
                <i className="fa-solid fa-check"></i>
                {priceCard[2].privateProject}
              </p>
              <p>
                <i className="fa-solid fa-check"></i>
                {priceCard[2].support}
              </p>
              <p>
                <i className="fa-solid fa-check"></i>
                {priceCard[2].domain}
              </p>
              <p>
                <i className="fa-solid fa-check"></i>
                {priceCard[2].reports}
              </p>
            </div>
            <div className="button">
              <button className="btn">BUTTON</button>
            </div>
          </div>
        </div>
        ;
      </section>
      ;
    </>
  );
};

export default PriceCard;
