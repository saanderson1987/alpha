class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.integer :fav_movie_id
      t.text :comment
      t.timestamps null: false
    end
  end
end
