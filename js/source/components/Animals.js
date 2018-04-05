/* @flow */

import React from 'react';
import Picture from './Picture';
import Audio from './Audio';
import Button from './Button';

type Data = Array<Object>;

type Props = {
	initialData: Data
};

type State = {
	data: Data
};

class Animals extends React.Component<Props, State> {

	constructor(props: Props) {
		super(props);
		this.state = {
			data: props.initialData
		};
		(this:any)._showAnimal = this._showAnimal.bind(this);
	}

	_showAnimal(animal: string) {
		let data = [{animal: animal}];
		this.setState({
			data: data
		});
	}
		
	render () {
		return(
			<div>
			<Picture initialData={this.state.data} />
			<Audio audioUrl={"audio/" + this.state.data[0].animal + ".mp3"} />
			<div className="Button">
			<Button animal="camel" onClick={this._showAnimal} />
			<Button animal="coyote" onClick={this._showAnimal} />
			<Button animal="elephant" onClick={this._showAnimal} />
			<Button animal="jaguar" onClick={this._showAnimal} />
			</div>
			<div className="Button">
			<Button animal="lion" onClick={this._showAnimal} />
			<Button animal="monkey" onClick={this._showAnimal} />
			<Button animal="panther" onClick={this._showAnimal} />
			<Button animal="pig" onClick={this._showAnimal} />
			</div>
			<div className="Button">
			<Button animal="racoon" onClick={this._showAnimal} />
			<Button animal="sealion" onClick={this._showAnimal} />
			<Button animal="tiger" onClick={this._showAnimal} />
			<Button animal="whale" onClick={this._showAnimal} />
			</div>
			</div>
		);
	}
}	

export default Animals