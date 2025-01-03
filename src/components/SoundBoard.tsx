import { AudioButton } from './AudioButton';
import { useAudio } from '../hooks/useAudio';
import type { Sound } from '../types/audio';

interface SoundBoardProps {
  sounds: readonly Sound[];
}


export function SoundBoard({ sounds }: SoundBoardProps) {
  return (
    <div className="p-6 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-white text-center mb-6">
        🎵 Sound Board 🎵
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sounds.map((sound) => {
          const { play, stop, isPlaying } = useAudio(sound.url);
          return (
            <AudioButton
              key={sound.url}
              label={sound.label}
              onPlay={play}
              onStop={stop}
              isPlaying={isPlaying}
            />
          );
        })}
      </div>
    </div>
  );
}
