import {Routes, Route} from 'react-router-dom'
import { Home } from '../LandingPage/Home/Home'
import { Payment } from '../Payment/Payment'
import { LoginSingUp } from '../LoginSingup/LoginSingup'
import { SamgSungAccount } from '../LoginSingup/SamgSungAccount'

export const Rout = () =>{

    return(<>
        
        <Routes>
        
        <Route path='/' element={<Home/>} />
        <Route path='/loginpage' element={<LoginSingUp/>} />
        <Route path='/SamsungAccount' element={<SamgSungAccount/>} />
        <Route path='/payment' element={<Payment/>} />
        </Routes>        
        
        
        
        </>)
}