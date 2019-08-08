import React from 'react';

export default class BasicNeeds extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            option1: false,
            option2: false,
            option3: false,
            option4: false,
            option5: false,
			option6: false,
			option7: false,
            option8: false,
            option9: false,
            option10: false,
            option11: false,
            option12: false,
            subtotal: 0,
        }
        this.update = this.update.bind(this);
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
						<div>
							<input className="m-2" type="checkbox" id="option1" value={220} onClick={this.update} checked={this.state.option1} />
							<label >
								Blog
							</label>
						</div>
						<div>
							<input className="m-2" type="checkbox" id="option2" value={330} onClick={this.update} checked={this.state.option2} />
							<label>
								Events
							</label>
						</div>
						<div>
							<input className="m-2" type="checkbox" id="option3" value={220} onClick={this.update} checked={this.state.option3} />
							<label>
								Specials
							</label>
						</div>
						<div>
							<input className="m-2" type="checkbox" id="option4" value={220} onClick={this.update} checked={this.state.option4} />
							<label>
								FAQ's
							</label>
						</div>
						<div>
							<input className="m-2" type="checkbox" id="option5" value={220} onClick={this.update} checked={this.state.option5} />
							<label>
								Staff/Board Members
							</label>
						</div>
						<div>
							<input className="m-2" type="checkbox" id="option6" value={220} onClick={this.update} checked={this.state.option6} />
							<label>
								News/Press Releases
							</label>
						</div>
						<div>
							<input className="m-2" type="checkbox" id="option7" value={330} onClick={this.update} checked={this.state.option7} />
							<label >
								Portfolio or Clients
							</label>
						</div>
						<div>
							<input className="m-2" type="checkbox" id="option8" value={220} onClick={this.update} checked={this.state.option8} />
							<label>
								Resources or Documentation Library
							</label>
						</div>
						<div>
							<input className="m-2" type="checkbox" id="option9" value={330} onClick={this.update} checked={this.state.option9} />
							<label>
								Projects
							</label>
						</div>
						<div>
							<input className="m-2" type="checkbox" id="option10" value={110} onClick={this.update} checked={this.state.option10} />
							<label>
								Sponsors
							</label>
						</div>
						<div>
							<input className="m-2" type="checkbox" id="option11" value={220} onClick={this.update} checked={this.state.option11} />
							<label>
								Careers/Jobs
							</label>
						</div>
						<div>
							<input className="m-2" type="checkbox" id="option12" value={110} onClick={this.update} checked={this.state.option12} />
							<label>
								Testimonials
							</label>
						</div>             
					</div>
				</form>
			</div>
			
		)
	}
}