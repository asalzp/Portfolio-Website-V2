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
