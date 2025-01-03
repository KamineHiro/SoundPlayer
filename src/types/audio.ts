export interface Sound {
  label: string;
  url: string;
}

export interface AudioButtonProps {
  label: string;
  onPlay: () => void;
  onStop: () => void;
  isPlaying: boolean;
}