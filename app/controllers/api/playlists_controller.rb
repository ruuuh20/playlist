require 'pry'

class Api::PlaylistsController < ApplicationController
  def index
      # binding.pry
    @playlists = current_user.playlists
    # render json: current_user.id

    render json: @playlists
  end

  def create
    playlist = Playlist.new(playlist_params)
    playlist.user = current_user
    if playlist.save
      render json: playlist
    else
      render json: 'Error', status: 404
    end

end

private

 def playlist_params
   params.require(:playlist).permit(:title, :id)
 end

end
