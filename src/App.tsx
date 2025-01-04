import { SoundBoard } from './components/SoundBoard';
import { SOUNDS } from './constants/sounds';

type Sound = {
  label: string;
  url: string;
};

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
      <div className="bg-white p-8 md:p-10 rounded-lg shadow-lg w-full max-w-4xl mx-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center text-gray-800">
          🎵 My Favorite Sound Player
        </h1>
        <SoundBoard sounds={SOUNDS as Sound[]} />
      </div>
    </div>
  );
}

export default App;

