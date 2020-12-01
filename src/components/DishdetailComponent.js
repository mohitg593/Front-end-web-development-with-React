import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {

    constructor(props) {
        super(props);
    }

    renderselectedDish(selectedDish) {
        return (
            <Card>
                <CardImg width="100%" src={this.props.selectedDish.image} alt={this.props.selectedDish.name} />
                <CardBody>
                    <CardTitle>{this.props.selectedDish.name}</CardTitle>
                    <CardText>{this.props.selectedDish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    renderComments(comments) {
        var comments = comments.map((comment) => {
            return (
                <li key={comment.id} >
                    {comment.comment}
                    <br /><br />
                    -- {comment.author}, {comment.date}
                    <br /><br />
                </li>
            );
        });

        return (
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments}
                </ul>
            </div>
        );
    }

    render() {
        if (this.props.selectedDish!=null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderselectedDish(this.props.selectedDish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.selectedDish.comments)}
                    </div>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }
}

export default Dishdetail; 