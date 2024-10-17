export default function ExecutivesSection () {
    return (
        <div className="w-full">
            <div className="p-[2em] bg-[#ECDFCC]">

                {/*Title*/}
                <div className="w-auto h-[5em] mb-[5em] text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center">
                        Meet our executives!
                    </h2>
                    <p className="mt-4 text-xl text-gray-600">
                        Get to know the leaders driving our vision and ensuring excellence in everything we do.
                    </p>
                </div>

                {/*Content*/}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[2em] md:gap-[3em]">

                    {/*First executive*/}
                    <div className="flex flex-col p-[2em] rounded-lg bg-white shadow-lg">
                        <div className="flex items-center gap-[1.5em]">

                            {/*Profile Image*/}
                            <img 
                                src="img/ex1.jpg"
                                alt="CEO"
                                className="w-[7em] h-[7em] rounded-full bg-gray-300"
                            />

                            {/*Information Box*/}
                            <div className="flex flex-col">
                                <h3 className="text-xl md:text-2xl font-semibold">John Dalton</h3>
                                <p className="text-sm md:text-lg text-gray-500">Chief Executive Officer</p>
                                <p className="text-sm md:text-lg text-gray-500">10+ Years Experience</p>
                            </div>
                        </div>

                        {/*Quotes*/}
                            <p className="mt-[1.5em] text-sm md:text-lg italic">
                                "I always lead Veritas with quality and innovation in mind. 
                                 Your success drives our purpose, and we are committed to achieving it together!"
                            </p>
                    </div>

                    {/*Second executive*/}
                    <div className="flex flex-col p-[2em] rounded-lg bg-white shadow-lg">
                        <div className="flex items-center gap-[1.5em]">

                            {/*Profile Image*/}
                            <img 
                                src="img/ex2.jpg"
                                alt="COO"
                                className="w-[7em] h-[7em] rounded-full bg-gray-300"
                            />

                            {/*Information Box*/}
                            <div className="flex flex-col">
                                <h3 className="text-xl md:text-2xl font-semibold">Tom Fellas</h3>
                                <p className="text-sm md:text-lg text-gray-500">Chief Operational Officer</p>
                                <p className="text-sm md:text-lg text-gray-500">8+ Years Experience</p>
                            </div>
                        </div>

                        {/*Quotes*/}
                            <p className="mt-[1.5em] text-sm md:text-lg italic">
                                "I'm ready to ensure top-quality tutoring services. 
                                 Your satisfaction matters to us, and we strive to exceed your expectations!"
                            </p>
                    </div>

                    {/*Third executive*/}
                    <div className="flex flex-col p-[2em] rounded-lg bg-white shadow-lg">
                        <div className="flex items-center gap-[1.5em]">

                            {/*Profile Image*/}
                            <img 
                                src="img/ex3.jpg"
                                alt="CAO"
                                className="w-[7em] h-[7em] rounded-full bg-gray-300"
                            />

                            {/*Information Box*/}
                            <div className="flex flex-col">
                                <h3 className="text-xl md:text-2xl font-semibold">Jennifer Lim</h3>
                                <p className="text-sm md:text-lg text-gray-500">Chief Academic Officer</p>
                                <p className="text-sm md:text-lg text-gray-500">8+ Years Experience</p>
                            </div>
                        </div>

                        {/*Quotes*/}
                            <p className="mt-[1.5em] text-sm md:text-lg italic">
                                "I'm always eager to design expert learning programs tailored for you. 
                                 Your academic growth is our priority, and we’ll help you reach new heights!"
                            </p>
                    </div>

                    {/*Fourth executive*/}
                    <div className="flex flex-col p-[2em] rounded-lg bg-white shadow-lg">
                        <div className="flex items-center gap-[1.5em]">

                            {/*Profile Image*/}
                            <img 
                                src="img/ex4.jpg"
                                alt="CMO"
                                className="w-[7em] h-[7em] rounded-full bg-gray-300"
                            />

                            {/*Information Box*/}
                            <div className="flex flex-col">
                                <h3 className="text-xl md:text-2xl font-semibold">Arthur Morgan</h3>
                                <p className="text-sm md:text-lg text-gray-500">Chief Marketing Officer</p>
                                <p className="text-sm md:text-lg text-gray-500">6+ Years Experience</p>
                            </div>
                        </div>

                        {/*Quotes*/}
                            <p className="mt-[1.5em] text-sm md:text-lg italic">
                                "I'm ready to bring our exceptional tutoring services to you. 
                                 Helping you achieve more is our goal, and we're here to support your success!"
                            </p>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}