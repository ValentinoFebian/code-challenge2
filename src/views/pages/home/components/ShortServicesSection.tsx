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
                <div className="h-[35em] w-full md:w-[25%] hidden md:flex justify-center">
                    <img
                        src="img/Service.jpg"
                        alt="tutor-teaching"
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                </div>

                <div className="border-2 border-white h-auto w-full md:w-[75%] p-8 flex flex-col justify-center rounded-lg shadow-lg">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                        Comprehensive Education Tutoring Services
                    </h3>
                    <p className="text-base md:text-lg leading-relaxed">
                        At Veritas, we specialize in high-quality, personalized tutoring services designed to meet the diverse needs of our students. 
                        Our expert tutors are passionate about helping learners of all levels, whether they need support with basic subjects or advanced academic topics. 
                    </p>
                    <p className="text-base md:text-lg leading-relaxed mt-4">
                        We offer a range of flexible services:
                    </p>
                    <ul className="text-base md:text-lg leading-relaxed list-disc pl-5 mt-2">
                        <li><span className="font-semibold">Home tutoring: </span>Tailored lessons delivered in the comfort of your home, focusing on academic improvement while building confidence.</li>
                        <li><span className="font-semibold">Online tutoring: </span>Flexible sessions available anytime, anywhere, providing expert guidance for exam preparation and homework support.</li>
                        <li><span className="font-semibold">Extensive tutoring: </span>A blend of home and online tutoring with guaranteed results or a partial refund if goals aren't achieved, ideal for intensive, personalized learning plans.</li>
                    </ul>
                    
                    <p className="text-base md:text-lg leading-relaxed mt-4">
                        Our programs aim not only to boost grades but also to deepen students' understanding, enhance critical thinking, and foster long-term academic success.
                    </p>

                    <div className="mt-6 flex justify-end">
                        <button className="bg-[#1E201E] text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                            <Link href="/services">Learn More</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShortServicesSection;
