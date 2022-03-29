
import { Link } from "react-router-dom";
import styled from "styled-components";

//styled component for Navbar
const Main = styled.div`
  background-color:#f7f7f7;
  height:53px;
  font-family:samsung400;
  padding-left:25%;
  padding-right:25%;
  display: flex;
  justify-content:space-around;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 7;
  border-top:1px solid #c6c6c6;
  border-bottom:1px solid #c6c6c6;
  
  & a{
    text-decoration:none;
    padding:2%;
    font-size:13px;
    color:black;
  }
`;



export const Navbar = ()=>{
    return <Main>
        <Link to={"/"}>Galaxy Z</Link>
        <Link to={"/"}>Galaxy S</Link>
        <Link to={"/"}>Galaxy Note</Link>
        <Link to={"/"}>Galaxy A</Link>
        <Link to={"/"}>Galaxy M</Link>
        <Link to={"/"}>Compare</Link>
        <Link to={"/"}>Accessories</Link>
    </Main>
}