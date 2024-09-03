export default function Internship() {
    return (
        <div className="mb-8">
            <div className="flex items-center">
                <h6 className="text-gradient font-semibold text-xl md:text-2xl lg:text-4xl leading-normal md:leading-relaxed lg:leading-relaxed">
                    Internship
                </h6>
                <h6 className="text-gray-400 ml-2 ps-6">2023</h6>
            </div>

            <p className="text-gray-400 mt-4">
                Grupo Bimbo’s human resources department needed a system to control job applications since they were handling thousands of data in Excel. I developed a system in Microsoft Power Platform which would allow them to enter participants through a form and facilitate their selection process.
            </p>
            <p className="text-gray-400 mt-4">
                I was assigned tasks to automate processes in Excel from certain departments. I used Python with the Pandas library to get the data from the file and modify it.
            </p>
            <p className="text-gray-400 mt-4">
                The Facilities department did not have any way for employees to report any incident within the facilities. I developed a system in Microsoft Power Platform, which allows to report incidents and attach evidence. The manager can see the pending, completed and in progress, which facilitates the search for incidents.
            </p>
            <p className="text-gray-400 mt-4">
                Every day I had a meeting in Teams to see the progress, doubts and schedule meetings with other departments. For this reason, communication was very present.
            </p>
            <div className="inline-flex flex-wrap gap-2 mt-4 bg-[#1C1C20] rounded-full p-2 max-w-full">
                <span className="text-[#8E94BC] px-4 py-2 rounded-full text-sm md:text-base lg:text-lg">PowerApps</span>
                <span className="text-[#8E94BC] px-4 py-2 rounded-full text-sm md:text-base lg:text-lg">Microsoft Flow</span>
                <span className="text-[#8E94BC] px-4 py-2 rounded-full text-sm md:text-base lg:text-lg">Python</span>
                <span className="text-[#8E94BC] px-4 py-2 rounded-full text-sm md:text-base lg:text-lg">SharePoint</span>
                <span className="text-[#8E94BC] px-4 py-2 rounded-full text-sm md:text-base lg:text-lg">Excel</span>
                <span className="text-[#8E94BC] px-4 py-2 rounded-full text-sm md:text-base lg:text-lg">Teams</span>
            </div>
        </div>
    );
}
