import React from 'react';

export default class InfoBox extends React.Component{
	constructor(props){
		super(props);
	
	}

	render(){
		return (

			<form className="d-flex flex-column flex-wrap flex-md-row justify-content-center align-items-around">
				<div className="my-4 col-12 col-md-6">
					<input className="pl-2" value="Name" id="Name" type="text" />
				</div>
				<div className="my-4 col-12 col-md-6">
					<input className="pl-2" value="Phone" id="Phone" type="phone" />
				</div>
				<div className="my-4 col-12">
					<input className="pl-2" value="Email" id="Email" type="text" />
				</div>
				<div className="my-4 col-12">
					<textarea className="pl-2" placeholder="Message" id="Message"></textarea> 
				</div>
				<div className="my-4 pr-md-5 pr-3 d-flex justify-content-end col-12">
					<a className="btn btn-lg btn-primary btn-purple-basic" href="">Get Quote</a>
				</div>
			</form>
		)
	}
}