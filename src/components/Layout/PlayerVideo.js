import React from 'react'
import ReactPlayer from 'react-player'

const PlayerVideo = ({ match, callBackEnd }) => (
    <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url={`https://www.youtube.com/embed/${match.params.activeVideo}`}
          width='100%'
          height='100%'
          playing={true}
          onEnded={callBackEnd}
          controls={true}
        />
    </div>
);
export default PlayerVideo