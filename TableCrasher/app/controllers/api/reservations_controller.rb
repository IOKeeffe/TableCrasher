class Api::ReservationsController < ApplicationController

  def create
    @reservation = Reservation.new(reservation_params)
    @reservation.user_id = current_user.id
    if @reservation.save
      render :show
    else
      render json: @reservation.errors.full_messages, status: 422
    end
  end

  def index
    @reservations = Reservation.where(user_id: current_user.id)
    render :index
  end

  def show
    @reservation = Reservation.find_by(id: params[:id])
    render :show
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
    @reservation = Reservation.find_by(id: params[:id])
    @reservation.delete
    @reservations = Reservation.all
    render :index
  end

  private def reservation_params
    params.require(:reservation).permit(
      :party_size,
      :time_slot,
      :restaurant_id
    )
  end

end
