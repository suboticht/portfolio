import React from 'react'
import ProjectCard from './ProjectCard'
import project from '../../Assets/project.jpg'

export default function Project() {
  return (
    <>
    <h2 className='text-3xl mt-20 text-center text-blue-700 dark:text-yellow-500 font-bold'>Some Completed Projects</h2>
    <div className="grid grid-cols-1 grid-rows-2 mt-10 md:grid-cols-2 lg:grid-cols-3">
      <ProjectCard 
        image = {project}
        name = "project 01"
        description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, ipsum. Neque, similique delectus. Pariatur ipsum perferendis a nesciunt? Nesciunt esse doloremque molestias perspiciatis beatae non id maxime accusantium, officiis officia."
        link= "#"
      />
      <ProjectCard 
        image = {project}
        name = "project 02"
        description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, ipsum. Neque, similique delectus. Pariatur ipsum perferendis a nesciunt? Nesciunt esse doloremque molestias perspiciatis beatae non id maxime accusantium, officiis officia."
        link= "#"
      />
      <ProjectCard 
        image = {project}
        name = "project 03"
        description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, ipsum. Neque, similique delectus. Pariatur ipsum perferendis a nesciunt? Nesciunt esse doloremque molestias perspiciatis beatae non id maxime accusantium, officiis officia."
        link= "#"
      />
      <ProjectCard 
        image = {project}
        name = "project 04"
        description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, ipsum. Neque, similique delectus. Pariatur ipsum perferendis a nesciunt? Nesciunt esse doloremque molestias perspiciatis beatae non id maxime accusantium, officiis officia."
        link= "#"
      />
      <ProjectCard 
        image = {project}
        name = "project 05"
        description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, ipsum. Neque, similique delectus. Pariatur ipsum perferendis a nesciunt? Nesciunt esse doloremque molestias perspiciatis beatae non id maxime accusantium, officiis officia."
        link= "#"
      />
      <ProjectCard 
        image = {project}
        name = "project 06"
        description = "Build a landing page using HTML, CSS, Git, and JavaScript. Ensure it meets all customer requirements."
        link= "#"
      />
    </div>
    </>
  )
}
