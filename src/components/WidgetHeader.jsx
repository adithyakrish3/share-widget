import React from 'react';
import ShareToWeb from '../Icons/shareToWeb.svg';

const WidgetHeader = () => {
	return (
		<div style={{
			borderBottom: '1px solid #E6E7EB',
			paddingBottom: '15px',
			display: 'flex',
			justifyContent: 'space-between',
			width: '100%'
		}}>
			<div style={{
				display: 'flex',
				justifyContent: 'flex-start',
			}}>
				<img src={ShareToWeb} alt="Share To Web" />
				<div style={{ marginLeft: '15px' }}>
					<div className="text">Share to Web</div>
					<div className="subtext">Publish and share link with anyone</div>
				</div>
			</div>
			<div>
				Switch
			</div>
		</div>
	)
}

export default WidgetHeader;