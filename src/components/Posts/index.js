import React from "react";
import Icon1 from "../../images/icon1.svg";
import Icon2 from "../../images/icon2.svg";
import Icon3 from "../../images/icon3.svg";

import {
  PostContainer,
  PostsH1,
  PostsWrapper,
  PostsCard,
  PostsIcon,
  PostsH2,
  PostsP,
} from "./PostsElements";
const index = () => {
  return (
    <PostContainer id="posts">
      <PostsH1>My Blog</PostsH1>
      <PostsWrapper>
        <PostsCard>
          <PostsIcon src={Icon1} />
          <PostsH2>Montes nascetur</PostsH2>
          <PostsP>
            Eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi proin
            sed libero enim.
          </PostsP>
        </PostsCard>
        <PostsCard>
          <PostsIcon src={Icon3} />
          <PostsH2>Ridiculus mus</PostsH2>
          <PostsP>
            Eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi proin
            sed libero enim.
          </PostsP>
        </PostsCard>
        <PostsCard>
          <PostsIcon src={Icon2} />
          <PostsH2>Nascetur ridiculus</PostsH2>
          <PostsP>
            Eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi proin
            sed libero enim.
          </PostsP>
        </PostsCard>
      </PostsWrapper>
    </PostContainer>
  );
};

export default index;
