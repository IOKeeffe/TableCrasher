# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  f_name          :string           not null
#  l_name          :string           not null
#  email_address   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  city_id         :integer
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
