import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText,
  CardBody
} from "reactstrap";

function RenderDish({ dish }) {
  if (dish != null)
    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  else return <div />;
}

function RenderComments({ dishComments }) {
  if (dishComments === "" || dishComments === null) {
    return <div />;
  } else {
    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <div>
          {dishComments.map(comments => (
            <div key={comments.id}>
              <p>{comments.comment}</p>
              <p>
                -- {comments.author},{" "}
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit"
                }).format(new Date(Date.parse(comments.date)))}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const DishDetail = props => {
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <RenderDish dish={props.dish} />

          <RenderComments dishComments={props.dish.comments} />
        </div>
      </div>
    );
  } else return <div> </div>;
};

export default DishDetail;
