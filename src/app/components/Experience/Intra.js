export default function Intra() {
    return (
        <div className="mb-8">
            <div className="flex items-center">
                <h6 className="text-gradient font-semibold text-xl md:text-2xl lg:text-4xl leading-normal md:leading-relaxed lg:leading-relaxed">
                    Web Developer (Freelancer)
                </h6>
                <h6 className="text-gray-400 ml-2 ps-6">Jan 2025 - Jul 2025</h6>
            </div>
            
            <p className="text-gray-400 mt-4">
                As a freelancer, I independently developed a custom web platform for INTRA, a company that previously managed all of its operations manually using Excel and paper-based processes. This made data access, inventory control, and service tracking difficult and time-consuming. I worked directly with the client to understand their workflow and deliver a centralized, efficient digital system tailored to their needs.
            </p>
            <p className="text-gray-400 mt-4">
                The platform included inventory management, technician assignment, task scheduling with calendar integration (using React Big Calendar), service rating by clients, payment tracking for technicians, role-based access control, PDF generation, and advanced search filters to replace manual document lookup. The main goal was to deliver a user-friendly and efficient system that improved day-to-day operations for both staff and clients.
            </p>
            <p className="text-gray-400 mt-4">
                I was in charge of the full development process: creating wireframes and UI sketches in Figma, designing the database with MySQL, implementing the backend with Laravel, and building the frontend with React. This was the most complex system I’ve worked on so far and a valuable experience in understanding not only the technical aspects, but also how to solve real business problems through software.
            </p>


            <div className="inline-flex flex-wrap gap-2 mt-4 bg-[#1C1C20] rounded-full p-2 max-w-full">
                <span className="text-[#8E94BC] px-4 py-2 rounded-full text-sm md:text-base lg:text-lg">Laravel</span>
                <span className="text-[#8E94BC] px-4 py-2 rounded-full text-sm md:text-base lg:text-lg">React</span>
                <span className="text-[#8E94BC] px-4 py-2 rounded-full text-sm md:text-base lg:text-lg">MySQL</span>
                <span className="text-[#8E94BC] px-4 py-2 rounded-full text-sm md:text-base lg:text-lg">Tailwind</span>
                <span className="text-[#8E94BC] px-4 py-2 rounded-full text-sm md:text-base lg:text-lg">Figma</span>
                <span className="text-[#8E94BC] px-4 py-2 rounded-full text-sm md:text-base lg:text-lg">Linux</span>
            </div>
        </div>
    );
}
