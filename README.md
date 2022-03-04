# Sliide QA Technical Test (Web)
## Congratulations, you have reached the next stage which is solving a Sliide practical test.
##### Please create your own repo and share the solution with us

### Setup

Dependencies:
- NodeJS: https://nodejs.org/en/
- NPM: `npm install -g npm`

From the projects root directory, run:
- `npm install` to install dependencies
- `npm start` to run the project
- `npm test` to run the project automation testing


### Description
During the test we want you to imagine yourself as a member of our team, with a collective goal of getting our tasks completed.

When we have reviewed your test, and any accompanying documents you feel necessary, if we like what we see, we’ll invite you to join us for a video conversation during which we’ll ask you to go through your test, explaining any decisions that you made.

Let’s start!

We are in the middle of the sprint and the following 2 user stories were just moved to the QA testing column on our Jira board:

##
### 1 - As a user I want to log in to the web site

#### Scenario 1 - User access the web site for first time (when not logged in yet)

Given - the user opens web site for the first time (when not logged in yet)

Then - login screen with user name and password entries and login button is displayed

#### Scenario 2 - User login failed

Given - the user provides wrong user name and/or password

When - sign in button is clicked

Then - error markers are displayed by user name and/or password entries

#### Scenario 3 - User login succeed (credentials provided below)

Given - the user provided right user name and password

When - sign in button is clicked

Then - user is taken to the news page

#### Scenario 4 - User opens web site next time (when previously logged in)

Given - the user opens web site next time (when previously logged in)

Then - user is taken straight to the news page

 ##

### 2 - As a user I want to see my news

#### Scenario 1 - News cards are loaded

Given - there is internet connection 

When - the user successfully signs in to the app

Then - news cards are displayed in rows and each card contains an image, text and a view button (cards can have one or more images scrollable horizontally)

#### Scenario 2 - Failed to load news

Given - there is no internet connection 

When - the user successfully signs in to the app

Then - “failed to load news” error message and a Retry button are displayed 

#### Scenario 3 - News view button is clicked

Given - the news cards are successfully loaded on the screen

When - the user clicks on the view button of the card

Then - user is navigated to the image of the card

#### Login credentials:
#### user: pa55word
#### password: pa55word

##

Now it’s your turn. You need to verify if we can move these two tickets to Done column on our Jira board.
We expect that these functions will be tested both manually and automatically by you.

### Manual tests - we expect that any bugs will be reported in clear form

### Automated tests - using cypress or any other tool of your choosing (explain why)

* At Sliide we love clean code, so please try to write your tests neatly.

* It’s not mandatory but using an additional abstraction level for your tests (like your own framework to facilitate writing tests) will be very much appreciated

* As a note, we won't consider any automation task submission created with a test recorder.


At Sliide we highly appreciate good communication at all times so, if you have any questions, don’t hesitate to ask   

## Good luck!   
