import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

export const Tv = () => {
  //styled component for Navbar
  const Main = styled(Carousel.Caption)`
    font-family: samsung400;
    color: black;
    margin-left: 35%;
    text-align: left;
    top: 30px;
    width: 50%;
    & h1 {
      font-family: SamsungSharpSans;
      font-size: 46px;
    }
    & a {
      font-weight: 700;
      font-size: 13px;
      text-decoration: none;
      color: black;
    }
    & a:hover {
      border-bottom: 2px solid white;
    }
    & Button {
      height: 35px;
      width: 120px;
      background-color: black;
      border-radius: 20px;
      border: transparent;
      color: white;
      font-weight: 700;
      font-size: 13px;
      margin-left: 15px;
    }
    & Button:hover {
      opacity: 75%;
    }
    
  `;
  const SubMain = styled(Carousel)`
  & .carousel-indicators {
    bottom: 610px;
}

    & .carousel-control-prev-icon,
    .carousel-control-next-icon {
      padding: 10%;
      border-radius: 50%;
      background-color: transparent;
      color: transparent;
    }
    & .carousel-indicators > Button {

      width: 5%;
      background-color: gray;
      height: 2px;
    }
    & .carousel-indicators{
      [data-bs-target]{
      backgroundColor:blue;
    }
    }
  `;






  return (
    <div>
      <SubMain >


    
        <Carousel.Item   >
        <img
        className="d-block w-100"
        src="https://images.samsung.com/is/image/samsung/assets/in/p6_gro1/p6_initial_home/5980_Samsung_QLED-4K-samsung.com-banners_07-9-2020_1440X810.jpg?$1440_810_JPG$"
        alt="Second slide"
      />
          <Main  style={{ margin: "39% 20% 20% 25%"  }}>
            <h1 style={{ fontWeight:'bold' }}>
            A billion shades
            </h1>
            
            <p style={{ fontFamily:'sans-serif', lineHeight:"20px",marginLeft:'24%' }} ></p>
            <Link to={"/"} style={{ marginLeft:'7%' }}  >Learn More</Link>
            <button  >  Buy Now</button>
          </Main>
        </Carousel.Item>



        <Carousel.Item   >
        <img
        className="d-block w-100"
        src="https://images.samsung.com/is/image/samsung/assets/in/p6_gro1/p6_initial_home/4896-Serif-Banner-P6_1440X810.jpg?$1440_810_JPG$"
        alt="Second slide"
      />
      <Main  style={{ margin: "34% 20% 20% 25%"  }}> 
      <h1  style={{ fontWeight:'bold',color:'white', fontSize:'60px'  }}>
      The Serif
      </h1>
      <p  style={{ color:'white', marginLeft:'5%',  fontSize:'20px'  }}>Unconditionally beautiful</p>
      <Link to={"/"} style={{ marginLeft:'3%' ,color:'white',borderBottom: '2px solid white' }}  >Learn More</Link>
      <button  style={{ backgroundColor:'white' ,color:'black' ,marginLeft:'3%' } } >Buy Now </button>
    </Main>
  </Carousel.Item>


  <Carousel.Item   >
      <img
      className="d-block w-100"
      src="https://images.samsung.com/is/image/samsung/assets/in/8004_Neo-QLED-Home-Page-Banners_1440x810.jpg?$1440_810_JPG$"
      alt="Second slide"
    />
        <Main  style={{ margin: "39% 0% 10% 20%"  }}> 
          <h1  style={{ fontWeight:'bold',color:'white', fontSize:'50px'  }}>
          Greatness never ends
          </h1>
          <button  style={{ backgroundColor:'white' ,color:'black' ,marginLeft:'24%' } } >Buy Now </button>
        </Main>
      </Carousel.Item>




        <Carousel.Item   >
        <img
        className="d-block w-100"
        src="https://images.samsung.com/is/image/samsung/assets/in/home/in-613/TV-Product-Marketing-PC.png?$1440_810_JPG$"
        alt="Second slide"
      />
          <Main  style={{ margin: "39% 20% 20% 11%"  }}>
            <h1 style={{ fontWeight:'bold' }}>
            The Frame | Make your own TV
            </h1>
            
            <p style={{ fontFamily:'sans-serif', lineHeight:"20px",marginLeft:'5%' }} ></p>
            <Link to={"/"} style={{ marginLeft:'35%'  }}  ></Link>
            <button  >  Buy Now</button>
          </Main>
        </Carousel.Item>







        <Carousel.Item   >
        <img
        className="d-block w-100"
        src="https://images.samsung.com/is/image/samsung/assets/in/p6_gro1/p6_initial_home/5198_NEW20G_4K20UHD20KV20Banner_1440x810.png?$1440_810_JPG$"
        alt="Second slide"
      />
          <Main  style={{ margin: "39% 20% 20% 25%"  }}>
            <h1 style={{ fontWeight:'bold' }}>
            Crystal 4K UHD
            </h1>
            
            <p style={{ fontFamily:'sans-serif', lineHeight:"20px",marginLeft:'5%' }} >Crystal Definition or Nothing</p>
            <Link to={"/"} style={{ marginLeft:'8%' }}  >Learn More</Link>
            <button  >  Buy Now</button>
          </Main>
        </Carousel.Item>






      </SubMain>
    </div>
  );


  


};

