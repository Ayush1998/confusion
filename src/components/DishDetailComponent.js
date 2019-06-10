import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText,
  CardBody
} from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderDish = dish => {
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
  };

  dateFormat = date => {
    let newDate = "";
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];

    if (date !== null || date !== "") {
      let year = date.getFullYear();
      let month = date.getMonth();
      month = months[month];
      let currentDate = date.getDate();
      if (currentDate < 10) {
        currentDate = "0" + currentDate;
      }
      newDate = " " + month + " " + currentDate + ", " + year;
      return newDate;
    }
  };

  renderComments = dishComments => {
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
                  -- {comments.author},
                  {this.dateFormat(new Date(comments.date))}
                </p>
              </div>
            ))}
          </div>
        </div>
      );
    }
  };

  render() {
    if (this.props.selectedDish != null) {
      return (
        <div className="row">
          {this.renderDish(this.props.selectedDish)}

          {this.renderComments(this.props.selectedDish.comments)}
        </div>
      );
    } else return <div> </div>;
  }
}

export default DishDetail;
