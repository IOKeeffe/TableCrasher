import React from 'react';
import StarRating from 'react-star-rating';

export default class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {reviewing: false};
  }

  componentDidMount() {
    if(this.props.currentPage === 'user') {
      this.props.fetchUserReviews();
    }
    else {
      this.props.fetchRestaurantReviews(this.props.restaurant.id);
    }
  }

  renderReviewForm() {
    if(!this.state.reviewing || this.props.currentPage === 'user') return;
    return (
      <ReviewForm restaurant={this.props.restaurant} user={this.props.currentUser}/>
    );
  }

  renderReviewButton() {
    if(this.state.reviewing || this.props.currentPage === 'user') return;
    return (
      <button onClick={(e) => this.setState({reviewing: true})}>Add a review</button>
    );
  }

  render() {
    if(this.props.reviews) {
      return (
        <section className='review-container'>
          <ul className='review-list'>
          {this.props.reviews.map((review) => {
            return (
              <li className='review' key={review.id}>
              <div className='header'>
                <h2 className='title'>
                  {this.props.currentPage === 'restaurant' ? review.user.username : review.restaurant.name}
                </h2>
                <div className='rating'>
                  <StarRating name='rating' disabled={true} totalStars={5} rating={review.rating} size={15}/>
                </div>
                </div>
              <p>{review.body}</p>
              </li>
            );
          })}
          </ul>
          {this.renderReviewButton()}
          {this.renderReviewForm()}
        </section>
      );
    }
    else {
      return(<div>Loading...</div>);
    }
  }
}
