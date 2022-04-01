import styled from "styled-components";
import { useEffect, useState } from "react";
import { LineupCard } from "../Lineup-card/LineupCard";
import { FunnelFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {EmojiFrown} from "react-bootstrap-icons";

export const MobileList = () => {

    let data = useSelector((store)=>store.compare);

  let [mobileData, setMobileData] = useState(data);
  let [results, setResults] = useState(0);
  let [priceState, setPriceState] = useState([false,false,false,false])
  console.log(priceState);

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
    setMobileData(data);
    setResults(data.length);
  }, []);

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
        setPriceState([...priceState,!priceState[0]]);
      setMobileData(data.slice(0,4));
      setResults(data.slice(0,4).length);
    }
    else if(x === 2){
        setPriceState([...priceState,!priceState[1]]);
      setMobileData(data.slice(4,7));
      setResults(data.slice(4,7).length);
    }
    else if(x === 3){
        setPriceState([...priceState,!priceState[2]]);
        setMobileData(data.slice(7,9));
        setResults(data.slice(7,9).length);
    }
    else{
        setPriceState([...priceState,!priceState[3]]);
        setMobileData(data.slice(9,13));
        setResults(data.slice(9,13).length);
    }
}

//priceRangeSort
const priceRangeSort = (x)=>{
    if(x === 1){
        setMobileData(data.filter((a)=>a.price[0] <= 10000));
        setResults(data.filter((a)=>a.price[0] <= 10000).length);
      }
      else if(x === 2){
        setMobileData(data.filter((a)=>a.price[0] > 10000 && a.price[0] <= 20000));
        setResults(data.filter((a)=>a.price[0] > 10000 && a.price[0] <= 20000).length);
      }
      else if(x === 3){
        setMobileData(data.filter((a)=>a.price[0] > 20000 && a.price[0] <= 30000));
        setResults(data.filter((a)=>a.price[0] > 20000 && a.price[0] <= 30000).length);
      }
      else if(x === 4){
        setMobileData(data.filter((a)=>a.price[0] > 30000 && a.price[0] <= 40000));
        setResults(data.filter((a)=>a.price[0] > 30000 && a.price[0] <= 40000).length);
      }
      else if(x === 5){
        setMobileData(data.filter((a)=>a.price[0] > 40000 && a.price[0] <= 50000));
        setResults(data.filter((a)=>a.price[0] > 40000 && a.price[0] <= 50000).length);
      }
      else{
        setMobileData(data.filter((a)=>a.price[0] > 50000));
        setResults(data.filter((a)=>a.price[0] > 50000).length);
      }
}
  

//memorySizeSort
const memorySizeSort = (x)=>{
    if(x === 1){
        setMobileData(data.filter((a)=>a.description.Storage[0] == "32GB" || a.description.Storage[1] == "32GB"));
        setResults(data.filter((a)=>a.description.Storage[0] == "32GB" || a.description.Storage[1] == "32GB").length);
      }
      else if(x === 2){
        setMobileData(data.filter((a)=>a.description.Storage[0] == "64GB" || a.description.Storage[1] == "64GB"));
        setResults(data.filter((a)=>a.description.Storage[0] == "64GB" || a.description.Storage[1] == "64GB").length);
      }
      else if(x === 3){
        setMobileData(data.filter((a)=>a.description.Storage[0] == "128GB" || a.description.Storage[1] == "128GB"));
        setResults(data.filter((a)=>a.description.Storage[0] == "128GB" || a.description.Storage[1] == "128GB").length);
      }
      else if(x === 4){
        setMobileData(data.filter((a)=>a.description.Storage[0] == "256GB" || a.description.Storage[1] == "256GB"));
        setResults(data.filter((a)=>a.description.Storage[0] == "256GB" || a.description.Storage[1] == "256GB").length);
      }
      else if(x === 5){
        setMobileData(data.filter((a)=>a.description.Storage[0] == "512GB" || a.description.Storage[1] == "512GB"));
        setResults(data.filter((a)=>a.description.Storage[0] == "512GB" || a.description.Storage[1] == "512GB").length);
      }
      else{
        setMobileData(data.filter((a)=>a.description.Storage[0] == "1TB" || a.description.Storage[1] == "1TB"));
        setResults(data.filter((a)=>a.description.Storage[0] == "1TB" || a.description.Storage[1] == "1TB").length);
      }
}

//cameraResolutionSort
const cameraResSort = (x)=>{
    if(x === 1){
        setMobileData(data.filter((a)=>a.description.Camera[0] == "8MP Wide"));
        setResults(data.filter((a)=>a.description.Camera[0] == "8MP Wide").length);
    }
    else if(x === 2){
        setMobileData(data.filter((a)=>a.description.Camera[0] == "10MP Wide"));
        setResults(data.filter((a)=>a.description.Camera[0] == "10MP Wide").length);
    }
    else{
        setMobileData(data.filter((a)=>a.description.Camera[0] == "20MP Wide"));
        setResults(data.filter((a)=>a.description.Camera[0] == "20MP Wide").length);
    }
}

