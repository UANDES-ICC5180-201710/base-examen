Rails.application.routes.draw do
  resources :purchases
  devise_for :users
  resources :games
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  #
  root to: 'games#index'
end
