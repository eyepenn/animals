/* @flow */

import React from 'react';

type Props = {
	animal: string,
	onClick: Function
};

class Button extends React.Component<Props> {

	constructor(props: Props) {
		super(props);
		(this:any).onClick = this.onClick.bind(this);
	}

	onClick() {
		this.props.onClick(this.props.animal)
	}
	
	render() {
		return (
			<button className={this.props.animal} onClick={this.onClick}></button>
		);
	}
}

export default Button