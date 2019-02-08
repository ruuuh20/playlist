Rails.application.routes.draw do


  namespace :api do
    get 'auth', to: 'sessions#create'
    post 'login', to: "users#create"
  end
  # root '/api/artists#index'

  namespace :api do
    resources :artists
  end
end
