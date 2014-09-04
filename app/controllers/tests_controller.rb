# require 'federal_register'
class TestsController < ApplicationController
  def index
    p result_set = FederalRegister::Article.search(:conditions => {:term => "Accessibility"})

    if request.xhr?
      render json: "hi".to_json
    else
      render :index
    end
  end
end
