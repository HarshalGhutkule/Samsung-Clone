

import styled from "styled-components";

//styled component for Navbar
const Main = styled.div`
  
  & div:nth-child(1){
      height:150px;
      border:1px solid purple;
  }
  & div h1{
      font-family:SamsungSharpSans;
      font-size:36px;
      padding:5%;
  }
  & div:nth-child(2){
      height:525px;
      display:grid;
      grid-template-columns: 46% 24% 24%;
      grid-template-rows: 250px 250px;
      grid-template-areas:
        'a b c'
        'a d e';
      border:1px solid purple;
  }
  & div:nth-child(2) div{
      background-color:#f4f4f4;
      border-radius:10px;
  }
  & div:nth-child(2) .mainbox{
    grid-area: a;
    border:1px solid red;
  }
  & div:nth-child(2) .box1{
    grid-area: b;
    border:1px solid red;
  }
  & div:nth-child(2) .box2{
    grid-area: c;
    border:1px solid red;
  }
  & div:nth-child(2) .box3{
    grid-area: d;
    border:1px solid red;
  }
  & div:nth-child(2) .box4{
    grid-area: e;
    border:1px solid red;
  }
`;


export const WhatsNew = ()=>{
    return <Main>
        <div>
            <h1>
                What's New
            </h1>
        </div>
        <div>
            <div className="mainbox"></div>
            <div className="box1"></div>
            <div className="box2"></div>
            <div className="box3"></div>
            <div className="box4"></div>
        </div>
    </Main>
}