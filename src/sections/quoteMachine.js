import React, { useState } from 'react';
import { InfoForm, Pages, BasicNeeds, BackEndNeeds, PriceBox, Button } from './components/router.js';

const QuoteMachine = (props) => {

    const [info, setInfo] = useState({
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
            sudo1: {
                options: [false, false, false, false], 
                subtotal:0
            },
            option2: false,
            sudo2: {
                options: [false, false, false], 
                subtotal:0
            },
            option3: false,
            sudo3: {
                options: [false, false, false, false], 
                subtotal:0
            },
            subtotal: 0,
            message: "",
        },
        infoForm:{
            name: "",
            email: "",
            phone: "",
            message: "",
        }
    });
    const [spot, setSpot] = useState(0);
    const [definition, setDef] = useState("");

	const next = () => {
        if (spot < 3) {
            setSpot(spot + 1);
            setDef("");
        }
    }
    
	const prev = () => {
		if (spot > 0) {
            setSpot(spot - 1);
            setDef("");
        }
    }

    const changeInfo = (newInfo, el, def) => {
        let updatedInfo = { ...info }
        updatedInfo[el] = { ...newInfo }
        setInfo(updatedInfo);
        setDef(def)
    }

    const submitForm = () => {
        window.open("/thanks", "_self");
    }

    let cards = [ 
        <Pages value={ info.pages } update={ changeInfo } />, 
        <BasicNeeds value={ info.basicNeeds } update={ changeInfo } />, 
        <BackEndNeeds value={ info.backEndNeeds } update={ changeInfo } />, 
        <InfoForm value={ info.infoForm } update={ changeInfo } submitForm={ submitForm } />
    ]

    return (
        <div className='container flex-wrap flex-row d-flex justify-content-center align-items-center'>
            <div className="col-12 col-md-8">
                <div>
                    <h4>
                        Step { spot + 1} of {cards.length}
                    </h4>
                </div>
                {cards[spot]}
                <div>
                    {definition}
                </div>
                <div className="my-4 pr-md-5 pr-3 d-flex justify-content-end col-12">
                    { spot !== 0 ? <Button size='lg' simple onClick={ prev }>Previous</Button> : null }
                    { spot !== cards.length -1 ? <Button size='lg' onClick={ next }>Next</Button> : null }
                </div>
            </div>     
            <div className="col-12 col-md-4">
                <PriceBox pages={ info.pages.subtotal } design={ info.basicNeeds.subtotal} programming={ info.backEndNeeds.subtotal } />
            </div>
        </div>
    );
}

export default QuoteMachine;