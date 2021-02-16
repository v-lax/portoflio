import React from "react";
import {useLocation} from "react-router-dom";
import {ArrowRight16} from "@carbon/icons-react";

import {HeaderContainer, Header, Image, ViewResume} from "./styles";

const ProfileHeader = ({ user }) => {
  const location = useLocation();

  return(
    <HeaderContainer isHome={location.pathname==="/"}>
      <Header>
        <Image src={user.basics.picture}/>
        <div>
          <h2>{user.basics.name}</h2>
          <h4>
            <a
            href={`https://gitconnected.com/${user.basics.username}`}
            target="_blank"
            rel="noreferrer noopener"
            >
            @{user.basics.username}
            </a>
          </h4>
          <p>{user.basics.label}</p>
          <p>Based out of {user.basics.region}</p>
        </div>
      </Header>
      <div>
        <ViewResume
          href={`https://gitconnected.com/${user.basics.username}/resume`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span> View Resume </span>
          <ArrowRight16/>
        </ViewResume>
      </div>
    </HeaderContainer>

  );

}

export default ProfileHeader; 