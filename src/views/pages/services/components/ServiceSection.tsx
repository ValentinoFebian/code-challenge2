function ServiceSection() {
    return (
        <div className="bg-[#ECDFCC] py-16 px-2">

            {/*Title*/}
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-4xl lg:text-5xl font-semibold">Our services</h2>
                <p className="text-xl text-gray-600 mt-4 mb-4">
                    Explore the wide range of services we offer to help students achieve academic success.
                </p>
            </div>

            {/*Content*/}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8">

                {/*Service1*/}
                <div className="bg-white rounded-lg shadow-lg p-10 flex flex-col items-center justify-between">
                    <div className="mt-10 w-24 h-24 mb-4">
                        <img src="icon/home-f.svg" alt="home-tutor-icon" className="w-full h-full object-contain" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">Home Tutoring</h3>
                    <p className="text-center text-gray-600 text-sm md:text-lg mb-6">
                        Personalized home tutoring services, offering tailored lessons in the comfort of your home to meet individual student needs. 
                        Our expert tutors focus on improving academic skills while building student confidence.
                    </p>
                    <p className="text-center font-bold text-gray-600 text-sm md:text-lg mb-6">
                        Price starts from $20/hour
                    </p>
                    <button 
                        className="bg-[#3C3D37] text-white py-2 px-6 rounded-full hover:bg-gray-700 transition-all"
                    >
                        Learn More
                    </button>
                </div>

                {/*Service2*/}
                <div className="bg-white rounded-lg shadow-lg p-10 flex flex-col items-center justify-between">
                    <div className="mt-10 w-24 h-24 mb-4">
                        <img src="icon/computer-f.svg" alt="online-tutor-icon" className="w-full h-full object-contain" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">Online Tutoring</h3>
                    <p className="text-center text-gray-600 text-sm md:text-lg mb-6">
                        Flexible and interactive online tutoring sessions, designed to provide expert guidance from anywhere, anytime. 
                        Whether you're preparing for exams or need homework support, our tutors are here to help.
                    </p>
                    <p className="text-center font-bold text-gray-600 text-sm md:text-lg mb-6">
                        Price starts from $20/hour
                    </p>
                    <button 
                        className="bg-[#3C3D37] text-white py-2 px-6 rounded-full hover:bg-gray-700 transition-all"
                    >
                        Learn More
                    </button>
                </div>

                {/*Service3*/}
                <div className="bg-white rounded-lg shadow-lg p-10 flex flex-col items-center justify-between">
                    <div className="mt-10 w-24 h-24 mb-4">
                        <img src="icon/crown-f.svg" alt="extensive-tutor-icon" className="w-full h-full object-contain" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">Extensive Tutoring</h3>
                    <p className="text-center text-gray-600 text-sm md:text-lg mb-6">
                        A comprehensive package combining home and online tutoring, with guaranteed results or a partial refund if goals aren't met. 
                        Ideal for students seeking intensive preparation and personalized learning plans. 
                    </p>
                    <p className="text-center font-bold text-gray-600 text-sm md:text-lg mb-6">
                        Price starts from $35/hour
                    </p>
                    <button 
                        className="bg-[#3C3D37] text-white py-2 px-6 rounded-full hover:bg-gray-700 transition-all"
                    >
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ServiceSection;



