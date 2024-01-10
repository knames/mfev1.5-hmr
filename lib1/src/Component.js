import { formatRelative, subDays } from "date-fns";
import {useState, useEffect} from 'react';
const Component = ({ locale }) => {
	const [abc, setAbc] = useState(0);

	// just something to test if state remains on HMR
	useEffect(() => {
	  const interval = setInterval(() => {
		setAbc(abc + 1);
	  }, 1000);
	  return () => clearInterval(interval);
	}, [abc]);
	return (<div style={{ border: "5px solid darkblue" }}>
		<p>I'm a Component exposed from lib!</p>
		<p>Change me 11</p>
		{abc}
		<p>
			Using date-fn in Remote:{" "}
			{formatRelative(subDays(new Date(), 2), new Date(), { locale })}
		</p>
	</div>
);
};
export default Component;
