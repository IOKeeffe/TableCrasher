import React from 'react';
import CityIndexItem from './city_index_item';

export default class CityIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCities();
  }

  render() {
    if(this.props.cities) {
      return (
        <section className="city-index">
          <ul className="city-list">
            {
              this.props.cities.slice(0,6).map((city) => {
                return (<CityIndexItem key={city.id} city={city} fetchCityRestaurants={this.props.fetchCityRestaurants}/>);
              })
            }
          </ul>
        </section>
      );
    }
    else return (
      <section></section>
    );
  }
}
