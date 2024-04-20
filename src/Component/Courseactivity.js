import React from 'react'
import './Courseactivity.css'
import ProgressBar from 'react-bootstrap/ProgressBar';
export default function Courseactivity() {
  return (
    <div className='rf'>

        <div className='r15'>
          

       <div className='mt15'><h3>Course Activity</h3>

    
       <b className='text-primary'>june 28th, 2024</b>
       <h5 className='mt-5 text-info' >Courses <img src='left.png'className='cur' height="30px"></img> <img src='right.png' className='cur'  height="29.5px"></img>
      
        </h5>
       </div>
       <div >
        <div >
<img src='plus1.png' className='gt' height="60px"></img></div>



<img src='onoff.png' className='mg' height="20px"></img>
       </div>
       </div>

<div >
    <div className='blue ml-5 mt-4'>
    <div class="container">
    <div class="row">
      <div class="col-2"> <img src='thanks.png ' className='thanks' height="55"></img></div>
      <div class="col-6 mt-2 text-white"><h6>How to grow your feacbook page <p className='fontsmall mt-2'>Follow these easy step and simple</p></h6></div>
      <div class="col-4"><div className='first1 mt-2 ml-4'><h4>12</h4><p className='text-white font-size: 0.7rem'>Enrolled</p></div></div>
      <div class="col-2"></div>
  <div class="col-6"> <ProgressBar className='progresingbar' now={20} /></div>
  
  <div class="col-4"><img src='i2.png' height="13" width="70"></img></div>
    </div>
  </div>
  
               </div>
    </div>


    <div className='purple ml-5 mt-2'>
    <div class="container">
    <div class="row">
      <div class="col-2"> <img src='magnet.png ' className='thanks' height="50"></img></div>
      <div class="col-6 mt-2 text-white"><h6>How to grow your feacbook page <p className='fontsmall mt-2'>Follow these easy step and simple</p></h6></div>
      <div class="col-4"><div className='first1 mt-2 ml-4'><h4>7</h4><p className='text-white font-size: 0.7rem'>Enrolled</p></div></div>
      <div class="col-2"></div>
  <div class="col-6"> <ProgressBar className='progresingbar' now={7} /></div>
  
  <div class="col-4"><img src='i3.png' height="15" width="80"></img></div>
    </div>
  </div>

    </div>

    <div className='yellow ml-5 mt-2'>
    <div class="container">
    <div class="row">
      <div class="col-2"> <img src='computer.png ' className='thanks' height="55"></img></div>
      <div class="col-6 mt-2 text-white"><h6>How to grow your feacbook page <p className='fontsmall mt-2'>Follow these easy step and simple</p></h6></div>
      <div class="col-4"><div className='first1 mt-2 ml-4'><h4>17</h4><p className='text-black font-size: 0.7rem'>Full</p></div></div>
      <div class="col-2"></div>
  <div class="col-6"> <ProgressBar className='progresingbar' now={17} /></div>
  
  <div class="col-4"><img src='i4.png' height="15" width="80"></img></div>
    </div>
  </div>
</div>
<div className='red ml-5 mt-2'>
<div class="container">
    <div class="row">
      <div class="col-2"> <img src='traning.png ' className='thanks' height="50"></img></div>
      <div class="col-6 mt-2 text-white"><h6>How to grow your feacbook page <p className='fontsmall mt-2'>Follow these easy step and simple</p></h6></div>
      <div class="col-4"><div className='first1 mt-2 ml-4'><h4>21</h4><p className='text-black font-size: 0.7rem'>Full</p></div></div>
      <div class="col-2"></div>
  
    </div>
  </div>

        </div>

    </div>




  )

}




