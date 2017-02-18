Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update]
    resources :cities, only: [:show, :index]
    get 'restaurants/search', :to => 'restaurants#search'
    resources :restaurants, only: [:create, :show, :update, :destroy, :index]
    resource :session, only: [:create, :destroy]
  end

end
