import styled from "styled-components";
import * as palette from "../../styles/Variables";
export const PostContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${palette.DARK_GREEN};

  @media screen and (max-width: ${palette.BP_MEDIUM}) {
    height: 1100px;
  }

  @media screen and (max-width: ${palette.BP_SMALL}) {
    height: 1300px;
  }
`;

export const PostsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: ${palette.BP_XLARGE}) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: ${palette.BP_MEDIUM}) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const PostsCard = styled.div`
  background: ${palette.LIGHT};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2 ease-in-out;
    cursor: pointer;
  }
`;

export const PostsIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const PostsH1 = styled.h1`
  font-size: 2.5rem;
  color: ${palette.LIGHT};
  margin-bottom: 64px;
  @media screen and (max-width: ${palette.BP_SMALL}) {
    font-size: 2rem;
  }
`;

export const PostsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const PostsP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
