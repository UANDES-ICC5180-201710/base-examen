Rails.application.routes.draw do
  resources :purchases
  devise_for :users
  resources :users do
    get 'staff', to: 'users#staff', on: :member
  end

  authenticate :user do
    resources :games, only: [:new, :create, :edit, :update, :destroy]
  end
  resources :games
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  #
  root to: 'games#index'
end
