import { useState } from 'preact/hooks';
import './LikeButton.css';

export default function LikeButton() {
  
  // The button starts in the "not liked" state
  const [liked, setLiked] = useState(false);

  return (
    <button
      class={`like-button ${liked ? 'is-liked' : ''}`}
      aria-pressed={liked}
      onClick={() => setLiked((liked) => !liked)}
    >
      {liked ? '☕ Liked' : '🤎 Like this post'}
    </button>
  );
}
