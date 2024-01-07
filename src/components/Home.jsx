import React from 'react'
import AddTask from './AddTask'
import Tasks from './tasks'
import Footer from './Footer'

const Home = () => {
    return (
        <>
            <AddTask />
            <Tasks />
            <Footer />
        </>
    )
}

export default Home