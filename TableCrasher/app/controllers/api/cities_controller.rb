class Api::CitiesController < ApplicationController

  def index
    @cities = City.includes(:restaurants).all
    render :index
  end

  def show
    @city = City.find(params[:id])
    @average_reviews = @city.reviews.group('restaurant_id').average('rating')
    render :show
  end

end
