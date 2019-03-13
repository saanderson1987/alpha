require 'sinatra'
require 'json'
require 'active_record'
# ActiveRecord::Base.establish_connection('postgres://localhost:5432/alpha')
ActiveRecord::Base.establish_connection(
  { :adapter => 'postgresql',
    :database => 'alpha',
    :host => 'localhost',
    :pool => 30
  }
)
require_relative "./app/models/user"
require_relative "./app/models/fav_movie"

configure { set :server, :puma }
configure :development do
  set :database, {adapter: 'postgresql',  encoding: 'unicode', database: 'alpha', pool: 30}
end

set :root, 'lib/app'

get '/' do
  render :html, :index
end

get '/favMovie' do
  content_type :json
  user_id = params[:user_id]
  imdb_id = params[:imdb_id]
  @favMovie = FavMovie.find_by(user_id: user_id, imdb_id: imdb_id)
  @favMovie.to_json
end

get '/favMovies' do
  content_type :json
  user_id = params[:user_id]
  @favMovies = FavMovie.where(user_id: user_id)
  @favMovies.to_json
end 

post '/favMovies' do 
  content_type :json
  request.body.rewind
  data = JSON.parse request.body.read
  if @favMovie = FavMovie.find_by(id: data['favMovieId'])
    @favMovie.update(rating: data['rating'], comment: data['comment'])
    @favMovie.to_json
  end
end 
