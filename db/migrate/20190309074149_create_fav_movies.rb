class CreateFavMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :fav_movies do |t|
      t.integer :user_id
      t.string :imdb_id 
      t.timestamps null: false
    end
  end
end
