jest
	.dontMock('../source/components/Button')
	.dontMock('./Wrap')
;

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';

const Button = require('../source/components/Button').default;
const Wrap = require('./Wrap').default;

describe('Render Button component', () => {
	it('renders <button>', () => {
		const button = TestUtils.renderIntoDocument(
			<Wrap><Button>Animal</Button></Wrap>
		);
		expect(ReactDOM.findDOMNode(button).children[0].nodeName).toEqual('BUTTON');
	});

	it('calls you back', () => {
		const callback = jest.genMockFunction();
		const button = TestUtils.renderIntoDocument(
			<Wrap><Button onClick={callback} >Animal</Button></Wrap>
		);
		TestUtils.Simulate.click(
			TestUtils.findRenderedDOMComponentWithTag(button, 'button'));
		const calls = callback.mock.calls;
		expect(calls.length).toEqual(1);
	});
});