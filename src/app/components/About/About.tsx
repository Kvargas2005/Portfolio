"use client";

import Image from 'next/image';

export default function About() {
    return (
        <div id="about-section" className="bg-[#161618] flex items-center justify-center p-4 pb-32">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col justify-center">
                        <h6 className="text-gradient font-semibold text-xl md:text-3xl lg:text-5xl leading-normal md:leading-relaxed lg:leading-relaxed mb-6">
                            About Me
                        </h6>
                        <p className="text-[#8E94BC]">
                            I’m Kendall Vargas, a passionate and detail-oriented junior developer from Costa Rica. I specialize in full-stack web development, with experience in PHP, Laravel, JavaScript, React, and MySQL. My background in technical support has given me a strong foundation in problem-solving, networks, and system maintenance, which I now apply to building reliable and user-friendly software solutions.

                            I enjoy transforming manual or inefficient processes into modern web systems that simplify life for both users and teams. I've worked on projects from scratch, including interface design, backend logic, and database modeling—always with a focus on clean code, usability, client communication, and agile methodologies such as SCRUM and Kanban.
                        </p>
                    </div>

                    <div className="flex items-center justify-center">
                        <Image
                            className="rounded-full" // Optional: Add rounded corners
                            src="/images/KendallVargas.png"
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
