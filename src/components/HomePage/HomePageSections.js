import React from 'react'
import {Link} from 'react-router-dom'

const HomePageSections = props => {
    return (
        <section 
            className={props.bgImg}
            // style ={ { backgroundImage: `url(${props.bgImg})` } }
        >
            <h2 className="section-title">{props.title}</h2>
            {props.noBtn ? '' : <Link to={props.linkTo} className={props.btnActive ? "btn" : "btn not-ready"}><span>{props.buttonText}</span></Link>}
            <p className="section-info">{props.sectionInfo}</p>
        </section>
    )
}

export default HomePageSections
