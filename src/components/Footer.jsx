import React from 'react'
import "./footer.css"
import { SectionWrapper } from "../hoc";

const Footer = () => {
  return (
    <>

    <div className='mt-20 flex flex-col'>
        
    <footer class="new_footer_top bg_color">
    <div class="footer_bg">
        <div class="footer_bg_one"></div>
        <div class="footer_bg_two"></div>
    </div>
   
</footer>
<div><p >© ocpl ... 2023 All rights reserved.</p></div>
</div>
</>

  )
}

export default SectionWrapper(Footer,"");