import { Link } from "react-router-dom";
import styled from "styled-components";
import {useNavigate} from 'react-router-dom'

export const ImageLoaded = ({image,title,description,top,color,margin}) => {
  const Main = styled.div`
    width:50%;
    font-family: samsung400;
    color: ${color};
    margin-left: ${margin};
    text-align: left;
    padding-top:10%;
    /* position:absolute;
    top: ${top}; */

    & h1 {
      font-family: SamsungSharpSans;
      font-size: 46px;
    }
    & button {
      height: 35px;
      width: 100px;
      background-color: ${color};
      border-radius: 20px;
      border: transparent;
      color: ${color === "black" ? "white" : "black"};
      font-weight: 700;
      font-size: 13px;
      margin-left: 15px;
    }
    & button:hover {
      opacity: 75%;
    }
  `;

  const SubMain = styled.div`
    height:640px;
    background-image:url(${image});
  `;

  const navigate = useNavigate();

  return (
    <div>
      <SubMain>
        {/* <img 
          src={image}
          alt={title}
          width={"100%"}
        /> */}
        <Main>
          <h1>{title}</h1>
          <br />
          <p>{description}</p>
          <br />
          <button onClick={()=>{
        navigate('/mobiles')
    }}>See all</button>
        </Main>
      </SubMain>
    </div>
  );
};
