import React, { useEffect, useState } from 'react'
import Stepper from 'react-stepper-horizontal/lib/Stepper'

const Levels = ({ levelNames, quizLevel }) => {

    const [levels, setLevels] = useState([])



    useEffect(() => {
        const quizSteps = levelNames.map(level => ({ title: level.toUpperCase()}));
        setLevels(quizSteps)
    }, [levelNames]);

    return (
        <div className='levelsContainer' style={{background: 'transparent'}}>
                <Stepper
                    steps={ levels }
                    activeStep={ quizLevel }
                    circleTop={0}
                    activeTitleColor={'#d31017'}
                    activeColor={'#d31017'}
                    completeTitleColor={'#EAE8E8'}
                    titleFontSize={'18px'}

                />
        </div>
    )
}

export default React.memo(Levels)