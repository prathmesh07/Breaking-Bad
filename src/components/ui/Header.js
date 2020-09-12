import React,{useEffect} from 'react'
import logo from '../../img/logo.png'
import 'aos/dist/aos.css'; 
 
import AOS from 'aos';

const Header = () => {

    useEffect(()=>{
        AOS.init({duration: 2000});
      }, []);

  return (
    <header data-aos="flip-up" className='center'>
      <img src={logo} alt='' />
    </header>
  )
}

export default Header
