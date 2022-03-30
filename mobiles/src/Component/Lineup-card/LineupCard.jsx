import styled from "styled-components";
import { Heart, CircleFill,HeartFill } from "react-bootstrap-icons";
import { useState } from "react";

export const LineupCard = () => {
  const [imageUrl, setImageUrl] = useState(
    "https://images.samsung.com/is/image/samsung/p6pim/in/2108/gallery/in-galaxy-z-fold3-f926-5g-sm-f926bzkdinu-thumb-474118710?$216_216_PNG$"
  );

  const [mobileColor, setmobileColor] = useState("Phantom Black");
  const [mobilePrice, setmobilePrice] = useState(149999.00);
  const [heartColor, setheartColor] = useState("black");

  const Main = styled.div`
    height: 600px;
    width: 250px;
    margin: auto;
    border-radius: 20px;
    background-color:white;

    & .badge {
      height: 8%;
      width: 100%;
    }
    & .imageDiv {
      height: 40%;
    }
    & .textDiv p:nth-child(1) {
      font-family: SamsungSharpSans;
      font-size: 15px;
    }
    & .textDiv p:nth-child(2) {
      font-family: samsung400;
      font-size: 11px;
    }
    & .textDiv p:nth-child(5) {
      font-family: samsung700;
      font-size: 17px;
    }
    & .textDiv p:nth-child(6) span:nth-child(1) {
      font-family: samsung400;
      text-decoration: line-through;
      font-size: 11px;
    }
    & .textDiv p:nth-child(6) span:nth-child(2) {
      font-family: samsung700;
      color: #3193f6;
      font-size: 11px;
    }
    & .radiobtnDiv{
      width:60%;
      display:flex;
      margin:auto;
      justify-content:space-around;
      cursor: pointer;
    }
    & .ram{
      margin:3%;

    }
    & .emiDes{
      width:90%;
      margin:auto;
    }
    & .buyNow {
      height: 35px;
      width: 65%;
      background-color: black;
      border-radius: 20px;
      border: transparent;
      color: white;
      font-weight: 700;
      font-size: 13px;
      margin: auto;
    }
    & .buyNow:hover {
      opacity: 75%;
    }
  `;

  const imageArray = [
    "https://images.samsung.com/is/image/samsung/p6pim/in/2108/gallery/in-galaxy-z-fold3-f926-5g-sm-f926bzgdinu-thumb-474118691?$216_216_PNG$",
    "https://images.samsung.com/is/image/samsung/p6pim/in/2108/gallery/in-galaxy-z-fold3-f926-5g-sm-f926bzkdinu-thumb-474118701?$216_216_PNG$",
    "https://images.samsung.com/is/image/samsung/p6pim/in/2108/gallery/in-galaxy-z-fold3-f926-5g-sm-f926bzkdinu-thumb-474118702?$216_216_PNG$",
    "https://images.samsung.com/is/image/samsung/p6pim/in/2108/gallery/in-galaxy-z-fold3-f926-5g-sm-f926bzkdinu-thumb-474118703?$216_216_PNG$",
    "https://images.samsung.com/is/image/samsung/p6pim/in/2108/gallery/in-galaxy-z-fold3-f926-5g-sm-f926bzkdinu-thumb-474118704?$216_216_PNG$",
    "https://images.samsung.com/is/image/samsung/p6pim/in/2108/gallery/in-galaxy-z-fold3-f926-5g-sm-f926bzkdinu-thumb-474118705?$216_216_PNG$",
    "https://images.samsung.com/is/image/samsung/p6pim/in/2108/gallery/in-galaxy-z-fold3-f926-5g-sm-f926bzkdinu-thumb-474118706?$216_216_PNG$",
  ];
  const image1 =
    "https://images.samsung.com/is/image/samsung/p6pim/in/2108/gallery/in-galaxy-z-fold3-f926-5g-sm-f926bzkdinu-thumb-474118710?$216_216_PNG$";
  const image2 =
    "https://images.samsung.com/is/image/samsung/p6pim/in/2108/gallery/in-galaxy-z-fold3-f926-5g-sm-f926bzgdinu-thumb-474118691?$216_216_PNG$";
  const image3 =
    "https://images.samsung.com/is/image/samsung/p6pim/in/sm-f926bzsdinu/gallery/in-galaxy-z-fold3-f926-5g-396759-sm-f926bzsdinu-thumb-522779013?$216_216_PNG$";

    const colors1 = "Phantom Black";
    const colors2 = "Phantom Green";
    const colors3 = "Phantom Silver";

    const price1 = 149999.00;
    const price2 = 157999.00;

    const save = 22000;

  //function for image interval
  let a;
  let i = 0;
  const imageInterval = (e) => {
    a = setInterval(() => {
      e.target.src = imageArray[i];
      i++;
      if (i === 6) {
        i = 0;
      }
    }, 400);
  };

  const clearImageInterval = (e) => {
    clearInterval(a);
    i = 0;
    e.target.src = imageArray[i];
  };

  //change product color
  const handleChange = (image,MobColor) => {
    setImageUrl(image);
    setmobileColor(MobColor)
  };

  //change product price
  const handlePrice = (Price) => {
    setmobilePrice(Price);
  };

  //calculate emi
  const emi = Math.floor(mobilePrice*(14.99/365)*((1+(14.99/365))**24)/((1+(14.99/365))**24)-1);
  return (
    <Main>
      <div className="badge">
        <span
          class="w3-badge w3-blue"
          style={{
            borderRadius: "10px",
            padding: "2% 3%",
            float: "left",
            marginLeft: "5%",
            marginTop: "5%",
          }}
        >
          New
        </span>
        {heartColor === "black"? <Heart
          color={heartColor}
          size={20}
          onClick={(e)=>{setheartColor(e.target.color = "red")}}
          style={{ float: "right", marginRight: "5%", marginTop: "5%",cursor:"pointer" }}
        /> : <HeartFill
        color={heartColor}
        size={20}
        onClick={(e)=>{setheartColor(e.target.color = "black")}}
        style={{ float: "right", marginRight: "5%", marginTop: "5%",cursor:"pointer" }}
      />}
        
        
      </div>
      <div className="imageDiv">
        <img
          onMouseOver={(e) => imageInterval(e)}
          onMouseOut={clearImageInterval}
          src={imageUrl}
          alt="mobile"
        />
      </div>
      <div className="textDiv">
        <p>Galaxy Z Fold3 5G</p>
        <p>Color : {mobileColor}</p>
        <div className="radiobtnDiv">
          <CircleFill color="black" onClick={()=>{handleChange(image1,colors1)}} style={{border:"1px solid black",borderRadius:"50%"}}/>
          <CircleFill color="#1f2923" onClick={()=>{handleChange(image2,colors2)}} style={{border:"1px solid black",borderRadius:"50%"}}/>
          <CircleFill color="silver" onClick={()=>{handleChange(image3,colors3)}} style={{border:"1px solid black",borderRadius:"50%"}}/>
        </div>
        <div className="ram">
        <span onClick={()=>handlePrice(price1)} class="w3-badge w3-white" style={{borderRadius: "15px",fontSize: "12px",  border:`${mobilePrice === price1? "1px solid black" : "1px solid smokewhite" }`, cursor:"pointer"}}>
            256GB
          </span> <span onClick={()=>handlePrice(price2)} class="w3-badge w3-white" style={{borderRadius: "15px",fontSize: "12px", border:`${mobilePrice === price2? "1px solid black" : "1px solid smokewhite" }`, cursor:"pointer"}}>
            512GB
          </span>
        </div>
        <p className="emiDes">From ₹{emi.toFixed(2)}/mo for 24 mos at 14.99% Interest or ₹ {mobilePrice.toFixed(2)}</p>
        <p>
          <span>₹ {(mobilePrice+save).toFixed(2)}</span> <span>Save ₹{save.toFixed(2)}</span>
        </p>
        <button className="buyNow">Buy now</button>
      </div>
    </Main>
  );
};
