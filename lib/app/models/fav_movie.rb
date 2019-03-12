class FavMovie < ActiveRecord::Base
  # belongs_to :user
  # has_one :comment
  # has_one :rating

  def self.getFavMovie(user_id, imdb_id)
    # self.left_outer_joins(:rating).select('fav_movies.imdb_id, ratings.rating')
    self.find_by_sql("select fav_movies.id, fav_movies.imdb_id, ratings.rating, comments.comment from fav_movies left outer join ratings ON ratings.fav_movie_id = fav_movies.id left outer join comments ON comments.fav_movie_id = fav_movies.id where user_id = #{user_id} and imdb_id = '#{imdb_id}'")
  end

  def self.getFavMovies(user_id)
    self.find_by_sql("select fav_movies.id, fav_movies.imdb_id, ratings.rating, comments.comment from fav_movies left outer join ratings ON ratings.fav_movie_id = fav_movies.id left outer join comments ON comments.fav_movie_id = fav_movies.id where user_id = #{user_id}")
  end

end

# select fav_movies.imdb_id, ratings.rating, comments.comment from fav_movies left outer join ratings ON ratings.fav_movie_id = fav_movies.id left outer join comments ON comments.fav_movie_id = fav_movies.id;