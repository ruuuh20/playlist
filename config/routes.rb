Rails.application.routes.draw do

  # root '/api/artists#index'

  namespace :api do
    resources :artists
  end
end
