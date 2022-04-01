import styled from "styled-components"
import { MobileCurousel } from "./MobileCarousel"

export const MobileDetail=()=>{

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
`

    return(<>
        <div>


        {/**Sticky Navbar 👇*/}
        <Div height={'88px'} width={'100%'} b={'1px solid red'} style={{position: 'fixed',top: '0',backgroundColor:'red',width: '100%'}}>
        NavBar
        </Div>
        

        {/**Don't remove marginTop from this div 👇 */}
        <Div height={'47px'} width={'100%'} b={'1px solid gray'} marginTop={'90px'} display={'flex'}>
        Semi NavBar
        <Div height={'47px'} width={'13%'} b={'1px solid blue'} ></Div>
        <Div height={'47px'} width={'13%'} b={'1px solid blue'} ></Div>
        <Div height={'47px'} width={'13%'} b={'1px solid blue'} ></Div>
        <Div height={'47px'} width={'13%'} b={'1px solid blue'} ></Div>
        
        </Div>


        {/**Curousel */}
        <Div height={'600px'} width={'100%'} b={'1px solid green'} marginTop={'2px'}>
            <MobileCurousel/>
        </Div>
        



        {/** Exchange */}
        <Div height={'226px'} width={'80%'} b={'1px solid red'} marginLeft={'10%'} display={'flex'} >
        
        {/** Div 1*/}  
        <Div height={'100%'} width={'20%'} b={'1px solid orange'} marginTop={'2px'}> Exchange</Div>


                {/** Div 2*/}  

        
        <Div height={'100%'} width={'80%'} b={'1px solid gray'} marginTop={'2px'} display={'flex'}>

        <Div height={'30%'} width={'40%'} b={'1px solid gray'} marginTop={'2px'}></Div>
        <Div height={'30%'} width={'40%'} b={'1px solid gray'} marginTop={'2px'}></Div>
        
        </Div>
        
        </Div>
        

        {/** Device */}
        <Div height={'226px'} width={'80%'} b={'1px solid red'} marginLeft={'10%'} display={'flex'} >
        {/** Div 1*/}  
        
        <Div height={'100%'} width={'20%'} b={'1px solid orange'} marginTop={'2px'}> Device</Div>

              {/** Div 2*/}  
 
        <Div height={'100%'} width={'80%'} b={'1px solid gray'} marginTop={'2px'} display={'flex'}>

        <Div height={'75px'} width={'218px'} b={'1px solid gray'} marginTop={'5%'}></Div>
        
        </Div>
        
        </Div>
        
        
        
        {/** Storage */}
        <Div height={'186px'} width={'80%'} b={'1px solid red'} marginLeft={'10%'} display={'flex'} >
        {/** Div 1*/}        
        <Div height={'100%'} width={'20%'} b={'1px solid orange'} marginTop={'2px'}> Storage</Div>

     
        {/** Div 2*/}  
        <Div height={'100%'} width={'80%'} b={'1px solid gray'} marginTop={'2px'} display={'flex'}>

        <Div height={'75px'} width={'218px'} b={'1px solid gray'} marginTop={'5%'}></Div>
        <Div height={'75px'} width={'218px'} b={'1px solid gray'} marginTop={'5%'}></Div>
        
        </Div>
        
        </Div>
        

        
        
        {/** Color */}
        <Div height={'505px'} width={'80%'} b={'1px solid red'} marginLeft={'10%'} display={'flex'} >
        
        {/** Div 1*/}
        <Div height={'100%'} width={'20%'} b={'1px solid orange'} marginTop={'2px'}>Color </Div>

        {/** Div 2*/}        
        <Div height={'100%'} width={'80%'} b={'1px solid gray'} marginTop={'2px'} display={'flex'}>

        <Div height={'445px'} width={'445px'} b={'1px solid gray'} marginTop={'2px'}></Div>
        <Div height={'445px'} width={'445px'} b={'1px solid gray'} marginTop={'2px'}></Div>
        
        </Div>
        
        </Div>
        

        {/** Delivery Details */}
        <Div height={'157px'} width={'80%'} b={'1px solid red'} marginLeft={'10%'} display={'flex'} >
        
        {/** Div 1*/}        
        <Div height={'100%'} width={'20%'} b={'1px solid orange'} marginTop={'2px'}> Delivery Details
        </Div>

        {/** Div 2*/}
        <Div height={'100%'} width={'80%'} b={'1px solid gray'} marginTop={'2px'} display={'flex'}>

        <Div height={'75px'} width={'100%'} b={'1px solid gray'} marginTop={'3%'}></Div>
        
        </Div>
        
        </Div>
        
        {/** Samsung Care+ */}
        <Div height={'290px'} width={'1080px'} b={'1px solid red'} marginLeft={'10%'} display={'flex'} >
        
        {/** Div 1*/}
        <Div height={'100%'} width={'20%'} b={'1px solid orange'} marginTop={'2px'}> Samsung Care+</Div>

        {/** Div 2*/}
        <Div height={'100%'} width={'80%'} b={'1px solid gray'} marginTop={'2px'}>

        <Div height={'111px'} width={'100%'} b={'1px solid gray'} marginTop={'5%'} display={'flex'}>
        <Div height={'111px'} width={'281px'} marginRight={'10px'} b={'1px solid gray'}></Div>
        <Div height={'111px'} width={'281px'} marginRight={'10px'} b={'1px solid gray'}></Div>
        <Div height={'111px'} width={'281px'} marginRight={'10px'} b={'1px solid gray'}></Div>
        
        </Div>
        <Div height={'75px'} width={'100%'} b={'1px solid gray'} marginTop={'1%'} display={'flex'}>
        <Div height={'75px'} width={'275px'} marginRight={'10px'} b={'1px solid gray'}></Div>
        <Div height={'75px'} width={'275px'} marginRight={'10px'} b={'1px solid gray'}></Div>
        </Div>
        
        </Div>
        
        </Div>
        

        {/** Samsung Finance+ EMI */}
        <Div height={'157px'} width={'80%'} b={'1px solid red'} marginLeft={'10%'} display={'flex'} >
        

        {/** Div 1*/}        
        <Div height={'100%'} width={'20%'} b={'1px solid orange'} marginTop={'2px'}>Samsung Finance+ EMI
        </Div>

        {/** Div 2*/}
        <Div height={'100%'} width={'80%'} b={'1px solid gray'} marginTop={'2px'} display={'flex'}>

        
        </Div>
        
        </Div>
 
        {/** Offers & Benefits */}
        <Div height={'945px'} width={'1080px'} b={'1px solid red'} marginLeft={'10%'} display={'flex'} bc={'#F7F6F6'}   >
        
        {/** Div 1*/}
        <Div height={'100%'} width={'20%'} b={'1px solid orange'} marginTop={'2px'}>Offers & Benefit</Div>

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
            
            {/** Inner div 4*/}
            <Div height={'150px'} width={'100%'} b={'1px solid red'} display={'flex'} marginTop={'30px'} >
            {/** Div 1*/}  
            
            <Div height={'100%'} width={'20%'} b={'1px solid orange'} marginTop={'2px'}> </Div>

                {/** Div 2*/}  
    
            <Div height={'100%'} width={'80%'} b={'1px solid gray'} marginTop={'2px'} display={'flex'}>

            
            </Div>
            
            </Div>
            
            
            {/** Inner div 5 */}
            <Div height={'150px'} width={'100%'} b={'1px solid red'} display={'flex'} marginTop={'30px'} >
            {/** Div 1*/}  
            
            <Div height={'100%'} width={'20%'} b={'1px solid orange'} marginTop={'2px'}> </Div>

                {/** Div 2*/}  
    
            <Div height={'100%'} width={'80%'} b={'1px solid gray'} marginTop={'2px'} display={'flex'}>

            
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