import React, { useState } from 'react';
import { Button } from '@/components/Elements/Button';
import './Contestant.css';

type ContestantProps = {
  name: string;
  imageUrl: string;
};

export const Contestant: React.FC<ContestantProps> = ({ name, imageUrl }) => {
  const [voteCount, setVoteCount] = useState<number>(0);

  const handleVoteClick = () => {
    setVoteCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="image-card">
      <div className="image-card-name">{name}</div>
      <img src={imageUrl} alt={name} className="image-card-image" />
      <div className="image-card-footer">
        <div className="vote-count">{voteCount}</div>
        <div className="vote-button">
          <Button text="Vote" onClick={handleVoteClick} />
        </div>
        
      </div>
    </div>
  );
};
