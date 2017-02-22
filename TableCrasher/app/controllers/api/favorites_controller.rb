class Api::FavoritesController < ApplicationController

  def create
    @favorite = Favorite.new(favorites_params)
    @favorite.owner_id = current_user.id
    if @favorite.save
      render :show
    else
      render json: @favorite.errors.full_messages, status: 422
    end
  end

  def index
    @favorites = Favorite.where(user_id: current_user.id).includes(:restaurants)
    render :index
  end

  def show
    @favorite = Favorite.find_by(id: params[:id])
    render :show
  end

  def destroy
    @favorite = Favorite.find_by(id: params[:id])
    @favorite.delete
    render :show
  end

  private def favorite_params
    params.require(:favorite).permit(:user_id, :restuarant_id)
  end

end
