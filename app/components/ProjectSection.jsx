import React from 'react'
import ProjectCard from './ProjectCard'

const projectData = [
    {
        id : 1,
        title : "Laravel Movie Master",
        description : "laravel and php",
        image : '/images/projects/project_one.png',
        tag : ["All","Web"],
        gitUrl : '/',
        previewUrl : '/'
    },
    {
        id : 2,
        title : "Oh My Game Diamond Sale",
        description : "Pubg uc  and  diamond sale",
        image : '/images/projects/project_two.png',
        tag : ["All","Web"],
        gitUrl : '/',
        previewUrl : '/'
    },
    {
        id : 3,
        title : "Live Chat Project nodejs",
        description : "Each project and livechat weight",
        image : '/images/projects/project_three.png',
        tag : ["All","Web"],
        gitUrl : '/',
        previewUrl : '/'
    }
    ,
    {
        id : 4,
        title : "Travel web Design",
        description : "Testing Project and Basic",
        image : '/images/projects/project_four.png',
        tag : ["All","Web"],
        gitUrl : '/',
        previewUrl : '/'
    }
    ,
    {
        id : 5,
        title : "Backend Dashboard",
        description : "Oh my game backend",
        image : '/images/projects/project_five.png',
        tag : ["All","Web"],
        gitUrl : '/',
        previewUrl : '/'
    },
    {
        id : 6,
        title : "Movie Master backend Dashboard",
        description : "php , laravel backend",
        image : '/images/projects/project_six.png',
        tag : ["All","Web"],
        gitUrl : '/',
        previewUrl : '/'
    }

]

const ProjectSection = () => {

  return (
    <>
      <h2 className='text-center text-4xl font-bold text-white mt-4'>My Projects</h2>
      <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {
            projectData.map((project) => 
        <ProjectCard key={project.id}
        title={project.title}
        description={project.description}
        imgUrl={project.image}
        gitUrl={project.gitUrl}
        previewUrl={project.previewUrl}
        />
        )
        }
      </div>
    </>
  )
}

export default ProjectSection
