import React from 'react'
import './css/Projects/Projects.scss'

var arr = [
    {
        Project_Name: "InfoxPression",
        about_project: "InfoXpression is the annual tech carnival of the University School of Information and Communication Technology to test one's technical acumen over three days of intense, engaging, and fun events. Being In the web team for this amazing project I was able to learn how to make a project with a team.",
        points: ["Created multiple scalable and reusable react components for the InfoXpression's website", "I made the UI and implemented using ReactJS in this project.", "I made the backend through which user can register itself and its team for the the events"],
        link:"https://www.infoxpression.tech"
    },
    {
        Project_Name:"Techspace",
        about_project:"Techspace is the “Of the students, By the students, For the students” technical society of USICT that work towards promoting discussion, creative collaboration, research and skill development.",
        points:["Worked on creating the Website of Techspace. a well-known club of USICT","Helped in making the UI elements and designs","Made the website from scratch Based on ReactJS"],
        link:"https://techspaceusict.github.io"
    },
    {
        Project_Name:"AuthKing",
        about_project:"AuthKing is a free login and authentication api which I made using NodeJs and Express for the routing of the api",
        points:["Made this api to learn the authentication and backend for the different projects","Currently using this api in my different projects"],
        link:"infoxpression.tech"
    },
    {
        Project_Name:"Attender",
        about_project:"Attender is a frontend-based attendance management system which uses react's states and context's for the data storage",
        points:["Made this project while learning ReactJS","This project can be used as a frontend for attendance management system"],
        link:"https://ayush-baliyan-19.github.io/attender/"
    },
    {
        Project_Name:"Timeless(Ongoing)",
        about_project:"Timeless is a time management system which includes all aspect of time management starting from your timetable to tasks on each day and percent of tasks completed per day",
        points:["It is a management system which people can use to measure their free time and also make the tasks for their time", "It uses NodeJS in backend, ReactJS in frontend",
        "It includes variety of colors so that it feel nice"],
        link:"#"
    }
]
const Projects = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center",width:"100vw"}}>
            <div className='projects-main'>
                <div className="head">
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <h1 className='project-heading'>My Projects</h1>
                        <p>These are my current projects and the projects I am currently working on</p>
                    </div>
                </div>
                <div className='projects'>
                    <div className='bg'></div>
                    <Project/>
                </div>
            </div>
        </div>
    )
}

const Project = (props) => {
    // const {Project_Name,about_project}= props;
    return (
        <>
                {arr.map((proj) => (
                <div className='project-main'>
                    <>
                        <div className='Project-Name'>
                            <h1>{proj.Project_Name}</h1>
                        </div>
                        <div className='about-project'>
                            <p>{proj.about_project}</p>
                            <ul>
                                {proj.points.map((pro) => (
                                    <li>{pro}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="know-more">
                            {/* <a href={proj.link}>know more...</a> */}
                            <input type="button" className='KnowMore' value="Know More..." onClick={(e)=>{window.location.href=proj.link}}/>
                        </div>
                    </>
            </div>
                ))}
        </>
    )
}

export default Projects