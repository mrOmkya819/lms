import React from 'react';
import './Code.css'; // Import your CSS file

export default function Code() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2 mt-5"><img src='no1.png' height="50" alt="no1" /></div>
        <div className="col-md-2 mt-5"><img src='no2.png' height="35" alt="no2" /></div>
        <div className="col-md-3"></div>
        <div className="col-md-2 mt-5 "><h6>WesleyMatthews <div className='text-primary'>student</div></h6></div>
        <div className="col-md-2 mt-5 ml-md-5"><img src='no3.png' height="55" alt="no3" /></div>
      </div>
      <h5 className='mt-5 text-info'>My Learning</h5>
      <div className="container">
        <div className="row">
          <div className="col-md-2 mt-4"><img src='no4.png' height='55' alt="no4" /></div>
          <div className="col-md-6 mt-4"><b>Target Audience Training</b><div className="text-secondary">Save time and make your business more <div>effective by promoting...</div></div>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-2">
            <img src='no7.png' className='mt-4' height="55" alt="no7" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-2 mt-4"><img src='no5.png' height='55' alt="no5" /></div>
          <div className="col-md-6 mt-4"><b>The Complete Web..</b><div className="text-secondary">Learn Web Development by building 25 websites.. <div>effective by promoting...</div></div>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-2">
            <img src='no8.png' className='mt-4' height="55" alt="no8" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-2 mt-4"><img src='no6.png' height='55' alt="no6" /></div>
          <div className="col-md-6 mt-4"><b>Grow your Community</b><div className="text-secondary">Follow these easy and simple steps <div>effective by promoting...</div></div>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-2">
            <img src='no9.png' className='mt-4' height="55" alt="no9" />
          </div>
        </div>
      </div>
      
      <h5 className='mt-5 text-info' >Planning <img src='left.png' className='cur' height="20px" alt="left" /> <img src='right.png' className='cur'  height="20px" alt="right" /></h5>
    
      <div className="table2">
        <table>
          <thead>
            <tr className="top-row">
              <td colSpan="7">
                <span>This Week</span>
                <span>Next Week</span>
                <span>This Month</span>
                <span>This Year</span>
              </td>
            </tr>
            <tr>
              <th></th>
              <th>M</th>
              <th>T</th>
              <th>W</th>
              <th>Th</th>
              <th>Fr</th>
              <th>Sa</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>7:00</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>8:00</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>9:00</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>10:00</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>11:00</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>12:00</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
