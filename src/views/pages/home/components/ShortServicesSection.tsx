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
                <div className="h-[27em] w-full md:w-[25%] hidden md:flex justify-center">
                    <img
                        src="img/Service.jpg"
                        alt="tutor-teaching"
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                </div>

                <div className="border-2 border-white h-auto md:h-[27em] w-full md:w-[75%] p-8 flex flex-col justify-center rounded-lg shadow-lg">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                        Comprehensive Education Tutoring Services
                    </h3>
                    <p className="text-base md:text-lg leading-relaxed">
                        At Veritas, we specialize in providing high-quality, personalized education tutoring services. 
                        Our expert tutors are passionate about helping students of all levels—whether they need help with basic subjects or advanced academic topics. 
                    </p>
                    <p className="text-base md:text-lg leading-relaxed mt-4">
                        We offer one-on-one sessions tailored to each student's unique learning style and academic needs. 
                        Our goal is to not only improve grades but also foster a deep understanding of the subject matter. 
                        Our services cover a wide range of subjects, including math, science, language arts, and test preparation for standardized exams.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed mt-4">
                        Our tutoring programs are designed to help students build confidence, enhance their critical thinking skills, and achieve long-term academic success.
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
