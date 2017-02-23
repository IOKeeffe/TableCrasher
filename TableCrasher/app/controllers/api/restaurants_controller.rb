class Api::RestaurantsController < ApplicationController

  def create
    @restaurant = Restaurant.new(restaurant_params)
    @restaurant.owner_id = current_user.id
    if @restaurant.save
      render :show
    else
      render json: @restaurant.errors.full_messages, status: 422
    end
  end

  def new
    @restaurant = Restaurant.new
  end

  def index
    @average_reviews = Review.group('restaurant_id').average('rating')
    @restaurants = Restaurant.all.includes(:reviews)
    render :index
  end

  def show
    @average_reviews = Review.group('restaurant_id').average('rating')
    restaurants = Restaurant.includes(:reviews)
    @restaurant = restaurants.find_by(id: params[:id])
    @average = (@average_reviews[@restaurant.id] || 1).ceil
    @gallery = @restaurant.gallery_images
    render :show
  end

  def update
    @restaurant = Restaurant.find_by(id: params[:id])
    if @restaurant.save
      render :show
    else
      render json: @restaurant.errors.full_messages, status: 422
    end
  end

  def destroy
    @restaurant = Restaurant.find_by(id: params[:id])
    @restaurant.delete
    @restaurants = Restaurant.all
    render :index
  end

  def edit

  end

  private def restaurant_params
    params.require(:restaurant).permit(
      :name,
      :address,
      :state,
      :zip_code,
      :category,
      :description,
      :image_url,
      :price,
      :city_id
    )
  end

end
