import React from "react";
import Layout from "../../components/Layout";
import { SectionTitle, Pill } from "../../style";
import { ProjectItem, ProjectTitle, SkillContainer } from "./style";


const Projects = ({user}) => {
  return(
    <Layout user={user}>
      <div>
        <SectionTitle>Projects</SectionTitle>
        <ul>
          {user.projects.map((project,i)=>(
            <ProjectItem key={i}>
              <ProjectTitle>{project.name}</ProjectTitle>
              <p>{project.summary}</p>
              <a href={project.url} target="_blank" rel="noreferrer noopener">
                Deployed Project
              </a>
              <SkillContainer>
                {[...project.languages,...project.libraries].map((item,j)=>(
                  <Pill key={j}>{item}</Pill>
                ))}
              </SkillContainer>
            </ProjectItem>
          ))}
        </ul>
      </div>
    </Layout>
  );    
}

export default Projects;