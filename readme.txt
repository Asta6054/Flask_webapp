WebSite:

https://serene-inlet-98304.herokuapp.com

Deployment methods:
  Deploying Flask Apps Using Python Anywhere:
  https://www.youtube.com/watch?v=M-QRwEEZ9-8

  Deploying Flask Apps Using Heroku:
  https://www.youtube.com/watch?v=skc-ZEU9kO8

If you have both versions of python 2.x and 3.x installed and python 2.x is set as default do the following:

  On Mac:
    python3 -m venv venv

  On Windows:
    py -3 -m venv venv

  Before you work on your project, activate the corresponding environment:

  On Mac:
    . venv/bin/activate

  On Windows:
    venv\Scripts\activate

  Output:
  Aruns-MacBook-Pro:nov13 arunbandi$ . venv/bin/activate
  (venv) Aruns-MacBook-Pro:nov13 arunbandi$

once you get here install the following:
  flask (pip install flask)
  flask-pymongo (pip install Flask-PyMongo)
  flask-wtf (pip install Flask-WTF)
  flask login (pip install flask-login)
  flask-bcrypt (pip install flask-bcrypt)

and run the app using:
  On Mac:
    (Local server)
    export FLASK_APP=flaskblog.py
    export FLASK_DEBUG=1
    flask run
  On Windows:
    (Local server)
    set FLASK_APP=flaskblog.py
    set FLASK_DEBUG=1
    flask run

Tool used for Deployment: " Heroku web app"

Things needed for deployment:
virutalenv (pip install virtualenv)
Python 3.x for deployment
gitbash (https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
heroku CLI (https://devcenter.heroku.com/articles/getting-started-with-python)

Things needed for App to work:
In flaskblog.py do the following changes:
  For Deployment:
1.    if __name__ == '__main__':
        app.run(debug=True)
    Remove the above lines from flaskblog.py for deployment only
2.  change import urllib to import urllib.request
3.  change requestinfo = json.load(urllib.urlopen(URL))  to  requestinfo = json.load(urllib.request.urlopen(URL))


flask (pip install flask)
flask-pymongo (pip install Flask-PyMongo)
flask-wtf (pip install Flask-WTF)
flask login (pip install flask-login)
flask-bcrypt (pip install flask-bcrypt)

Updates:
  1. Role based authorization fully built
  2. GEO autocomplete feature added in Registration Form
  3. Mile radius limit feature added in Registration Form
  4. beautification of pages
