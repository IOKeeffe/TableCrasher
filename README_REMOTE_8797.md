# Table Crasher

<a href="http://tablecrasher.co">Table Crasher</a>

TableCrasher is a full-stack {db: 'Postgres', backEnd: 'Ruby on Rails', frontEnd: 'React/Redux'} web application inspired by OpenTable.

TableCrasher is designed to connect people to the restaurants they love.

Users can explore restaurants, make reservations, favorite restaurants, and leave ratings and reviews to let other users know how they liked their meal.

The UI is based on OpenTable, with some spacing adjustment to account for feature differences.

# Current Features & Implementation Details

## Restaurants
Restaurants are saved in a single database, with columns for the trivial details like names and addresses. The table also stores opening times, closing times, and the amount of seating per restaurant. This information is used in determining whether or not a reservation is available.

Restaurants are displayed in various ways on the site.

They can be filtered on the main page by clicking a city, which makes an API call to update the state with only restaurants that belong to that city.

Smaller restaurant info panes are available on the main page, search results, or from the reservation or details page on a user profile.

Users can click through a restaurant info pane to get to a detail page. The detail page includes info about the restaurant as well as reviews, a gallery, and a reservation form to make a new reservation at that restaurant.

![Detail Page](docs/wireframes/RestaurantDetails.png)

##Reservations
Reservations represent the main functionality on the site. They are linked to a user_id and a restaurant_id, and store the table size and time slot. The reservation system makes the assumption that most parties will be finished eating in an hour, giving the restaurant 15 minutes to turn the table.

When a user searches a reservation, the database is queried for the time available, as well as other nearby time slots. If the restaurant has enough seating to accomodate the party, the database returns the available reservations without persisting them until a user actually chooses one.

Reservation searches can accommodate a search term to find a corresponding restaurant, or they can be for a single restaurant.

## Reviews
Reviews store a star rating from 1-5 as well as a body of text. Users can update, delete, and create reviews from the restaurant page. Restaurant pages list all user reviews.

##Favorites
Favorites are a simple join table between a user and restaurant. They store no additional data. Restaurants display a heart if they have a favorite matching the current user's id.

# Future Features

## Create restaurants
The backend is entirely in place for creating a restaurant, so I'd like to add a feature to add new restaurants. Users would then "own" that restaurant, and have the ability to reply to reviews and upload new gallery pictures.

## Header improvements
The header could use some polish. In particular, I'd like to display a hamburger menu listing upcoming reservations and direct links to the different user profiles.

## Google maps integration
The seed data on the site right now is fictitious restaurants and addresses. In the future I plan on adding real addresses and restaurants, as well as a google maps api to see where the restaurant is.
