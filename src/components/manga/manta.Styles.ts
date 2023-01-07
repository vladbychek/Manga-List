import styled from "styled-components";
interface Props {
  img: any;
}

export const MangaLink = styled.a<Props>`
  background-image: url(${(p) => p.img});
  background-size: cover;
  background-position: center;
  text-decoration: none;
  color: ${({theme}) => (theme === "light" ? "black" : "white")};
  display: flex;
  width: 200px;
  height: 300px;
  flex-direction: column-reverse;
  border-radius: 5px 5px 5px 5px;
`;

export const AllManga = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 30px auto 0;
  gap: 30px;
  width: 1170px;
`;

export const MangaTitle = styled.div`
  background-image: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.8) 0,
    rgba(0, 0, 0, 0.01)
  );
  text-shadow: 0 1px rgb(0 0 0 / 70%);
  padding-top: 40%;
  padding-bottom: 5px;
  padding-left: 5px;
  border-radius: 0 0 5px 5px;
`;

export const MangaWrapper = styled.div`
  border-radius: 5px 5px 5px 5px;
  box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);
`;
