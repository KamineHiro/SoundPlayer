import React from 'react';
import { SoundBoard } from './components/SoundBoard';
import { SOUNDS } from './constants/sounds';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-xl w-full max-w-3xl">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">
          My favorite  Sound Player 🎶
        </h1>
        <SoundBoard sounds={SOUNDS as Sound[]} />
      </div>
    </div>
  );
}

export default App;
