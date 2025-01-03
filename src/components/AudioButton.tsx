import type { AudioButtonProps } from '../types/audio';

export function AudioButton({ label, onPlay, onStop, isPlaying }: AudioButtonProps) {
  return (
    <div className="flex flex-col gap-3 items-center bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
      <span className="text-md font-semibold text-gray-700">{label}</span>
      <div className="flex gap-4">
        {/* 再生ボタン */}
        <button
          onClick={onPlay}
          disabled={isPlaying}
          className={`py-2 px-5 rounded-lg font-semibold text-white shadow-md transition-colors ${
            isPlaying
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700'
          }`}
        >
          再生
        </button>
        {/* 停止ボタン */}
        <button
          onClick={onStop}
          disabled={!isPlaying}
          className={`py-2 px-5 rounded-lg font-semibold text-white shadow-md transition-colors ${
            !isPlaying
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-red-500 hover:bg-red-600 active:bg-red-700'
          }`}
        >
          停止
        </button>
      </div>
    </div>
  );
}
