import React from 'react';
import Input from './input'
export default class BasicNeeds extends React.Component{
    constructor(props){
		super(props);
		props = this.props.value;
        this.state= {
            option1: props.option1,
            option2: props.option2,
            option3: props.option3,
            option4: props.option4,
            option5: props.option5,
			option6: props.option6,
			option7: props.option7,
            option8: props.option8,
            option9: props.option9,
            option10: props.option10,
            option11: props.option11,
            option12: props.option12,
            subtotal: props.subtotal,
        }
        this.update = this.update.bind(this);
    }
	componentWillUnmount(){
		this.props.onChange(this.state, "basicNeeds")
	}
    update(e){
        let option = `${e.target.id}`; 
        this.setState({
            [option]: !this.state[option],
            subtotal: this.state[option] ? this.state.subtotal - Number(e.target.value) : this.state.subtotal + Number(e.target.value),
		});        
    }
	render(){
		return (
			<div subtotal={this.state.subtotal}>
				<form className="d-flex flex-column flex-wrap flex-md-row justify-content-start align-items-around">
					<h3>
						Basic Pages Needs
					</h3>
					<h5>
						These are pages you will want built dynamicly so that you can update and add to parts of conent yourself.
					</h5>
					<div className="col-12 col-md-6 d-flex flex-column justify-content-start align-items-start">
						
							<Input 
								id='option1'
								value={220} 
								label='Blog'
								type='checkbox'
								checked={this.state.option1}
								onChange={this.update}
							/>
				
							<Input 
								id='option2'
								value={330} 
								label='Events'
								type='checkbox'
								checked={this.state.option2}
								onChange={this.update}
							/>
							<Input 
								id='option3'
								value={220} 
								label='Specials'
								type='checkbox'
								checked={this.state.option3}
								onChange={this.update}
							/>
							<Input 
								id='option4'
								value={220} 
								label={`FAQ's`}
								type='checkbox'
								checked={this.state.option4}
								onChange={this.update}
							/>
							<Input 
								id='option5'
								value={220} 
								label='Staff/Board Members'
								type='checkbox'
								checked={this.state.option5}
								onChange={this.update}
							/>
							<Input 
								id='option6'
								value={220} 
								label='News/Press Releases'
								type='checkbox'
								checked={this.state.option6}
								onChange={this.update}
							/>
							<Input 
								id='option7'
								value={330} 
								label='Portfolio or Clients'
								type='checkbox'
								checked={this.state.option7}
								onChange={this.update}
							/>
							<Input 
								id='option8'
								value={220} 
								label='Resources or Documentation Library'
								type='checkbox'
								checked={this.state.option8}
								onChange={this.update}
							/>
							<Input 
								id='option9'
								value={330} 
								label='Projects'
								type='checkbox'
								checked={this.state.option9}
								onChange={this.update}
							/>
							<Input 
								id='option10'
								value={110} 
								label='Sponsors'
								type='checkbox'
								checked={this.state.option10}
								onChange={this.update}
							/>
							<Input 
								id='option11'
								value={220} 
								label='Careers/Jobs'
								type='checkbox'
								checked={this.state.option11}
								onChange={this.update}
							/>
							<Input 
								id='option12'
								value={110} 
								label='Testimonials'
								type='checkbox'
								checked={this.state.option12}
								onChange={this.update}
							/>
					</div>
				</form>
			</div>
			
		)
	}
}