class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      log_in(@user)
      render "api/users/show"
    else
      render json: ["Invalid Username/Password"], status: 422
    end
  end

  def destroy
    if(logged_in?)
      log_out
      render(json: {})
    else
      render(json: ["Not logged in."], status: 404 )
    end
  end
  def user_params
    params.require(:user).permit(:username, :password, :email_address, :f_name, :l_name)
  end
end
