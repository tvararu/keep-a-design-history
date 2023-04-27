require "rails_helper"

RSpec.describe "Comments" do
  it "can be be submitted on public posts" do
    when_i_visit_my_design_history_post
    then_i_see_the_comments_section

    when_i_post_a_comment
    then_i_see_my_comment
  end

  private

  def when_i_visit_my_design_history_post
    @owner = create(:user)
    @project = create(:project, owner: @owner, subdomain: "this")
    @first_post = create(:post, project: @project, body: "It's working")
    port = page.driver.browser.options.port
    visit "http://this.app.local:#{port}"
    click_link @first_post.title
  end

  def then_i_see_the_comments_section
    expect(page).to have_content "Leave a comment"
  end

  def when_i_post_a_comment
    fill_in "Name", with: "John Doe"
    fill_in "Email", with: "john.doe@example.com"
    fill_in "Enter your comment", with: "This is a comment"
    click_button "Submit comment"
  end

  def then_i_see_my_comment
    expect(page).to have_content "1 comment"
    expect(page).to have_content "This is a comment"
  end
end
