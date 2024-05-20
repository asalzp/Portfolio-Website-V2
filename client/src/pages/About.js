// SecondPage.js
import React, { useState }  from 'react';
import './About.css'; // Importing the corresponding CSS file
import 'bootstrap-icons/font/bootstrap-icons.css';



function About() {
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleHover = (buttonName) => {
    setHoveredButton(buttonName);
  };

  const handleHoverOut = () => {
    setHoveredButton(null);
  };

  return (
    <div className="section-container">
      
      <div className='skills'>
        {/* <img src='/images/brush_stroke.png' alt="brush_troke"></img> */}
        <h1>I am skilled in</h1>
        
        <div className='skills-items'>
            <ul>
              <li>
              <button onMouseEnter={() => handleHover('python')}
                      onMouseLeave={handleHoverOut}
                      type="button" class="btn btn-rect-to-round btn-rect-to-round--black">Different programming languages</button>
              </li>
              <li>
              <button onMouseEnter={() => handleHover('teamwork')}
                      onMouseLeave={handleHoverOut}
                      type="button" class="btn btn-rect-to-round btn-rect-to-round--black">Teamwork</button>
              </li>
              <li>
              <button onMouseEnter={() => handleHover('multitasking')}
                      onMouseLeave={handleHoverOut}
                      type="button" class="btn btn-rect-to-round btn-rect-to-round--black">Multitasking</button>
              </li>
            </ul>
        </div>
      </div>
      <div className='skills_images'>
        <div className={`python_img ${hoveredButton === 'python' ? 'heartbeat' : 'hidden'}`}>
          <img src='/images/python.jpg' alt='python'></img>
        </div>
        <div className={`java_img ${hoveredButton === 'python' ? 'heartbeat' : 'hidden'}`}>
          <img src='/images/java.jpg' alt='java'></img>
        </div>
        
        <div className={`multitasking_img ${hoveredButton === 'multitasking' ? 'heartbeat' : 'hidden'}`}>
          <img src='/images/multitasking.jpg' alt='multitasking'></img>
        </div>
        <div className={`teamwork_img ${hoveredButton === 'teamwork' ? 'heartbeat' : 'hidden'}`}>
          <img src='/images/teamwork.jpg' alt='teamwork'></img>
        </div>

      </div>
      <div className='likes'>
        {/* <img src='/images/brush_stroke.png' alt='brush_stroke'></img> */}
        <h1>I like</h1>

        <div className='likes-items'>
            <ul>
              <li>
              <button onMouseEnter={() => handleHover('guitar')}
                      onMouseLeave={handleHoverOut}
                      type="button" class="btn btn-rect-to-round btn-rect-to-round--black">Playing the guitar</button>
              </li>
              <li>
              <button onMouseEnter={() => handleHover('books')}
                      onMouseLeave={handleHoverOut}
                      type="button" class="btn btn-rect-to-round btn-rect-to-round--black">Reading books</button>
              </li>
              <li>
              <button onMouseEnter={() => handleHover('baking')}
                      onMouseLeave={handleHoverOut}
                      type="button" class="btn btn-rect-to-round btn-rect-to-round--black">Baking</button>
              </li>
            </ul>
        </div>
      </div>

      <div className='likes_images'>
        <div className={`guitar_img ${hoveredButton === 'guitar' ? 'heartbeat' : 'hidden'}`}>
          <img src='/images/guitar.jpg' alt='guitar'></img>
        </div>
        <div className={`books_img ${hoveredButton === 'books' ? 'heartbeat' : 'hidden'}`}>
          <img src='/images/books.jpg' alt='books'></img>
        </div>
        <div className={`baking_img ${hoveredButton === 'baking' ? 'heartbeat' : 'hidden'}`}>
          <img src='/images/baking.jpg' alt='baking'></img>
        </div>

      </div>
    </div>
  );
}

export default About;
