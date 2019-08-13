import React from 'react';

export default class PriceBox extends React.Component {

	constructor(props){
	  super(props);
    }
	  render(){
		  return (
				<div className="price-card p-3">
                    <h5 id="pages" className={this.props.pages === 0 ? "d-none" : "d-block"}>
                        Basic Site Needs: <span className="float-right">$ {this.props.pages}</span>
                    </h5>
                    <h5 id="design" className={this.props.design === 0 ? "d-none" : "d-block"}>
                        Dynamic Design: <span className="float-right">$ {this.props.design}</span>
                    </h5>
                    <h5 id="programming" className={this.props.programming === 0 ? "d-none" : "d-block"}>
                        Programming: <span className="float-right">$ {this.props.programming}</span>
                    </h5>
					<hr />
					<h4 className="px-3 bold">
						Subtotal:  <span className="float-right">$ {this.props.pages + this.props.design + this.props.programming}</span>
					</h4>				
				</div>
		  );
	  }
	
  }