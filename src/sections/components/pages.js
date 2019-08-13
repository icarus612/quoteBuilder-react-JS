import React from 'react';
import Input from "./input.js";
const Pages = (props) => {
	let value = props.value;
    let update = (e) =>{
		let option = `${e.target.id}`; 
		let val = Number(e.target.value);
        props.update({
			siteType: option, 
			design: val,
			subtotal: (value.pages * 100) + val,
			pages: value.pages
		}, "pages")
	}
	let pageNumber = (e) => {
		let val = Number(e.target.value)
		props.update({
			siteType: value.siteType,
			pages: val, 
			design: value.design,
			subtotal: value.design + (val * 100),
		}, "pages")
	}
	
		return (

			<form className="d-flex flex-column flex-wrap flex-row justify-content-center align-items-around">
				<h3 className="mb-3">Lets Start With Pages</h3>
				<div className="col-12 align-items-center">
				<Input 
						id='basic'
						value={240} 
						label='Fast Design with Less Consulting & Meetings'
						type='radio'
						checked={value.siteType === "basic"}
						onChange={update}
					/>
		
				</div>
				<div className="col-12 align-items-center">
					<Input 
						id='custom'
						value={600} 
						label='Custom Website with Consultative Process'
						type='radio'
						checked={value.siteType === "custom"}
						onChange={update}
					/>
				</div>
				<div className="my-4 col-12 d-flex flex-row align-items-center justify-content-start">
		
					<Input 
						id='pages'
						value={value.pages} 
						label='How many pages will you want custom built?'
						type='number'
						step='1'
						min='0'
						max='1000'
						onChange={pageNumber}
						className='page-num'
						required
						labelBefore
					/>
				</div>
				
		
			</form>
		)
	
}
export default Pages;