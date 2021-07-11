import React from 'react';
import WordCard from './WordCard';
import './App.css';
const wordSearchTable = "SHOUSEBESHOEANARDRLOARUELEODCHSWBIKH";
function App() {
  return (
    <div>
      <WordCard value={wordSearchTable} />
    </div>
  );
}
export default App;