# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

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
