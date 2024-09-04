export default function WebDeveloper() {
    return (
        <div className="mb-8">
            <div className="flex items-center">
                <h6 className="text-gradient font-semibold text-xl md:text-2xl lg:text-4xl leading-normal md:leading-relaxed lg:leading-relaxed">
                    Web Developer
                </h6>
                <h6 className="text-gray-400 ml-2 ps-6">2023</h6>
            </div>

            <p className="text-gray-400 mt-4">
                {`As a student, Participate in the development of a web system for the photocopier of the “Hospicio de Huerfanos de Cartago”. This system was developed in PHP, JavaScript, JQuery, HTML, CSS and Bootstrap.`}
            </p>
            <p className="text-gray-400 mt-4">
                {`I was mainly involved in the design and development of the user interface, in which I greatly improved my JavaScript skills.  I also performed different functions in the backend for the correct sending of files and requests from students to workers.`}
            </p>
            <p className="text-gray-400 mt-4">
                {`I worked hard as a team. I was the team leader, so I had the responsibility to support my team to finish the system on time. I had close communication with my teammates through the Bitrix platform, where I was in charge of assigning tasks and monitoring the development process. If a colleague needed help, I worked as a team with him to accomplish the task.`}
            </p>
            <div className="inline-flex flex-wrap gap-2 mt-4 bg-[#1C1C20] rounded-full p-2 max-w-full">
                <span className="text-[#8E94BC] px-4 py-2 rounded-full text-sm md:text-base lg:text-lg">Php</span>
                <span className="text-[#8E94BC] px-4 py-2 rounded-full text-sm md:text-base lg:text-lg">jQuery</span>
                <span className="text-[#8E94BC] px-4 py-2 rounded-full text-sm md:text-base lg:text-lg">AJAX</span>
                <span className="text-[#8E94BC] px-4 py-2 rounded-full text-sm md:text-base lg:text-lg">JavaScript</span>
                <span className="text-[#8E94BC] px-4 py-2 rounded-full text-sm md:text-base lg:text-lg">CSS</span>
                <span className="text-[#8E94BC] px-4 py-2 rounded-full text-sm md:text-base lg:text-lg">HTML</span>
                <span className="text-[#8E94BC] px-4 py-2 rounded-full text-sm md:text-base lg:text-lg">Bootstrap</span>
            </div>
        </div>
    );
}