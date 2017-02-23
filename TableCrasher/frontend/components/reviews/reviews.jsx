import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import ReviewFormContainer from './review_form_container';
import { loadingDiv } from '../../util/utils';

export default class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {creatingNewReview: false, editingReview: null, checkingDelete: null};
    this.setState = this.setState.bind(this);
    this.updateReview = this.updateReview.bind(this);
  }

  componentDidMount() {
    if(this.props.currentPage === 'user') {
      this.props.fetchUserReviews();
    }
    else {
      this.props.fetchRestaurantReviews(this.props.restaurant.id);
    }
  }

  componentWillReceiveProps(newProps)  {
    if(newProps !== this.props) {
      this.setState({creatingNewReview: false, editingReview: false, checkingDelete: false});
    }
  }

  renderNewReviewForm() {
    if(!this.state.creatingNewReview || this.props.currentPage === 'user') return;
    return (
      <ReviewFormContainer restaurant={this.props.restaurant} currentUser={this.props.currentUser} editing={false}/>
    );
  }

  updateReview(review) {
    return (e) => {
      this.setState({editingReview: review});
    };
  }

  renderDeleteButton(review) {
    if(this.state.checkingDelete === review) {
      return (<div>Really Delete? <br />
        <a className="delete" onClick={(e) => {this.props.deleteReview(review.id);}}>Delete</a>
        <a className="cancel" onClick={(e) => {this.setState({checkingDelete: null});}}>Cancel</a>
      </div>);
    }
    else {
      return (<button className="red-button" onClick={(e) => {return this.setState({checkingDelete: review});}}>Delete Review</button>);
    }
  }


  renderUserButtons(review) {
    if(review.user.username === this.props.currentUser.username && this.props.currentPage === 'restaurant') {
      return(
        <div className="button-div" >
          <button className="red-button" onClick={this.updateReview(review)}>Update Review</button>
          {this.renderDeleteButton(review)}
        </div>
      );
    }
  }

  renderReview(review) {
    if(this.state.editingReview === review)
      return this.renderEditingReview(review);
    else {
      return this.renderStaticReview(review);
    }
  }

  renderEditingReview(review) {
    return (<ReviewFormContainer key={review.id} review={review} restaurant={this.props.restaurant} currentUser={this.props.currentUser} editing={true}/>);
  }

  renderStaticReview(review) {
    return (
      <li className='review' key={review.id}>
      <div className='review-header'>
        <div className='rating'>
          <StarRatingComponent
          name={`rating-${review.id}`}
          starCount={5}
          value={review.rating}
          />
        </div>
        <h2 className='title'>
          {this.props.currentPage === 'restaurant' ? review.user.username : review.restaurant.name}
        </h2>
        </div>
      <p>{review.body}</p>
      {this.renderUserButtons(review)}
      </li>
    );
  }

  renderReviewButton() {
    if(this.state.creatingNewReview
      || this.props.currentPage === 'user'
      || this.state.editingReview
      || this.state.checkingDelete) return;
    return (
      <button className="red-button" onClick={(e) => this.setState({creatingNewReview: true})}>Add a review</button>
    );
  }

  render() {
    if(this.props.reviews) {
      return (
        <section className='review-container'>
          <ul className='review-list'>
          {this.props.reviews.map((review) => {
            return (this.renderReview(review));
          })}
          </ul>
          {this.renderReviewButton()}
          {this.renderNewReviewForm()}
        </section>
      );
    }
    else {
      return(loadingDiv());
    }
  }
}
