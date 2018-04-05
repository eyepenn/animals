jest 
	.dontMock('../source/components/Picture')
;

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';

const Button = require('../source/components/Picture').default;

describe('Render Picture component', () => {
	it('renders <img>', () => {
		const image = TestUtils.renderIntoDocument(
			<div><img src="images/animals/large/jungle.jpg" /></div>
		);
		expect(ReactDOM.findDOMNode(image).children[0].nodeName).toEqual('IMG');
	});
});