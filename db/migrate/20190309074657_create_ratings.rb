class CreateRatings < ActiveRecord::Migration[5.2]
  def change
    create_table :ratings do |t|
      t.integer :fav_movie_id
      t.integer :rating
      t.timestamps null: false
    end
  end
end
