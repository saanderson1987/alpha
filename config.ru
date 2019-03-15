require './lib/app'

use Rack::Static,
  :urls => [""],
  :root => "public"

run Sinatra::Application