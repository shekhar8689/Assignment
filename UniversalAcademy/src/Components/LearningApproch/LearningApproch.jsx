import React from 'react'
import LearningApproachItem from './LearningApprochItem'
import './LearningApproch.css'
import Button from '../../Button'
import iconOne from '../../Assets/LAIconOne.png'
import iconTwo from '../../Assets/LAIconTwo.png'
import iconThree from '../../Assets/LAIconThree.png'
import iconFour from '../../Assets/LAIconFour.png'
import iconFive from '../../Assets/LAIconFive.png'
import pbutton from '../../Assets/RightArrowLogo.png'
import bbutton from '../../Assets/arrow.png'


const approaches = [
    {
        icon: iconOne,
        description: 'Classes are conducted during school hours on school premises',
    },
    {
        icon: iconTwo,
        description: 'ISC curriculum is covered fully with competitive exams',
    },
    {
        icon: iconThree,
        description: 'Saves precious time for self-study',
    },
    {
        icon: iconFour,
        description: 'Experienced faculty powered by PACE IIT & MEDICAL',
    },
    {
        icon: iconFive,
        description: 'Smaller batch size for personalized attention',
    }
    
]

function LearningApproch() {
    return (
        <>
        <img className='LA-Y-arrow' src={pbutton} alt="downarrow" />
        <div className="learning-approach">
            <h3>OUR </h3>
            <h2>LEARNING APPROACH</h2>
            <div className="learning-approach-container">
                {approaches.map((approach, index) => (
                    <LearningApproachItem
                        key={index}
                        icon={approach.icon}
                        description={approach.description}
                    />
                ))}
            </div>
            
            <Button icon={bbutton} style={{backgroundColor: '#FDDF49',color:'#292967',marginLeft:'42%',marginBottom:'10px'}}>Enquire Now</Button>
        </div>
        </>
    )
}

export default LearningApproch