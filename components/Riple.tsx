import { useState, useEffect } from 'react';

// @ts-ignore
const Ripple = ({ x, y, duration = 600 }) => {
	const [rippleStyle, setRippleStyle] = useState({});

	useEffect(() => {
		const size = Math.max(window.innerWidth, window.innerHeight);
		const newRippleStyle = {
			top: y - size / 2,
			left: x - size / 2,
			width: size,
			height: size,
			transitionDuration: `${duration}ms`,
		};
		setRippleStyle(newRippleStyle);
	}, [x, y, duration]);

	return <span className="ripple" style={rippleStyle}></span>;
};

export default Ripple;