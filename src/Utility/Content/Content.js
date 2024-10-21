import React from 'react'
import './Content.css'

export default function Content(props) {

  // console.log("HAHA:"+JSON.stringify(props.HistExp.val.institute));

  return (
    <div className = "contentview">
      <h3>{props.HistExp.val?.institute || props.HistExp.val?.organization || props.HistExp.val?.project_name}</h3>
      <p>{props.HistExp.val.years}</p>
      <p>{props.HistExp.val.degree || props.HistExp.val.role || props.HistExp.val?.description }</p>
      <p>{props.HistExp.val.location}</p>
      <p>{(props?.HistExp.val.skills ? "Skills: " + props.HistExp.val.skills : "") 
        || (props?.HistExp.val.responsibilities ? "Responsibilities: " + props.HistExp.val.responsibilities : "")
        || (props?.HistExp.val.tech_stack ? "Tech Stack: " + props.HistExp.val.tech_stack : "")}</p>
      <p>{props.HistExp.val.GPA}</p>
    </div>
  )
}
