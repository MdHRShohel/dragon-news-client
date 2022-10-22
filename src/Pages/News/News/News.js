import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const News = () => {
    const news = useLoaderData();
    //console.log(news);
    const {
      title,
      details,
      author,
      image_url,
      category_id,
      rating,
    } = news;

    return (
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <div className="d-flex justify-content-between">
            <p>Author: {author?.name}</p>
            <p>Published On: {author?.published_date}</p>
            <p>Ratings: {rating?.number}</p>
          </div>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant="primary">All News Category</Button>
          </Link>
        </Card.Body>
      </Card>
    );
};

export default News;