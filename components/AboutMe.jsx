import React from "react";
import { useTransition, useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
          <ul className="list-disc pl-2">
                <li>Python</li>
                <li>C</li>
                <li>Java</li>
                <li>C++</li>
                <li>Laravel</li>
                <li>MySQL</li>
                <li>PHP</li>
                <li>Git</li>
                <li>Chart.js</li>
                <li>Bootstrap</li>
                <li>CSS</li>
                <li>HTML</li>
                <li>JavaScript</li>
          </ul>
        ),
    },
    {
        title: "Experiences",
        id: "experiences",
        content: (
          <ul className="list-disc pl-2">
            <li>APU AWS DeepRacer</li>
            <li>Internal CTF 2023</li>
            <li>Tune Protect Hackathon</li>
          </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
          <ul className="list-disc pl-2">
                <li>Asia Pacific University</li>
                <li>Pei Hwa High School</li>
          </ul>
        ),
    }
];

const AboutMe = () => {
    const[tab, setTab] = useState("skills");
    const[isPending, startTransition] = useTransition();
    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
    return(
        <section className="text-white grid" id="aboutMe">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-32 py-16 xl-gap-16 items-center">
                <div>
                    <img src="/AboutMe.png" alt="About Me" width={450} height={450} style={{ borderRadius: "25px" }}/>
                </div>

                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
                    <p className="text-base text-justify lg:text-lg">
                        I have a bachelor's degree in computer science with a specialization in artificial intelligence, focusing my expertise as a backend web developer. I am fluent in a variety of languages and technologies, including Python, C, Java, C++, Laravel, MySQL, PHP, Git, jQuery, Ajax, Chart.js, Bootstrap, REST APIs, CSS, HTML, and JavaScript. My practical experience includes achievements such as finishing second in the final round of the APU AWS DeepRacer competition. At the Tune Protect Hackathon, I achieved in third place, showing my ability to innovate and produce results under pressure. I'm dedicated to staying on the cutting edge of technology, and I approach every project with a strong combination of practical experience and academic understanding, hoping to contribute significantly to the fascinating field of backend web development. 
                    </p>
                    <div className="flex flex-row mt-8">
                        <TabButton 
                            selectTab={() => handleTabChange("skills")}
                            active= {tab === "skills"}
                        >
                            Skills
                        </TabButton>

                        <TabButton 
                            selectTab={() => handleTabChange("experiences")}
                            active= {tab === "experiences"}
                        >
                            {" "}Experiences{" "}
                        </TabButton>

                        <TabButton 
                            selectTab={() => handleTabChange("education")}
                            active= {tab === "education"}
                        >
                            {" "}Education{" "}
                        </TabButton>
                    </div>

                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;