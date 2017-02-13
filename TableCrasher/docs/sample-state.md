``` js
{
  currentUser: {
    id: 1,
    username: 'cooldude2'
  },
  forms: {
    signUp: { errors: [] },
    logIn: { errors: [] },
    createReview: { errors: [] },
    createRestaurant: { errors: [] }
  },
  cities: {
    1: {
      id: 1
      name: "New York",
      image_url: "http://host.com/NewYork/1",
    }
  },
  restaurantsIndex: {
    restaurants: {
      1: {
        id: 1,
        name: 'Calexico',
        image_urls: [http://host.com/calexico/1],
        category: 'Mexican',
        city: 'New York',
        price: 1,
        rating: 4.7
      },
      2: {
        id: 2,
        name: 'Emily',
        image_urls: [http://host.com/Emily/1],
        category: 'Pizza',
        city: 'New York',
        price: 3,
        rating: 4.8
      }
    }
    errors: ['error1']
  },
  restaurantDetail: {
    id: 1,
    owner_id: 3,
    name: 'Calexico',
    favorited_by_current_user: true,
    image_urls: [http://host.com/calexico/1],
    category: 'Mexican',
    price: 1,
    rating: 4.7,
    address: '1253 ManhattanAve',
    city: 'Brooklyn',
    state: 'New York',
    zip_code: '11201',
    website_url: 'http://www.calexico.com',
    description: 'Amazing California style Mexican street food in the heart of Greenpoint',
    reservations: {
      1: {
        party_size: 4,
        time_slot: '2017-3-22 17:00:00',
        user_id: 1,
        restaurant_id: 1
      }
    },
    reviews: {
      1: {
        rating: 5,
        body: 'The best restaurant in NY!',
        date: '2017-2-22'
        user_id: 2,
        restaurant_id: 1
      }
    }
  }
}
```
