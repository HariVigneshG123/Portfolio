import React from 'react'
import PageTile from '../Utility/PageTile/PageTile'
import './Education.css'
import HistDB from '../Utility/Database/EduExp.json'

export default function Education() {
  return (
    <div>
    <h2> Education </h2>
    <div className='education'>
        {/* <PageTile institute = "GMU" year = "2021 - 2023" skills = "a, b, c"/>
        <PageTile institute = "TCE" year = "2021 - 2023" /> */}
        <PageTile val = {HistDB["George Mason University"]}/>
        <PageTile val = {HistDB["Thiagarajar College of Engineering"]}/>
    </div>
    </div>
  )
}
