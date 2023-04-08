import 'jsvectormap/dist/css/jsvectormap.css';

// @ts-ignore
import jsVectorMap from 'jsvectormap';
import { useLayoutEffect } from 'react';

const MapOne = () => {
  // "useLayoutEffect can hurt performance" lick my balls
	useLayoutEffect(() => {
		new jsVectorMap({
			selector: '#mapOne',
			map: 'us_aea_en',
			zoomButtons: true,

			regionStyle: {
				initial: {
					fill: '#C8D0D8',
				},
				hover: {
					fillOpacity: 1,
					fill: '#3056D3',
				},
			},
			regionLabelStyle: {
				initial: {
					fontFamily: 'Satoshi',
					fontWeight: 'semibold',
					fill: '#fff',
				},
				hover: {
					cursor: 'pointer',
				},
			},

			labels: {
				regions: {
					render(code: string) {
						return code.split('-')[1];
					},
				},
			},
		});
	}, []);

	return (
		<div className="col-span-12 rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-7">
			<h4 className="mb-2 text-xl font-semibold text-black dark:text-white">Region labels</h4>
			<div id="mapOne" className="mapOne map-btn h-90"></div>
		</div>
	);
};

export default MapOne;
