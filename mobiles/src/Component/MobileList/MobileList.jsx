import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { LineupCard } from "../Lineup-card/LineupCard";
import { FunnelFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export const MobileList = () => {

  let [mobileData, setMobileData] = useState(null);
  const [results, setResults] = useState(0);

  const Navbar = styled.div`
    background-color: white;
    height: 53px;
    font-family: samsung700;
    display: flex;
    justify-content: start;
    align-items: center;
    position: sticky;
    top: 53px;
    z-index: 7;
    border-top: 1px solid #c6c6c6;
    border-bottom: 1px solid #c6c6c6;

    & a {
      text-decoration: none;
      padding: 2%;
      font-size: 13px;
      color: black;
    }
    & p {
      margin: 1%;
      font-size: 13px;
      cursor: pointer;
    }
  `;

  const Main = styled.div`
    display: flex;
    background-color:#f7f7f7;

    & .displayFilters {
      flex: 1.4;
      background-color:white;
      padding-left:1.5%;
      padding-right:1.5%;
    }
    & .displayFilters > .productName{
        font-family: samsung400;
        font-size: 11px;
        margin-top:5%;
        margin-left:0%;
        align-items:left;
        width:100%;
        overflow:auto;
        border-bottom:1px solid #cccccc;
    }
    & .displayFilters > .productName > label{
        font-family: samsung400;
        font-size: 11px;
        margin:2%;
        margin-top:0%;
        float: left;
    }
    & .displayFilters > .productName > p{
        font-family: samsung700;
        font-size: 13px;
        text-align:left;
    }
    & .displayFilters > .productName > input{
        height: 18px;
        width: 18px;
        float:left;
    }
    & .displayProduct {
      flex: 5;
      display: flex;
      padding-top:2%;
      gap:1%;
      flex-wrap: wrap;
      justify-content: space-around;
    }
  `;

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("http://localhost:3001/mobiles").then(({ data }) => {
        setMobileData(data);
        setResults(data.length);
    });
  };

  //price sort
  const pricesort = (x)=>{
      if(x === 1){
        setMobileData(prev=>[...prev.sort((a,b)=>b.price[0]-a.price[0])]);
      }
      else{
        setMobileData(prev=>[...prev.sort((a,b)=>a.price[0]-b.price[0])]);
      }
  }

  //title sort
  const titleSort = (x)=>{
    if(x === 1){
      setMobileData(mobileData.slice(0,4));
    }
    else if(x === 2){
      setMobileData(mobileData.slice(4,7));
    }
    else if(x === 3){
        setMobileData(mobileData.slice(7,9));
    }
    else{
        setMobileData(mobileData.slice(9,13));
    }
}
  
  return (
    <div>
      <Navbar>
        <Link to={"/"}><FunnelFill size={20} color="black"/>Filters</Link>
        <Link to={"/"}>{results} Results</Link>
        <Link to={"/"}>Reset Filters</Link>
        <p onClick={()=>{pricesort(1)}}>Price : High to Low</p>
        <p onClick={()=>{pricesort(-1)}}>Price : Low to High</p>
        </Navbar>
      <Main>
        <div className="displayFilters">
            <div className="productName">
                <p>Class</p>
                <input type="checkbox" name="productName" value={"1"} onClick={()=>titleSort(1)}/>
                <label htmlFor="">Galaxy Z</label>
                <br /><br />
                <input type="checkbox" name="productName" value={"1"} onClick={()=>titleSort(2)}/>
                <label htmlFor="">Galaxy S</label>
                <br /><br />
                <input type="checkbox" name="productName" value={"1"} onClick={()=>titleSort(3)}/>
                <label htmlFor="">Galaxy Note</label>
                <br /><br />
                <input type="checkbox" name="productName" value={"1"} onClick={()=>titleSort(4)}/>
                <label htmlFor="">Galaxy A</label>
            </div>
            <div className="productPrice productName">
                <p>Price</p>
                <input type="checkbox" name="productPrice" value={"1"}/>
                <label htmlFor="">Up to ₹10000</label>
                <br /><br />
                <input type="checkbox" name="productPrice" value={"1"}/>
                <label htmlFor="">₹10000 ~ ₹20000</label>
                <br /><br />
                <input type="checkbox" name="productPrice" value={"1"}/>
                <label htmlFor="">₹20000 ~ ₹30000</label>
                <br /><br />
                <input type="checkbox" name="productPrice" value={"1"}/>
                <label htmlFor="">₹30000 ~ ₹40000</label>
                <br /><br />
                <input type="checkbox" name="productPrice" value={"1"}/>
                <label htmlFor="">₹40000 ~ ₹50000</label>
                <br /><br />
                <input type="checkbox" name="productPrice" value={"1"}/>
                <label htmlFor="">Above ₹50000</label>
            </div>
            <div className="productMemory productName">
                <p>Memory</p>
                <input type="checkbox" name="productMemory" value={"1"}/>
                <label htmlFor="">Up to 32GB</label>
                <br /><br />
                <input type="checkbox" name="productMemory" value={"1"}/>
                <label htmlFor="">64GB</label>
                <br /><br />
                <input type="checkbox" name="productMemory" value={"1"}/>
                <label htmlFor="">128GB</label>
                <br /><br />
                <input type="checkbox" name="productMemory" value={"1"}/>
                <label htmlFor="">256GB</label>
                <br /><br />
                <input type="checkbox" name="productMemory" value={"1"}/>
                <label htmlFor="">512GB</label>
                <br /><br />
                <input type="checkbox" name="productMemory" value={"1"}/>
                <label htmlFor="">1TB</label>
            </div>
            <div className="productCamera productName">
                <p>Camera</p>
                <input type="checkbox" name="productCamera" value={"1"}/>
                <label htmlFor="">~4.9MP</label>
                <br /><br />
                <input type="checkbox" name="productCamera" value={"1"}/>
                <label htmlFor="">9~12.9MP</label>
                <br /><br />
                <input type="checkbox" name="productCamera" value={"1"}/>
                <label htmlFor="">24MP~</label>
            </div>
            <div className="productAvailable productName">
                <p>Availability</p>
                <input type="checkbox" name="productAvailable" value={"1"}/>
                <label htmlFor="">Available to order</label>
            </div>
        </div>
        <div className="displayProduct">
            {mobileData && mobileData.map((el)=>(
                <LineupCard key={el._id} cardWidth={"300px"} productName={el.product_name} cardImage={el.cardImage} newBadge={el.new} colors={el.color} colorImage={el.colorImage1} price={el.price} discount={el.discount} storage={el.description.Storage}/>
            ))}
        </div>
      </Main>
    </div>
  );
};
