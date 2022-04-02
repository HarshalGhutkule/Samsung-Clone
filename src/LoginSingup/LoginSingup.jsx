import { Navbar } from "../LandingPage/NavBar/NavBar"
import { Footer } from "../LandingPage/Footer/Footer"
import { Div,P,Input,Button } from "../Style/Style" 
import { useNavigate,Link } from "react-router-dom"
import { useRef, useState } from "react"

export const LoginSingUp = () =>{
const [email,setemail] = useState('')
const [password,setpass] = useState('')
const navigate = useNavigate()
const ref = useRef()

function r(){
        ref.current = {
                email:email,
                password:password
        }
        setpass('')
        setemail('')
        l()
}
        
const l =()=>{
 // console.log(data)
 const data = JSON.stringify(ref.current);

 fetch("http://localhost:4500/login", {
   method: "POST",
   body: data,
   headers: {
     "Content-Type": "application/json",
   },
 }).then(function (res) {
   res.json().then(function (res) {
     if (res.Status == "Done") {
       window.localStorage.setItem('user_token', JSON.stringify(res.token));
       alert(`Login Succesful`);
       navigate('/')
     } else {
       alert("Wrong Credentials");
     }
   });
 });
}
        
       
      
return(<>
        
        <Navbar/>

        <Div bc={'#F7F7F7'} height={'280px'} width={'100%'}display={'flex'} paddingTop={'0px'}>
        
                <Div bc={'#F7F7F7'} height={'240px'} width={'45%'}>
                
                <P fontWeight={'bold'} fontSize={'x-large'} marginLeft = {'27%'} marginTop={'5px'} >Sign into Samsung Account</P>
                
                <P marginLeft = {'4%'} marginRight = {'4%'}  textAlign={'center'}>Please login with your Samsung account so that you can view and track your orders.</P>
        

                
                <Button cur={'pointer'}  b={'0px'} br={'20px '} padding={'10px 110px'} bc={'#2089FE'} marginLeft={'125px'} marginTop={'0px'} c={'white'} onClick={()=>{
                        navigate('/SamsungAccount')
                }} >Sign in with Samsung</Button>


                <P textAlign={'center'} marginTop={'10px'}  fontSize={'small'} >Don't have an account? <P cur={'pointer'} c="#2089FE" td={'underline'}>Sign up here</P></P>        
                </Div>


                <Div  bl={'1px dotted #757575'} marginLeft={'40px'}></Div>

                
                <Div bc={'#F7F7F7'} height={'240px'} width={'45%'} >
                

                <P fontWeight={'bold'} fontSize={'x-large'} marginLeft = {'45%'} marginTop={'10px'} >Login</P>
                
                
                <Div height={'20%'} width={'40%'}  marginTop={'6px'}   marginLeft={'200px'}  >  

                <input placeholder={'Email/Mobile number'} type={'text'} value={email} onChange={(e)=>setemail(e.target.value)} style={{
                        border:'0px',
                        width:'100%' ,
                        borderBottom:'1px solid',
                        backgroundColor:'white',
                        marginTop:'20px',
                        color:'black' ,
                        height:'85%',
                        textAlign:'left',
                        fontSize:'large',
                }}/>

                </Div>
                


                <Div height={'20%'} width={'40%'}  marginTop={'6px'}   marginLeft={'200px'}  >  

                <input placeholder={'Password'} value={password} onChange={(e)=>setpass(e.target.value)} type={'password'}  style={{
                        border:'0px',
                        width:'100%' ,
                        borderBottom:'1px solid',
                        backgroundColor:'white',
                        marginTop:'20px',
                        color:'black' ,
                        height:'85%',
                        textAlign:'left',
                        fontSize:'large',
                }}/>

                </Div>
                
                <button onClick={()=>{
                        r()    
                }} style={{
                        cursor:'pointer',
                        border:'0px',
                        borderRadius:'20px',
                        padding:'10px 110px' ,
                        backgroundColor:'black',
                        marginLeft:'200px',
                        marginTop:'30px',
                        color:'white' ,
                }}>Login</button>


                </Div>
        
        </Div>

        <Footer/>
        
        </>)
}