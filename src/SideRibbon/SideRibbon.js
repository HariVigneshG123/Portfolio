import React from 'react';
import './SideRibbon.css'

export default function SideRibbon() {
  return (
    <div className="sideRibbon">
        <h1> Harivignesh Gomathi Sankara Guru</h1>
        <a href = "https://www.linkedin.com/in/harivignesh-gomathi-sankara-guru-512756169/" target="_blank" rel="noopener noreferrer">
            <img className = "sideRibbonImgs" src = {require('../Utility/Database/linkedin.png')} alt = ""/>
        </a>
        <a href = "https://github.com/HariVigneshG123" target="_blank" rel="noopener noreferrer">
            <img className = "sideRibbonImgs" src = {require('../Utility/Database/github.png')} alt = ""/>
        </a>
        <a href = "https://www.facebook.com/vignesh.shankar.9484" target="_blank" rel="noopener noreferrer">
            <img className = "sideRibbonImgs" src = {require('../Utility/Database/facebook.png')} alt = ""/>
        </a>
        <a href = "https://x.com/" target="_blank" rel="noopener noreferrer">
            <img className = "sideRibbonImgs" src = {require('../Utility/Database/twitterx.png')} alt = ""/>
        </a>
        <a href = "https://www.instagram.com/vigneshg_hari/" target="_blank" rel="noopener noreferrer">
            <img className = "sideRibbonImgs" src = {require('../Utility/Database/instagram.png')} alt = ""/>
        </a>
    </div>
  )
}
