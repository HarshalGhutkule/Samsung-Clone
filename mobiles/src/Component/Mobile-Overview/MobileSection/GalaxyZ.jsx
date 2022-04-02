import { LineupCard } from "../../Mobile-Overview/Lineup-card/LineupCard";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import { compareData } from "../../../Redux/action";
import { Link } from "react-router-dom";

export const GalaxyZ = () => {

  const [galaxyZ, setGalaxyZ] = useState(null);
  
  const dispatch = useDispatch();

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
    & .seeAll>a{
      color: black;
      text-decoration:none;
    }
  `;

  useEffect(()=>{
    getData();
  },[])

  const getData = ()=>{
    axios.get("http://localhost:3001/mobiles").then(({data})=>{
      setGalaxyZ(data.slice(0,4));
      dispatch(compareData(data));
    })
  }


  if(galaxyZ === null){
    return null;
  }

  return (
    <Main>
      <br />
      <br />
      <div className="flexDiv">
        {galaxyZ.map((el)=>(
          <LineupCard key={el._id} id={el._id} productName={el.product_name} cardImage={el.cardImage} newBadge={el.new} colors={el.color} colorImage={el.colorImage1} price={el.price} discount={el.discount} storage={el.description.Storage}/>
        ))}
      </div>
      <br />
      <br />
      <br />
      <button className="seeAll"><Link to={"/mobiles"}>See all</Link></button>
    </Main>
  );
};