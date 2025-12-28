import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl ,projectLink}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br></br>
          <br></br>
          <br></br>
          <button
            type="button"
            onClick={() => window.open(projectLink, "_blank")}
            className="project-btn"
          >
            View Project
          </button>
        </div>
      </div>
    </Col>
  )
}
