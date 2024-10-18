import Link from "next/link";

function ShortServicesSection() {
    return (
        <div className="bg-[#3C3D37] text-white p-10">

            {/*Title*/}
            <div className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-semibold">What can we offer?</h2>
                <p className="text-xl text-gray-300 mt-4">
                    Explore the wide range of services we offer to help students achieve academic success.
                </p>
            </div>

            {/*Content*/}
            <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="h-[35.5em] w-full md:w-[25%] hidden md:flex justify-center">
                    <img
                        src="img/Service.webp"
                        alt="tutor-teaching"
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                </div>

                {/*Boxes*/}
                <div className="border-2 border-white h-auto w-full md:w-[75%] p-6 flex flex-col justify-center rounded-lg shadow-lg">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                        Comprehensive Education Tutoring Services
                    </h3>
                    <p className="text-base md:text-lg leading-relaxed">
                        At Veritas, we specialize in high-quality, personalized tutoring services designed to meet the diverse needs of our students. 
                        Our expert tutors are passionate about helping learners of all levels, whether they need support with basic subjects or advanced academic topics. 
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
                        <div className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-600 transition">
                            <div className="w-[7rem] h-[7rem] bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                                <img
                                    src="icon/home-f.svg"
                                    alt="home-tutor-icon"
                                    className="w-[5rem] h-[5rem] rounded-lg"
                                />
                            </div>
                            <h4 className="text-xl font-semibold">Home tutoring</h4>
                            <p className="text-gray-300 mt-2 text-center">Tailored lessons delivered in the comfort of your home, focusing on academic improvement while building confidence.</p>
                        </div>

                        <div className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-600 transition">
                            <div className="w-[7rem] h-[7rem] bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                                <img
                                    src="icon/computer-f.svg"
                                    alt="online-tutor-icon"
                                    className="w-[5rem] h-[5rem] rounded-lg"
                                />
                            </div>
                            <h4 className="text-xl font-semibold">Online tutoring</h4>
                            <p className="text-gray-300 mt-2 text-center">Flexible sessions available anytime, anywhere, providing expert guidance for exam preparation and homework support.</p>
                        </div>

                        <div className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-600 transition">
                            <div className="w-[7rem] h-[7rem] bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                                <img
                                    src="icon/crown-f.svg"
                                    alt="extensive-tutor-icon"
                                    className="w-[5rem] h-[5rem] rounded-lg"
                                />
                            </div>
                            <h4 className="text-xl font-semibold">Extensive tutoring</h4>
                            <p className="text-gray-300 mt-2 text-center">A blend of home and online tutoring with guaranteed results or a partial refund if goals aren't achieved, ideal for intensive, personalized learning plans.</p>
                        </div>
                    </div>

                    <div className="mt-6 flex justify-end">
                        <button 
                            className="bg-[#1E201E] text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
                            style={{ minWidth: "48px", minHeight: "48px" }}
                        >
                            <Link href="/services" aria-label="Learn more about our services">
                                Learn More
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShortServicesSection;
