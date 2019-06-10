import React, { useState } from 'react';
import './Counter.css'

function Counter() {
 //Ici nous allons utiliser les hooks pour créer et contrôler un compteur
 const[count, setCount] = useState(0);
//Ici nous trouvins la façon de créer les méthodes pour distribuer les actions aux boutons
  // addClick = () => {
  //   this.setState({count: this.state.count += 1});
  // }
  // removeClick = () => {
  //   this.setState({count: this.state.count -= 1});
  // }
  // resetCount = () => {
  //   this.setState({count: this.state.count = 0});
  // }

  // render() {
    return(
      <div>
        <h1>Vous avez cliqué {count} fois</h1>
        <img 
          onMouseOver={()=> console.log('hovered !')} 
          src='https://i.pinimg.com/originals/6e/62/61/6e6261d603b7fb197d677b2a840dd265.png' 
          alt='Bill Murray' 
        />
        <br />
        <h2>Compteur</h2>
        <button className='lined thick' onClick={()=> setCount(count+1)}> + </button>
        <button className='lined thick' onClick={()=> setCount(count-1)}> - </button>
        <button className='lined thick' onClick={()=> setCount(0)}> Reset </button>
      </div>
    )
  // }
}
export default Counter;