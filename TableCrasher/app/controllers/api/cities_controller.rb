class Api::CitiesController < ApplicationController

  def index
    @cities = City.includes(:restaurants).all
    render :index
  end

  def show
    @city = City.find(params[:id])
    render :show
  end

end
