class ApplicationController < ActionController::API
  include ActionController::HttpAuthentication::Token::ControllerMethods

  # before_action :authorized, except: [:issue_token, :decode, :logged_in?]

  def issue_token(payload)
    JWT.encode(payload, Rails.application.credentials.secret_key_base)
    # JWT.encode(payload, ENV["SOME_SECRET"], ENV["SOME_SUPER_SECRET"])
end

def decode(jwt_token)
    # my_algorithm = { algorithm: ENV["SOME_SUPER_SECRET"]}
    # JWT.decode(jwt_token, ENV["SOME_SECRET"], true, my_algorithm)[0]
    # my_algorithm = { algorithm: ENV["SOME_SUPER_SECRET"]}
    JWT.decode(jwt_token, Rails.application.credentials.secret_key_base)[0]
end

def current_user
    # pull jwt token out of request.headers (assumed to be in format: {Authorization: "Token token=xxx"})
    authenticate_or_request_with_http_token do |jwt_token, options|
      decoded_token = decode(jwt_token)
      # if a decoded token is found, use it to return a user
      if decoded_token
        user_id = decoded_token[0]["user_id"]
        @current_user ||= User.find_by(id: user_id)
      end
    end
end

def logged_in?
  !!current_user
end

def authorized
   # Respond with error message unless user is logged in
   render json: {error: "Access denied: not authorized."}, status: 401 unless logged_in?
end

end
