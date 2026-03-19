import React, { useState, useEffect, useRef } from 'react';
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
  const count = React.Children.count(children);
  const [active, setActive] = useState(0);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const next = () => setActive((prev) => (prev + 1) % count);
  const prev = () => setActive((prev) => (prev - 1 + count) % count);

  const startX = useRef(null);

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (startX.current === null) return;

    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX.current;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        prev(); 
      } else {
        next(); 
      }
    }

    startX.current = null;
  };

  return (
    <div
      className="carousel"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <button className="nav left" onClick={prev}>
        <TiChevronLeftOutline />
      </button>

      {React.Children.map(children, (child, i) => {
        let offset = i - active;

        if (offset > count / 2) offset -= count;
        if (offset < -count / 2) offset += count;

        return (
          <div
            className="card-container"
            key={i}
            style={{
              transform: `
                rotateY(${offset * (isMobile ? -30 : -50)}deg) 
                scaleY(${1 - Math.abs(offset) * (isMobile ? 0.2 : 0.3)})
                translateZ(${-Math.abs(offset) * (isMobile ? 5 : 20)}rem)
                translateX(${offset * (isMobile ? 2 : 5)}rem) 
              `,
              filter: `blur(${Math.abs(offset) * (isMobile ? 0.5 : 1)}rem)`,
              opacity: Math.abs(offset) > MAX_VISIBILITY ? 0 : 1,
              display: Math.abs(offset) > MAX_VISIBILITY ? 'none' : 'block',
              pointerEvents: offset === 0 ? 'auto' : 'none',
            }}
          >
            {child}
          </div>
        );
      })}
      <button className="nav right" onClick={next}>
        <TiChevronRightOutline />
      </button>
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
        <h1 className="team-title">We Are G.Technology</h1>
        <h2 className="team-subtitle">
          Scaling Businesses, Exceeding Standards
        </h2>

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