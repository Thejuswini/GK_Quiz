import React from 'react';
import '../styles/HomeStyles.css';
import bg from '../assets/bglogin.png';

function Home() {
  const categories = [
    { name: 'JAVA', color: '#FFDEAD' },
    { name: 'SQL', color: '#ADD8E6' },
    { name: 'PYTHON', color: '#FFB6C1' },
    { name: 'REACT', color: '#90EE90' },
  ];

  return (
    <div className="home-container">
        <img src={bg} alt="background" className="background-image" />
      <h1>Welcome to Technical Quizzes</h1>
      <div className="quiz-categories">
        {categories.map((category, index) => (
          <div key={index} className="quiz-card" style={{ backgroundColor: category.color }}>
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
