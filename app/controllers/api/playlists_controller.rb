class Api::PlaylistsController < ApplicationController
  def index
    @playlist = current_user.playlist
    render json: @playlist
  end
end
