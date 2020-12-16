import React, { useState } from 'react';
import data from './data';
import List from './list';

function App() {
  const [people, setPeople] = useState(data)
  return (
    <main>
      <h2>Basic Birthday Reminder</h2>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people}/>
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
