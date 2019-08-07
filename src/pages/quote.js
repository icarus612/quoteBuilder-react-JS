import React from 'react';
import '../application.css';
import QuoteMachine from '../components/quoteMachine.js'
class PriceBox extends React.Component {

	constructor(props){
	  super(props);
	  this.state = {
		currentPrice: 0,
	  }
	}
  
	  render(){
		  return (
				<div className="price-card">
					<hr />
					<h4 className="px-4 bold">
						Subtotal: {this.state.currentPrice}
					</h4>				
				</div>
		  );
	  }
	
  }
  
  class Quote extends React.Component {

	constructor(props){
		super(props);
	}

	render(){
		return (
			<article id="contact">
				<section className="py-5 h-100vh d-flex flex-wrap overflow-hidden color-change-bg">
					<div className='container flex-wrap flex-row d-flex justify-content-center align-items-center'>
						<div className="col-12">
							<div className="card">
								<h1 className="my-4">
									Your New Project Starts Here
								</h1>
								<div className='container flex-wrap flex-row d-flex justify-content-center align-items-center'>
										<QuoteMachine />

									<div className="col-12 col-md-4">
										<PriceBox />
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				
					

		</article>
		);
	}
  
}

export default Quote;
