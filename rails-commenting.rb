# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) The code defines a Rails controller called BlogPostsController, which manages actions for handling different operations related to blog posts, such as displaying a list of posts, showing individual posts, creating new posts, editing posts, updating posts, and deleting posts. 
class BlogPostsController < ApplicationController
  def index

    # ---2) The index action fetches all the blog posts from the BlogPost model and stores them in an instance variable called @posts. This variable can be accessed in the corresponding view to display a list of all the posts.
    @posts = BlogPost.all
  end

  # ---3) The show action retrieves a specific blog post based on the :id parameter passed in the URL, and stores it in an instance variable called @post. This variable can be accessed in the corresponding view to display the details of that particular post.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) The new action creates a new instance of the BlogPost model and stores it in an instance variable called @post. This variable can be accessed in the corresponding view to render a form for creating a new blog post.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) The create action creates a new blog post using the parameters submitted from the form in the new action. These parameters are filtered and permitted using the blog_post_params method (comment #10). If the created blog post is valid, the user is redirected to the show action of the newly created blog post.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) The edit action retrieves a specific blog post based on the :id parameter passed in the URL and stores it in an instance variable called @post. This variable can be accessed in the corresponding view to render a form for editing the blog post.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) The update action updates a specific blog post using the parameters submitted from the form in the edit action. These parameters are filtered and permitted using the blog_post_params method (comment #10). If the updated blog post is valid, the user is redirected to the show action of the updated blog post.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) If the blog post is successfully deleted, the user is redirected to the index action of the blog posts.
      redirect_to blog_posts_path
    end
  end

  # ---9) The private keyword denotes that the following methods are private and can only be accessed within the BlogPostsController class.
  private
  def blog_post_params
    # ---10) The blog_post_params method is a private method that filters and permits only the :title and :content parameters from the form submissions, which helps protect against unauthorized or malicious data being passed into the application. This method is used in the create and update actions to ensure that only the allowed parameters are used to create or update a blog post.
    params.require(:blog_post).permit(:title, :content)
  end
end
