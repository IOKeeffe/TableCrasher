class Api::FavoritesController < ApplicationController

  def create
    @favorite = Favorite.new(favorite_params)
    @favorite.user_id = current_user.id
    if @favorite.save
      render :show
    else
      render json: @favorite.errors.full_messages, status: 422
    end
  end

  def index
    @favorites = Favorite.where(user_id: current_user.id)
    render :index
  end

  def show
    @favorite = Favorite.find_by(id: params[:id])
    render :show
  end

  def destroy
    @favorite = Favorite.find_by(id: params[:id], user_id: current_user.id)
    Favorite.delete(@favorite)
    render :show
  end

  private def favorite_params
    params.require(:favorite).permit(:restaurant_id)
  end

end
