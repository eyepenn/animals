/* @flow */

import React from 'react';

type Props = {
  audioUrl: ?string
};

class Audio extends React.Component<Props> {

	componentWillReceiveProps(nextProps: Props) {
		if(nextProps.audioUrl != this.props.audioUrl) {
			this.refs['audioPlayer'].firstChild.src = this.props.audioUrl;
			this.refs['audioPlayer'].load()
		}
	}

	render() {
		return (
			<audio controls ref="audioPlayer" autoPlay width="475">
			<source src={this.props.audioUrl} type="audio/mpeg" />
			Your browser does not support the audio element.
			</audio>
		);
	}
}

export default Audio