function TestimonialSection() {
    return (
        <div className="bg-[#ECDFCC] p-[2em]">
            
            {/*Title*/}
            <div className="w-auto h-[5em] mb-[4em] text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center">What did our clients say?</h2>
                <p className="text-xl text-gray-600 mt-4">
                    See what our students and parents have to say about their experiences with us.
                </p>
            </div>

            {/*Content*/}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[2em] md:gap-[3em]">

                {/*First Client*/}
                <div className="flex flex-col border-2 border-white p-[2em] rounded-lg bg-white">
                    <div className="flex items-center gap-[1.5em]">
                        <img
                            src="img/profile1.jpg"
                            alt="client1"
                            className="w-[5em] h-[5em] bg-gray-300 rounded-full"
                        />
                        <h3 className="text-xl md:text-2xl font-semibold">Michael Langley,<span className="italic font-light"> Student</span></h3>
                    </div>

                    <p className="mt-[1.5em] text-sm md:text-lg italic">
                        "I never thought I could excel in math, but thanks to my tutor, I not only improved my grades but gained confidence in the subject. 
                        The personalized attention and teaching style were exactly what I needed. Now, I actually look forward to learning!"
                    </p>
                </div>

                {/*Second Client*/}
                <div className="flex flex-col border-2 border-white p-[2em] rounded-lg bg-white">
                    <div className="flex items-center gap-[1.5em]">
                        <img
                            src="img/profile2.jpg"
                            alt="client2"
                            className="w-[5em] h-[5em] bg-gray-300 rounded-full"
                        />
                        <h3 className="text-xl md:text-2xl font-semibold">Miranda Holmes, <span className="italic font-light"> Student</span></h3>
                    </div>

                    <p className="mt-[1.5em] text-sm md:text-lg italic">
                    "The extensive tutor was a game-changer for me. My grades have improved, and I'm more engaged in campus than ever before. 
                    The tutor was patient, knowledgeable, and truly invested in his success. I highly recommend them to any students!"
                    </p>
                </div>

                {/*Third Client*/}
                <div className="flex flex-col border-2 border-white p-[2em] rounded-lg bg-white">
                    <div className="flex items-center gap-[1.5em]">
                        <img
                            src="img/profile3.jpg"
                            alt="client3"
                            className="w-[5em] h-[5em] bg-gray-300 rounded-full"
                        />
                        <h3 className="text-xl md:text-2xl font-semibold">Chloe Tan, <span className="italic font-light"> Student</span></h3>
                    </div>
                    
                    <p className="mt-[1.5em] text-sm md:text-lg italic">
                    "From the very first session, I could tell that this tutoring program was different. 
                    My tutor tailored the lessons to fit my needs and learning style. 
                    I went from struggling with science to feeling fully prepared for my exams. 
                    I couldn’t have done it without them!"
                    </p>
                </div>

                {/*Fourth Client*/}
                <div className="flex flex-col border-2 border-white p-[2em] rounded-lg bg-white">
                    <div className="flex items-center gap-[1.5em]">
                        <img
                            src="img/profile4.jpg"
                            alt="client4"
                            className="w-[5em] h-[5em] bg-gray-300 rounded-full"
                        />
                        <h3 className="text-xl md:text-2xl font-semibold">Elias Jordan, <span className="italic font-light"> Parent</span></h3>
                    </div>
                    
                    <p className="mt-[1.5em] text-sm md:text-lg italic">
                    "As a parent, I was worried my child wasn’t getting the support they needed in school, but Veritas tutor completely turned things around. 
                    The tutor not only improved my child’s grades but also reignited their passion for learning. 
                    It's amazing to see them so confident and excited about their studies again!"
                    </p>
                </div>
            </div>
        </div>
    );
}

export default TestimonialSection;
