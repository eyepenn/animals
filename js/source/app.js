/* @flow */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo';
import Animals from './components/Animals';

let data: Array<Object>;
data = [{animal: 'jungle'}];

var app = document.getElementById('app');
if (app == null) {
  throw new Error("no app element");
}

ReactDOM.render(
	<div>
	<Logo /> 
	<h1>Animal Soundboard</h1>
	<h3>Click a button to see and hear an animal</h3>
	<Animals initialData={data} />
	</div>,
	(document.getElementById('app'): any)
);