import React from "react";
import Layout from "../../components/Layout";
import { SectionTitle, Paragraph } from '../../style';
import { EducationItem, Institution, Degree } from './style';

const Education = ({user}) => {
  return(
    <Layout user={user}>
      <div>
      <SectionTitle>Education</SectionTitle>
      <ul>
        {user.education.map((education,i)=>(
          <EducationItem key={i}>
            <Institution>{education.institution}</Institution>
            <div>
              <Degree>
                {education.studyType},{education.area}
              </Degree>{" "}
              <span>&sdot;</span>
              <span>
                {education.start.year}-{education.end.year}
              </span>
            </div>
          <Paragraph>{education.description.replace('\n\n','\n')}</Paragraph>
          </EducationItem>
        ))}
      </ul>
      </div>
    </Layout>
  );
}

export default Education;