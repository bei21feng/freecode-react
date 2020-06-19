import React from 'react';

const MainContent = () => {
  let timeOfDay;
  const date = new Date();
  const hours = date.getHours();
  const styles = {
    color: 'orange',
    // fontSize: 20, 默认px
    fontSize: '20px',
  };
  if (hours < 12) {
    timeOfDay = 'Morning';
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = 'Afternoon';
  } else {
    styles.color = 'red';
    timeOfDay = 'Evening';
  }

  return (
    <div>
      <main style={styles}>Good {timeOfDay}</main>
    </div>
  );
};

export default MainContent;
