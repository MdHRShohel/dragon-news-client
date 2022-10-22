import React from 'react';
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
import Image from "react-bootstrap/Image";
import { FaBookmark, FaShareAlt } from "react-icons/fa";


const NewsSummaryCard = ({news}) => {
    const {_id, title,author ,total_view , details,image_url} = news;
  
    //console.log(news);
    return (
      <Card className="mb-5">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <div className='d-flex'>
            <Image
              roundedCircle
              src={author?.img}
              style = {{height: "50px"}}
            ></Image>
            <div className='ms-2'>
              <p>{author?.name}</p>
              <span>{author?.published_date}</span>
            </div>
          </div>
          <div>
          <FaBookmark/>
          <FaShareAlt/>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length > 250 ? (
              <p>
                {details.slice(0, 250) + "..."}
                <Link to={`/news/${_id}`}>Read More</Link>
              </p>
            ) : (
              <p>{details}</p>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    );
};

export default NewsSummaryCard;