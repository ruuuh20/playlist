require 'rspotify'

class Api::ArtistsController < ApplicationController

  def index
    # @artists = RSpotify::Artist.search('artic')
      @artists = Artist.all
    render json: @artists

    #
    # render json: @artists

   #  if !params[:name].empty?
   #   @artists = RSpotify::Artist.search(params[:name])
   #   render json: @artists
   # else
   #   redirect_to root_path
   # end
  end

  # def search
    #  if !params[:name].empty?
    #   @artists = RSpotify::Artist.search(params[:name])
    #   render json: @artists
    # else
    #   redirect_to root_path
    # end
    # artists = RSpotify::Artist.search('artic')
    # render json: artists
    # render json: current_user
  #   render current_user
  # end

  def search
    # self.response_body = nil
    # render current_user
    render html: 'hi'
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
