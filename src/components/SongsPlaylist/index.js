import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const SongsPlaylist = props => {
  const {eachTrackDetails, deleteSong} = props
  const {id, imageUrl, name, genre, duration} = eachTrackDetails

  const onClickDeleteSongTrack = () => {
    deleteSong(id)
  }

  return (
    <li className="playlist-list">
      <div className="img-and-name-container">
        <img src={imageUrl} alt="track" className="track-img" />
        <div className="name-and-genre-container">
          <p className="song-name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="duration-delete-container">
        <p className="duration">{duration}</p>
        <button
          type="button"
          data-testid="delete"
          className="delete-btn"
          onClick={onClickDeleteSongTrack}
        >
          <AiOutlineDelete size={25} color="#ffffff" />.
        </button>
      </div>
    </li>
  )
}

export default SongsPlaylist
