require 'sinatra'
require 'json'
require 'active_record'
ActiveRecord::Base.establish_connection('postgres://localhost:5432/alpha')
require_relative "./app/models/user"
require_relative "./app/models/fav_movie"
require_relative "./app/models/rating"
require_relative "./app/models/comment"

configure { set :server, :puma }
configure :development do
  set :database, {adapter: 'postgresql',  encoding: 'unicode', database: 'alpha', pool: 2}
end

set :root, 'lib/app'

get '/' do
  render :html, :index
end

get '/favMovie' do
  content_type :json
  user_id = params[:user_id]
  imdb_id = params[:imdb_id]
  @favMovie = FavMovie.getFavMovie(user_id, imdb_id)
  @favMovie.to_json
end

get '/favMovies' do
  content_type :json
  user_id = params[:user_id]
  @favMovies = FavMovie.getFavMovies(user_id)
  @favMovies.to_json
end 

post '/ratings' do
  content_type :json
  request.body.rewind
  data = JSON.parse request.body.read
  puts data
  if @rating = Rating.find_by(fav_movie_id: data['favMovieId'])
    @rating.update(rating: data['rating']).to_json
  else
    Rating.create(fav_movie_id: data['favMovieId'], rating: data['rating']).to_json
  end
end

post '/comments' do
  content_type :json
  request.body.rewind
  data = JSON.parse request.body.read
  puts data
  if @comment = Comment.find_by(fav_movie_id: data['favMovieId'])
    @comment.update(comment: data['comment']).to_json
  else
    Comment.create(fav_movie_id: data['favMovieId'], comment: data['comment']).to_json
  end
end