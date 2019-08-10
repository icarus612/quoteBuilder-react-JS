import React from 'react';

export default class BackEndNeeds extends React.Component{
    constructor(props){
        super(props);
        props=this.props.value;
        this.state= {
            option1: props.option1,
            option2: props.option2,
            option3: props.option3,
            subtotal: 0,
        }
        this.update = this.update.bind(this);
    }
    componentWillUnmount(){
		this.props.onChange(this.state)
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

            <form className="d-flex flex-column flex-wrap justify-content-center align-items-around">
                <h3>Back End Needs</h3>
                <div>
                    <input className="m-2" type="checkbox" id="option1" value={2000} onClick={this.update} checked={this.state.option1} />
                    <label >
                        Customer Login
                    </label>
                </div>
                <div>
                    <input className="m-2" type="checkbox" id="option2" value={1500} onClick={this.update} checked={this.state.option2} />
                    <label>
                        Employee Login 
                    </label>
                </div>
                <div>
                    <input className="m-2" type="checkbox" id="option6" value={2000} onClick={this.update} checked={this.state.option3} />
                    <label>
                        eCommerce
                    </label>
                </div>
            </form>
        )
    }
}
  