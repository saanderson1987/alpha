class RemoveRatingsAndCommentsTables < ActiveRecord::Migration[5.2]
  def change
    drop_table :ratings
    drop_table :comments
  end
end
