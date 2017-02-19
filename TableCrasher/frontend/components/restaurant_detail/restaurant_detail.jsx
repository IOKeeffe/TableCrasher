import React from 'react';
import RestaurantItem from '../restaurant/restaurant_item';

export default class RestaurantDetail extends React.Component {
  constructor(props) {
    super(props);
    // this.renderPictures = this.renderPictures.bind(this);
  }

  componentDidMount() {
    this.props.fetchRestaurant(this.props.id);
  }

  render() {
    let restaurant = this.props.restaurant;
    if(restaurant) {
      return (
          <section className="restaurant-detail">
            <section className="restaurant-image">
              <img src={restaurant.image_url} alt={`${restaurant.name} logo`} />
            </section>
            <section className="info-box">
              <section className="restaurant-index-header">
                <RestaurantItem restaurant={restaurant} />
              </section>
              <section className="restaurant-info">
                <h2>{`About ${restaurant.name}`}</h2>
                <p>{restaurant.description}</p>
              </section>
              <section className="restaurant-detail-gallery">
                <h2>Gallery</h2>
                <ul className="gallery">
                  {this.props.restaurant.gallery.map((pictureUrl, idx) => {
                    return(<li className="gallery-pic" key={idx}><img src={pictureUrl} /></li>);
                  })}
                </ul>
              </section>
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
