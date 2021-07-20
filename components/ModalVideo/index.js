import React from 'react'
import ModalVideo from 'react-modal-video'

class VideoModal extends React.Component {

  constructor() {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal() {
    this.setState({ isOpen: true })
  }

  render() {
    return (
      <div>
        {
          <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='iSbzh0r9IV4' onClose={() => this.setState({ isOpen: false })} />
        }
        <div className="video-btn">
          <ul>
            <li>
              <button className="wrap" onClick={this.openModal}><i className="fi flaticon-play-button-2" aria-hidden="true"></i></button>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default VideoModal;