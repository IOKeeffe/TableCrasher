import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

export default class Reviews extends React.Component {
  constructor(props) {
    super(props);
    if(this.props.review) {
      this.state = {
        body: this.props.review.body,
        rating: this.props.review.rating,
        id: this.props.review.id
      };
    }
    else {
      this.state = {body: '', rating: 0};
    }
    this.update = this.update.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.handleStarClick = this.handleStarClick.bind(this);
  }

  handleStarClick(nextState) {

    this.setState({rating: nextState});
  }

  submitForm(e) {
    e.preventDefault();
    let newReview = this.state;
    newReview.restaurant_id = this.props.restaurant.id;
    if(this.props.editing) {
      this.props.updateReview(newReview);
    }
    else {
      this.props.createReview(newReview);
    }
  }

  update(e) {
    this.setState({body: e.target.value});
  }

  render() {
    return (
      <form className='review-form' onSubmit={this.submitForm}>
        <div className='rating'>
        </div>
        <StarRatingComponent
                    name="rating"
                    starCount={5}
                    value={this.state.rating}
                    onStarClick={this.handleStarClick}
                />
        <textarea value={this.state.body} onChange={this.update} />
        <input type="submit"/>
      </form>
    );
  }
}
