import React from 'react';
import RestaurantItem from '../restaurant/restaurant_item';
import ReservationFormContainer from '../reservations/reservation_form_container';
import ReviewsContainer from '../reviews/reviews_container';

export default class RestaurantDetail extends React.Component {
  constructor(props) {
    super(props);
    this.toggleFavorite = this.toggleFavorite.bind(this);
  }

  componentDidMount() {
    this.props.fetchRestaurant(this.props.id);
    this.props.fetchFavorites();
    this.props.receiveReservations();
  }

  componentWillUnmount() {
    this.props.unmountRestaurant();
  }

  toggleFavorite() {
    let favorite = this.props.favorites[this.props.restaurant.id];
    if(favorite) {
      this.props.deleteFavorite(favorite.id);
    }
    else {
      this.props.createFavorite({restaurant_id: this.props.restaurant.id});
    }
  }

  renderFavoriteButton() {
    if (this.props.favorites && this.props.favorites[this.props.restaurant.id]) {
      return (<div><button className="red-button" onClick={this.toggleFavorite}>
      <i className="fa fa-heart favorited" aria-hidden="true"></i>
        Favorited
        </button></div>
        );
    }
    else {
      return(<div><button className="red-button" onClick={this.toggleFavorite}>
        <i className="fa fa-heart-o" aria-hidden="true"></i>
        Add to favorites
      </button></div>);
    }
  }

  render() {
    let restaurant = this.props.restaurant;
    if(restaurant) {
      return (
          <section className='restaurant-detail'>
            <section className='restaurant-image'>
              <img src={restaurant.image.thumb} alt={`${restaurant.name} logo`} />
            </section>
            <section className='info-box'>
              <section className='restaurant-index-header'>
                <RestaurantItem restaurant={restaurant} favorites={null} />
                {this.renderFavoriteButton()}
              </section>
              <section className='reservation-form'>
                <ReservationFormContainer restaurant={restaurant} isSearchForm={false} />
              </section>
              <section className='restaurant-info'>
                <h2>{`About ${restaurant.name}`}</h2>
                <p>{restaurant.description}</p>
              </section>
              <section className='gallery-container'>
                <h2>Gallery</h2>
                <ul className='gallery-list'>
                  {this.props.restaurant.gallery.map((gallery_object, idx) => {
                    return(<li className='gallery-item restaurant-gallery-item' key={idx}><img src={gallery_object.image} /></li>);
                  })}
                </ul>
              </section>
              <ReviewsContainer currentPage='restaurant' />
          </section>
        </section>
      );
    }
    else {
      return (
          <section>Loading...</section>
      );
    }
  }
}
