import React, { useState } from 'react';
import  './colorbox.scss'

Colorbox.propTypes = {
    
};
function getRandomcolor(){
   const Colorlist = ['deeppink','green','blue','yellow','black']
   /**
    * Math.random: lay con so ngau nhien tu 0 -> nho hon 1 
    * Nhung colorlist di tu 0->4 nen chung ta can phai cho Math.random nay di tu 0 -> nho hon 5 moi co the lay het cac gia tri cua mang nen (Math.radom *5)
    * Math.trunc: ham tra ve ham nguyen khong lay phan du.vi du: Math.trunc(4.3) => kq = 4
    */
   let randomIndex = Math.trunc(Math.random()*5)
   return Colorlist[randomIndex]
    
}
function Colorbox() {
    // 
    
    const [color,setcolor] = useState(()=>{
        const initColor = localStorage.getItem('color_box') || 'deeppink' 
        // doan code o tren co y nghia: neu localStorage ma no null thi no se lay gia tri mac dinh la "deeppink" nguoc lai khi no co gia tri thi no se lay trong 
        //localStorage
        console.log(initColor)
        return initColor
    })
    function handleClick(){
    //get random color -> set color
    const newColor = getRandomcolor()
    setcolor(newColor)
    localStorage.setItem('color_box',newColor)
    }
    return (
        <div className="dd" style={{backgroundColor:color}}
        onClick={handleClick}
        >
            colorbox
        </div>
    );
}

export default Colorbox;