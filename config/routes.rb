Rails.application.routes.draw do

  get '/callback', to: 'api/users#create'
  post '/callback', to: 'api/users#create'


  namespace :api do
    get '/auth', to: 'sessions#create'
    # get '/callback', to: 'users#create'
    post '/login', to: "users#create"
    get 'artists/search', to: 'artists#search'
  end
  # root '/api/artists#index'

  namespace :api do
    resources :artists
  end
end
