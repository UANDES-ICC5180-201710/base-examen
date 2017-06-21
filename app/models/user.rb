class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :purchases

  def to_s
    if first_name and last_name
      return first_name + ' ' + last_name
    else
      return ''
    end
  end

end
