import React from 'react';


const validation = (props) => {

	let validationMsg = "";

	if (props.inputLength!= 0 && props.inputLength <= 5) {
		validationMsg = "Text is too short";
	} else if (props.inputLength > 5 ){
		validationMsg = "Text is long enough";
	}

	return (
		<div>
			<p>{validationMsg}</p>
		</div>
	);

};

export default validation;