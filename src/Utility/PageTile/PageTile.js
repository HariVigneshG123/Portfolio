import React, { useState } from 'react'
import './PageTile.css'
import Content from '../Content/Content'

export default function PageTile(props) {

    const [showContent, setShowContent] = useState(false);

    // console.log("HAHA:"+JSON.stringify(props.val?.degree));

    const handleClick = () => {
        setShowContent(prevState => !prevState);
    }

    return (
        <div onClick={handleClick}>
            {
                showContent ? (
                    <div className="TileExpanded">
                        <Content HistExp={props} />
                    </div>
                ) : (
                    <div className = "Tile"> 
                        <img style = {{margin: "5%"}} className = "TileImg" src={require(`../Database/${props.val?.image}`)} alt = ""/>
                        <div className = "TileContent">
                            <div><p>{props.val?.institute || props.val?.organization || props.val?.project_name}</p></div>
                            <div><p>{props.val?.degree || props.val?.role || props.val?.tech_stack}</p></div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
