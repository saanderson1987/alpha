require './lib/app'

use Rack::Static,
  :root => "public"

run Rack::File.new("public")


run Sinatra::Application