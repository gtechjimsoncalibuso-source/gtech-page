import React, { useState, useEffect } from 'react';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';
import '../css/team.css';

import img1 from '../assets/images/joel_gumiranc.jpg';
import img2 from '../assets/images/joel_gumiranc.jpg';
import img3 from '../assets/images/joel_gumiranc.jpg';

const teamData = [
  { name: "John Doe", description: "Frontend Developer", image: img1 },
  { name: "Jane Smith", description: "UI/UX Designer", image: img2 },
  { name: "Mike Lee", description: "Backend Developer", image: img3 },
  { name: "Sarah Kim", description: "Project Manager", image: img1 },
  { name: "Alex Cruz", description: "Mobile Developer", image: img2 }
];

const MAX_VISIBILITY = 3;

const Card = ({ name, description, image }) => (
  <div className="card">
    <img src={image} alt={name} className="card-image" />
    <h3 className="card-name">{name}</h3>
    <p className="card-desc">{description}</p>
  </div>
);

const Carousel = ({ children }) => {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);


  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    const diff = startX - endX;

    if (diff > 50 && active < count - 1) {
      setActive((i) => i + 1); 
    }

    if (diff < -50 && active > 0) {
      setActive((i) => i - 1); 
    }
  };

  return (
    <div
      className="carousel"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {active > 0 && (
        <button className="nav left" onClick={() => setActive(i => i - 1)}>
          <TiChevronLeftOutline />
        </button>
      )}
      {React.Children.map(children, (child, i) => (
        <div
          className="card-container"
          key={i}
          style={{
            transform: `
              rotateY(${(active - i) * (isMobile ? 30 : 50)}deg)
              scaleY(${1 - Math.abs(active - i) * (isMobile ? 0.2 : 0.4)})
              translateZ(${-Math.abs(active - i) * (isMobile ? 15 : 30)}rem)
              translateX(${(active - i) * (isMobile ? -2 : -5)}rem)
            `,
            filter: `blur(${Math.abs(active - i) * (isMobile ? 0.5 : 1)}rem)`,
            opacity: Math.abs(active - i) >= MAX_VISIBILITY ? 0 : 1,
            display: Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
            pointerEvents: active === i ? 'auto' : 'none',
          }}
        >
          {child}
        </div>
      ))}

      {active < count - 1 && (
        <button className="nav right" onClick={() => setActive(i => i + 1)}>
          <TiChevronRightOutline />
        </button>
      )}
    </div>
  );
};

export default function Team() {
  useEffect(() => {
    document.body.className = 'team';
    return () => {
      document.body.className = '';
    };
  }, []);

  return (
    <div className="team">
          
        <div className="team-content">
           <h1 className="team-title">  We Are G.Technology </h1>
           
           <h2 className="team-subtitle"> Scaling Businesses, Exceeding Standards </h2>
        <div className="team-container">
            <Carousel>
                {teamData.map((member, i) => (
                    <Card
                    key={i}
                    name={member.name}
                    description={member.description}
                    image={member.image}
                    />
                    ))}
            </Carousel>
        </div>
             
        </div>
         
     
    </div>
  );
}
