import React from 'react';
import { useState } from 'react';
import './App.css';
import SButton from './components/SButton';
import STable from './components/STable';
import SInput from './components/SInput';

function App() {
  const [data, setData] = useState({
    name: '',
    age: 0,
  });
  const [people, setPeople] = useState([
    {
      _id: 1,
      name: 'Felix',
      age: 21,
      isShown: true,
    },
    {
      _id: 2,
      name: 'Albert',
      age: 23,
      isShown: false,
    },
    {
      _id: 3,
      name: 'Vincent',
      age: 21,
      isShown: true,
    },
  ]);

  const handleSubmit = () => {
    const _id = Math.max(...people.map((person) => person._id)) + 1;
    people.push({ ...data, _id, isShown: true });
    setPeople([...people]);
    setData({ name: '', age: 0 });
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <>
      <SInput
        type={'text'}
        name={'name'}
        value={data.name}
        onChange={handleChange}
      />
      <br />
      <SInput
        type={'number'}
        name={'age'}
        value={data.age}
        onChange={handleChange}
      />
      <br />
      <SButton klik={handleSubmit}>Save</SButton>
      <br />
      <hr />
      <STable people={people} />
    </>
  );
}

export default App;
