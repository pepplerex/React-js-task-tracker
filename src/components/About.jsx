import React from 'react'
import {Link, useParams} from 'react-router-dom'

const About = () => {
    const {id} = useParams()
    return (
        <>
            <h4>Version 1.0.0</h4>
            <Link to="/">Back</Link>
        </>
    )
}

export default About