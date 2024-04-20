import React from 'react'
import Course from './Component/Course';
import Courseactivity from './Component/Courseactivity';
import Code from './Component/Code';
import './App.css'
export default function App() {
  return (
    <>
    <div className='all'>
    <div className='row'>
<div className="col-md-2"><Course/></div>
<div className="col-md-4">< Courseactivity/></div>
<div className="col-md-6"><Code/></div>
</div>
</div>
</>
  );
}

