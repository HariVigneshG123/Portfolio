import React from 'react';
import './SideRibbon.css'

export default function SideRibbon() {
  return (
    <div className="sideRibbon">
        <img className = "sideRibbonProfilePicDim" src = {require('../Utility/Database/Pic.jpg')} alt = ""/>
        <h1> Harivignesh Gomathi Sankara Guru</h1>
        <div>
            <a href = "https://www.linkedin.com/in/harivignesh-gomathi-sankara-guru-512756169/" target="_blank" rel="noopener noreferrer">
                <img className = "sideRibbonImgs" src = {require('../Utility/Database/linkedin.png')} alt = ""/>
            </a>
            <a href = "https://github.com/HariVigneshG123" target="_blank" rel="noopener noreferrer">
                <img className = "sideRibbonImgs" src = {require('../Utility/Database/github.png')} alt = ""/>
            </a>
        </div>
    </div>
  )
}
