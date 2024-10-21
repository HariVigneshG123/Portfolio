import React from 'react'
import PageTile from '../Utility/PageTile/PageTile'
import './Projects.css'
import HistDB from '../Utility/Database/EduExp.json'

export default function Projects() {
  return (
    <div>
        <h2>Projects</h2>
        <div className="projects">
            <PageTile val = {HistDB["Implementation of MuCOT"]}/>
            <PageTile val = {HistDB["Voice-Controlled Wheelchair"]}/>
            <PageTile val = {HistDB["Sporting Almanac"]}/>
            <PageTile val = {HistDB["Cardiac Problem Prediction"]}/>
            <PageTile val = {HistDB["Shop Floor Inventory Management System"]}/>
            <PageTile val = {HistDB["Shopping Cart"]}/>
        </div>
    </div>
  )
}

// "tech_stack": ["Python", "PyTorch", "mBERT"],
