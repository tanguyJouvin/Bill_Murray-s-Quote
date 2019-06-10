//Ici le composant est un composoant ' fonction'

import React from "react";


function TimedStyle() {  
  const date = new Date( 6, 8, 2019, 10, 30 );
  const hours = date.getHours();
  let timeOfDay;

  const styles ={
    fontSize: '1.5 em',
    height: '1.5 em',
    width: '1.5 em',
    postion: 'relative',
    textAlign: 'center'
  };
  


  if (hours < 12) {
    timeOfDay ='morning';
    styles.color = '#FF5733';
    styles.backgroundColor ='#7AFF33';
    styles.fontFamily ='arial';
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = 'afternoon';
    styles.color = '#7AFF33 ';
    styles.backgroundColor ='#457896';
    styles.fontFamily ='sans-sérif'
  } else {
    timeOfDay ='night';
    styles.color = '#456321';
    styles.backgroundColor ='#457896';
    styles.fontFamily ='roboto';
  }

  return (
    <div>
      <h1 style = {styles}> Good {timeOfDay}</h1>
    </div>
  );
}
export default TimedStyle;