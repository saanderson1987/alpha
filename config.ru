require './lib/app'

use Rack::Static,
  :urls => [""],
  :root => "lib/app/public"

run Sinatra::Application