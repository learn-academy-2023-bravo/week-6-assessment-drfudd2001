# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer:

To fix the mistake of not having a foreign key in the association between Cohort and Student models in a Rails application, generate a migration to add a "cohort_id" column to the students table. Then, run the migration to add the foreign key column to the Student model's table, as it belongs to the Cohort model.

Researched answer:

As a developer, if you have created a Rails application with a model called Cohort and a model called Student, and you have a one-to-many association where Cohort has_many students, but you forgot to add the foreign key, you can fix this mistake by generating a migration to add the foreign key column to the Student model's table.

You can create a migration using the Rails command line tool, such as rails generate migration AddCohortIdToStudents. This will generate a migration file that you can then edit to add a foreign key column to the students table. You can use the add_column method in the migration to add the foreign key column, and specify the name of the foreign key column as "cohort_id" (or any other name you prefer).

The foreign key column should be added to the Student model's table, as it is the table that belongs to the Cohort model. The foreign key column, in this case "cohort_id", should be added to the Student model's table as an integer column, which will store the ID of the corresponding Cohort for each Student record.

Once the migration is created and edited, you can run rake db:migrate to apply the migration and add the foreign key column to the students table. This will fix the mistake of not having the foreign key in the association between the Cohort and Student models, allowing you to properly establish the relationship between them.

2. Which RESTful routes must always be passed params? Why?

Your answer:

In a Rails application, the RESTful routes that must always be passed params are:

create: This route requires params to be passed in the form of user input or data to create a new resource in the system. Without params, the server would not have the necessary data to create a new resource.

update: This route also requires params to be passed in the form of user input or data to update an existing resource. Without params, the server would not know what changes to make to the resource.

destroy: This route requires the ID or identifier of the resource to be deleted as a param. Without this ID, the server would not know which resource to delete.

These routes require params to be passed in order to provide the necessary data for creating, updating, or deleting resources in the system.

Researched answer:

In a RESTful Rails application, the create, update, and destroy routes always require params to be passed.

create: The create route is used to create a new resource in the system. It requires params to be passed in the form of user input or data to populate the attributes of the new resource. For example, when creating a new record in the Cohort model, params would be required to pass the values for attributes like name, start_date, end_date, etc.

update: The update route is used to update an existing resource in the system. It also requires params to be passed in the form of user input or data to specify the changes to be made to the attributes of the resource. For example, when updating an existing record in the Cohort model, params would be required to pass the new values for attributes that need to be updated, such as name, start_date, end_date, etc.

destroy: The destroy route is used to delete a resource from the system. It requires the ID or identifier of the resource to be deleted as a param. This ID is necessary for the server to identify which resource needs to be deleted. For example, when deleting a record in the Cohort model, the ID of the cohort to be deleted would be required as a param.

These routes require params to be passed in order to provide the necessary data for creating, updating, or deleting resources in the system. Without params, the server would not have the necessary information to perform these actions accurately.

3. Name three rails generator commands. What is created by each?

Your answer:

rails generate migration: This command generates a database migration file, which allows you to make changes to your application's database schema, such as creating or modifying tables, adding or removing columns, and setting up associations between tables.

rails generate model: This command generates a model file, which represents a database table and defines the attributes and behavior of a resource. It also generates a database migration file, which is used to create the corresponding database table.

rails generate controller: This command generates a controller file, which handles the logic for handling incoming requests and generating responses. It also generates corresponding views for rendering HTML templates or other types of responses.

In simple terms, these generator commands in Rails help developers to quickly generate the necessary files and code for creating resources, models, and controllers in a Rails application. They provide a convenient way to scaffold out the basic structure and functionality of a resource, allowing developers to focus on adding custom logic and features to their application.

Researched answer:

rails generate model: This command generates a model file, migration file, and tests for a database table. The model represents a data structure in the application and provides methods for interacting with the corresponding database table. The migration file is used to create the database table with the defined columns, indexes, and constraints. The tests are generated to ensure the correctness of the model's behavior.

rails generate controller: This command generates a controller file, view files, and tests for handling user requests and rendering views. The controller contains actions that respond to different HTTP requests and determine what view should be rendered. The view files are templates that define the HTML structure and dynamic content to be displayed to the user. The tests are generated to ensure the proper functioning of the controller's actions.

rails generate migration: This command generates a migration file for modifying the database schema. Migrations are used to modify the database schema, such as adding or removing tables, columns, or indexes. The migration file includes methods for defining the changes to be made to the database schema, and the changes are applied to the database when the migration is run using the rake db:migrate command.

It's important to note that Rails generators provide a convenient way to generate boilerplate code, but they should be used judiciously and with caution. It's recommended to review and modify the generated code as needed to suit the specific requirements of the application and to follow best practices for security, performance, and maintainability.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students

Controller Method: index
Action: The index action retrieves all students from the database and prepares them for rendering in the view. It typically fetches data from the model and stores it in an instance variable to be used in the corresponding view for displaying a list of students.

action: "POST" location: /students

Controller Method: create
Action: The create action creates a new student based on the parameters submitted from a form or API request. It typically validates the input data, creates a new student record in the database, and redirects or responds accordingly.

action: "GET" location: /students/new

Controller Method: new
Action: The new action initializes a new instance of the Student model and prepares it for rendering in the view. It typically creates a new student object in memory without saving it to the database and renders a form for creating a new student.

action: "GET" location: /students/2

Controller Method: show
Action: The show action retrieves a specific student from the database based on the given ID parameter, and prepares it for rendering in the view. It typically fetches the student record from the model based on the ID, and renders a view for displaying the details of that student.

action: "GET" location: /students/2/edit

Controller Method: edit
Action: The edit action retrieves a specific student from the database based on the given ID parameter, and prepares it for rendering in the view. It typically fetches the student record from the model based on the ID, and renders a view for editing the details of that student.

action: "PATCH" location: /students/2

Controller Method: update
Action: The update action updates a specific student record in the database based on the parameters submitted from a form or API request. It typically validates the input data, finds the student record in the database based on the ID, and updates its attributes before saving it. It may also handle error cases and respond accordingly.

action: "DELETE" location: /students/2

Controller Method: destroy
Action: The destroy action finds and deletes a specific student record from the database based on the given ID parameter. It typically finds the student record based on the ID, destroys it in the database, and may handle error cases and respond accordingly.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

    1.  1. As a user, I want to be able to create a new task in my to-do list with a title, description, and due date, so that I can keep track of my tasks and their deadlines.

    2. As a user, I want to be able to view my list of tasks, sorted by their due dates, so that I can easily see which tasks are coming up soon and prioritize my work accordingly.

    3. As a user, I want to be able to mark a task as completed, so that I can keep track of my progress and see which tasks are still pending.

    4. As a user, I want to be able to edit the title, description, or due date of a task, in case I need to update the details or change the deadline.

    5. As a user, I want to be able to delete a task from my to-do list, in case I no longer need to complete it or it was mistakenly added.

    6. As a user, I want to be able to categorize tasks into different categories or tags, so that I can easily filter and organize my tasks based on their types or priorities.

    7. As a user, I want to be able to set reminders or notifications for tasks with upcoming due dates, so that I can be alerted in advance and avoid missing any deadlines.

    8. As a user, I want to be able to search for tasks based on their titles or descriptions, so that I can quickly find specific tasks or keywords within my to-do list.

    9. As a user, I want to be able to prioritize tasks by assigning different levels of importance or urgency, so that I can focus on the most critical tasks first and manage my workload effectively.

    10. As a user, I want to be able to view completed tasks separately from pending tasks, so that I can review my progress and keep track of my completed tasks for reference.
