import React from 'react';
import Input from "./input.js";
export default class Pages extends React.Component{
	constructor(props){
        super(props);
        this.state = {
			siteType: this.props.value.siteType,
			subtotal: this.props.value.subtotal,
			design: this.props.value.design,
			pages: this.props.value.pages,
        }
		this.update = this.update.bind(this);
		this.pageNumber = this.pageNumber.bind(this);
	}
	componentWillUnmount(){
		this.props.onChange(this.state, "pages");
	}

    update(e){
		let option = `${e.target.id}`; 
		let val = Number(e.target.value);
        this.setState({
			siteType: option, 
			design: val,
			subtotal: (this.state.pages * 100) + val,
		})
	}
	pageNumber(e){
		let val = Number(e.target.value)
		this.setState({ pages: val, subtotal: this.state.design + (val * 100)})
	}
	
	render(){
		return (

			<form className="d-flex flex-column flex-wrap flex-row justify-content-center align-items-around">
				<h3 className="mb-3">Lets Start With Pages</h3>
				<div className="col-12 align-items-center">
				<Input 
						id='basic'
						value={240} 
						label='Fast Design with Less Consulting & Meetings'
						type='radio'
						checked={this.state.siteType === "basic"}
						onChange={this.update}
					/>
		
				</div>
				<div className="col-12 align-items-center">
					<Input 
						id='custom'
						value={600} 
						label='Custom Website with Consultative Process'
						type='radio'
						checked={this.state.siteType === "custom"}
						onChange={this.update}
					/>
				</div>
				<div className="my-4 col-12 d-flex flex-row align-items-center justify-content-start">
		
					<Input 
						id='pages'
						value={this.state.pages} 
						label='How many pages will you want custom built?'
						type='number'
						step='1'
						min='0'
						max='1000'
						onChange={this.pageNumber}
						className='page-num'
						required
						labelBefore
					/>
				</div>
				
		
			</form>
		)
	}
}