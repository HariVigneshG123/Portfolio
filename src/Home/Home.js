import React from 'react';
import './Home.css'

function Home() {
    const large = "45px";
    const summaryPara1 = "I’m Hari – a passionate software engineer with a love for creating intuitive and impactful applications. I hold a Master’s in Computer Science from George Mason University and a Bachelor’s in Electrical and Electronics Engineering from Thiagarajar College of Engineering."
    const summaryPara2 = "Beyond coding, I enjoy playing football, karting, driving, and exploring new places. Whether I’m tackling complex development challenges or planning my next adventure, I bring curiosity and enthusiasm to everything I do."
    return (
        <div className='Home'>
            <div className='HomeBody'>
                <h1 style={{fontSize: large}}>Harivignesh Gomathi Sankara Guru</h1>
                <div className='Bio'>
                    <p>
                        <i>
                        {"Wassup ... ????"}
                        <br />
                        <br />
                        {summaryPara1}
                        <br />
                        <br />
                        {summaryPara2}
                        </i>
                    </p>
                </div>
            </div>
            <img className = "Pic" src = {require('../Utility/Database/Pic.jpg')} alt = ""/>
        </div>
    )
}

export default Home