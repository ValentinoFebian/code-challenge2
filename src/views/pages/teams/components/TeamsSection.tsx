'use client';
import { useState, useEffect } from "react";

interface Tutor {
    name: {
        first: string;
        last: string;
    };
    picture: {
        large: string;
    };
    phone: string;
}

function TeamSection() {
    const [tutors, setTutors] = useState<Tutor[]>([]);

    useEffect(() => {

        {/*Fetch tutor data from API*/}
        const fetchTutors = async () => {
            try {
                const response = await fetch("https://randomuser.me/api/?results=4");
                const data = await response.json();
                setTutors(data.results);
                localStorage.setItem('tutors', JSON.stringify(data.results)); // Store the data in localStorage
            } catch (err) {
                console.log(err);
            }
        };

        {/*Check if data already exists in localStorage */}
        const storedTutors = localStorage.getItem('tutors');

        if (storedTutors) {
            setTutors(JSON.parse(storedTutors));
        } else {
            fetchTutors();
        }

    }, []);

    return (
        <div className="bg-[#ECDFCC] py-16 px-4">
            <div className="text-center mb-12">
                <h2 className="text-4xl lg:text-5xl font-semibold">Meet our tutors!</h2>
                <p className="text-xl text-gray-600 mt-4">
                    Meet the dedicated tutors who are passionate about empowering students to excel.
                </p>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4">
                {tutors.map((tutor, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center h-[30em]">
                        
                        {/*Profile Picture*/}
                        <div className="w-[7rem] h-[7rem] rounded-full overflow-hidden mb-6">
                            <img 
                                src={tutor.picture.large} 
                                alt="profile-pic" 
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/*Name*/}
                        <h3 className="text-xl font-semibold mb-2 text-gray-800 text-center">
                            {`${tutor.name.first} ${tutor.name.last}`}
                        </h3>

                        {/*Expertise*/}
                        <p className="text-lg text-gray-500 mb-4 text-center">Education Specialist</p>

                        {/*Contact Info*/}
                        <div className="text-center text-gray-600">
                            <p className="text-lg">
                                <strong>Phone: </strong>{tutor.phone}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TeamSection;

