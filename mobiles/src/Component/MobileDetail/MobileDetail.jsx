import styled from "styled-components"
import { MobileCurousel } from "./MobileCarousel"
import { ArrowLeftRight,CircleFill,EnvelopeOpenHeart,Archive, Wallet } from "react-bootstrap-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

export const MobileDetail=()=>{

    let colorImage = ["https://images.samsung.com/in/smartphones/galaxy-s22-ultra/buy/S22Ultra_ColorSelection_PhantomBlack_MO.jpg?imwidth=480",
    "https://images.samsung.com/in/smartphones/galaxy-s22-ultra/buy/S22Ultra_ColorSelection_Burgundy_MO.jpg?imwidth=480",
    "https://images.samsung.com/in/smartphones/galaxy-s22-ultra/buy/S22Ultra_ColorSelection_Burgundy_MO.jpg?imwidth=480"];
    let colors = ["black","white","pink"];

    const [imageUrl, setImageUrl] = useState(colorImage[0]);

    const Div = styled.div`
    height: ${({height})=>height};
    width: ${({width})=>width};
    border:  ${({b})=>b};
    border-bottom:  ${({bb})=>bb};
    padding: ${({ph})=>ph};
    border-left : ${({bl})=>bl};
    margin-left: ${({marginLeft})=>marginLeft}; 
    margin-right: ${({marginRight})=>marginRight}; 
    margin-bottom: ${({marginBottom})=>marginBottom}; 
    margin-top: ${({marginTop})=>marginTop}; 
    margin: ${({margin})=>margin}; 
    padding-top: ${({paddingTop})=>paddingTop};
    padding-left: ${({paddingLeft})=>paddingLeft};
    text-align:  ${({textAlign})=>textAlign};
    display: ${({display})=>display};  
    background-color: ${({bc})=>bc};
    border-radius: ${({br})=>br};
    position: ${({pos})=>pos};
    z-index:  ${({z})=>z};
    font-family: ${({fontf})=>fontf};
    overflow:  ${({ov})=>ov};
    &:hover{
        background-color: ${({bch})=>bch};
        color: ${({ch})=>ch};
        border-radius: ${({brh})=>brh};
        padding: ${({ph})=>ph};
        cursor:  ${({cur})=>cur};       
        border-top:  ${({bbh})=>bbh};
        border-bottom:  ${({bbb})=>bbb};
        margin-top: ${({mth})=>mth};   
        padding-bottom: ${({pbh})=>pbh};  
        margin-bottom: ${({mbh})=>mbh}; 
        transition: ${({th})=>th};
        transform: ${({tsh})=>tsh};
    }
    & .exchange{
        font-family: SamsungSharpSans;
        font-size: 15px;
    }
    & .getExchange{
        font-family: samsung400;
        font-size: 13px;
        padding:2%;
        text-align:left;
    }
    & .yesPlease{
        font-family: samsung700;
        font-size: 13px;
        text-align:left;
        margin:auto;
    }
    & .yesPlease~p{
        font-family: samsung400;
        font-size: 11px;
        margin:auto;
    }
    & .noPlease{
        font-family: samsung700;
        font-size: 13px;
        margin:6%;
        float:left;
    }
    & .devicePrice{
        font-family: samsung400;
        font-size: 13px;
        text-align:left;
    }
    & .radiobtnDiv{
      width:60%;
      display:flex;
      margin:auto;
      justify-content:space-evenly;
      cursor: pointer;
      font-family: samsung700;
    font-size: 13px;
    }
    & .radioColor{
        height:25px;
        width:25px;
    }
    & .offers{
        font-family: samsung700;
        font-size: 19px;
    }
    & .linktag{
        text-decoration:none;
        font-family: samsung700;
        font-size: 13px;
        color:black;
        border-bottom:1px solid black;
    }

`
const NewArrival = styled.div`
    text-align:left;
    padding:2%;
    width:50%;
    & p:nth-child(1){
        font-family: samsung700;
        font-size: 17px;
        color:#2189ff;
        padding-top:5px;
        line-height:0%;
    }
    & p:nth-child(2){
        font-family: SamsungSharpSans;
        font-size: 21px;
    }
`

const Price = styled.div`
    text-align:right;
    width:35%;
    padding:1%;
    & p{
        font-family: samsung400;
        font-size: 17px;
    }
    & .amountColor{
        font-family: samsung700;
        font-size: 21px;
        color:#2189ff;
    }
`
    const ButtonDiv = styled.div`
    width:15%;
    font-family: samsung700;
    font-size: 13px;
    margin:auto;
    & button {
        height: 35px;
        width: 150px;
        background-color: #2189ff;
        border-radius: 20px;
        border: transparent;
        color: white;
        font-size: 13px;
        margin-left: 15px;
    }
    & button:hover {
        opacity: 75%;
    }

`

    //change product color
    const handleChange = (image) => {
        setImageUrl(image);
    };

    return(<>
        <div>
        {/**Sticky Navbar 👇*/}
        <Div height={'88px'} width={'100%'} style={{display: "flex",position: 'sticky',backgroundColor:"white", top: '53px',zIndex:"7",width: '100%', borderBottom:"1px solid #eaeaea"}}>
            <NewArrival>
                <p>New Arrival</p>
                <p>Galaxy S22 Ultra</p>
            </NewArrival>
            <Price>
                <p>Price ₹134999.00 From <span className="amountColor">₹6999.92</span>/month at 0% interest for 12 months or <span className="amountColor">₹83999.00</span> with exchange*</p>
            </Price>
            <ButtonDiv>
                <p></p>
                <button>CONTINUE</button>
            </ButtonDiv>
        </Div>
        {/**Curousel */}
        <Div width={'100%'}>
            <MobileCurousel/>
        </Div>
        
        {/** Exchange */}
        <Div height={'180px'} width={'80%'} marginTop={'5%'} marginLeft={'10%'} display={'flex'} bb={"1px solid #eaeaea"}>
        
        {/** Div 1*/}  
        <Div height={'100%'} width={'20%'} textAlign={"left"} marginTop={'2px'}> 
            <ArrowLeftRight size={20}/>
            <p className="exchange">Exchange</p>
        </Div>


                {/** Div 2*/}  

        
        <Div height={'100%'} width={'80%'} marginTop={'2px'}>
            <p className="getExchange">Get up to ₹51000.00 off on exchange of your current phone</p>
        <Div height={'100%'} display={"flex"}>
            <Div cur={"pointer"} height={'30%'} width={'30%'} margin={"1%"} br={"5px"} b={'1px solid #eaeaea'} marginTop={'2px'} display={"flex"} style={{justifyContent:"space-around"}}>
                <p className="yesPlease">Yes, please</p>
                <p>Save up to ₹51000.00</p>
            </Div>
            <Div cur={"pointer"} height={'30%'} width={'30%'} margin={"1%"} br={"5px"} b={'1px solid #eaeaea'} marginTop={'2px'}>
                <p className="noPlease">No, thanks</p>
            </Div>
        </Div>
        </Div>
        
        </Div>
        

        {/** Device */}
        <Div height={'180px'} width={'80%'} marginTop={'2%'} marginLeft={'10%'} display={'flex'} bb={"1px solid #eaeaea"}>
        {/** Div 1*/}  
        
        <Div height={'100%'} width={'20%'} textAlign={"left"} marginTop={'2px'}> 
            <p className="exchange">Device</p>
        </Div>

              {/** Div 2*/}  
 
        <Div height={'100%'} width={'80%'} marginTop={'2px'} >

        <Div cur={"pointer"} height={'40%'} width={'30%'} ph={"1%"} margin={"1%"} br={"5px"} b={'1px solid #eaeaea'} marginTop={'2px'}>
                <p className="yesPlease">Galaxy S22 Ultra</p>
                <p className="devicePrice">From ₹11249.92/month for 12 months or ₹134999.00</p>
        </Div>

        <p className="yesPlease" style={{marginLeft:"2%"}}>Late delivery notice</p>
        <p className="devicePrice" style={{marginLeft:"2%"}}>We are experiencing an all-time high demand. Thus, we expect delays with certain models. We are committed to delivering your order as soon as possible and apologize for any inconvenience caused.
Also, don't worry! Pre-order gifts are still valid to all customers who placed the order within the offer period.</p>
        
        </Div>
        
        </Div>
        
        
        
        {/** Storage */}
        <Div height={'150px'} width={'80%'} marginTop={'2%'} marginLeft={'10%'} display={'flex'} bb={"1px solid #eaeaea"}>
        {/** Div 1*/}        
        <Div height={'100%'} width={'20%'} textAlign={"left"} marginTop={'2px'}> 
            <p className="exchange">Storage</p>
        </Div>

     
        {/** Div 2*/}  
        <Div height={'100%'} width={'80%'} marginTop={'2px'} display={'flex'}>

        <Div cur={"pointer"} height={'50%'} width={'30%'} ph={"1%"} margin={"1%"} br={"5px"} b={'1px solid #eaeaea'} marginTop={'2px'}>
                <p className="yesPlease">256GB | 12GB</p>
                <p className="devicePrice">From ₹11249.92/month for 12 months or ₹134999.00</p>
        </Div>
        <Div cur={"pointer"} height={'50%'} width={'30%'} ph={"1%"} margin={"1%"} br={"5px"} b={'1px solid #eaeaea'} marginTop={'2px'}>
                <p className="yesPlease">512GB | 12GB</p>
                <p className="devicePrice">From ₹11249.92/month for 12 months or ₹134999.00</p>
        </Div>
        
        </Div>
        
        </Div>
        

        
        
        {/** Color */}
        <Div height={'500px'} width={'80%'} marginTop={'2%'} marginLeft={'10%'} display={'flex'} bb={"1px solid #eaeaea"}>
        
        {/** Div 1*/}
        <Div height={'100%'} width={'20%'} textAlign={"left"} marginTop={'2px'}> 
            <p className="exchange">Color</p>
        </Div>

        {/** Div 2*/}        
        <Div height={'100%'} width={'80%'}  marginTop={'2px'} display={'flex'}>

        <Div height={'445px'} width={'445px'}  marginTop={'2px'} style={{borderRight:"1px solid #eaeaea"}}>
            <img src={imageUrl} alt="colorImage" height={"430px"}/>
        </Div>
        
        <div className="radiobtnDiv">
          <CircleFill className="radioColor" color={colors[0]} onClick={()=>{handleChange(colorImage[0])}} style={{border:"1px solid black",borderRadius:"50%"}}/> {colors[0]}
          <CircleFill className="radioColor" color={colors[1] === undefined ? "white" : colors[1]} onClick={()=>{if(colorImage[1] !== undefined) handleChange(colorImage[1])}} style={{border:`${colors[1] === undefined ? "1px solid white":"1px solid black"}`,borderRadius:"50%"}}/>{colors[1]}
          <CircleFill className="radioColor" color={colors[2] === undefined ? "white" : colors[2]} onClick={()=>{if(colorImage[2] !== undefined) handleChange(colorImage[2])}} style={{border:`${colors[2] === undefined ? "1px solid white":"1px solid black"}`,borderRadius:"50%"}}/>{colors[2]}
        </div>
        </Div>
        
        </Div>
        
        {/** Samsung Care+ */}
        <Div height={"240px"} width={'80%'} marginTop={'2%'} marginLeft={'10%'} display={'flex'} bb={"1px solid #eaeaea"}>
        
        {/** Div 1*/}
        <Div height={'100%'} width={'20%'} textAlign={"left"} marginTop={'2px'}> 
            <EnvelopeOpenHeart size={20}/>
            <p className="exchange">Samsung Care+</p>
        </Div>

        {/** Div 2*/}
        <Div height={'100%'} width={'80%'} marginTop={'2px'}>

        <Div height={'50%'} width={'100%'} marginTop={'2px'} display={'flex'}>
            <Div cur={"pointer"} height={'65%'} width={'32%'} margin={"1%"} br={"5px"} b={'1px solid #eaeaea'} marginTop={'2px'} display={"flex"} style={{justifyContent:"space-around"}}>
                <p className="yesPlease" style={{marginLeft:"2%"}}>Comprehensive Protection (2 Years)</p>
                <p>₹9999.00</p>
            </Div>
            <Div cur={"pointer"} height={'65%'} width={'32%'} margin={"1%"} br={"5px"} b={'1px solid #eaeaea'} marginTop={'2px'} display={"flex"} style={{justifyContent:"space-around"}}>
                <p className="yesPlease" style={{marginLeft:"2%"}}>Accidental & Liquid Damage Protection (1 Year)</p>
                <p>₹4799.00</p>
            </Div>
            <Div cur={"pointer"} height={'65%'} width={'32%'} margin={"1%"} br={"5px"} b={'1px solid #eaeaea'} marginTop={'2px'} display={"flex"} style={{justifyContent:"space-around"}}>
                <p className="yesPlease">Screen Protection (1 Year)</p>
                <p>₹3299.00</p>
            </Div>
        
        </Div>
        <Div height={'50%'} width={'80%'} marginTop={'2px'} display={'flex'}>
            <Div cur={"pointer"} height={'65%'} width={'40%'} margin={"1%"} br={"5px"} b={'1px solid #eaeaea'} marginTop={'2px'} display={"flex"} style={{justifyContent:"space-around"}}>
                <p className="yesPlease">Extended Warranty (1 Year)</p>
                <p>₹4999.00</p>
            </Div>
            <Div cur={"pointer"} height={'65%'} width={'40%'} margin={"1%"} br={"5px"} b={'1px solid #eaeaea'} marginTop={'2px'} display={"flex"} style={{justifyContent:"space-around"}}>
                <p className="yesPlease">None</p>
                <p></p>
            </Div>
        
        </Div>
        
        </Div>
        
        </Div>
 
        {/** Offers & Benefits */}
        
        <Div height={"945px"} width={'80%'} br={"5px"} bc={'#F7F7F7'} marginTop={'2%'} marginLeft={'10%'} display={'flex'} bb={"1px solid #eaeaea"}>
        
        {/** Div 1*/}
        <Div height={'100%'} width={'20%'} textAlign={"left"} marginTop={'2px'}> 
            <Archive size={20}/>
            <p className="exchange">Offers & Benefits</p>
        </Div>

        {/** Div 2*/}
        <Div height={'100%'} width={'80%'} b={'1px solid gray'} marginTop={'2px'}>

            {/** Inner div 1 */}
        
            <Div height={'150px'} width={'100%'} b={'1px solid red'} display={'flex'}  marginTop={'30px'}>
            {/** Div 1*/}  
            
            <Div height={'100%'} width={'20%'} b={'1px solid orange'} marginTop={'2px'} ph={"4%"}> 

                <Wallet size={80}/>
            
            </Div>

                {/** Div 2*/}  
    
            <Div height={'100%'} width={'80%'} b={'1px solid gray'} marginTop={'2px'} ph={"2%"} textAlign={"left"}>

                <p className="offers">No Cost EMI starts from ₹ 11132.60/ month.</p>
                <p className="offers">Standard EMI starts from ₹ 6303.21/ month.</p>
                <Link className="linktag" to={"/learnmore"}>Learn More</Link>
            </Div>
            
            </Div>
        
        
        
        </Div>
        
        </Div>
        

        {/** Samsung.com Advantage */}
        <Div height={'591px'} width={'1080px'} b={'1px solid red'} marginLeft={'10%'} display={'flex'} bc={'#F7F6F6'} >
        
        {/** Div 1*/}
        <Div height={'100%'} width={'20%'} b={'1px solid orange'} marginTop={'2px'}>Samsung.com Advantage</Div>

        {/** Div 2*/}
        <Div height={'100%'} width={'80%'} b={'1px solid gray'} marginTop={'2px'}>

            {/** Inner div 1 */}
        
            <Div height={'150px'} width={'100%'} b={'1px solid red'} display={'flex'}  marginTop={'30px'}>
            {/** Div 1*/}  
            
            <Div height={'100%'} width={'20%'} b={'1px solid orange'} marginTop={'2px'}> </Div>

                {/** Div 2*/}  
    
            <Div height={'100%'} width={'80%'} b={'1px solid gray'} marginTop={'2px'} display={'flex'}>

            
            </Div>
            
            </Div>
            
            {/** Inner div 2*/}
            <Div height={'150px'} width={'100%'} b={'1px solid red'} display={'flex'} marginTop={'30px'} >
            {/** Div 1*/}  
            
            <Div height={'100%'} width={'20%'} b={'1px solid orange'} marginTop={'2px'}> </Div>

                {/** Div 2*/}  
    
            <Div height={'100%'} width={'80%'} b={'1px solid gray'} marginTop={'2px'} display={'flex'}>

            
            </Div>
            
            </Div>

            {/** Inner div 3 */}
            <Div height={'150px'} width={'100%'} b={'1px solid red'} display={'flex'}  marginTop={'30px'}>
            {/** Div 1*/}  
            
            <Div height={'100%'} width={'20%'} b={'1px solid orange'} marginTop={'2px'}> </Div>

                {/** Div 2*/}  
    
            <Div height={'100%'} width={'80%'} b={'1px solid gray'} marginTop={'2px'} display={'flex'}>

            
            </Div>
            
            </Div>
        
        
        </Div>
        
        </Div>
        

        {/** Galaxy Z Flip3 5G And Total*/}
        <Div height={'400px'} width={'80%'} b={'1px solid red'} marginLeft={'10%'} marginTop = {'70px'} bc={'#F7F6F6'}  >
        
        {/** Div 1*/}        
        <Div height={'170px'} width={'100%'} b={'1px solid orange'} display = {'flex'}> 
        
        <Div height={'100%'} width={'55%'} b={'1px solid blue'} ></Div>
        <Div height={'100%'} width={'45%'} b={'1px solid red'} >Galaxy Z Flip3 5G</Div>
        
        </Div>

        {/** Div 2*/}
        <Div height={'220px'} width={'100%'} b={'1px solid gray'} marginTop={'2px'} display = {'flex'}>
        
        <Div height={'100%'} width={'55%'} b={'1px solid blue'} ></Div>
        <Div height={'100%'} width={'45%'} b={'1px solid red'} >Total</Div>
        
        
        
        </Div>
        </Div>
  
        
        {/** bottom  Space */}
        <Div height={'186px'} width={'80%'}></Div>
        </div>
    </>)
}