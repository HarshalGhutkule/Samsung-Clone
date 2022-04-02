import { ReactCurousel } from "../Slide/Slide"
import { Explore } from "../Explore/Explore"
import { Navbar } from "../NavBar/NavBar"
import { Semifooter } from '../SemiFooter/SemiFooter'
import {Footer} from '../Footer/Footer'
import { WhatsNew } from "../MonthPick/MonthPick"
import { Mobile } from "../Mobile/Mobile"
import { Tv } from "../TVandAV/TV"
import { HomeAppliances } from "../HomeAppliance/HomeAppliances"

export const Home = () =>{


    return(<>
        
        <Navbar/>
        <ReactCurousel/>
        <h2 style={{
            margin:'130px 38.8% -200px',
            fontFamily:'SamsungSharpSans',
            fontSize:'36px',
            fontWeight:'bold',
            lineHeight:'44px',
            fontFamily:'samsung700'
            
        }}>This Month's Picks</h2>
        <WhatsNew/>
        <h1 style={{
            margin:'70px 0% 20px',
            fontSize:'36px',
            fontFamily:'samsung700',
            lineHeight:'44px',
            textAlign:'center',
            
        }}>Mobile </h1>
        <Mobile/>
        <h1 style={{
            margin:'70px 0% 20px',
            fontFamily:'SamsungSharpSans',
            fontSize:'36px',
            fontWeight:'bold',
            lineHeight:'44px',
            fontFamily:'revert',
            textAlign:'center',
            position: 'absolute',
            color:'cream',
            left: '45%',
            zIndex: '1'
        }}>TV & AV</h1>
        <Tv/>

        <h1 style={{
            margin:'70px -4.5% 20px',
            fontFamily:'SamsungSharpSans',
            fontSize:'36px',
            fontWeight:'bold',
            lineHeight:'44px',
            fontFamily:'revert',
            textAlign:'center',
            position: 'absolute',
            color:'cream',
            left: '45%',
            zIndex: '1'
        }}>Home Appliances</h1>
        <HomeAppliances/>
        <Explore/>

        <Semifooter/>
        <Footer/>
        </>)
}