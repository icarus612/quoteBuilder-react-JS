import React from 'react';
import logo from '../logo.svg';
import '../application.css';
import anime from '../anime/lib/anime.es.js';

class QuoteMachine extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      currentPrice: 0,
    }
  }

	render(){
		return (
			<article id="contact">
				<section class="py-5 justify-content-center align-content-center h-100vh d-flex flex-wrap overflow-hidden pt-5 color-change-bg">
							<div class="col-12 col-md-10 col-lg-8 dark mx-4 text-center mx-md-5 container">
								<div class="card">
									<h1 class="my-4">
										Your New Project Starts Here
									</h1>
									<h4 class="px-4 bold">
                    					Subtotal: {this.state.currentPrice}
									</h4>
									<form class="d-flex flex-column flex-wrap flex-md-row justify-content-center align-items-around">
										<div class="my-4 col-12 col-md-6">
											<input class="pl-2" value="Name" id="Name" type="text" />
										</div>
										<div class="my-4 col-12 col-md-6">
											<input class="pl-2" value="Phone" id="Phone" type="phone" />
										</div>
										<div class="my-4 col-12">
											<input class="pl-2" value="Email" id="Email" type="text" />
										</div>
										<div class="my-4 col-12">
											<textarea class="pl-2" placeholder="Message" id="Message"></textarea> 
										</div>
										<div class="my-4 pr-md-5 pr-3 d-flex justify-content-end col-12">
											<a class="btn btn-lg btn-primary btn-purple" href="https://github.com/icarus612/questLandingPage">Contact</a>
										</div>
									</form>
								</div>
							</div>
		
				</section>
				
					

		</article>
		);
	}
  
}

export default QuoteMachine;
