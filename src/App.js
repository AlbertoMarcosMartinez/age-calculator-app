import React, { useState } from 'react';

function App() {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const birthDate = new Date(`${year}-${month}-${day}`);
    const today = new Date();
    const diff = today - birthDate;
    const ageInYears = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    setAge(ageInYears);
  };

  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <div>
        <label>Year: </label>
        <input type="text" value={year} onChange={(e) => setYear(e.target.value)} />
      </div>
      <div>
        <label>Month: </label>
        <input type="text" value={month} onChange={(e) => setMonth(e.target.value)} />
      </div>
      <div>
        <label>Day: </label>
        <input type="text" value={day} onChange={(e) => setDay(e.target.value)} />
      </div>
      <button onClick={calculateAge}>Calculate</button>
      {age !== '' && <p>Your age is {age} years.</p>}
    </div>
  );
}

export default App;

