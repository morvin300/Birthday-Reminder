import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  let styles =
  {
color: "red",
background :"#0f0",
fontSize: "32px" 
  }
  let [people, setPeople] = useState(data);
  return (
    <main>
      <section className='container'>
       <h3>{people.length} Birthday's today</h3>
        <List people={people} />
        <button onClick={() => setPeople([1])}>Add more +</button>
      </section>
    </main>
   
  );
}

export default App;
