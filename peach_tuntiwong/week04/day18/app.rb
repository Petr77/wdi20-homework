require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :index, layout: :main_layout
end

get '/movie_listing' do
  title = params[:title]
  search_response = HTTParty.get("http://omdbapi.com/?s=#{title}")
  @search_list = search_response["Search"]
  erb :movie_listing, layout: :main_layout
end

get '/poster_view' do
  @img_src = params[:link]
  erb :poster_view, layout: :main_layout
end
