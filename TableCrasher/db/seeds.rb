# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Restaurant.delete_all
User.create(
  username: "guest",
  password: "starwars",
  session_token: Faker::Crypto.md5,
  f_name: "Guest",
  l_name: "Guest",
  email_address: "guest@guest.com",
  city_id: 1,
)

User.create(
  username: "guy",
  password: "starwars",
  session_token: Faker::Crypto.md5,
  f_name: "Guy",
  l_name: "Von Trapp",
  email_address: "guest@guest.com",
  city_id: 1,
)

20.times do
  uname = Faker::GameOfThrones.character
  until(uname.split.length == 2) do
    uname = Faker::GameOfThrones.character
  end
  u = User.create(
    username: uname.split(" ").join(""),
    password: "starwars",
    session_token: Faker::Crypto.md5,
    f_name: uname.split(" ")[0],
    l_name: uname.split(" ")[1],
    email_address: "#{uname.split(" ").join("")}@#{Faker::GameOfThrones.house.split(" ").join("")}.com"
  )
end

picture_urls = ["http://res.cloudinary.com/dydv1ehma/image/upload/Restaurants/11onlinereservationpark_sfk42b.jpg",
                "http://res.cloudinary.com/dydv1ehma/image/upload/Restaurants/scandic-sundsvall-city-restaurant-verket-10_madk5z.jpg",
                "http://res.cloudinary.com/dydv1ehma/image/upload/Restaurants/restaurant-c-michiel-van-der-eerde-amsterdam-2_yuyi7g.jpg",
                "http://res.cloudinary.com/dydv1ehma/image/upload/Restaurants/restaurant-c-michiel-van-der-eerde-amsterdam-1_ycjjbc.jpg",
                "http://res.cloudinary.com/dydv1ehma/image/upload/Restaurants/restaurant-carousel-1_lykh1n.jpg",
                "http://res.cloudinary.com/dydv1ehma/image/upload/Restaurants/restaurant-939435_960_720_mbge7l.jpg",
                "http://res.cloudinary.com/dydv1ehma/image/upload/Restaurants/restaurant_w9l2lj.jpg",
                "http://res.cloudinary.com/dydv1ehma/image/upload/Restaurants/Benchmark_Restaurant_Dining_Room_Photographed_by_Evan_Sung_wg3rxq.jpg",
                "http://res.cloudinary.com/dydv1ehma/image/upload/Restaurants/Restaurant_1_crga5j.jpg",
                "http://res.cloudinary.com/dydv1ehma/image/upload/Restaurants/lockwood-chicago-restaurant-bar-2_io6opj.jpg",
                "http://res.cloudinary.com/dydv1ehma/image/upload/Restaurants/home_restaurants-1_n1wljo.jpg",
                "http://res.cloudinary.com/dydv1ehma/image/upload/Restaurants/restaurant_2_ssljno.jpg",
                "http://res.cloudinary.com/dydv1ehma/image/upload/Restaurants/restaurant_jn7rsq.jpg"]

15.times do
  cat = ["American", "Mexican", "Italian", "Indian", "Chinese", "French", "BBQ", "Vegetarian"].sample
  article = cat[0].in?(["A","E","I","O","U"]) ? "An" : "A"
  owner = User.all.sample
  Restaurant.create(
    name: "The #{Faker::Color.color_name.titleize} #{Faker::SlackEmoji.food_and_drink[1...-1].split("_").join(" ").titleize}",
    address: Faker::Address.street_address,
    state: "New York",
    zip_code: 11205,
    category: cat,
    description: "#{article} #{cat} restaurant specializing in locavore fare, from head chef #{owner.f_name} #{owner.l_name}",
    image_url: picture_urls.sample,
    price: (1..4).to_a.sample,
    city_id: 1,
    owner_id: owner.id,
  )
end