//Availability
const availableToOrder = ()=>{
    setMobileData(data);
    setResults(data.length);
}

  return (
    <div>
      <Navbar>
        <Link to={"/"}><FunnelFill size={20} color="black"/>Filters</Link>
        <Link to={"/"}>{results} Results</Link>
        <p onClick={()=>{setMobileData(data)
            setResults(data.length)
            setPriceState([false,false,false,false])
            }}>Reset Filters</p>
        <p onClick={()=>{pricesort(1)}}>Price : High to Low</p>
        <p onClick={()=>{pricesort(-1)}}>Price : Low to High</p>
        </Navbar>
      <Main>
        <div className="displayFilters">
            <div className="productName">
                <p>Class</p>
                <input type="checkbox" checked={priceState[0]} onChange={()=>titleSort(1)}/>
                <label>Galaxy Z</label>
                <br /><br />
                <input type="checkbox" checked={priceState[1]} onChange={()=>titleSort(2)}/>
                <label>Galaxy S</label>
                <br /><br />
                <input type="checkbox" checked={priceState[2]} onChange={()=>titleSort(3)}/>
                <label>Galaxy Note</label>
                <br /><br />
                <input type="checkbox" checked={priceState[3]} onChange={()=>titleSort(4)}/>
                <label>Galaxy A</label>
            </div>
            <div className="productPrice productName">
                <p>Price</p>
                <input type="checkbox" name="productPrice" onChange={()=>priceRangeSort(1)}/>
                <label htmlFor="">Up to ₹10000</label>
                <br /><br />
                <input type="checkbox" name="productPrice" onChange={()=>priceRangeSort(2)}/>
                <label htmlFor="">₹10000 ~ ₹20000</label>
                <br /><br />
                <input type="checkbox" name="productPrice" onChange={()=>priceRangeSort(3)}/>
                <label htmlFor="">₹20000 ~ ₹30000</label>
                <br /><br />
                <input type="checkbox" name="productPrice" onChange={()=>priceRangeSort(4)}/>
                <label htmlFor="">₹30000 ~ ₹40000</label>
                <br /><br />
                <input type="checkbox" name="productPrice" onChange={()=>priceRangeSort(5)}/>
                <label htmlFor="">₹40000 ~ ₹50000</label>
                <br /><br />
                <input type="checkbox" name="productPrice" onChange={()=>priceRangeSort(6)}/>
                <label htmlFor="">Above ₹50000</label>
            </div>
            <div className="productMemory productName">
                <p>Memory</p>
                <input type="checkbox" name="productMemory" onChange={()=>memorySizeSort(1)}/>
                <label htmlFor="">Up to 32GB</label>
                <br /><br />
                <input type="checkbox" name="productMemory" onChange={()=>memorySizeSort(2)}/>
                <label htmlFor="">64GB</label>
                <br /><br />
                <input type="checkbox" name="productMemory" onChange={()=>memorySizeSort(3)}/>
                <label htmlFor="">128GB</label>
                <br /><br />
                <input type="checkbox" name="productMemory" onChange={()=>memorySizeSort(4)}/>
                <label htmlFor="">256GB</label>
                <br /><br />
                <input type="checkbox" name="productMemory" onChange={()=>memorySizeSort(5)}/>
                <label htmlFor="">512GB</label>
                <br /><br />
                <input type="checkbox" name="productMemory" onChange={()=>memorySizeSort(6)}/>
                <label htmlFor="">1TB</label>
            </div>
            <div className="productCamera productName">
                <p>Camera</p>
                <input type="checkbox" name="productCamera" onChange={()=>cameraResSort(1)}/>
                <label htmlFor="">~8MP</label>
                <br /><br />
                <input type="checkbox" name="productCamera" onChange={()=>cameraResSort(2)}/>
                <label htmlFor="">9~12.9MP</label>
                <br /><br />
                <input type="checkbox" name="productCamera" onChange={()=>cameraResSort(3)}/>
                <label htmlFor="">20MP~</label>
            </div>
            <div className="productAvailable productName">
                <p>Availability</p>
                <input type="checkbox" name="productAvailable" onChange={()=>availableToOrder()}/>
                <label htmlFor="">Available to order</label>
            </div>
        </div>
        {results === 0 ? <div className="displayProduct" style={{display:"block"}}>
            <EmojiFrown size={50} color="#8f8f8f"/>
            <p style={{fontFamily:"samsung700", fontSize:"23px", color:"#8f8f8f"}}>Sorry, no results were found.</p>
        </div>: <div className="displayProduct">
            {mobileData && mobileData.map((el)=>(
                <LineupCard key={el._id} cardWidth={"300px"} productName={el.product_name} cardImage={el.cardImage} newBadge={el.new} colors={el.color} colorImage={el.colorImage1} price={el.price} discount={el.discount} storage={el.description.Storage}/>
            ))}
        </div>}
        
      </Main>
    </div>
  );
};
