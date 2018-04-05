/* @flow */

import React from 'react';

type Data = Array<Object>;

type Props = {
	initialData: Data
};

type State = {
	data: Data
};

class Picture extends React.Component<Props, State> {

	constructor(props: Props) {
		super(props);
		this.state = {
			data: this.props.initialData
		};
	}

	componentWillReceiveProps(nextProps: Props) {
		this.setState({data: nextProps.initialData});
	}
		
	render () {
		return(
			<div className="Picture">
			<img src={"images/animals/large/" + this.state.data[0].animal + ".jpg"} />
			</div>
		);
	}
}
	
export default Picture