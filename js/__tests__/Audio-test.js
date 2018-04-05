jest 
	.dontMock('../source/components/Audio')
;

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';

const Button = require('../source/components/Audio').default;

describe('Render Audio component', () => {
	it('renders <audio>', () => {
		const audio = TestUtils.renderIntoDocument(
			<audio controls>
			<source src="audio/jungle.mp3" type="audio/mpeg" />
			Your browser does not support the audio element.
			</audio>
		);
		expect(ReactDOM.findDOMNode(audio).nodeName).toEqual('AUDIO');
		expect(ReactDOM.findDOMNode(audio).children[0].nodeName).toEqual('SOURCE');
	});
});