import { LineupCard } from "../Lineup-card/LineupCard";
import styled from "styled-components";

export const GalaxyZ = () => {
  const Main = styled.div`
    height: 800px;
    background-color: #f7f7f7;
    & .flexDiv {
      display: flex;
      padding-left: 10%;
      padding-right: 10%;
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

  return (
    <Main>
      <br />
      <br />
      <div className="flexDiv">
        <LineupCard />
        <LineupCard />
        <LineupCard />
        <LineupCard />
      </div>
      <br />
      <br />
      <br />
      <button className="seeAll">See all</button>
    </Main>
  );
};
