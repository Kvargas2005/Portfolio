export default function WebDeveloper() {
    return (
        <div className="mb-8">
            <div className="flex items-center">
                <h6 className="text-gradient font-semibold text-xl md:text-2xl lg:text-4xl leading-normal md:leading-relaxed lg:leading-relaxed">
                    Web Developer (Project)
                </h6>
                <h6 className="text-gray-400 ml-2 ps-6">2022</h6>
            </div>

            <p className="text-gray-400 mt-4">
                {`This was a project where I learned a lot. I built a web system for enrolling students at an institution, which was parameterizable.`}
            </p>
            <p className="text-gray-400 mt-4">
                {`I worked a lot with stored procedures. I used AJAX to implement data asynchrony. Creating a responsive and attractive system was essential.`}
            </p>
            <p className="text-gray-400 mt-4">
                {`I was the project manager, so I supported my team in making progress and assigning tasks. I also did a lot of backend and frontend work.`}
            </p>
            <p className="text-gray-400 mt-4">
                {`My biggest challenge was using AJAX for the first time as it was a bit confusing to handle data. However, I practiced and studied as much as I could to accomplish this task.`}
            </p>
            <div className="inline-flex flex-wrap gap-2 mt-4 bg-[#1C1C20] rounded-full p-2 max-w-full">
                <span className="text-[#8E94BC] px-4 py-2 rounded-full text-sm md:text-base lg:text-lg">ASP.NET</span>
                <span className="text-[#8E94BC] px-4 py-2 rounded-full text-sm md:text-base lg:text-lg">jQuery</span>
                <span className="text-[#8E94BC] px-4 py-2 rounded-full text-sm md:text-base lg:text-lg">AJAX</span>
                <span className="text-[#8E94BC] px-4 py-2 rounded-full text-sm md:text-base lg:text-lg">SQL Server</span>
                <span className="text-[#8E94BC] px-4 py-2 rounded-full text-sm md:text-base lg:text-lg">CSS</span>
                <span className="text-[#8E94BC] px-4 py-2 rounded-full text-sm md:text-base lg:text-lg">HTML</span>
                <span className="text-[#8E94BC] px-4 py-2 rounded-full text-sm md:text-base lg:text-lg">Bootstrap</span>
            </div>
        </div>
    );
}