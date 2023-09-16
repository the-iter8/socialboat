import "./Card.css";
import React from "react";
import ReactPlayer from "react-player/lazy";


const Card = ({ heading, video, tags, text }) => {
  return (
    <div className='card'>
      <div className='video-player'>
        <ReactPlayer url={video} playing={false} controls={true} width='100%' height='100%' />
      </div>

      <div className='card-content'>
        <h2 className='card-title'>{heading}</h2>
        <p className='card-text'>{text}</p>
        <div className='card-tags'>
          {tags.map((item, idx) => {
            return (
              <span key={idx} className='card-tag'>
                {item}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
