class Api::SpotifySearchController < ApplicationController

    def index

      spotify_url = "https://api.spotify.com/v1/"
      artist = params[:name].gsub(/ /, "+")
      searchURL = "#{spotify_url}search?q=#{artist}&type=artist"
      response = RestClient.get(searchURL)

      # artist's top tracks
      artist_id = JSON.parse(response)["artists"]["items"][0]["id"]
      top_tracks_url = "https://api.spotify.com/v1/artists/#{artist_id}/top-tracks?country=US"
      top_tracks_results = JSON.parse(RestClient.get(top_tracks_url))


JSON.parse(top_tracks_results)["tracks"][0]["name"]
      # binding.pry

      render json: response
    end
end
