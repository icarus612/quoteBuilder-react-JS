import React from 'react';
import '../application.css';
import InfoForm from './infoForm.js'
import Pages from './pages.js'
import FrontEndNeeds from './frontEndNeeds.js'
import BackEndNeeds from './backEndNeeds.js'
import BasicNeeds from './basicNeeds.js'
class PriceBox extends React.Component {

	constructor(props){
	  super(props);
	  this.state = {
        pages: 0,
        design: 0,
        programming: 0,
        currentPrice: 0,
	  }
    }
	  render(){
		  return (
				<div className="price-card p-3">
                    <h5 id="pages" className={this.state.pages === 0 ? "d-none" : "d-block"}>
                        Basic Site Needs: <span className="float-right">$ {this.state.pages}</span>
                    </h5>
                    <h5 id="design" className={this.state.design === 0 ? "d-none" : "d-block"}>
                        Dynamic Design: <span className="float-right">$ {this.state.design}</span>
                    </h5>
                    <h5 id="programming" className={this.state.programming === 0 ? "d-none" : "d-block"}>
                        Programming: <span className="float-right">$ {this.state.programming}</span>
                    </h5>
					<hr />
					<h4 className="px-3 bold">
						Subtotal:  <span className="float-right">$ {this.state.currentPrice}</span>
					</h4>				
				</div>
		  );
	  }
	
  }

let cards = [ <Pages />, <BasicNeeds />, <BackEndNeeds />, <InfoForm />];

class QuoteMachine extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			spot: 0
		}
		this.next = this.next.bind(this);
		this.prev = this.prev.bind(this);
	}
	next(){
		if (this.state.spot < cards.length - 1) this.setState({spot: this.state.spot+1})
	}
	prev(){
		if (this.state.spot > 0) this.setState({spot: this.state.spot-1})
    }

	render(){
		return (
            <div className='container flex-wrap flex-row d-flex justify-content-center align-items-center'>
                <div className="col-12 col-md-8">
                    <div>
                        <h4>
                            Step {this.state.spot + 1} of {cards.length}
                        </h4>
                    </div>
                    {cards[this.state.spot]}
                    <div className="my-4 pr-md-5 pr-3 d-flex justify-content-end col-12">
                        <button className="btn btn-lg btn-primary btn-purple-basic" onClick={this.prev}>Previous</button>

                        <button className="btn btn-lg btn-primary btn-purple" onClick={this.next}>Next</button>
                    </div>
                </div>     
                <div className="col-12 col-md-4">
                    <PriceBox 
                        spot={this.state.spot}
                    />
                </div>
            </div>
      
		);
	}
  
}

export default QuoteMachine;