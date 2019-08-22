import React from 'react';
import { InfoForm, Pages, BasicNeeds, BackEndNeeds, PriceBox, Button } from './components/router.js';

class QuoteMachine extends React.Component {

	constructor(props){
		super(props);
		this.state = {
            pages: {
                siteType: "",
                subtotal: 0,
                design: 0,
                pages: 0,
            },
            basicNeeds: {
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
            },
            backEndNeeds: {
                option1: false,
                sudo1: {options: [false, false, false, false], subtotal:0},
                option2: false,
                sudo2: {options: [false, false, false], subtotal:0},
                option3: false,
                sudo3: {options: [false, false, false, false], subtotal:0},
                subtotal: 0,
                message: "",
            },
            infoForm:{
                name: "",
                email: "",
                phone: "",
                message: "",
            },
            spot: 0,
            definition: "",
		}
		this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.storeInfo = this.storeInfo.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
	next(){
        if (this.state.spot < 3) {
            this.setState({spot: this.state.spot+1, definition: ""})
        }
	}
	prev(){
		if (this.state.spot > 0) {
            this.setState({spot: this.state.spot-1, definition: ""})
        }
    }
    storeInfo(info, el, def){
        this.setState({[el] : {...info}, definition: def});
    }
    submitForm(){
        window.open("/thanks", "_self");
    }


	render(){
        let cards = [ <Pages update={this.storeInfo} value={this.state.pages}/>, <BasicNeeds value={this.state.basicNeeds} update={this.storeInfo} />, <BackEndNeeds value={this.state.backEndNeeds} update={this.storeInfo} />, <InfoForm value={this.state.infoForm} update={this.storeInfo} submitForm={this.submitForm}/>]

		return (

            <div className='container flex-wrap flex-row d-flex justify-content-center align-items-center'>
                <div className="col-12 col-md-8">
                    <div>
                        <h4>
                            Step {this.state.spot + 1} of {cards.length}
                        </h4>
                    </div>
                    {cards[this.state.spot]}
                    <div>
                        {this.state.definition}
                    </div>
                    <div className="my-4 pr-md-5 pr-3 d-flex justify-content-end col-12">
                        {this.state.spot !== 0 ? <Button size='lg' simple onClick={this.prev}>Previous</Button> : null}
                        
                        {this.state.spot !== cards.length -1 ? <Button size='lg' onClick={this.next}>Next</Button> : null}

                    </div>
                </div>     
                <div className="col-12 col-md-4">
                    <PriceBox pages={this.state.pages.subtotal} design={this.state.basicNeeds.subtotal} programming={this.state.backEndNeeds.subtotal} />
                </div>
            </div>
      
		);
	}
  
}

export default QuoteMachine;