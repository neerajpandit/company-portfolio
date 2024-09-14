import React from 'react'

const contact = () => {
    return (
        <div>
            {/* <div className="min-h-screen bg-gray-800 py-6 flex flex-col justify-center sm:py-12">
    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div
            className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
        </div>
        <div className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20">

            <div className="text-center pb-6">
                <h1 className="text-3xl">Contact Us!</h1>

                <p className="text-gray-300">
                    Fill up the form below to send us a message.
                </p>
            </div>

            <form>

                <input
                    className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text" placeholder="Name" name="name" />

                <input
                    className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="email" placeholder="Email" name="email" />

                <input
                    className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text" placeholder="Subject" name="_subject" />

                <textarea
                    className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Type your message here..." name="message" style={{ height: '121px' }}></textarea>

                <div className="flex justify-between">
                    <input
                        className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit" value="Send ➤" />
                    <input
                        className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="reset" />
                </div>

            </form>
        </div>
    </div>
</div> */}
            <section className="bg-white">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
                    <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900">
                            Get in Touch With Us
                        </h2>
                    </div>
                    <div className="mt-10 lg:mt-20">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="rounded-lg overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2172.3471436193195!2d76.69558369999999!3d30.69005789999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3903fc074d044bcf%3A0x6e4b31587d67e9c3!2sSco.%2052%2C%20First%20Floor%2C%20Jlpl%2C%20Sec.%2082%2C%20Mohali%2C%20140308!5e0!3m2!1sen!2sin!4v1634693913681!5m2!1sen!2sin"
                                    width="100%"
                                    height="480"
                                    style={{ border: '0' }}
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                            </div>
                            <div className="bg-white rounded-lg shadow-lg">
                                <div className="p-6">
                                    <h3 className="text-lg font-medium text-gray-900">
                                        Our Address
                                    </h3>
                                    <p className="mt-1 text-gray-600">
                                        Sco. 52, First Floor, Jlpl,
                                        <br />
                                        Sec. 82, Mohali, 140308
                                    </p>
                                </div>
                                <div className="border-t border-gray-200">
                                    <div className="p-6">
                                        <h3 className="text-lg font-medium text-gray-900">
                                            Hours
                                        </h3>
                                        <p className="mt-1 text-gray-600">
                                            Monday - Friday: 10am - 7pm
                                        </p>
                                        <p className="mt-1 text-gray-600">
                                            Sunday: Closed
                                        </p>
                                    </div>
                                </div>
                                <div className="border-t border-gray-200">
                                    <div className="p-6">
                                        <h3 className="text-lg font-medium text-gray-900">
                                            Contact
                                        </h3>
                                        <p className="mt-1 text-gray-600">
                                            Email:
                                            info@fnamarketingsolutions.com
                                        </p>
                                        <p className="mt-1 text-gray-600">
                                            Phone: +91 8847370741
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default contact
