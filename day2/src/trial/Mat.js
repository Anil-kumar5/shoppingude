import React from 'react';
import Def from './Def';
import Trial from './trial';
import MultiRangeSlider from 'multi-range-slider-react';
function Mat() {
    return (
        <div>
            <Trial>
                <Def/>
                <MultiRangeSlider min={0}
			max={100}
			// step={5}
			ruler={false}
			label={true}
			preventWheel={false}
            minValue={25}
            maxValue={100}
            style={{border:'none'}}
            />
                </Trial>
        </div>
    )
}

export default Mat
