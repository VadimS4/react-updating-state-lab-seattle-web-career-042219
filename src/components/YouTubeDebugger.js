import React from 'react';

class YouTubeDebugger extends React.Component {

    constructor() {
        super();
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    handleChangeResolution = () => {
        this.setState({
            settings: Object.assign({}, this.state.settings, {
                video: Object.assign({}, this.state.video, {
                    resolution: '720p'
                })
            })
        })
    }

    handleChangeBitrate = () => {
        this.setState({
            settings: Object.assign({}, this.state.settings, {
                bitrate: 12
            })
        })
    }

    render() {
        return (
            <div>
                <button className='resolution' onClick={this.handleChangeResolution}>
                    .Resolution
                </button><br></br>
                <button className='bitrate' onClick={this.handleChangeBitrate}>
                    .Bitrate
                </button>
            </div>
        )
    }
}

export default YouTubeDebugger;