import React, { useState } from 'react'
import '../styles/results.css'
import data from '../data.json'
import ReactionIcon from './assets/images/icon-reaction.svg'
import MemIcon from "./assets/images/icon-memory.svg"
import VerbIcon from "./assets/images/icon-verbal.svg"
import VisIcon from "./assets/images/icon-visual.svg"



function Results() {
    const [AveSc,setAveSc]=useState(0)

    function counter(obj){
        let count=0
        for(let i=0;i<data.length;i++){
            count+=data[i].score
        }
        let average=count/data.length
        return average
    }

    let analytics=data.map(i=>
    <div className='IndivResult' key={i.category}>
        <div className='logo'><img alt='icons' src={(i.category==='Reaction')?ReactionIcon:(i.category==='Memory')?MemIcon:(i.category==='Verbal')?VerbIcon:VisIcon}></img></div> 
        <div className='Desc'>{i.category}</div> 
        <div className='Number'>{i.score}/100</div> 
    </div>)


  return (
    <div className='container'>
        <div className='AverageScore'>{Math.floor(counter())}<p>{(counter()>50)?'Great':'Ok'}</p></div>
        <div className='Individual'>
            {analytics}
            <div className='ContBtn'><button>Continue</button></div>
        </div>
    </div>
  )
}

export default Results