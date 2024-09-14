import React from 'react'
import heroabout from '../../assets/hero-about.png'

//yeah why choose us ka hero section pe jo code h ushka h
export const Choose = () => {
    return (
        <div className="bg-black">
            <section
                id="features"
                className="relative block px-6 py-10 md:py-20 md:px-10 border-t border-b border-neutral-900 bg-neutral-900/30"
            >
                <div className="relative mx-auto max-w-5xl text-center">
                    <span className="text-gray-400 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
                        Why choose us
                    </span>
                    <h2 className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
                        Make your marketing more effective
                    </h2>
                    <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
                        Marketing effectiveness with FNA Marketing services
                        innovative strategies, driving better engagement, higher
                        conversions, and measurable results.
                    </p>
                </div>

                <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
                        <div
                            className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
                            style={{
                                backgroundImage:
                                    'linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)',
                                borderColor: 'rgb(93, 79, 240)',
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-color-swatch"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2" />
                                <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9" />
                                <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12" />
                                <line x1="17" y1="17" x2="17" y2="17.01" />
                            </svg>
                        </div>
                        <h3 className="mt-6 text-gray-400">Customizable</h3>
                        <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                            Harness the power of advanced analytics to gain a
                            deep understanding of your audience, ensuring your
                            campaigns are strategically targeted and highly
                            effective.
                        </p>
                    </div>

                    <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
                        <div
                            className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
                            style={{
                                backgroundImage:
                                    'linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)',
                                borderColor: 'rgb(93, 79, 240)',
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-bolt"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3" />
                            </svg>
                        </div>
                        <h3 className="mt-6 text-gray-400">Fast Performance</h3>
                        <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                            Quickly analyze data to target your audience
                            effectively and fine-tune campaigns in real-time.
                            Monitor and adjust campaigns instantly for maximum
                            ROI and alignment with your goals.
                        </p>
                    </div>

                    <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
                        <div
                            className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
                            style={{
                                backgroundImage:
                                    'linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)',
                                borderColor: 'rgb(93, 79, 240)',
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-tools"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4" />
                                <line x1="14.5" y1="5.5" x2="18.5" y2="9.5" />
                                <polyline points="12 8 7 3 3 7 8 12" />
                                <line x1="7" y1="8" x2="5.5" y2="9.5" />
                                <polyline points="16 12 21 17 17 21 12 16" />
                                <line x1="16" y1="17" x2="14.5" y2="18.5" />
                            </svg>
                        </div>
                        <h3 className="mt-6 text-gray-400">Fully Featured</h3>
                        <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                            Dive deep into advanced analytics to uncover
                            actionable insights and understand your audience's
                            behavior. Our data-driven approach ensures precision
                            in targeting and strategy development.
                        </p>
                    </div>
                </div>

                <div
                    className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"
                    style={{
                        backgroundImage:
                            'linear-gradient(to right top, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%)',
                        borderColor: 'rgba(92, 79, 240, 0.2)',
                    }}
                />
                <div
                    className="absolute bottom-0 right-0 z-0 h-1/3 w-full"
                    style={{
                        backgroundImage:
                            'linear-gradient(to left top, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%)',
                        borderColor: 'rgba(92, 79, 240, 0.2)',
                    }}
                />
                <div class="mt-10 rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg">
                    <div class="flex bg-white p-7 rounded-md">
                        <div class="flex-1">
                            <h1 class="font-bold text-4xl mb-2">
                                Social Media Marketing
                            </h1>
                            <p className=" mt-10 text-xl">
                                Social Media Marketing enhances your brand
                                visibility, drives engagement, and boosts
                                conversions through strategic, targeted
                                campaigns.In order to make sure your website is
                                user friendly and optimized for Google’s
                                algorithm, our on-site optimization experts
                                clean up the code and copy.
                            </p>
                        </div>
                        <div class="flex-shrink-0 hidden md:block">
                            <img
                                class="h-80 w-80 object-contain"
                                src={heroabout}
                                alt="Social Media Marketing"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

//yeah our expertise wale section ka code h
export const Expertise = () => {
    return (
        <div class=" mt-20 container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
            <h2 class="mb-10  text-4xl text-center font-extrabold leading-tight text-gray-900">
                Our Expertise
            </h2>

            <div class="w-full">
                <div class="flex flex-col w-full mb-10 sm:flex-row">
                    <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                        <div class="relative h-full ml-0 mr-0 sm:mr-10">
                            <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                            <div class="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                                <div class="flex items-center -mt-1">
                                    <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">
                                        APP Development
                                    </h3>
                                </div>
                                <p class="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">
                                    ------------
                                </p>
                                <p class="mb-2 text-gray-600">
                                    At FNA Marketing services, we specialize in
                                    creating innovative, user-centric mobile and
                                    web applications tailored to meet the unique
                                    needs of our clients. Our app development
                                    process combines cutting-edge technology
                                    with a deep understanding of user experience
                                    to deliver seamless, high-performance
                                    solutions. From ideation and design to
                                    development and deployment, we ensure that
                                    each application is scalable, secure, and
                                    crafted to provide exceptional value and
                                    engagement.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="w-full sm:w-1/2">
                        <div class="relative h-full ml-0 md:mr-10">
                            <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
                            <div class="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                                <div class="flex items-center -mt-1">
                                    <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">
                                        Website Development
                                    </h3>
                                </div>
                                <p class="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">
                                    ------------
                                </p>
                                <p class="mb-2 text-gray-600">
                                    we excel in building dynamic, visually
                                    appealing websites that enhance your online
                                    presence and drive business growth. Our
                                    website development services encompass
                                    everything from design and user experience
                                    to robust coding and deployment. We focus on
                                    creating responsive, SEO-optimized websites
                                    that provide an intuitive user experience
                                    across all devices. With a commitment to
                                    quality and innovation, we deliver tailored
                                    solutions that not only look great but also
                                    perform exceptionally in today’s digital
                                    landscape.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col w-full mb-5 sm:flex-row">
                    <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                        <div class="relative h-full ml-0 mr-0 sm:mr-10">
                            <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                            <div class="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                                <div class="flex items-center -mt-1">
                                    <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">
                                        Project Audit
                                    </h3>
                                </div>
                                <p class="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">
                                    ------------
                                </p>
                                <p class="mb-2 text-gray-600">
                                    A Project Audit is a formal review of a
                                    project, which is intended to assess the
                                    extent up to which project management
                                    standards are being upheld.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                        <div class="relative h-full ml-0 mr-0 sm:mr-10">
                            <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                            <div class="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                                <div class="flex items-center -mt-1">
                                    <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">
                                        SEO Services
                                    </h3>
                                </div>
                                <p class="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">
                                    ------------
                                </p>
                                <p class="mb-2 text-gray-600">
                                    we offer comprehensive SEO services designed
                                    to boost your online visibility and drive
                                    targeted traffic to your website. Our
                                    approach combines technical expertise with
                                    strategic insights to enhance your search
                                    engine rankings and improve your website's
                                    performance. From keyword research and
                                    on-page optimization to link building and
                                    content strategy, we focus on delivering
                                    measurable results that increase your
                                    brand’s reach and relevance in search
                                    engines. Partner with us to elevate your
                                    digital presence and achieve sustainable
                                    growth through effective SEO.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="w-full sm:w-1/2">
                        <div class="relative h-full ml-0 md:mr-10">
                            <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
                            <div class="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                                <div class="flex items-center -mt-1">
                                    <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">
                                        Digital Marketing
                                    </h3>
                                </div>
                                <p class="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">
                                    ------------
                                </p>
                                <p class="mb-2 text-gray-600">
                                    {' '}
                                    we provide holistic digital marketing
                                    solutions designed to elevate your brand and
                                    drive impactful results. Our expertise spans
                                    across various digital channels, including
                                    social media, email marketing, content
                                    creation, and paid advertising. We craft
                                    data-driven strategies tailored to your
                                    business goals, ensuring effective
                                    engagement with your target audience and
                                    maximizing your return on investment. From
                                    campaign management to performance analysis,
                                    our team is dedicated to enhancing your
                                    online presence and fostering growth in the
                                    competitive digital landscape.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

//yeah hmare clients wala section h
export const Clients = () => {
    return (
        <section id="testimonies" class="py-20 bg-slate-900">
            <div class="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
                <div class="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
                    <div class="mb-12 space-y-5 md:mb-16 md:text-center">
                        <div class="inline-block px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg md:text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
                            Words from Others
                        </div>
                        <h1 class="mb-5 text-3xl font-semibold text-white md:text-center md:text-5xl">
                            It's not just us.
                        </h1>
                        <p class="text-xl text-gray-100 md:text-center md:text-2xl">
                            Here's what others(Our Clients ) have to say about
                            us.
                        </p>
                    </div>
                </div>

                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    <ul class="space-y-8">
                        <li class="text-sm leading-6">
                            <div class="relative group">
                                <div class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                                <a
                                    href="https://twitter.com/kanyewest"
                                    class="cursor-pointer"
                                >
                                    <div class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                        <div class="flex items-center space-x-4">
                                            <img
                                                src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                                                class="w-12 h-12 bg-center bg-cover border rounded-full"
                                                alt="Kanye West"
                                            />
                                            <div>
                                                <h3 class="text-lg font-semibold text-white">
                                                    John Doe
                                                </h3>
                                                <p class="text-gray-500 text-md">
                                                    {' '}
                                                    Entrepreneur
                                                </p>
                                            </div>
                                        </div>
                                        <p class="leading-normal text-gray-300 text-md">
                                            Their seo services is good.
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li class="text-sm leading-6">
                            <div class="relative group">
                                <div class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                                <a
                                    href="https://twitter.com/tim_cook"
                                    class="cursor-pointer"
                                >
                                    <div class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                        <div class="flex items-center space-x-4">
                                            <img
                                                src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                                                class="w-12 h-12 bg-center bg-cover border rounded-full"
                                                alt="Tim Cook"
                                            />
                                            <div>
                                                <h3 class="text-lg font-semibold text-white">
                                                    Tim Cook
                                                </h3>
                                                <p class="text-gray-500 text-md">
                                                    CEO of Apple
                                                </p>
                                            </div>
                                        </div>
                                        <p class="leading-normal text-gray-300 text-md">
                                            Diam quis enim lobortis scelerisque
                                            fermentum dui faucibus in ornare.
                                            Donec pretium vulputate sapien nec
                                            sagittis aliquam malesuada bibendum.
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li class="text-sm leading-6">
                            <div class="relative group">
                                <div class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                                <a
                                    href="https://twitter.com/kanyewest"
                                    class="cursor-pointer"
                                >
                                    <div class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                        <div class="flex items-center space-x-4">
                                            <img
                                                src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                                                class="w-12 h-12 bg-center bg-cover border rounded-full"
                                                alt="Kanye West"
                                            />
                                            <div>
                                                <h3 class="text-lg font-semibold text-white">
                                                    Kanye West
                                                </h3>
                                                <p class="text-gray-500 text-md">
                                                    Rapper &amp; Entrepreneur
                                                </p>
                                            </div>
                                        </div>
                                        <p class="leading-normal text-gray-300 text-md">
                                            Find God.
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li class="text-sm leading-6">
                            <div class="relative group">
                                <div class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                                <a
                                    href="https://twitter.com/tim_cook"
                                    class="cursor-pointer"
                                >
                                    <div class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                        <div class="flex items-center space-x-4">
                                            <img
                                                src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                                                class="w-12 h-12 bg-center bg-cover border rounded-full"
                                                alt="Tim Cook"
                                            />
                                            <div>
                                                <h3 class="text-lg font-semibold text-white">
                                                    Tim Cook
                                                </h3>
                                                <p class="text-gray-500 text-md">
                                                    CEO of Apple
                                                </p>
                                            </div>
                                        </div>
                                        <p class="leading-normal text-gray-300 text-md">
                                            Diam quis enim lobortis scelerisque
                                            fermentum dui faucibus in ornare.
                                            Donec pretium vulputate sapien nec
                                            sagittis aliquam malesuada bibendum.
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </li>
                    </ul>

                    <ul class="hidden space-y-8 sm:block">
                        <li class="text-sm leading-6">
                            <div class="relative group">
                                <div class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                                <a
                                    href="https://twitter.com/paraga"
                                    class="cursor-pointer"
                                >
                                    <div class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                        <div class="flex items-center space-x-4">
                                            <img
                                                src="https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg"
                                                class="w-12 h-12 bg-center bg-cover border rounded-full"
                                                alt="Parag Agrawal"
                                            />
                                            <div>
                                                <h3 class="text-lg font-semibold text-white">
                                                    Parag Agrawal
                                                </h3>
                                                <p class="text-gray-500 text-md">
                                                    CEO of Twitter
                                                </p>
                                            </div>
                                        </div>
                                        <p class="leading-normal text-gray-300 text-md">
                                            Enim neque volutpat ac tincidunt
                                            vitae semper. Mattis aliquam
                                            faucibus purus in massa tempor.
                                            Neque vitae tempus quam pellentesque
                                            nec. Turpis cursus in hac habitasse
                                            platea dictumst.
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li class="text-sm leading-6">
                            <div class="relative group">
                                <div class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                                <a
                                    href="https://twitter.com/tim_cook"
                                    class="cursor-pointer"
                                >
                                    <div class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                        <div class="flex items-center space-x-4">
                                            <img
                                                src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                                                class="w-12 h-12 bg-center bg-cover border rounded-full"
                                                alt="Tim Cook"
                                            />
                                            <div>
                                                <h3 class="text-lg font-semibold text-white">
                                                    Tim Cook
                                                </h3>
                                                <p class="text-gray-500 text-md">
                                                    CEO of Apple
                                                </p>
                                            </div>
                                        </div>
                                        <p class="leading-normal text-gray-300 text-md">
                                            Diam quis enim lobortis scelerisque
                                            fermentum dui faucibus in ornare.
                                            Donec pretium vulputate sapien nec
                                            sagittis aliquam malesuada bibendum.
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li class="text-sm leading-6">
                            <div class="relative group">
                                <div class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                                <a
                                    href="https://twitter.com/paraga"
                                    class="cursor-pointer"
                                >
                                    <div class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                        <div class="flex items-center space-x-4">
                                            <img
                                                src="https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg"
                                                class="w-12 h-12 bg-center bg-cover border rounded-full"
                                                alt="Parag Agrawal"
                                            />
                                            <div>
                                                <h3 class="text-lg font-semibold text-white">
                                                    Parag Agrawal
                                                </h3>
                                                <p class="text-gray-500 text-md">
                                                    CEO of Twitter
                                                </p>
                                            </div>
                                        </div>
                                        <p class="leading-normal text-gray-300 text-md">
                                            Enim neque volutpat ac tincidunt
                                            vitae semper. Mattis aliquam
                                            faucibus purus in massa tempor.
                                            Neque vitae tempus quam pellentesque
                                            nec. Turpis cursus in hac habitasse
                                            platea dictumst.
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li class="text-sm leading-6">
                            <div class="relative group">
                                <div class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                                <a
                                    href="https://twitter.com/tim_cook"
                                    class="cursor-pointer"
                                >
                                    <div class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                        <div class="flex items-center space-x-4">
                                            <img
                                                src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                                                class="w-12 h-12 bg-center bg-cover border rounded-full"
                                                alt="Tim Cook"
                                            />
                                            <div>
                                                <h3 class="text-lg font-semibold text-white">
                                                    Tim Cook
                                                </h3>
                                                <p class="text-gray-500 text-md">
                                                    CEO of Apple
                                                </p>
                                            </div>
                                        </div>
                                        <p class="leading-normal text-gray-300 text-md">
                                            Diam quis enim lobortis scelerisque
                                            fermentum dui faucibus in ornare.
                                            Donec pretium vulputate sapien nec
                                            sagittis aliquam malesuada bibendum.
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </li>
                    </ul>

                    <ul class="hidden space-y-8 lg:block">
                        <li class="text-sm leading-6">
                            <div class="relative group">
                                <div class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                                <a
                                    href="https://twitter.com/satyanadella"
                                    class="cursor-pointer"
                                >
                                    <div class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                        <div class="flex items-center space-x-4">
                                            <img
                                                src="https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg"
                                                class="w-12 h-12 bg-center bg-cover border rounded-full"
                                                alt="Satya Nadella"
                                            />
                                            <div>
                                                <h3 class="text-lg font-semibold text-white">
                                                    Satya Nadella
                                                </h3>
                                                <p class="text-gray-500 text-md">
                                                    CEO of Microsoft
                                                </p>
                                            </div>
                                        </div>
                                        <p class="leading-normal text-gray-300 text-md">
                                            Tortor dignissim convallis aenean et
                                            tortor at. At ultrices mi tempus
                                            imperdiet nulla malesuada. Id cursus
                                            metus aliquam eleifend mi. Quis
                                            ipsum suspendisse ultrices gravida
                                            dictum fusce ut.
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li class="text-sm leading-6">
                            <div class="relative group">
                                <div class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                                <a
                                    href="https://twitter.com/dan_schulman"
                                    class="cursor-pointer"
                                >
                                    <div class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                        <div class="flex items-center space-x-4">
                                            <img
                                                src="https://pbs.twimg.com/profile_images/516916920482672641/3jCeLgFb_400x400.jpeg"
                                                class="w-12 h-12 bg-center bg-cover border rounded-full"
                                                alt="Dan Schulman"
                                            />
                                            <div>
                                                <h3 class="text-lg font-semibold text-white">
                                                    Dan Schulman
                                                </h3>
                                                <p class="text-gray-500 text-md">
                                                    CEO of PayPal
                                                </p>
                                            </div>
                                        </div>
                                        <p class="leading-normal text-gray-300 text-md">
                                            Quam pellentesque nec nam aliquam
                                            sem et tortor consequat id. Enim sit
                                            amet venenatis urna cursus.
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li class="text-sm leading-6">
                            <div class="relative group">
                                <div class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                                <a
                                    href="https://twitter.com/satyanadella"
                                    class="cursor-pointer"
                                >
                                    <div class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                        <div class="flex items-center space-x-4">
                                            <img
                                                src="https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg"
                                                class="w-12 h-12 bg-center bg-cover border rounded-full"
                                                alt="Satya Nadella"
                                            />
                                            <div>
                                                <h3 class="text-lg font-semibold text-white">
                                                    Satya Nadella
                                                </h3>
                                                <p class="text-gray-500 text-md">
                                                    CEO of Microsoft
                                                </p>
                                            </div>
                                        </div>
                                        <p class="leading-normal text-gray-300 text-md">
                                            Tortor dignissim convallis aenean et
                                            tortor at. At ultrices mi tempus
                                            imperdiet nulla malesuada. Id cursus
                                            metus aliquam eleifend mi. Quis
                                            ipsum suspendisse ultrices gravida
                                            dictum fusce ut.
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li class="text-sm leading-6">
                            <div class="relative group">
                                <div class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                                <a
                                    href="https://twitter.com/dan_schulman"
                                    class="cursor-pointer"
                                >
                                    <div class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                        <div class="flex items-center space-x-4">
                                            <img
                                                src="https://pbs.twimg.com/profile_images/516916920482672641/3jCeLgFb_400x400.jpeg"
                                                class="w-12 h-12 bg-center bg-cover border rounded-full"
                                                alt="Dan Schulman"
                                            />
                                            <div>
                                                <h3 class="text-lg font-semibold text-white">
                                                    Dan Schulman
                                                </h3>
                                                <p class="text-gray-500 text-md">
                                                    CEO of PayPal
                                                </p>
                                            </div>
                                        </div>
                                        <p class="leading-normal text-gray-300 text-md">
                                            Quam pellentesque nec nam aliquam
                                            sem et tortor consequat id. Enim sit
                                            amet venenatis urna cursus.
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

const Cards = () => {
    return (
        <div>
            <div className="flex flex-wrap gap-8 px-4 sm:px-6 lg:px-8 justify-center">
                <div className="flex flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                    <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl rounded-lg">
                        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-gradient-to-r from-red-300 to-amber-400 transition-all duration-300 group-hover:scale-[10]"></span>
                        <div className="relative z-10 mx-auto max-w-md">
                            <span className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-r from-red-300 to-amber-400 transition-all duration-300 group-hover:bg-gray-200 ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-10 w-10 text-white transition-all"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                                    />
                                </svg>
                            </span>
                            <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                <p>
                                    FNA has done affiliating marketing for many
                                    clients and also through its personal blog
                                    website.{' '}
                                </p>
                            </div>
                            <div className="pt-5 text-base font-semibold leading-7">
                                <p>
                                    <a
                                        href="#"
                                        className="text-amber-500 transition-all duration-300 group-hover:text-white"
                                    >
                                        Affiliate Marketing &rarr;
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                    <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl rounded-lg">
                        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-gradient-to-r from-red-300 to-amber-400 transition-all duration-300 group-hover:scale-[10]"></span>
                        <div className="relative z-10 mx-auto max-w-md">
                            <span className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-r from-red-300 to-amber-400 transition-all duration-300 group-hover:bg-gray-200 ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-10 w-10 text-white transition-all"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                                    />
                                </svg>
                            </span>
                            <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                <p>
                                    FNA has the best experience in marketing
                                    through paid ad tools and with the best
                                    keywords to get maximum CPC.
                                </p>
                            </div>
                            <div className="pt-5 text-base font-semibold leading-7">
                                <p>
                                    <a
                                        href="#"
                                        className="text-amber-500 transition-all duration-300 group-hover:text-white"
                                    >
                                        ADword &rarr;
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                    <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl rounded-lg">
                        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-gradient-to-r from-red-300 to-amber-400 transition-all duration-300 group-hover:scale-[10]"></span>
                        <div className="relative z-10 mx-auto max-w-md">
                            <span className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-r from-red-300 to-amber-400 transition-all duration-300 group-hover:bg-gray-200 ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-10 w-10 text-white transition-all"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                                    />
                                </svg>
                            </span>
                            <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                <p>
                                    FNA is a SEO master with its best master
                                    team that help you solve your queries
                                    related to SEO and take you to a new height.{' '}
                                </p>
                            </div>
                            <div className="pt-5 text-base font-semibold leading-7">
                                <p>
                                    <a
                                        href="#"
                                        className="text-amber-500 transition-all duration-300 group-hover:text-white"
                                    >
                                        SEO Master &rarr;
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                    <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl rounded-lg">
                        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-gradient-to-r from-red-300 to-amber-400 transition-all duration-300 group-hover:scale-[10]"></span>
                        <div className="relative z-10 mx-auto max-w-md">
                            <span className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-r from-red-300 to-amber-400 transition-all duration-300 group-hover:bg-gray-200 ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-10 w-10 text-white transition-all"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                                    />
                                </svg>
                            </span>
                            <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                <p>
                                    FNA is a SEO master with its best master
                                    team that help you solve your queries
                                    related to SEO and take you to a new height.{' '}
                                </p>
                            </div>
                            <div className="pt-5 text-base font-semibold leading-7">
                                <p>
                                    <a
                                        href="#"
                                        className="text-amber-500 transition-all duration-300 group-hover:text-white"
                                    >
                                        Social Media manager &rarr;
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class=" rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg">
                <div class="bg-white p-7 rounded-md text-center">
                    <h1 class="font-bold text-4xl mb-2">
                        Time To Grow Yourself
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Cards
