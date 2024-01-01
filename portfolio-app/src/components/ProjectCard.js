import React from "react";
import { Col, Button } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubLink, previewLink }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="mt-10">
            <Button href={githubLink} target="_blank" rel="noopener noreferrer" className="mr-10">
              GitHub
            </Button>
            {previewLink && (
              <Button href={previewLink} target="_blank" rel="noopener noreferrer">
                Preview
              </Button>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};
