class Api::UsersController < ApplicationController

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
    render :index
  end

  def show
    @restaurant = current_user
  end

  def update
    @restaurant = Restaurant.find_by(id: params[:id])
    if @restaurant.save
      render :show
    else
      render json: @restaurant.errors.full_messages, status: 422
    end
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
    :price
    :city_id
    )
  end

end
