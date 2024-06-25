import React from "react";
import "./Header.css"
import logo from "../imgs/1.png"
const Header=()=>{
    const navs=[
      {
        id:"Home",
        ref:"/",
      },
      {
        id:"Courses",
        ref:"/Courses",
      },
      {
        id:"Placement",
        ref:"/Placement"
      },
      {
        id:"Campus",
        ref:"/Campus"
      },{
        id:"Photos",
        ref:"/Photos"
      },{
        id:"About",
        ref:"/About",
      },
      {
        id:"Contact",
        ref:"/Contact"
      }
    ]
    return(
        <>
      <div className=' header h-[205px]'>
      <div className=' h-fit w-full flex items-center p-3 pb-1'>
        <img src={logo} alt="#" className=' w-[150px] h-[]'/>
        <div className=' ml-4'>
          <div className=' text-4xl text-[#19447D] font-semibold leading-[58px] font-[PMingLiU-ExtB]'>Calcutta Institute Of Engineering and Managenment</div>
          <div className=' underline text-md font-[Poppins] font-bold'>24, 1A, Chandi Ghosh Rd, Ashok Nagar, Tollygunge, Kolkata, West Bengal 700040</div>
        </div>
      </div>
      <div className='navigation flex items-center justify-between px-12 font-mono text-lg'>
      <div className=' flex pb-3  gap-3 w-fit h-fit'>
        {
          navs.map((item)=>{
            return(
              <>
              <a href={item.ref} className='navBut px-3 rounded'>{item.id}</a>
              </>
            )
          })
        }
      </div>
      <div className='helpLine text-[#85373D]'>Helpline No. :+91 7605027821/26/27/30 </div>
      </div>
      </div>
      <hr className=' border-[2px] ml-1 mr-1 border-blue-950'/>
      </>
    )
  }
  export default Header