"use client";

import Image from 'next/image';

export default function About() {
    return (
        <div className="bg-[#1C1C20] flex flex-col justify-center items-center pt-14 pb-14">
            <div className='py-10 text-center'>
                <h2 className="text-gradient font-bold text-3xl md:text-5xl lg:text-6xl leading-normal md:leading-relaxed lg:leading-relaxed">
                    Technologies
                </h2>
                <p className="text-[#8E94BC] pt-6 text-lg">
                    Driven developer focused on growth and learning.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 max-w-5xl mx-auto text-center">
                {/* Frontend */}
                <div className="border border-[#8E94BC] rounded-lg p-6">
                    <h3 className="text-white text-3xl font-semibold m-7">Frontend</h3>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="flex flex-col items-center">
                            <Image src="/images/CSS.svg" alt="CSS" width={50} height={50} />
                            <p className="text-[#8E94BC] mt-2">CSS</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image src="/images/HTML.svg" alt="HTML" width={50} height={50} />
                            <p className="text-[#8E94BC] mt-2">HTML</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image src="/images/JS.svg" alt="JS" width={50} height={50} />
                            <p className="text-[#8E94BC] mt-2">JavaScript</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image src="/images/Next.svg" alt="Next" width={50} height={50} />
                            <p className="text-[#8E94BC] mt-2">Next.js</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image src="/images/React.svg" alt="React" width={50} height={50} />
                            <p className="text-[#8E94BC] mt-2">React</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image src="/images/Bootstrap.svg" alt="Bootstrap" width={50} height={50} />
                            <p className="text-[#8E94BC] mt-2">Bootstrap</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image src="/images/Jquery.svg" alt="Jquery" width={50} height={50} />
                            <p className="text-[#8E94BC] mt-2">jQuery</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image src="/images/Tailwind.svg" alt="Tailwind" width={50} height={50} />
                            <p className="text-[#8E94BC] mt-2">Tailwind</p>
                        </div>
                    </div>
                </div>

                {/* Backend */}
                <div className="border border-[#8E94BC] rounded-lg p-6">
                    <h3 className="text-white text-3xl font-semibold m-7">Backend</h3>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="flex flex-col items-center">
                            <Image src="/images/CSS.svg" alt="CSS" width={50} height={50} />
                            <p className="text-[#8E94BC] mt-2">CSS</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image src="/images/HTML.svg" alt="HTML" width={50} height={50} />
                            <p className="text-[#8E94BC] mt-2">HTML</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image src="/images/JS.svg" alt="JS" width={50} height={50} />
                            <p className="text-[#8E94BC] mt-2">JavaScript</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image src="/images/Next.svg" alt="Next" width={50} height={50} />
                            <p className="text-[#8E94BC] mt-2">Next.js</p>
                        </div>
                        {/* Add more as needed */}
                    </div>
                </div>

                {/* Database */}
                <div className="border border-[#8E94BC] rounded-lg p-6">
                    <h3 className="text-white text-3xl font-semibold m-7">Database</h3>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="flex flex-col items-center">
                            <Image src="/images/CSS.svg" alt="CSS" width={50} height={50} />
                            <p className="text-[#8E94BC] mt-2">CSS</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image src="/images/HTML.svg" alt="HTML" width={50} height={50} />
                            <p className="text-[#8E94BC] mt-2">HTML</p>
                        </div>
                        {/* Add more as needed */}
                    </div>
                </div>

                {/* Tools */}
                <div className="border border-[#8E94BC] rounded-lg p-6">
                    <h3 className="text-white text-3xl font-semibold m-7">Tools</h3>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="flex flex-col items-center">
                            <Image src="/images/CSS.svg" alt="CSS" width={50} height={50} />
                            <p className="text-[#8E94BC] mt-2">CSS</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image src="/images/HTML.svg" alt="HTML" width={50} height={50} />
                            <p className="text-[#8E94BC] mt-2">HTML</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image src="/images/HTML.svg" alt="HTML" width={50} height={50} />
                            <p className="text-[#8E94BC] mt-2">HTML</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image src="/images/CSS.svg" alt="CSS" width={50} height={50} />
                            <p className="text-[#8E94BC] mt-2">CSS</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image src="/images/HTML.svg" alt="HTML" width={50} height={50} />
                            <p className="text-[#8E94BC] mt-2">HTML</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image src="/images/HTML.svg" alt="HTML" width={50} height={50} />
                            <p className="text-[#8E94BC] mt-2">HTML</p>
                        </div>
                        {/* Add more as needed */}
                    </div>
                </div>
            </div>
        </div>
    );
}
