import React from 'react';

const PriceBox = (props) =>  {
	return (
		<div className="price-card p-3">
			<h5 id="pages" className={props.pages === 0 ? "d-none" : "d-block"}>
					Basic Site Needs: <span className="float-right">$ {props.pages}</span>
			</h5>
			<h5 id="design" className={props.design === 0 ? "d-none" : "d-block"}>
					Dynamic Design: <span className="float-right">$ {props.design}</span>
			</h5>
			<h5 id="programming" className={props.programming === 0 ? "d-none" : "d-block"}>
					Programming: <span className="float-right">$ {props.programming}</span>
			</h5>
			<hr />
			<h4 className="px-3 bold">
				Subtotal:  <span className="float-right">$ {props.pages + props.design + props.programming}</span>
			</h4>				
		</div>
	);
}
	
export default PriceBox