import styled from "styled-components";
import { MobileListNavbar } from "./MobileListNavbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { LineupCard } from "../Lineup-card/LineupCard";

export const MobileList = () => {

  const [mobileData, setMobileData] = useState(null);

  const Main = styled.div`
    display: flex;
    background-color:#f7f7f7;
    & .displayFilters {
      flex: 1;
      border: 1px solid red;
    }
    & .displayProduct {
      flex: 3;
      display: flex;
      gap:2%;
      flex-wrap: wrap;
      justify-content: space-between;
      border: 1px solid red;
      overflow:scroll;
    }
  `;

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("http://localhost:3001/mobiles").then(({ data }) => {
        setMobileData(data);
    });
  };
  return (
    <div>
      <MobileListNavbar />
      <Main>
        <div className="displayFilters"></div>
        <div className="displayProduct">
            {mobileData && mobileData.map((el)=>(
            <LineupCard key={el._id} cardWidth={"300px"} productName={el.product_name} cardImage={el.cardImage} newBadge={el.new} colors={el.color} colorImage={el.colorImage1} price={el.price} discount={el.discount} storage={el.description.Storage}/>
            ))}
        </div>
      </Main>
    </div>
  );
};
