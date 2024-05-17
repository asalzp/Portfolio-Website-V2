import React from 'react';
import './Intro.css'; // Importing the corresponding CSS file
import ThreeHexagonPattern from '../components/hexagon pattern/ThreeHexagonPattern';
import TwoHexagonPattern from '../components/hexagon pattern/TwoHexagonPattern';
import 'bootstrap-icons/font/bootstrap-icons.css';


function Intro() {
  return (
    <div className="section1-container">
      
      <div className='introduction'>
        <h2 className='my_name'>Hi, I'm Asal</h2>
        <p>A Developer</p>
        <div className='quote'>
          <p>"Python approach: They'll lie in wait for the right moment to strike."</p>
        </div>
        <div className='quote_author'>
          <p>Mr. Robot</p>
        </div>
      </div>
      

      {/* <div className='images'>
        <div className='computers_image'>
          <img src='/images/computers.jpg' alt='computers_image'></img>
        </div>

        <div className='robot_hand_image'>
          <img src='/images/robot_hand.jpg' alt='robot_hand_image'></img>
        </div>

        <div className='globe_image'>
          <img src='/images/globe.jpg' alt='globe_image'></img>
        </div>

        <div className='metaverse'>
          <img src='/images/metaverse.jpg' alt='metaverse'></img>
        </div>

        <div className='ai_robot'>
          <img src='/images/ai_robot.jpg' alt='ai_robot'></img>
        </div>

        <div className='girl_robot'>
          <img src='/images/girl_robot.jpg' alt='girl_robot'></img>
        </div>
      </div> */}

      

      <div className='big_hexagon'>
        <i class="bi bi-hexagon-fill"></i>
      </div>

      <div className='my_pic'>
        <img src='/images/my_pic.jpg' alt='my_pic'></img>
      </div>
      
      <div className="triple_hexagon_1">
        <div class="vertical-line"></div>
        <ThreeHexagonPattern  />
      </div>

      <div className="triple_hexagon_2">
        <div class="vertical-line_2"></div>
        <ThreeHexagonPattern  />
      </div>

      <div className="triple_hexagon_3">
        <ThreeHexagonPattern  />
      </div>

      <div className="double_hexagon_1">
        <TwoHexagonPattern />
      </div>

      <div className="double_hexagon_2">
        <div class="vertical-line_3"></div>
        <TwoHexagonPattern />
      </div>

      <div className="double_hexagon_3">
        <TwoHexagonPattern />
      </div>

      <div className="double_hexagon_4">
        <TwoHexagonPattern />
      </div>

        
      

      
        
      
    </div>
  );
}

export default Intro;
