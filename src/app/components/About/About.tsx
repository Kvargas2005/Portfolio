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
                            I am more than a developer; I am a person who, when faced with goals, seeks ways to achieve them. I stand out for my desire to improve every day and for my commitment to constant learning. During my short but intense experience, I have faced various challenges where I have had to act as a project leader, learn new technologies to address project needs, work under pressure, and adapt quickly to changes.
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
