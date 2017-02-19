# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170219001151) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cities", force: :cascade do |t|
    t.string   "name",       null: false
    t.string   "image_url",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "restaurants", force: :cascade do |t|
    t.string   "name",                     null: false
    t.string   "address",                  null: false
    t.string   "state",                    null: false
    t.string   "zip_code",                 null: false
    t.string   "category",                 null: false
    t.text     "description",              null: false
    t.string   "image_url",                null: false
    t.string   "price",                    null: false
    t.integer  "city_id",                  null: false
    t.integer  "owner_id",                 null: false
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
    t.string   "gallery",     default: [],              array: true
    t.index ["city_id"], name: "index_restaurants_on_city_id", using: :btree
    t.index ["name"], name: "index_restaurants_on_name", unique: true, using: :btree
    t.index ["owner_id"], name: "index_restaurants_on_owner_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "f_name",          null: false
    t.string   "l_name",          null: false
    t.string   "email_address",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.integer  "city_id"
    t.index ["city_id"], name: "index_users_on_city_id", using: :btree
    t.index ["email_address"], name: "index_users_on_email_address", unique: true, using: :btree
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
