import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { FaBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";

const NewsSummaryCard = ({ news }) => {
  const { _id, title, author, total_view, rating, details, image_url } = news;

  //console.log(news);
  return (
    <Card className="mb-5">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <Image
            roundedCircle
            src={author?.img}
            style={{ height: "50px" }}
          ></Image>
          <div className="ms-2">
            <p className="mb-0">{author?.name}</p>
            <span>{author?.published_date}</span>
          </div>
        </div>
        <div>
          <FaBookmark className="me-2" />
          <FaShareAlt />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text className="mt-2">
          {details.length > 250 ? (
            <>
              {details.slice(0, 250) + "..."}
              <Link to={`/news/${_id}`}>Read More</Link>
            </>
          ) : (
            <>{details}</>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex justify-content-between">
        <div>
          <FaStar className="text-warning me-2" />
          <span>{rating?.number}</span>
        </div>
        <div>
          <FaEye className="text-primary me-2" />
          <span>{total_view} views</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsSummaryCard;
