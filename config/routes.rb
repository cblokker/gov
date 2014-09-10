Rails.application.routes.draw do
  root 'states#index'
  resources :states, only: [:index, :show]
  resources :congress_people




  match 'congress_people/:id/sentiment_visualization', to: 'congress_people#sentiment_visualization', via: [:get, :post], as: 'data_visualization'


	resources :gmaps, only: [:index]
	resources :articles, only: [:index]

  get 'congress_people/:id/articles' => 'congress_people#show_articles', as: 'show_articles'
  get 'congress_people/:id/bills' => 'congress_people#show_bills', as: 'show_bills'
end
