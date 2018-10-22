class Api::ArtistsController < ApplicationController

  def index
    @artists = Artist.all
  end
end
