Feature: Sauce Lab Application

  Scenario: As a user, I can't log into the Application with invalid creditials
    Given I am on the login page
    When I login with invalid username and password
    Then I should get error message for invalid creditials

  Scenario: As a user, I can't log into the Application with locked creditials
    Given I am on the login page
    When I login with locked username and password
    Then I should get error message for locked creditials

  Scenario: As a user, I can log into the Application with valid username and without password
    Given I am on the login page
    When I login with valid username and without password
    Then I should get error message for no password

  Scenario: As a user, I can log into the Application without creditials
    Given I am on the login page
    When I login without username and password
    Then I should get error message for no username

  Scenario: As a user, I can log into the Application with valid creditials
    Given I am on the login page
    When I login with valid username and password
    Then I should redirect to products page



#   Scenario: As a user, I can log into the Application with invalid creditials
#     Given I am on the login page
#     When I login with valid <username> and <password>
#     Then I should see a error message saying <message>

#     Examples:
#       | username          | password       | message                                                        |
#       | 'locked_out_user' | 'secret_sauce' | 'Sorry, this user has been locked out.'                        |
#       | 'd'               | 'd'            | 'Username and password do not match any user in this service.' |
#       | 'locked_out_user' | ''             | 'Username is required''                                        |
#       | 'standard_user'   | ''             | 'Password is required'                                         |

#   Scenario: As a user, I can log into the Application with valid creditials
#     Given I am on the login page
#     When I login with valid <username> and <password>
#     Then I should redirect to <message> page

#     Examples:
#       | username          | password       | message                                                        |
#       | 'locked_out_user' | 'secret_sauce' | 'Sorry, this user has been locked out.'                        |
#       | 'd'               | 'd'            | 'Username and password do not match any user in this service.' |
#       | 'locked_out_user' | ''             | 'Username is required''                                        |
#       | 'standard_user'   | ''             | 'Password is required'                                         |
#       | 'standard_user'   | 'secret_sauce' | 'PRODUCTS'                                                     |