"use client";
import Image from 'next/image'
import React, {useState,useTransition} from 'react'
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title : "Skills",
        id : "skills",
        content : (
            <ul >
                <li>PHp</li>
                <li>Laravel</li>
                <li>Mysql</li>
                <li>JavaScript</li>
                <li>React</li>
            </ul>
        )
    },
    {
        title : "Education",
        id : "education",
        content : (
            <ul>
                <li>Myanmar Second Years</li>
                <li>NCC LEVEL 4 Diploma L4DC</li>
            </ul>
        )
    },
    {
        title : "Certifications",
        id : "certifications",
        content : (
            <ul>
                <li>Code Lab Web design and Full stackdeveloper</li>
                <li>NCC LEVEL 4 Diploma L4DC</li>
            </ul>
        )
    }
]

const AboutSection =() => {
    const [tab, setTab] = useState('skills');
    const [isPending,startTransition ] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }
  return (
    <section className='text-white '>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src="/images/about-image.png" width={500} height={600}/>
            <div>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'>
                I am a full stack web developer with a passion for creating
                interactive and responsive web applications. I have experience
                working with JavaScript, React, Redux, Php, Laravel, Mysql,
                HTML, CSS, and Git. I am a quick learner and I am always
                looking to expand my knowledge and skill set. I am a team player and
                I am excited to work with others to create amazing applications.   
                </p>
                <div className='flex flex-row mt-8'>
                    <TabButton selectTab={() => handleTabChange("skills")} active={tab === 'skills'}>
                        Skills
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("education")} active={tab === 'education'}>
                    Education
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("certifications")} active={tab === 'certifications'}>
                    Certifications
                    </TabButton>
                </div>
                <div className='mt-8'>{
                    TAB_DATA.find((t) => t.id === tab).content
                }</div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection