require './lib/app'

use Rack::Static,
  :urls => [""],
  :root => "public"

run Rack::File.new("public")


run Sinatra::Application