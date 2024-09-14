import React from 'react'
import hero from '../../assets/hero.png'
import digi from '../../assets/digi.png'
import Cards, { Choose, Clients, Expertise } from '../Card/Cards'
import heroabout from '../../assets/hero-about.png'

//Home page pe jo About section used hua h ushka code h yeah
const HeroAbout = () => {
    return (
        <div>
            <div class="relative flex flex-col items-center mx-auto lg:flex-row-reverse  lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
                <div class="w-full h-64 lg:w-1/2 lg:h-auto">
                    <img
                        class="h-full w-full object-cover"
                        src={heroabout}
                        alt="Winding mountain road"
                    />
                </div>

                <div class="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
                    <div class="flex flex-col p-12 md:px-16">
                        <h2 class="text-2xl font-medium uppercase text-amber-600 lg:text-4xl">
                            FNA Marketing
                        </h2>
                        <p class="mt-4">
                            FNA Marketing Solutions is a digital marketing and
                            IT solutions company based in Mohali, Punjab. We
                            specialize in providing various services to help
                            businesses grow their online presence and improve
                            their IT infrastructure. Here are the key services
                            they offer:
                        </p>

                        <div class="mt-8">
                            <a
                                href="#"
                                class="inline-block w-full text-center text-lg font-medium text-gray-100 bg-gradient-to-r from-red-300 to-amber-400 border-none py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48"
                            >
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
//Home page pe  why need digital marketing section ka code h yeah
const DigitalMarketing = () => {
    return (
        <div class=" dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
            <div class="container mx-auto px-6 flex relative py-16">
                <div class="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                    <img src={digi} class="max-w-xs md:max-w-sm m-auto" />
                </div>
                <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                    <span class="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
                    <h1 class="font-bebas-neue uppercase text-3xl sm:text-4xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                        Why you need digital marketing ?
                    </h1>
                    <p class="text-sm sm:text-base text-gray-700 dark:text-white">
                        In order to scale new customer acquisition and retention
                        for e-commerce brands, we work across the entire
                        customer journey. Our team has a successful track record
                        of helping brands scale profitably based on
                        high-performing strategies.
                    </p>
                    <div class="flex mt-8">
                        <a
                            href="#"
                            class="uppercase py-2 px-4 rounded-lg bg-gradient-to-r from-red-300 to-amber-400 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400"
                        >
                            Know More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

//Numbering section in home page
const Numbering = () => {
    return (
        <div class="bg-gray-200 w-full dark:bg-gray-700 flex justify-center items-center">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:py-24 lg:px-8">
                <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                    Our service statistics
                </h2>
                <div class="grid grid-cols-1 gap-5 sm:grid-cols-5 mt-4">
                    <div class="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900">
                        <div class="px-4 py-5 sm:p-6">
                            <dl>
                                <dt class="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">
                                    Total Project
                                </dt>
                                <dd class="mt-1 text-3xl leading-9 font-semibold text-indigo-600 dark:text-indigo-400">
                                    100+
                                </dd>
                            </dl>
                        </div>
                    </div>
                    <div class="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900">
                        <div class="px-4 py-5 sm:p-6">
                            <dl>
                                <dt class="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">
                                    Clients
                                </dt>
                                <dd class="mt-1 text-3xl leading-9 font-semibold text-indigo-600 dark:text-indigo-400">
                                    100+
                                </dd>
                            </dl>
                        </div>
                    </div>
                    <div class="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900">
                        <div class="px-4 py-5 sm:p-6">
                            <dl>
                                <dt class="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">
                                    Total Years
                                </dt>
                                <dd class="mt-1 text-3xl leading-9 font-semibold text-indigo-600 dark:text-indigo-400">
                                    15+
                                </dd>
                            </dl>
                        </div>
                    </div>
                    <div class="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900">
                        <div class="px-4 py-5 sm:p-6">
                            <dl>
                                <dt class="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">
                                    Support Available
                                </dt>
                                <dd class="mt-1 text-3xl leading-9 font-semibold text-indigo-600 dark:text-indigo-400">
                                    24/7
                                </dd>
                            </dl>
                        </div>
                    </div>
                    <div class="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900">
                        <div class="px-4 py-5 sm:p-6">
                            <dl>
                                <dt class="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">
                                    Compaign Success rate
                                </dt>
                                <dd class="mt-1 text-3xl leading-9 font-semibold text-indigo-600 dark:text-indigo-400">
                                    95%
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Hero = () => {
    return (
        <div>
            <div class=" dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
                <div class="container mx-auto px-6 flex relative py-16 mt-16">
                    <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                        <span class="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
                        <h1 class="font-bebas-neue uppercase text-3xl sm:text-4xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                            Do you want to do the best business online?
                        </h1>
                        <p class="text-sm sm:text-base text-gray-700 dark:text-white">
                            FNA has done affiliating marketing for many clients
                            and also through its personal blog website.
                        </p>
                        <div class="flex mt-8">
                            <a
                                href="#"
                                class="uppercase py-2 px-4 rounded-lg bg-gradient-to-r from-red-300 to-amber-400 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400"
                            >
                                Know More
                            </a>
                            <a
                                href="#"
                                class="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-amber-400 text-amber-500 dark:text-white hover:bg-pink-500 hover:text-white text-md"
                            >
                                About Us
                            </a>
                        </div>
                    </div>
                    <div class="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                        <img src={hero} class="max-w-xs md:max-w-sm m-auto" />
                    </div>
                </div>
            </div>
            <div class=" dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
                <div class="container mx-auto px-6 flex relative py-16">
                    <HeroAbout />
                </div>
            </div>

            <div class=" dark:bg-gray-800 flex relative z-20 mt-10 items-center overflow-hidden">
                <div class="container px-6  py-16">
                    <h1 class="font-bebas-neue text-xl px-24 sm:text-3xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                        The Highlighting Part Of
                        <br /> Our Solution
                    </h1>
                    <Cards />
                </div>
            </div>
            <DigitalMarketing />
            <Choose />
            <Expertise />
            <Clients />
            <Numbering />
        </div>
    )
}

export default Hero
