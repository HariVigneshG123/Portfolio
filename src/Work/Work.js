import React from 'react'
import PageTile from '../Utility/PageTile/PageTile'
import './Work.css'
import HistDB from '../Utility/Database/EduExp.json'

export default function Work() {
  return (
    <div>
        <h2>Work</h2>
        <div className='work'>
            <PageTile val = {HistDB["Bayer AG (Contract)"]}/>
            <PageTile val = {HistDB["Interco Trading Co."]}/>
            <PageTile val = {HistDB["TATA Consultancy Services"]}/>
        </div>
    </div>
  )
}
