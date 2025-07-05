"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Transportelo from "./Transportelo";
import Intra from "./Intra";

export default function Experience() {
    const [activeSection, setActiveSection] = useState("Intra");

    const renderSection = () => {
        switch (activeSection) {
             case "Intra":
                return <Intra />;
            case "Transportelo":
                return <Transportelo />;
            default:
                return null;
        }
    };

    return (
        <div id="experience-section" className="bg-[#161618] flex items-center justify-center p-4 pt-32 pb-32">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:space-x-12">
                    {/* Sección Izquierda */}
                    <div className="md:w-1/3 mb-8 md:mb-0">
                        <h6 className="text-gradient font-semibold text-xl md:text-3xl lg:text-5xl leading-normal md:leading-relaxed lg:leading-relaxed mb-6">
                            My Projects
                        </h6>

                        <div className="relative pl-6 border-l-4 border-[#576eff]">
                            <div className="mb-10 cursor-pointer" onClick={() => setActiveSection("Intra")}>
                                <h6 className={`font-semibold text-lg md:text-xl lg:text-3xl leading-normal md:leading-relaxed lg:leading-relaxed ${activeSection === "WebDeveloper" ? "text-white" : "text-gray-400"}`}>
                                    INTRA
                                </h6>
                            </div>
                            <div className="mb-10 cursor-pointer" onClick={() => setActiveSection("Transportelo")}>
                                <h6 className={`font-semibold text-lg md:text-xl lg:text-3xl leading-normal md:leading-relaxed lg:leading-relaxed ${activeSection === "Internship" ? "text-white" : "text-gray-400"}`}>
                                    Transpórtelo con Dave
                                </h6>
                            </div>
                            <div className="mb-10 cursor-pointer" onClick={() => setActiveSection("HHC")}>
                                <h6 className={`font-semibold text-lg md:text-xl lg:text-3xl leading-normal md:leading-relaxed lg:leading-relaxed ${activeSection === "HHC" ? "text-white" : "text-gray-400"}`}>
                                    Hours Worked
                                </h6>
                            </div>
                        </div>
                    </div>

                    {/* Sección Derecha */}
                    <div className="md:w-2/3">
                        <AnimatePresence>
                            {renderSection() && (
                                <motion.div
                                    key={activeSection}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {renderSection()}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}
