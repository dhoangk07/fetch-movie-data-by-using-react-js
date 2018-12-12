require 'test_helper'

class MoviesControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get movies_home_url
    assert_response :success
  end

end
