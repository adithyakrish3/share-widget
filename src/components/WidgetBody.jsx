import React, { useState, useEffect } from 'react';

const WidgetBody = () => {
	const [text, setText] = useState('')

	const handleChange = (e) => {
		setText(e.target.value)
	}

	return (
		<div style={{
			padding: '10px 0px',
			display: 'flex',
			justifyContent: 'flex-start'
		}}>
			<input
				className="body-text"
	            type="text"
	            value={text}
	            onChange={handleChange}
	            placeholder={'People, emails, groups'}
	         />
	         <div className="invite-button">
	         	Invite
	         </div>
		</div>
	)
}

export default WidgetBody;