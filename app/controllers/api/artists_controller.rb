require 'rspotify'

class Api::ArtistsController < ApplicationController

  def index
    # @artists = Artist.all
    #
    # render json: @artists

    if !params[:name].empty?
     @artists = RSpotify::Artist.search(params[:name])
     render json: @artists
   else
     redirect_to root_path
   end


  end

  def create
    @artist = Artist.new(artist_params)
    if @artist.save
      render json: @artist
    else
      render json: @artist.errors
    end
  end

  private
  def artist_params
    params.require(:artist).permit(:name)
  end
end
