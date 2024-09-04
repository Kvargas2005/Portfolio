"use client";

import Image from 'next/image';

export default function About() {
    return (
        <div id="projects-section" className="bg-[#161618] flex items-center justify-center p-4 pb-32">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col justify-center">
                        <h6 className="text-gradient font-semibold text-xl md:text-3xl lg:text-5xl leading-normal md:leading-relaxed lg:leading-relaxed mb-6">
                            My Projects
                        </h6>
                        <h6 className="text-white font-semibold text-lg md:text-xl lg:text-3xl leading-normal md:leading-relaxed lg:leading-relaxed mb-6">
                            Hours Worked
                        </h6>

                        <p className="text-[#8E94BC]">
                            This web application allows you to record hours worked, overtime and observations, as well as generate a pdf with the monthly report of the hours. I designed it for my father because he kept the account on paper. As a challenge was to work for the first time with the FullCalendar library, since I didn't know how it worked and how I could create events. I developed this project with the MVC architecture.
                        </p>
                        <div className="inline-flex flex-wrap gap-2 mt-4 bg-[#1C1C20] rounded-full p-2 max-w-full">
                            <span className="text-[#8E94BC] px-4 py-2 rounded-full text-sm md:text-base lg:text-lg">Php</span>
                            <span className="text-[#8E94BC] px-4 py-2 rounded-full text-sm md:text-base lg:text-lg">Jquery</span>
                            <span className="text-[#8E94BC] px-4 py-2 rounded-full text-sm md:text-base lg:text-lg">MySQL</span>
                            <span className="text-[#8E94BC] px-4 py-2 rounded-full text-sm md:text-base lg:text-lg">Bootstrap</span>
                            <span className="text-[#8E94BC] px-4 py-2 rounded-full text-sm md:text-base lg:text-lg">HTML</span>
                            <span className="text-[#8E94BC] px-4 py-2 rounded-full text-sm md:text-base lg:text-lg">CSS</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <Image
                            className="" // Optional: Add rounded corners
                            src="/images/HoursWorked.png"
                            alt="Img de perfil"
                            width={422} // Adjust image size
                            height={422} // Adjust image size
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
