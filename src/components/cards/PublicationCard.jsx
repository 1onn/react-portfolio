import React from "react";
import styled from "styled-components";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const Top = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 12px;
`;
const Image = styled.img`
  height: 50px;
  border-radius: 10px;
  margin-top: 4px;

  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;
const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 600px;
  color: ${({ theme }) => theme.text_primary + 99};

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
const Conference = styled.div`
  font-size: 14px;
  font-weight: 500px;
  color: ${({ theme }) => theme.text_secondary + 99};

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const Date = styled.div`
  font-size: 12px;
  font-weight: 400px;
  color: ${({ theme }) => theme.text_secondary + 80};

  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
const Authors = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const Span = styled.div``;

const Journal = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};
  margin-top: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const PublicationCard = ({ publication, isFirst }) => {
  return (
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          alt={publication.school}
          style={{
            backgroundColor: "white",
            borderRadius: "50%",
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
          src={publication.logo}
        />
      }
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        background: "#1d1836",
        color: "#fff",
        boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
        backgroundColor: "rgba(17, 25, 40, 0.83)",
        border: "1px solid rgba(255, 255, 255, 0.125)",
        borderRadius: "6px",
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(255, 255, 255, 0.3)",
      }}
      date={publication.date}
    >
      <Top>
        {publication.logo && <Image src={publication.logo} alt="Logo" />}
        <Body>
          <Title>{publication.title}</Title>
          <Conference>{publication.conference}</Conference>
          <Date>{publication.date}</Date>
        </Body>
      </Top>{" "}
      {publication.journal && <Journal>{publication.journal}</Journal>}
      <Authors>{publication.authors}</Authors>
      <Description>
        <Span>{publication.description}</Span>
        {publication.link && (
          <div>
            <a
              href={publication.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {isFirst ? "Watch The Presentation" : "Read more"}
            </a>
          </div>
        )}
      </Description>
    </VerticalTimelineElement>
  );
};

export default PublicationCard;
