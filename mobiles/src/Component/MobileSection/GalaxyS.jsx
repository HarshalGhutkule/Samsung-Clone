import { LineupCard } from "../Lineup-card/LineupCard";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

export const GalaxyS = () => {

  const [galaxyS, setGalaxyS] = useState(null);

  const Main = styled.div`
    height: 800px;
    background-color: #f7f7f7;
    & .flexDiv {
      display: flex;
      padding-left: 20%;
      padding-right: 20%;
      justify-content: space-between;
    }
    & .seeAll {
      font-family: samsung700;
      height: 40px;
      width: 6.5%;
      background-color: #f7f7f7;
      border-radius: 20px;
      border: 1px solid black;
      color: black;
      font-weight: 700;
      font-size: 13px;
      margin: auto;
    }
    & .seeAll:hover {
      background-color: #e8e8e8;
    }
  `;

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("http://localhost:3001/mobiles").then(({ data }) => {
      setGalaxyS(data.slice(4, 7));
    });
  };

  if (galaxyS === null) {
    return null;
  }

  return (
    <Main>
      <br />
      <br />
      <div className="flexDiv">
        {galaxyS.map((el)=>(
          <LineupCard key={el._id} productName={el.product_name} cardImage={el.cardImage} newBadge={el.new} colors={el.color} colorImage={el.colorImage1} price={el.price} discount={el.discount} storage={el.description.Storage}/>
        ))}
      </div>
      <br />
      <br />
      <br />
      <button className="seeAll">See all</button>
    </Main>
  );
};
