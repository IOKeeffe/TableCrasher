# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
city_picture_urls = ["http://res.cloudinary.com/dydv1ehma/image/upload/Restaurants/141001144835-innovative-cities-philly-1024x576",
  "http://res.cloudinary.com/dydv1ehma/image/upload/Restaurants/201411-a-americas-favorite-cities-new-york",
  "http://res.cloudinary.com/dydv1ehma/image/upload/Restaurants/1680856-poster-1280-10-smartest-european-cities-shutterstock-78340003-1",
  "http://res.cloudinary.com/dydv1ehma/image/upload/Restaurants/cities",
  "http://res.cloudinary.com/dydv1ehma/image/upload/Restaurants/tokyo",
  "http://res.cloudinary.com/dydv1ehma/image/upload/Restaurants/chicago-1"]

restaurant_picture_urls = ["http://res.cloudinary.com/dydv1ehma/image/upload/Restaurants/scandic-sundsvall-city-restaurant-verket-10_madk5z.jpg",
  "http://res.cloudinary.com/dydv1ehma/image/upload/Restaurants/restaurant-c-michiel-van-der-eerde-amsterdam-2_yuyi7g.jpg",
  "http://res.cloudinary.com/dydv1ehma/image/upload/Restaurants/restaurant-carousel-1_lykh1n.jpg",
  "http://res.cloudinary.com/dydv1ehma/image/upload/Restaurants/restaurant-939435_960_720_mbge7l.jpg",
  "http://res.cloudinary.com/dydv1ehma/image/upload/Restaurants/restaurant_w9l2lj.jpg",
  "http://res.cloudinary.com/dydv1ehma/image/upload/Restaurants/Benchmark_Restaurant_Dining_Room_Photographed_by_Evan_Sung_wg3rxq.jpg",
  "http://res.cloudinary.com/dydv1ehma/image/upload/Restaurants/Restaurant_1_crga5j.jpg",
  "http://res.cloudinary.com/dydv1ehma/image/upload/Restaurants/lockwood-chicago-restaurant-bar-2_io6opj.jpg",
  "http://res.cloudinary.com/dydv1ehma/image/upload/Restaurants/home_restaurants-1_n1wljo.jpg",
  "http://res.cloudinary.com/dydv1ehma/image/upload/Restaurants/restaurant_2_ssljno.jpg",
  "http://res.cloudinary.com/dydv1ehma/image/upload/Restaurants/restaurant_jn7rsq.jpg"]

food_picture_urls = ["http://res.cloudinary.com/dydv1ehma/image/upload/Restaurants/so24",
  "http://res.cloudinary.com/dydv1ehma/image/upload/Restaurants/st07",
  "http://res.cloudinary.com/dydv1ehma/image/upload/Restaurants/restaurant-offerings-cta",
  "http://res.cloudinary.com/dydv1ehma/image/upload/Restaurants/pizza-junk-food-600",
  "http://res.cloudinary.com/dydv1ehma/image/upload/Restaurants/download_1",
  "http://res.cloudinary.com/dydv1ehma/image/upload/Restaurants/download_3",
  "http://res.cloudinary.com/dydv1ehma/image/upload/Restaurants/images",
  "http://res.cloudinary.com/dydv1ehma/image/upload/Restaurants/download",
  "http://res.cloudinary.com/dydv1ehma/image/upload/Restaurants/download_2",
  "http://res.cloudinary.com/dydv1ehma/image/upload/Restaurants/download_4"]

User.delete_all
City.delete_all
Restaurant.delete_all
Reservation.delete_all
Review.delete_all

6.times do |i|
    City.create(
    name: Faker::GameOfThrones.city,
    image_url: city_picture_urls[i],
  )
end

20.times do
  uname = Faker::GameOfThrones.character
  until(uname.split.length == 2) do
    uname = Faker::GameOfThrones.character
  end
  u = User.create(
    username: uname.split(" ").join(""),
    password: "starwars",
    session_token: Faker::Crypto.md5,
    city_id: City.all.sample.id,
    f_name: uname.split(" ")[0],
    l_name: uname.split(" ")[1],
    email_address: "#{uname.split(" ").join("")}@#{Faker::GameOfThrones.house.split(" ").join("")}.com"
  )
end


40.times do
  gal = []
  8.times do
    gal.push(food_picture_urls.sample)
  end
  name = "The #{Faker::Color.color_name.titleize} #{Faker::Food.ingredient.titleize}"
  until Restaurant.find_by(name: name).nil? do
    name = "The #{Faker::Color.color_name.titleize} #{Faker::Food.ingredient.titleize}"
  end
  cat = ["American", "Mexican", "Italian", "Indian", "Chinese", "French", "BBQ", "Vegetarian"].sample
  article = cat[0].in?(["A","E","I","O","U"]) ? "An" : "A"
  owner = User.all.sample
  Restaurant.create(
    name: "The #{Faker::Color.color_name.titleize} #{Faker::Food.ingredient.titleize}",
    address: Faker::Address.street_address,
    state: "New York",
    zip_code: 11205,
    category: cat,
    city_id: City.all.sample.id,
    gallery: gal,
    opening_time: "11:00:00",
    closing_time: "23:00:00",
    seating: 20 + rand(31),
    description: "#{article} #{cat} restaurant specializing in locavore fare, from head chef #{owner.f_name} #{owner.l_name}",
    image_url: restaurant_picture_urls.sample,
    price: (1..4).to_a.sample,
    owner_id: owner.id,
  )
end


User.create(
  username: "guest",
  password: "starwars",
  f_name: "Guest",
  l_name: "Guest",
  email_address: "guest@guest.com",
  city_id: City.all.sample.id,
)

User.create(
username: "guy",
  password: "starwars",
  f_name: "Guy",
  l_name: "Von Trapp",
  email_address: "guest@guest.com",
  city_id: City.all.sample.id,
)

40.times do
  user = User.all.sample.id
  restaurant = Restaurant.all.sample.id
  review = Review.create(
    body: Faker::Hipster.paragraph,
    user_id: user,
    restaurant_id: restaurant,
    rating: (1..5).to_a.sample,
  )
end

40.times do
  user = User.all.sample
  restaurant = Restaurant.all.sample
  Favorite.create(
    user_id: user.id,
    restaurant_id: restauarant.id
  )
end
