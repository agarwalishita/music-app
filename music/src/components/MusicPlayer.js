import React, { Component } from 'react'
import './MusicPlayer.css'
export default class MusicPlayer extends Component {
  render() {
    return (
      <div className="player-container" >
        <div className='music-player'>
          <div className='play-button' >
            <i class="material-icons">play_arrow</i>
          </div>
          <div className='time-start' >
            <p>0:00</p>
          </div>
          <div className='song-name'>
            <p>Tycho-Awake</p>
          </div>
          <div className='time-left'>
            <p>-4:10</p>
          </div>
          <div className='Volume' >
            <i class="material-icons">volume_up</i>
          </div>

        </div>
      </div>
    )
  }
}
