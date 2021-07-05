import React from 'react';
import WordCard from './WordCard';
import './App.css';
const word = "Hello";
function App() {
  return (
    <div className = 'card'>
    <WordCard value="hello"/>
    </div>
    );
}
export default App;