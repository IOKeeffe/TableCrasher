# TableCrasher

[Heroku link](https://table-crasher.herokuapp.com/)

[Trello link](https://trello.com/b/XZhuNIJM/tablecrasher)



## Minimum Viable Product
TableCrasher is a web application inspired by OpenTable. It is built using Ruby on Rails and React/Redux. This app will satisfy the following criteria by the end of week 9, with smooth, bug-free navigation, seed data, and beautiful CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login.
- [ ] A production README, replacing this README
- [ ] Create and search restaurants
- [ ] Reservations
- [ ] Ratings/reviews
- [ ] Favorites

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: ../docs/wireframes
[components]: ../docs/component-hierarchy.md
[sample-state]: ../docs/sample-state.md
[api-endpoints]: ../docs/api-endpoints.md
[schema]: ../docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)
**Objective:** Functioning rails project with front-end Authentication.
* The header will have the website's name and icon, sign up, and sign in
buttons.
* Website name and icon should link back to the root view.
* Clicking sign up or sign in buttons will display respective forms.

### Phase 2: City List and Restaurant Index (2 days)

**Objective:** Styled list of cities and restaurant index page.
* Root view should have list of available cities.
* Clicking on a city will show the available list of restaurants.
* Restaurant index should display an image, name, category, and 1 through 4 price range.
* Restaurant index has working search for city.

### Phase 3: Restaurant Details Page (1.5 days)

**Objective:** Functional core of details page.
* Details will include description and additional photos.
* Details page will have Restaurant item page
* Details page will have Reservation form.
* Details page has option to favorite.

### Phase 4: Reservations (1 days)

**Objective:** Users can search by time slots or restaurant location and book reservations.
* Reservation form will include number of people, date, and time.
* Form will be added to the root view and details page.
* Available time slots will be shown on the details page.
* Search will display a list of restaurants according the the users location search.

### Phase 5: Reviews (1 days)

**Objective:** Users can leave reviews on restaurant details page.
* Review form will include a body and 1 through 5 rating.
* Add rating and number of reviews to restaurant index page.
* Add full review details/form to restaurant details page.


### Phase 6: - User Page with Reviews, Reservations, Favorites (1.5 day)

**Objective:** User has access to a profile page.
* Profile page contains upcoming reservations.
* Profile page contains posted reviews.
* Profile page contains favorite restaurants.
