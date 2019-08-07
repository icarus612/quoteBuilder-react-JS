import React from 'react';

export default class BackEndNeeds extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            option1: false,
            option2: false,
            option3: false,
            option4: false,
            option5: false,
            option6: false,
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

            <form className="d-flex flex-column flex-wrap flex-md-row justify-content-center align-items-around">
                <h3>Back End Needs</h3>
                <div className="my-4 col-12 col-md-6">
                    <input className="pl-2" type="radio" id="option1" value={100} onClick={this.update} checked={this.state.option1} />
                    <label>

                    </label>
                    <input className="pl-2" type="radio" id="option2" value={100} onClick={this.update} checked={this.state.option2} />
                    <label>

                    </label>
                    <input className="pl-2" type="radio" id="option3" value={100} onClick={this.update} checked={this.state.option3} />
                        <label>

                        </label>
                    <input className="pl-2" type="radio" id="option4" value={100} onClick={this.update} checked={this.state.option4} />
                        <label>

                        </label>
                    <input className="pl-2" type="radio" id="option5" value={100} onClick={this.update} checked={this.state.option5} />
                        <label>

                        </label>
                    <input className="pl-2" type="radio" id="option6" value={100} onClick={this.update} checked={this.state.option6} />
                    <label>
                        
                    </label>

                </div>
            </form>
        )
    }
}
  