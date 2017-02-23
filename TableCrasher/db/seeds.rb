# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
city_picture_urls = ["https://s3.amazonaws.com/table-crasher-pro/city_images/141001144835-innovative-cities-philly-1024x576.jpg",
  "https://s3.amazonaws.com/table-crasher-pro/city_images/201411-a-americas-favorite-cities-new-york.jpg",
  "https://s3.amazonaws.com/table-crasher-pro/city_images/1680856-poster-1280-10-smartest-european-cities-shutterstock-78340003-1.jpg",
  "https://s3.amazonaws.com/table-crasher-pro/city_images/cities.jpg",
  "https://s3.amazonaws.com/table-crasher-pro/city_images/tokyo.jpg",
  "https://s3.amazonaws.com/table-crasher-pro/city_images/chicago-1.jpg"]

restaurant_picture_urls = ["https://s3.amazonaws.com/table-crasher-pro/restaurant_Images/scandic-sundsvall-city-restaurant-verket-10.jpg",
  "https://s3.amazonaws.com/table-crasher-pro/restaurant_Images/restaurant-c-michiel-van-der-eerde-amsterdam-2.jpg",
  "https://s3.amazonaws.com/table-crasher-pro/restaurant_Images/restaurant-carousel-1.jpg",
  "https://s3.amazonaws.com/table-crasher-pro/restaurant_Images/restaurant-939435_960_720.jpg",
  "https://s3.amazonaws.com/table-crasher-pro/restaurant_Images/restaurant.jpg",
  "https://s3.amazonaws.com/table-crasher-pro/restaurant_Images/Benchmark_Restaurant_Dining_Room_Photographed_by_Evan_Sung.jpg",
  "https://s3.amazonaws.com/table-crasher-pro/restaurant_Images/Restaurant_1.jpg",
  "https://s3.amazonaws.com/table-crasher-pro/restaurant_Images/lockwood-chicago-restaurant-bar-2.jpg",
  "https://s3.amazonaws.com/table-crasher-pro/restaurant_Images/home_restaurants-1.jpg",
  "https://s3.amazonaws.com/table-crasher-pro/restaurant_Images/restaurant_2.jpg",
  "https://s3.amazonaws.com/table-crasher-pro/restaurant_Images/restaurant.jpg"]

food_picture_urls = ["https://s3.amazonaws.com/table-crasher-pro/food_images/so24.jpg",
  "https://s3.amazonaws.com/table-crasher-pro/food_images/st07.jpg",
  "https://s3.amazonaws.com/table-crasher-pro/food_images/restaurant-offerings-cta.jpg",
  "https://s3.amazonaws.com/table-crasher-pro/food_images/pizza-junk-food-600.jpg",
  "https://s3.amazonaws.com/table-crasher-pro/food_images/download_1.jpeg",
  "https://s3.amazonaws.com/table-crasher-pro/food_images/download_3.jpeg",
  "https://s3.amazonaws.com/table-crasher-pro/food_images/images.jpeg",
  "https://s3.amazonaws.com/table-crasher-pro/food_images/download.jpeg",
  "https://s3.amazonaws.com/table-crasher-pro/food_images/download_2.jpeg",
  "https://s3.amazonaws.com/table-crasher-pro/food_images/download_4.jpeg"]

User.delete_all
City.delete_all
Restaurant.delete_all
Reservation.delete_all
Review.delete_all

6.times do |i|
    City.create(
    name: Faker::GameOfThrones.city,
    image: city_picture_urls[i],
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

restaurants = []

20.times do
  name = "The #{Faker::Color.color_name.titleize} #{Faker::Food.ingredient.titleize}"
  until Restaurant.find_by(name: name).nil? do
    name = "The #{Faker::Color.color_name.titleize} #{Faker::Food.ingredient.titleize}"
  end
  cat = ["American", "Mexican", "Italian", "Indian", "Chinese", "French", "BBQ", "Vegetarian"].sample
  article = cat[0].in?(["A","E","I","O","U"]) ? "An" : "A"
  pic_url = restaurant_picture_urls.sample
  owner = User.all.sample
  restaurants.push(Restaurant.create(
    name: "The #{Faker::Color.color_name.titleize} #{Faker::Food.ingredient.titleize}",
    address: Faker::Address.street_address,
    state: "New York",
    zip_code: 11205,
    category: cat,
    city_id: City.all.sample.id,
    opening_time: "11:00:00",
    closing_time: "23:00:00",
    seating: 20 + rand(31),
    description: "#{article} #{cat} restaurant specializing in locavore fare, from head chef #{owner.f_name} #{owner.l_name}",
    image: pic_url,
    price: (1..4).to_a.sample,
    owner_id: owner.id
  ))
end

restaurants.each do |restaurant|
  8.times do
    g = GalleryImage.create({image: food_picture_urls.sample, restaurant_id: restaurant.id})
  end
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
    restaurant_id: restaurant.id
  )
end
