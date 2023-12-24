import Input from './input'

const BasicNeeds = (props) => {
	const {
		value,
		update = () => null
	}

	let updateProp = (e, def) => {
		let newSet = { ...value };
		let id = e.target.id,
			x = Number(e.target.value);
		newSet[id] = !newSet[id];
		newSet[id] ? newSet.subtotal += x : newSet.subtotal -= x;
		props.update({ ...newSet }, "basicNeeds", `${def}: Most of these pages require a basic database and editing features built in. Theses pages will need to be built dynamicly. Note - this is only for full pages. Some of these can be built as less dynamic sections.`);
	}
	return (
		<div subtotal={value.subtotal}>
			<form className="d-flex flex-column flex-wrap flex-md-row justify-content-start align-items-around">
				<h3>
					Basic Pages Needs
					</h3>
				<h5>
					Do you plan to include any of these types of pages in your site?
					</h5>
				<div className="col-12 col-md-6 d-flex flex-column justify-content-start align-items-start">

					<Input
						id='option1'
						value={220}
						label='Blog'
						type='checkbox'
						checked={value.option1}
						onChange={updateProp}
						definition='Blog Page'
					/>

					<Input
						id='option2'
						value={330}
						label='Events'
						type='checkbox'
						checked={value.option2}
						onChange={updateProp}
						definition='Events Page'
					/>
					<Input
						id='option3'
						value={220}
						label='Specials'
						type='checkbox'
						checked={value.option3}
						onChange={updateProp}
						definition='Specials Page'
					/>
					<Input
						id='option4'
						value={220}
						label={`FAQ's`}
						type='checkbox'
						checked={value.option4}
						onChange={updateProp}
						definition=''
					/>
					<Input
						id='option5'
						value={220}
						label='Staff/Board Members'
						type='checkbox'
						checked={value.option5}
						onChange={updateProp}
						definition='Staff or Board Members Page'
					/>
					<Input
						id='option6'
						value={220}
						label='News/Press Releases'
						type='checkbox'
						checked={value.option6}
						onChange={updateProp}
						definition='News or Press Release Page'
					/>
					<Input
						id='option7'
						value={330}
						label='Clients'
						type='checkbox'
						checked={value.option7}
						onChange={updateProp}
						definition='Clients Page'
					/>
					<Input
						id='option8'
						value={220}
						label='Resources or Documentation Library'
						type='checkbox'
						checked={value.option8}
						onChange={updateProp}
						definition='Resources or Documentation Library Page'
					/>
					<Input
						id='option9'
						value={330}
						label='Projects/Portfolio'
						type='checkbox'
						checked={value.option9}
						onChange={updateProp}
						definition='Projects or Portfolio Page'
					/>
					<Input
						id='option10'
						value={110}
						label='Sponsors'
						type='checkbox'
						checked={value.option10}
						onChange={updateProp}
						definition='Sponsors Page'
					/>
					<Input
						id='option11'
						value={220}
						label='Careers/Jobs'
						type='checkbox'
						checked={value.option11}
						onChange={updateProp}
						definition='Careers or Jobs Page'
					/>
					<Input
						id='option12'
						value={110}
						label='Testimonials'
						type='checkbox'
						checked={value.option12}
						onChange={updateProp}
						definition='Testimonials Page'
					/>
				</div>
			</form>
		</div>

	)

}
export default BasicNeeds;