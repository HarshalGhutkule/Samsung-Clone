import { Link } from "react-router-dom";
import styled from "styled-components";
import { FunnelFill } from "react-bootstrap-icons";

export const MobileListNavbar = () => {
    
  //styled component for Navbar
  const Main = styled.div`
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
    }
  `;
  return (
    <Main>
        
      <Link to={"/"}><FunnelFill size={20} color="black"/>Filters</Link>
      <Link to={"/"}>Results</Link>
      <Link to={"/"}>Reset Filters</Link>
      <p>Price : High to Low</p>
      <p>Price : Low to High</p>
    </Main>
  );
};
