import React from 'react'
import './Course.css'
import 'remixicon/fonts/remixicon.css'
export default function () {
  return (
    <div className="page">
    <div>
      <h4 className='mt'>
    <img src='course.png' height="35px" ></img><b>Course</b>
      </h4>
      <div>
        <div className="toop">
          <i class="ri-creative-commons-nd-line"></i>
          <span className="course1">Performance</span>
        </div>
        <div className="toop1">
          <i class="ri-booklet-line"></i>
          <span className="course1">Course</span>
        </div>
        <div className="toop1">
          <i class="ri-message-2-line"></i>
          <span className="course1">Comment</span>
        </div>
        <div className="toop1">
          <i class="ri-tools-line"></i>
          <span className="course1">Tools</span>
        </div>
        <div className="toop1">
          <i class="ri-database-fill"></i>
          <span className="course1">Resource</span>
        </div>
        <div className='inp'>
        <div>upgarde your</div>
        <div>plan, <span className='font'><u>Pro plan</u></span></div>
        <img src='saish.png' height="35px" className='mt-2'></img>
        </div>
      </div>
    </div>
  </div>
  )
}
