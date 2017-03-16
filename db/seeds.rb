# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
city_picture_urls = ["https://s3.amazonaws.com/table-crasher-pro/city_images/Albany.jpg",
  "https://s3.amazonaws.com/table-crasher-pro/city_images/Brooklyn.jpg",
  "https://s3.amazonaws.com/table-crasher-pro/city_images/Chicago.jpg",
  "https://s3.amazonaws.com/table-crasher-pro/city_images/LA.jpg",
  "https://s3.amazonaws.com/table-crasher-pro/city_images/Manhattan.jpg",
  "https://s3.amazonaws.com/table-crasher-pro/city_images/Orlando.jpg"]

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

food_picture_urls = ["https://s3.amazonaws.com/table-crasher-pro/food_images/food1.jpg",
  "https://s3.amazonaws.com/table-crasher-pro/food_images/food2.jpg",
  # "https://s3.amazonaws.com/table-crasher-pro/food_images/food3.jpg",
  "https://s3.amazonaws.com/table-crasher-pro/food_images/food4.jpg",
  "https://s3.amazonaws.com/table-crasher-pro/food_images/food5.jpg",
  "https://s3.amazonaws.com/table-crasher-pro/food_images/food6.jpg",
  "https://s3.amazonaws.com/table-crasher-pro/food_images/food7.jpg",
  "https://s3.amazonaws.com/table-crasher-pro/food_images/food8.jpg",
  "https://s3.amazonaws.com/table-crasher-pro/food_images/food9.jpg",
  "https://s3.amazonaws.com/table-crasher-pro/food_images/food10.jpg",
  "https://s3.amazonaws.com/table-crasher-pro/food_images/food11.jpg",
  "https://s3.amazonaws.com/table-crasher-pro/food_images/food12.jpg",
  "https://s3.amazonaws.com/table-crasher-pro/food_images/food13.jpg",
  "https://s3.amazonaws.com/table-crasher-pro/food_images/food14.jpg",
  "https://s3.amazonaws.com/table-crasher-pro/food_images/food15.jpg",
  "https://s3.amazonaws.com/table-crasher-pro/food_images/food16.jpg",
  "https://s3.amazonaws.com/table-crasher-pro/food_images/food17.jpg",
  "https://s3.amazonaws.com/table-crasher-pro/food_images/food18.jpg",
  "https://s3.amazonaws.com/table-crasher-pro/food_images/food19.jpg"]

User.delete_all
City.delete_all
Restaurant.delete_all
Reservation.delete_all
Review.delete_all


albany = City.create(
  name: "Albany",
  image: city_picture_urls[0],
)

brooklyn = City.create(
  name: "Brooklyn",
  image: city_picture_urls[1],
)

chicago = City.create(
  name: "Chicago",
  image: city_picture_urls[2],
)

los_angeles = City.create(
  name: "Los Angeles",
  image: city_picture_urls[3],
)

manhattan = City.create(
  name: "Manhattan",
  image: city_picture_urls[4],
)

orlando = City.create(
  name: "Orlando",
  image: city_picture_urls[5]
)

User.create(
  username: "HungryJackie",
  password: "starwars",
  city_id: brooklyn.id,
  f_name: "Jackie",
  l_name: "Jambalaya",
  email_address: "jackie@gmail.com"
)

User.create(
  username: "BruncherBryan",
  password: "starwars",
  city_id: 2,
  f_name: "Bryan",
  l_name: "Burger",
  email_address: "Bryan@gmail.com"
)

User.create(
  username: "LunchtimeLana",
  password: "starwars",
  city_id: 3,
  f_name: "Lana",
  l_name: "Lemongrass",
  email_address: "Lana@gmail.com"
)

User.create(
  username: "SweettoothSam",
  password: "starwars",
  city_id: 4,
  f_name: "Sam",
  l_name: "Semolina",
  email_address: "Sam@gmail.com"
)

