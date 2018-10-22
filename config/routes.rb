Rails.application.routes.draw do

  root 'artists#index'

  namespace :api do
    resources :artists
  end
end
