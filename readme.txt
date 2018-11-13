WebSite:

https://serene-inlet-98304.herokuapp.com

Deployment methods:
  Deploying Flask Apps Using Python Anywhere:
  https://www.youtube.com/watch?v=M-QRwEEZ9-8

  Deploying Flask Apps Using Heroku:
  https://www.youtube.com/watch?v=skc-ZEU9kO8

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


  1. Role based authorization fully built
  2. GEO autocomplete feature added in Registration Form
  3. Mile radius limit feature added in Registration Form
  4. beautification of pages
