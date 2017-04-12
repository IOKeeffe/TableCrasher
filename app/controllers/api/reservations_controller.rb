class Api::ReservationsController < ApplicationController

  def create
    @reservation = Reservation.new(reservation_params)
    debugger
    @reservation.user_id = current_user.id
    @restaurant = Restaurant.find(@reservation.restaurant_id)
    if @reservation.save
      render :show
    else
      render json: @reservation.errors.full_messages, status: 422
    end
  end

  def index
    @average_reviews = Review.group('restaurant_id').average('rating')
    @reservations = Reservation.where(user_id: current_user.id).where("time_slot > ?", Time.now).includes(:restaurant)
    render :user_restaurant_reservations
  end

  def getRestaurantsIdsByReservations(reservations)
    restaurant_ids = []
    reservations.each do |reservation|
      restaurant_ids << reservation.restaurant.id
    end
    restaurant_ids
  end

  def show
    @average_reviews = Review.group('restaurant_id').average('rating')
    requested_reservation = Reservation.new(reservation_params)
    requested_reservation.user_id = current_user.id
    if(params[:reservation][:search_term])
      @reservations = requested_reservation.search_reservations(params[:reservation][:search_term])
      @restaurant_ids = []
      @reservations.each do |reservations|
        @restaurant_ids.concat(getRestaurantsIdsByReservations(reservations))
      end
      @restaurants = @restaurant_ids.uniq.map do |id| Restaurant.find(id) end

      render :multiple_restaurant_reservations
    else
      @reservations = requested_reservation.adjacent_reservations
      render :restaurant_reservations
    end
  end

  def update
    @reservation = Reservation.find_by(id: params[:id])
    if @reservation.update(reservation_params)
      render :show
    else
      render json: @reservation.errors.full_messages, status: 422
    end
  end

  def destroy
    @reservation = Reservation.includes(:restaurant).find_by(id: params[:id])
    @reservation.delete
    @restaurant = @reservation.restaurant
    render :show
  end

  private def reservation_params
    params.require(:reservation).permit(
      :party_size,
      :time_slot,
      :restaurant_id,
    )
  end

end
