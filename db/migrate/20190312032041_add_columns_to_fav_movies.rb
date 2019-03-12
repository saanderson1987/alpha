class AddColumnsToFavMovies < ActiveRecord::Migration[5.2]
  def change
    add_column :fav_movies, :comment, :text
    add_column :fav_movies, :rating, :integer
  end
end
