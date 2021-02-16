import React from "react";
import Layout from "../../components/Layout";
import { SectionTitle, Paragraph } from "../../style";
import Education from "../Education";
import { WritingItem, PubLink } from "./style";


const Writing = ({user}) =>{
  return(
    <Layout user={user}>
      <SectionTitle>Writing</SectionTitle>
      <ul>
        {user.publications.map((pub,i)=>(
          <WritingItem key={i}>
            <PubLink
              href={pub.url}
              target="_blanks"
            >
              {pub.name}
            </PubLink>
          <Paragraph>{pub.summary.replace('\n\n','\n')}</Paragraph>
          </WritingItem>
        ))}
      </ul>
    </Layout>
  );
};

export default Writing