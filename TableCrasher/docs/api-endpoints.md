# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users/:id`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Cities
- `GET /api/cities`

### Restaurants

- `GET /api/restaurants`
- `GET /api/restaurants/:id`
- `POST /api/restaurants/`
- `PATCH /api/restaurants/:id`

## Reviews
- `GET /api/restaurants/:id/reviews`
  - index of all reviews for the restaurant
- `POST /api/restaurants/:id/reviews`
- `DELETE /api/restaurants/:id/review`

## Reservations
- `GET /api/users/:id/reservations`
  - index of all reservations for the user
- `POST /api/users/:id/reservations`

## Favorites
- `GET /api/users/:id/favorites`
  - index of all favorites for the user
- `DELETE /api/users/:id/favorites`
