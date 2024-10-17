function OverviewSection() {
    return (
        <div className="bg-[#ECDFCC] p-10">

            {/*Title*/}
            <div className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-semibold">Who are we?</h2>
                <p className="text-xl text-gray-600 mt-4">
                    Discover who we are, what we stand for, and how we’re shaping the future of education.
                </p>
            </div>

            {/*Content*/}
            <div className="flex flex-col md:flex-row justify-between gap-10">
                <div className="flex-1 bg-white p-8 rounded-lg shadow-lg flex flex-col justify-between">
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Our History</h3>
                        <p className="text-base md:text-lg leading-relaxed mb-8">
                            Founded in 1998, Veritas began with the goal of transforming the way students learn. 
                            Initially offering small tutoring sessions, we quickly grew due to the increasing demand for high-quality, personalized education. 
                            Over the years, we expanded our services to include a wide range of academic support, covering subjects from elementary levels to university-preparatory courses. 
                            Our commitment to excellence has led us to partner with schools, parents, and educational institutions, helping thousands of students achieve their academic goals. 
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="flex-1">
                            <h3 className="text-2xl font-semibold mb-4">Our Culture</h3>
                            <p className="text-base md:text-lg leading-relaxed">
                                Our culture is one of openness and collaboration, where every tutor and student can thrive. 
                                We value integrity, teamwork, and a passion for learning.
                            </p>
                        </div>

                        <div className="flex-1">
                            <h3 className="text-2xl font-semibold mb-4">Our Team</h3>
                            <p className="text-base md:text-lg leading-relaxed">
                                Our expert tutors are driven by a commitment to help students achieve their best. 
                                With a broad range of expertise, we ensure that each student gets personalized attention and guidance.
                            </p>
                        </div>
                    </div>

                </div>

                <div className="hidden md:flex w-[27%] justify-center items-center">
                    <div className="bg-gray-300 w-[24em] h-[32em] rounded-lg shadow-lg flex items-center justify-center">
                        <img 
                            src="img/Overview.jpg" 
                            alt="tutor-teaching" 
                            className="w-full h-full object-fit rounded-lg shadow-lg"
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default OverviewSection;
