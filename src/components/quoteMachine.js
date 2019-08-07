import React from 'react';
import '../application.css';
import InfoForm from './infoForm.js'
import Pages from './pages.js'
import FrontEndNeeds from './frontEndNeeds.js'
import BackEndNeeds from './backEndNeeds.js'
import BasicNeeds from './basicNeeds.js'


class QuoteMachine extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			spot: 2
		}
		this.next = this.next.bind(this);
		this.prev = this.prev.bind(this);
	}
	next(){
		if (this.state.spot < this.cards.length - 1) this.setState({spot: this.state.spot+1})
	}
	prev(){
		if (this.state.spot > 0) this.setState({spot: this.state.spot-1})
    }
    cards = [ <Pages />, <BasicNeeds />, <FrontEndNeeds />, <BackEndNeeds />, <InfoForm />];

	render(){
		return (
            <div className="col-12 col-md-8">
                {this.cards[this.state.spot]}
                <div className="my-4 pr-md-5 pr-3 d-flex justify-content-end col-12">
                    <button className="btn btn-lg btn-primary btn-purple-basic" onClick={this.prev}>Previous</button>

                    <button className="btn btn-lg btn-primary btn-purple" onClick={this.next}>Next</button>
                </div>
            </div>
		);
	}
  
}

export default QuoteMachine;