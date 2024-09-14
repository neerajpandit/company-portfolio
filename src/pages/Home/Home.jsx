import React from 'react'
import Hero from '../../components/Hero/Hero'
import Contact from '../../components/Contact/Contact'

const Home = () => {
    return (
        <div>
            <div className="relative min-h-screen bg-white overflow-hidden">
                {/* Background gradient circle */}
                <div className="absolute top-[-10rem] right-[-10rem] w-[40rem] h-[40rem] bg-gradient-to-r from-red-300 to-amber-400 rounded-full "></div>
                <div className="z-10 relative">
                    <Hero />
                    <Contact />
                </div>
            </div>
        </div>
    )
}

export default Home
