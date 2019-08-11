import React from 'react';
import Input from'./input.js'
export default class InfoBox extends React.Component{
	constructor(props){
		super(props);
		props=this.props.value;
		this.state={
			name: props.name,
			phone: props.phone,
			email: props.email,
			message: props.message
		}
		this.typing = this.typing.bind(this)
	}
	typing(e){
		this.setState({[e.target.id]: e.target.value})
		console.log(this.state.name)
	}
	render(){
		return (
			<div>
				<h3>
					Get Your Quote
				</h3>
				<form className="d-flex flex-column flex-wrap flex-md-row justify-content-center align-items-around">
					<div className="my-4 col-12 col-md-6">
						<Input 
							id='name'
							value={this.state.name}
							placeholder=' Name'
							type='text'
							onChange={this.typing}
						/>		
					</div>
					<div className="my-4 col-12 col-md-6">
						<Input 
							id='phone'
							value={this.state.phone}
							placeholder=' Phone'
							type='phone'
							onChange={this.typing}
						/>
					</div>
					<div className="my-4 col-12">
						<Input 
							id='email'
							value={this.state.email}
							placeholder=' Email'
							type='text'
							onChange={this.typing}
						/>
					</div>
					<div className="my-4 col-12">
						<textarea className="pl-2" placeholder="Message" id="Message"></textarea> 
					</div>
					<div className="my-4 pr-md-5 pr-3 d-flex justify-content-end col-12">
						<a className="btn btn-lg btn-primary btn-purple-basic" onClick={this.props.submitForm}>Get Quote</a>
					</div>
				</form>
			</div>
			
		)
	}
}