import React from 'react';
import Calendar from './components/calendar';
import './index.css'

function App() {
  return (
    <div className="App">
      <header className="text-center py-5 bg-gray-100">
        <h1 className="text-3xl font-bold">Монголын Зурхай</h1>
      </header>
      <main className="container mx-auto my-5">
        <Calendar />
      </main>
    </div>
  );
}

export default App;