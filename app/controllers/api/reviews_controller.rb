class Api::ReviewsController < ApplicationController

  def create
    @review = Review.new(review_params)
    @review.user_id = current_user.id
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def index
    if params[:filter] === "user_reviews"
      @reviews = Review.where(user_id: current_user.id)
    else
      @reviews = Review.where(restaurant_id:  params[:restaurant_id])
    end
    render :index
  end

  def show
    @review = Review.find_by(id: params[:id])
    render :show
  end

  def update
    @review = Review.find_by(id: params[:id])
    if @review.update_attributes(review_params)
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find_by(id: params[:id])
    @review.delete
    render :show
  end


  private def review_params
    params.require(:review).permit(
      :body,
      :rating,
      :restaurant_id,
      :user_id
    )
  end

end
