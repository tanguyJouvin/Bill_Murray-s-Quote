import React from 'react';
import jokesData from './jokesData';
import Joke from './Joke';

function Jokes() {
  const jokeComponents = jokesData.map(joke=>
  <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />
  );
  return (
    <div>
      {jokeComponents}
    </div>
  )
};

export default Jokes;