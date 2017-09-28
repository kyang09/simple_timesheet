# Simple Timesheet
## by Kevin Yang
#### Simple timesheet app build with ReactJS and Django 1.8

###### If you want to run this on your machine, create a virtualenv (virtual environment) before running. Included are two shell scripts for Windows and Unix/Linux to create a virtualenv and install dependencies.

### Concept
The front-end should have the ability to add a new entry and display existing entries in table format with the ability to edit and delete.
A timesheet entry will have a date, two time inputs (from & to) and a simple text input for a comment.

### Installation
#### Django and Python
Be sure to install Django 1.8. I used pip to install Django 1.8 and any dependencies. The project uses Python 2.7, so it may be necessary to switch to Python 2.7 if you have Python 3 installed.
Note: If your Python installation doesn't come with pip (older versions), check out this [link](https://pip.pypa.io/en/stable/installing/#do-i-need-to-install-pip) to install pip.

Included is a requirements.txt. Assuming you are in the same directory as requirements.txt, use this file to install all required dependencies like:
    
    pip install -r requirements.txt

#### ReactJS and NPM
Install npm according to your machine from [npmjs](https://www.npmjs.com/package/npm)
Once npm is set up, in the directory where package.json is, simply do:
    
    npm install

This will install all JavaScript-related dependencies used by the ReactJS application.
If there are errors, read the errors to see if you need more dependencies outside of the given package.json.

### Customizing the Code
#### Django
Operations to manage the Django environment is done with the manage.py file included in the root directory.
If you want to make changes to the Django code, here are some basic commands I often use:

##### Create an updated migration of your database schema from models.py:
    python manage.py makemigrations

##### Apply migration created by makemigrations:
    python manage.py migrate

##### Collect static files such as JavaScript, CSS, and image files:
    python manage.py makemigrations

##### Collect static files such as JavaScript, CSS, and image files:
    python manage.py collectstatic

##### Run a local server (for development):
    python manage.py runserver

#### ReactJS
##### Use Webpack to make JavaScript bundle files from ReactJS JSX:
    Windows: node_modules\.bin\webpack --config webpack.config.js
    Linux: ./node_modules/.bin/webpack --config webpack.config.js

Be sure to use webpack first to create JavaScript files before running Django's collectstatic.