User.create(
  username: "SweettoothSam",
  password: "starwars",
  city_id: 5,
  f_name: "Sam",
  l_name: "Semolina",
  email_address: "Sam@gmail.com"
)

User.create(
  username: "BigBurgerBen",
  password: "starwars",
  city_id: 6,
  f_name: "Ben",
  l_name: "Burgerboy",
  email_address: "Ben@gmail.com"
)

guest = User.create(
  username: "guest",
  password: "starwars",
  f_name: "Alton",
  l_name: "Brown",
  email_address: "Alton@foodnetwork.com",
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

restaurants = []

restaurants.push(Restaurant.create(
  name: "The Barnsider",
  address: "480 Sand Creek Rd, Albany, NY",
  state: "New York",
  zip_code: "12205",
  category: "Steakhouse",
  city_id: albany.id,
  opening_time: "11:00:00",
  closing_time: "23:00:00",
  seating: 20 + rand(31),
  description: "Aged beef and fresh fish in a rustic environment with an open kitchen",
  image: restaurant_picture_urls.sample,
  price: 3,
  owner_id: User.all.sample.id
))

restaurants.push(Restaurant.create(
  name: "dp An American Brasserie",
  address: "25 Chapel St, Albany, NY",
  state: "New York",
  zip_code: "12210",
  category: "French/American",
  city_id: albany.id,
  opening_time: "11:00:00",
  closing_time: "23:00:00",
  seating: 20 + rand(31),
  description: "Buzzy spot offering French classics, burgers & comfort bites, as well as an extensive wine list",
  image: restaurant_picture_urls.sample,
  price: 3,
  owner_id: User.all.sample.id
))

restaurants.push(Restaurant.create(
  name: "Warehouse Grill & BBQ",
  address: "219 Wolf Rd, Albany, NY",
  state: "New York",
  zip_code: "12205",
  category: "BBQ",
  city_id: albany.id,
  opening_time: "11:00:00",
  closing_time: "23:00:00",
  seating: 20 + rand(31),
  description: "House-smoked BBQ in a refurbished warehouse",
  image: restaurant_picture_urls.sample,
  price: 1,
  owner_id: User.all.sample.id
))

restaurants.push(Restaurant.create(
  name: "Calexico",
  address: "645 Manhattan Ave, Brooklyn, NY 11222",
  state: "New York",
  zip_code: "11222",
  category: "Mexican",
  city_id: brooklyn.id,
  opening_time: "11:00:00",
  closing_time: "23:00:00",
  seating: 20 + rand(31),
  description: "Californian Mexican street food. Happy hours, cheap margaritas, amazing burritos",
  image: restaurant_picture_urls.sample,
  price: 1,
  owner_id: User.all.sample.id
))

restaurants.push(Restaurant.create(
  name: "Peter Luger's",
  address: "178 Broadway, Brooklyn, NY 11211",
  state: "New York",
  zip_code: "11211",
  category: "Steakhouse",
  city_id: brooklyn.id,
  opening_time: "11:00:00",
  closing_time: "23:00:00",
  seating: 20 + rand(31),
  description: "World famous Michelin star steakhouse in Brooklyn",
  image: restaurant_picture_urls.sample,
  price: 4,
  owner_id: User.all.sample.id
))

restaurants.push(Restaurant.create(
  name: "Emily",
  address: "919 Fulton St, Brooklyn, NY",
  state: "New York",
  zip_code: "11238",
  category: "Pizza",
  city_id: brooklyn.id,
  opening_time: "11:00:00",
  closing_time: "23:00:00",
  seating: 20 + rand(31),
  description: "This cozy, gourmet eatery serves wood-fired Neapolitan pizzas, rustic small plates & pastas",
  image: restaurant_picture_urls.sample,
  price: 4,
  owner_id: User.all.sample.id
))

restaurants.push(Restaurant.create(
  name: "Alinea",
  address: "1723 N Halsted St, Chicago, IL",
  state: "Illinois",
  zip_code: "60614",
  category: "New American",
  city_id: chicago.id,
  opening_time: "11:00:00",
  closing_time: "23:00:00",
  seating: 20 + rand(31),
  description: "Food is elevated to fine art at this 3-Michelin Star restaurant by Grant Achatz",
  image: restaurant_picture_urls.sample,
  price: 4,
  owner_id: User.all.sample.id
))

restaurants.push(Restaurant.create(
  name: "Viaggio Ristorante & Lounge",
  address: "1330 W Madison St, Chicago, IL",
  state: "Illinois",
  zip_code: "60607",
  category: "Italian",
  city_id: chicago.id,
  opening_time: "11:00:00",
  closing_time: "23:00:00",
  seating: 20 + rand(31),
  description: "Relaxed, stylish restaurant & bar near the United Center featuring upscale Italian-American cuisine",
  image: restaurant_picture_urls.sample,
  price: 4,
  owner_id: User.all.sample.id
))

restaurants.push(Restaurant.create(
  name: "Next",
  address: "953 W Fulton Market, Chicago, IL",
  state: "Illinois",
  zip_code: "60607",
  category: "Eclectic",
  city_id: chicago.id,
  opening_time: "11:00:00",
  closing_time: "23:00:00",
  seating: 20 + rand(31),
  description: "Rotating menu inspired by different locals and time periods",
  image: restaurant_picture_urls.sample,
  price: 4,
  owner_id: User.all.sample.id
))

restaurants.push(Restaurant.create(
  name: "Real Food Daily",
  address: "414 La Cienega Blvd, Los Angeles, CA",
  state: "California",
  zip_code: "90048",
  category: "Vegetarian",
  city_id: los_angeles.id,
  opening_time: "11:00:00",
  closing_time: "23:00:00",
  seating: 20 + rand(31),
  description: "Organic vegetarian & vegan cuisine in an understated space",
  image: restaurant_picture_urls.sample,
  price: 3,
  owner_id: User.all.sample.id
))

restaurants.push(Restaurant.create(
  name: "Black Rabbit Rose",
  address: "1719 N Hudson Ave, Los Angeles",
  state: "California",
  zip_code: "90028",
  category: "Asian Fusion",
  city_id: los_angeles.id,
  opening_time: "11:00:00",
  closing_time: "23:00:00",
  seating: 20 + rand(31),
  description: "Spice-filled Thai and Chinese classics",
  image: restaurant_picture_urls.sample,
  price: 3,
  owner_id: User.all.sample.id
))

restaurants.push(Restaurant.create(
  name: "Scopa Italian Roots",
  address: "2905 W Washington Blvd, Venice, CA",
  state: "California",
  zip_code: "90292",
  category: "Italian",
  city_id: los_angeles.id,
  opening_time: "11:00:00",
  closing_time: "23:00:00",
  seating: 20 + rand(31),
  description: "Roomy brick-walled gastropub dishing up hot & cold antipasti, pastas & other Italian specialties",
  image: restaurant_picture_urls.sample,
  price: 3,
  owner_id: User.all.sample.id
))

restaurants.push(Restaurant.create(
  name: "Crooked Tree",
  address: "110 Saint Marks Pl # 1, New York, NY",
  state: "New York",
  zip_code: "10009",
  category: "French",
  city_id: manhattan.id,
  opening_time: "11:00:00",
  closing_time: "23:00:00",
  seating: 20 + rand(31),
  description: "Crepes and sandwiches in an intimate setting",
  image: restaurant_picture_urls.sample,
  price: 2,
  owner_id: User.all.sample.id
))

restaurants.push(Restaurant.create(
  name: "Eleven Madison Park",
  address: "11 Madison Ave, New York, NY",
  state: "New York",
  zip_code: "10010",
  category: "American",
  city_id: manhattan.id,
  opening_time: "11:00:00",
  closing_time: "23:00:00",
  seating: 20 + rand(31),
  description: "Three Michelin Star restaurant featuring a seasonal tasting menu",
  image: restaurant_picture_urls.sample,
  price: 4,
  owner_id: User.all.sample.id
))

restaurants.push(Restaurant.create(
  name: "Whitmans",
  address: "406 E 9th St, New York, NY",
  state: "New York",
  zip_code: "10009",
  category: "Hamburgers",
  city_id: manhattan.id,
  opening_time: "11:00:00",
  closing_time: "23:00:00",
  seating: 20 + rand(31),
  description: "This burger bar uses seasonal, local ingredients & is known for its pimento-cheese-stuffed patty",
  image: restaurant_picture_urls.sample,
  price: 2,
  owner_id: User.all.sample.id
))

restaurants.push(Restaurant.create(
  name: "Victoria and Albert's",
  address: "4401 Floridian Way, Orlando, FL",
  state: "Florida",
  zip_code: "32830",
  category: "New American",
  city_id: orlando.id,
  opening_time: "11:00:00",
  closing_time: "23:00:00",
  seating: 20 + rand(31),
  description: "High-end destination for fixed-price New American cuisine in Victorian-style environs",
  image: restaurant_picture_urls.sample,
  price: 4,
  owner_id: User.all.sample.id
))

restaurants.push(Restaurant.create(
  name: "Raglan Road Irish Pub",
  address: "1640 Buena Vista Dr, Orlando, FL",
  state: "Florida",
  zip_code: "32830",
  category: "Irish",
  city_id: orlando.id,
  opening_time: "11:00:00",
  closing_time: "23:00:00",
  seating: 20 + rand(31),
  description: "Hangout featuring modern Irish pub-fare classics plus live Celtic music & dancers.",
  image: restaurant_picture_urls.sample,
  price: 3,
  owner_id: User.all.sample.id
))

restaurants.push(Restaurant.create(
  name: "Artist Point",
  address: "901 Timberline Dr, Orlando, FL",
  state: "Florida",
  zip_code: "32830",
  category: "Northwest American",
  city_id: orlando.id,
  opening_time: "11:00:00",
  closing_time: "23:00:00",
  seating: 20 + rand(31),
  description: "Rustic-chic dining room which serves seasonal Pacific NW fare & water views",
  image: restaurant_picture_urls.sample,
  price: 2,
  owner_id: User.all.sample.id
))



restaurants.each do |restaurant|
  pix = food_picture_urls.dup
  8.times do
    pic = pix.delete(pix.sample)
    g = GalleryImage.create({image: pic, restaurant_id: restaurant.id})
  end
end

reviews =
[
  ["This is an incredible restaurant, what a dining experience!", 5],
  ["Besides some minor hiccups, it was a very nice meal.", 4],
  ["I've had better, I've had worse. If you're in the area, maybe check it out.", 3],
  ["It was ok, but VERY heavy. I think they could cut back on the grease.", 2],
  ["Repulsive. Nasty. Disgusting. This is the worst meal I've ever had.", 1],
  ["They were wonderful. This is my new favorite restaurant.", 5],
  ["The only thing wrong was that I didn't get enough food. This was awesome though.", 4],
  ["It's not the restaurant it used to be, but you can still see glimmers of how good it was.", 3],
  ["The service was nice, but the food wasn't worth the price at all.", 2],
  ["Friends don't let friends eat here.", 1],
]

40.times do
  user = User.all.sample.id
  review = reviews.sample
  restaurant = Restaurant.all.sample
  Review.create(
    body: review[0],
    user_id: user,
    restaurant_id: restaurant.id,
    rating: review[1],
  )
end

restaurant_ids = Restaurant.all.map do |restaurant|
  restaurant.id
end

4.times do
  Favorite.create(
    user_id: guest.id,
    restaurant_id: restaurant_ids.delete(restaurant_ids.sample)
  )
end

4.times do
  Reservation.create(
    party_size: (2..6).to_a.sample,
    time_slot: Time.now + (2*7*24*60*60) + (rand*60*60*24*3),
    user_id: guest.id,
    restaurant_id: Restaurant.all.sample.id
  )
end
