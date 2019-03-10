Rails.application.routes.draw do

  get '/callback', to: 'api/users#create'
  post '/callback', to: 'api/users#create'


  namespace :api do
    get '/auth', to: 'sessions#create'
    # get '/callback', to: 'users#create'
    post '/login', to: "users#create"
    get 'artists/search', to: 'artists#search'
    post 'spotify_search', to: 'spotify_search#index'
  end
  # root '/api/artists#index'

  namespace :api do
    resources :artists
    resources :playlists
  end
end
