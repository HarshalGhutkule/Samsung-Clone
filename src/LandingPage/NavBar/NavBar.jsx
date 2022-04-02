import { NavDiv, Div, P } from "../../Style/Style"
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {useNavigate} from 'react-router-dom'
export const Navbar = () =>{

    const navigate = useNavigate() 

    return(<>
        
        <NavDiv >
        
       <h3 style={{
           padding:'10px',
           marginTop:'7px',
           fontFamily:'SamsungOne, arial, sans-serif',
           fontWeight:'bold' ,
           cursor: 'pointer',
       }} 
       onClick={()=>{
        navigate('/')
    }}>SAMSUNG</h3>
        

        <Div height={'100%'} width={'38%'} marginLeft={'1%'} display={'flex'} >
    
         <P marginTop={'25px'}  cur={'pointer'} fontWeight={'bold'} fontSize={'14px'} bch={'black'} ch={'white'} ph={'6px 6px'} brh={'36%'}  > Mobile</P>
         <P marginTop={'25px'} cur={'pointer'}  fontWeight={'bold'} fontSize={'14px'}  bch={'black'} ch={'white'} ph={'6px 6px'} brh={'36%'} > TV & AV</P>
         <P  marginTop={'25px'}  cur={'pointer'}  fontWeight={'bold'} fontSize={'14px'}  bch={'black'} ch={'white'} ph={'6px 6px'} brh={'36%'} > Home Appliances</P>
         <P marginTop={'25px'}  cur={'pointer'} fontWeight={'bold'} fontSize={'14px'}  bch={'black'} ch={'white'} ph={'6px 6px'} brh={'36%'} > Laptops & Monitors</P>
         <P  marginTop={'25px'}  cur={'pointer'} fontWeight={'bold'} fontSize={'14px'}  bch={'black'} ch={'white'} ph={'6px 6px'} brh={'36%'} > Display</P>
        
        
        </Div>
        
        <Div height={'100%'} width={'20%'} marginRight={'-7%'} display={'flex'}>
        
        
        <P marginTop={'25px'} cur={'pointer'}  fontWeight={'bold'} fontSize={'14px'} bch={'black'} ch={'white'} ph={'6px 6px'} brh={'36%'} > Explore</P>
        <P marginTop={'25px'} cur={'pointer'}  fontWeight={'bold'} fontSize={'14px'} bch={'black'} ch={'white'} ph={'6px 6px'} brh={'36%'}  > Support </P>
        <P  marginTop={'25px'}  cur={'pointer'}  fontWeight={'bold'} fontSize={'14px'}  bch={'black'} ch={'white'} ph={'6px 6px'} brh={'36%'} > For Bussiness</P>

        </Div>
            {/** Icons */}
        <Div height={'100%'} width={'10%'} marginRight={'1%'} display={'flex'}> 
        <P  marginTop={'25px'}  cur={'pointer'}  fontWeight={'bold'} fontSize={'14px'}  > <SearchOutlinedIcon/></P>
        <P  marginTop={'25px'}  cur={'pointer'}  fontWeight={'bold'} fontSize={'14px'}  > <ShoppingCartOutlinedIcon/></P>
        <P  marginTop={'25px'}  cur={'pointer'}  fontWeight={'bold'} fontSize={'14px'} onClick={()=>{
            navigate('/loginpage')
        }} > <PersonOutlineOutlinedIcon/></P>
        </Div>
        

        </NavDiv>
        
        
        </>)
}