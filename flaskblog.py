from flask import Flask, render_template, url_for, flash, redirect, request, session, g
from flask_pymongo import PyMongo
from forms import RegistrationForm, LoginForm, MenuForm
from flask_bcrypt import Bcrypt
from flask_login import LoginManager, login_required
import json
import urllib.request
import datetime
import string, json

app = Flask(__name__)

bcrypt = Bcrypt(app)
jdata = None
ts = None
count = 0
b = 1
app.config['SECRET_KEY'] = '6ed402f8cde8ed26a6bc16a9569dbe6f'
app.config['MONGO_DBNAME'] = 'project'
app.config["MONGO_URI"] = "mongodb://Arun6054:Pra1310bvr@ds045622.mlab.com:45622/project"
mongo = PyMongo(app)
login_manager = LoginManager(app)
login_manager.login_view = 'login'
usercart = None;
newdict={}
class cart:
    item = None
    orderid = None
    customerid = None

def GetTimeformTimestamp(timestamp):
    splitTS = timestamp.split(' ')
    return splitTS[4]

def TimeStamp():
    ts = datetime.datetime.now().strftime("%A %d %B %Y %I:%M%p")
    Timest = GetTimeformTimestamp(ts)
    return Timest

class googleapi:
        googleapikey = "AIzaSyA2TMNF1bewLerQgvelJwKPu1xkAMZbz7c"
        def get(self, endLoc):
            startLoc= 'Rochester Hills, MI, USA'
            startLoc = startLoc.replace(' ','+')
            endLoc = endLoc.replace(' ','+')
            URL="https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins="+startLoc+"&destinations="+endLoc+"&key="+self.googleapikey
            requestinfo = json.load(urllib.request.urlopen(URL))
            return requestinfo

@app.route('/')
def index():
    return render_template('bmain.html')

@app.route('/home')
def home():
    posts = mongo.db.menu1.find()
    result = mongo.db.menu2.find()
    name = mongo.db.menu3.find()
    return render_template('home.html', posts=posts, result=result, name=name)

@app.before_request
def before_request():
    g.user = None
    g.role = None
    if 'user' in session:
        g.user = session['user']
    if 'role' in session:
        g.role = session['role']

@app.route('/register', methods=['GET','POST'])
def register():
    form = RegistrationForm()
    if request.method == 'POST':
        users = mongo.db.login
        existing_user = users.find_one({'email' : form.email.data})
        existing_username = users.find_one({'username' : form.username.data})
        if form.validate_on_submit():
            if existing_user:
                flash('That email is taken. Please choose a different one.','danger')
            if existing_username:
                flash('That username is taken. Please choose a different one.','danger')
            else:
                api=googleapi()
                addr = form.Address.data
                jdata = api.get(addr)
                timemd = jdata['rows'][0]['elements'][0]['duration']
                time = timemd['text'].split(' ')
                time = time[0]
                distancemd = jdata['rows'][0]['elements'][0]['distance']
                distance = distancemd['text'].split(' ')
                distance = distance[0]
                ts = datetime.datetime.now().strftime("%A, %d. %B %Y %I:%M%p")
                print(timemd['text'])
                print(distancemd['text'])
                print(ts)
                print(distance)
                print(time)
                if jdata['status'] == 'OK':
                    if float(distance) <= float(15):
                        hashed_password = bcrypt.generate_password_hash(form.password.data).decode('utf-8')
                        users.insert({'username' : form.username.data, 'email' : form.email.data, 'role' : 'customer', 'password' : hashed_password, 'telephone' : form.Telephone.data, 'address' : form.Address.data, 'distance' : distance, 'ETA' : time })
                        flash('Your account has been created! You are now able to log in', 'success')
                    else:
                        print (jdata['status'])
                        hashed_password = bcrypt.generate_password_hash(form.password.data).decode('utf-8')
                        users.insert({'username' : form.username.data, 'email' : form.email.data, 'role' : 'customer', 'password' : hashed_password, 'telephone' : form.Telephone.data, 'address' : form.Address.data, 'distance' : distance, 'ETA' : time, 'Error' : 'true' })
                        flash('Your account has been created! You are now able to log in', 'success')
                        flash('destination location crossed 15 miles delivery limit need to change at payment', 'danger')
                else:
                    print (jdata['status'])
                    return jdata['status']
                return redirect(url_for('login'))
    return render_template('register.html', title='Register', form=form)

@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if request.method == 'POST':
        session.pop('user', None)
        ts = TimeStamp()
        print(ts)
        if form.validate_on_submit():
            userlog = mongo.db.userlog
            users = mongo.db.login
            lgin_user = users.find_one({'email' : form.email.data})
            if lgin_user:
                if (bcrypt.check_password_hash(lgin_user['password'], form.password.data) is True):
                    next_page = request.args.get('next')
                    session['user'] = form.email.data
                    session['role'] = lgin_user['role']
                    if (lgin_user['role'] == 'admin'):
                        return redirect(url_for('admin'))
                    elif(lgin_user['role'] == 'kitchen'):
                        return redirect(url_for('kitchen'))
                    elif(lgin_user['role'] == 'delivery'):
                        return redirect(url_for('delivery'))
                    session.pop('count', None)
                    userlog.insert({ 'id':lgin_user['_id'], 'User' : lgin_user['email'], 'TimeStamp' : ts })
                    return redirect(next_page) if next_page else redirect(url_for('main'))
                else:
                    flash('Login Unsuccessful. Please check email and password', 'danger')
            else:
                flash('Login Unsuccessful. Please check email and password', 'danger')
    return render_template('login.html', title='Login', form=form)

@app.route('/updatemenu', methods=['GET', 'POST'])
def addmenu():
    form = MenuForm()
    if g.role == 'admin':
        mlab = mongo.db
        members = mlab.login.find()
        if request.method == 'POST':
            menu1 = mongo.db.menu1
            valuem1 = menu1.count()
            m1id = valuem1 + 100001
            print(m1id)
            result = mongo.db.menu2
            valuem2 = result.count()
            m2id = valuem2 + 200001
            print(m1id)
            name = mongo.db.menu3
            valuem3 = name.count()
            m3id = valuem3 + 300001
            print(m1id)
            price = '$' + form.Price.data
            print(price)
            time = form.Time.data + ' min'
            print(time)
            if form.validate_on_submit():
                value = dict(form.cateogry.choices).get(form.cateogry.data)
                print (value)
                if value == 'ROTISSERIE CHICKEN DINNERS':
                    menu1.insert({'cateogry' : value, 'id' : m1id, 'ItemName' : form.ItemName.data, 'Description' : form.Description.data, 'Price' : price, 'Time' : time})
                    flash('Your Item has been added to the Menu!', 'success')
                    return redirect(url_for('admin'))
                elif value == 'PIZZAS':
                    result.insert({'cateogry' : value, 'id' : m2id, 'ItemName' : form.ItemName.data, 'Description' : form.Description.data, 'Price' : form.Price.data, 'Time' : form.Time.data})
                    flash('Your Item has been added to the Menu!', 'success')
                    return redirect(url_for('admin'))
                elif value == 'SANDWICHES':
                    name.insert({'cateogry' : value, 'id' : m3id, 'ItemName' : form.ItemName.data, 'Description' : form.Description.data, 'Price' : form.Price.data, 'Time' : form.Time.data})
                    flash('Your Item has been added to the Menu!', 'success')
                    return redirect(url_for('admin'))
                else:
                    flash('Error!!', 'danger')
            else:
                flash('Error!!', 'danger')
        return render_template('addmenu.html', form=form, post=members)
    else:
        session.pop('user', None)
        session.pop('role', None)
        return redirect(url_for('login'))

@app.route("/logout")
def logout():
    session.pop('user', None)
    session.pop('count', None)
    return redirect(url_for('index'))

@app.route("/admin")
def admin():
    if g.role == 'admin':
        return render_template('admin.html')
    else:
        session.pop('user', None)
        session.pop('role', None)
        return redirect(url_for('login'))

@app.route("/updatemenu/<item_name>", methods=['GET','POST'])
def deleteitem(item_name):
    if g.role == 'admin':
        print(item_name)
        menu1 = mongo.db.menu1
        menu2 = mongo.db.menu2
        menu3 = mongo.db.menu3
        m1found = menu1.find_one({'ItemName' : item_name})
        print(m1found)
        m2found = menu2.find_one({'ItemName' : item_name})
        print(m2found)
        m3found = menu3.find_one({'ItemName' : item_name})
        print(m3found)
        if(m1found != None):
            if (m1found['ItemName'] == item_name):
                menu1.remove(m1found)
                flash('Your Item has been removed from the Menu!', 'success')
                return redirect(url_for('menu'))
        if(m2found != None):
            if(m2found['ItemName'] == item_name):
                menu2.remove(m2found)
                flash('Your Item has been removed from the Menu!', 'success')
                return redirect(url_for('menu'))
        if(m3found != None):
            if(m3found['ItemName'] == item_name):
                menu3.remove(m3found)
                flash('Your Item has been removed from the Menu!', 'success')
                return redirect(url_for('menu'))
        return redirect(url_for('menu'))
    else:
        session.pop('user', None)
        session.pop('role', None)
        return redirect(url_for('login'))

@app.route("/add2kart/<item_name>", methods=['GET','POST'])
def add2kart(item_name):
    if 'user' in session:
        if request.method == 'POST':
            global count
            global b
            print(item_name)
            menu1 = mongo.db.menu1
            menu2 = mongo.db.menu2
            menu3 = mongo.db.menu3
            m1found = menu1.find_one({'ItemName' : item_name})
            print(m1found)
            m2found = menu2.find_one({'ItemName' : item_name})
            print(m2found)
            m3found = menu3.find_one({'ItemName' : item_name})
            print(m3found)
            if(m1found != None):
                if (m1found['ItemName'] == item_name):
                    print(item_name)
                    print(newdict)
                    count += 1
                    session['count'] = count
                    x = m1found['ItemName']
                    test = newdict.get('ItemName')
                    print (test)
                    if x in newdict.values():
                        print ("hi")
                        print (newdict.values())
                        b += 1
                        newdict.setdefault('Qty', []).append(b)
                        b=0
                    else:
                        print ("oh")
                        print (newdict)
                        newdict.setdefault('ItemName', []).append(x)
                    with open('text1.json', 'w') as f:
                        json.dump(newdict, f)
                    print (type(count))
                    return redirect(url_for('home', count = count))
            if(m2found != None):
                if(m2found['ItemName'] == item_name):
                    count += 1
                    session['count'] = count
                    x = m2found['ItemName']
                    if x in newdict.values():
                        print ("hi")
                        print (newdict.values())
                        b += 1
                        newdict.setdefault('Qty', []).append(b)
                        b=0
                    else:
                        print ("oh")
                        print (newdict)
                        newdict.setdefault('ItemName', []).append(x)
                    with open('text1.json', 'w') as f:
                        json.dump(newdict, f)
                    print(m2found)
                    return redirect(url_for('home'))
            if(m3found != None):
                if(m3found['ItemName'] == item_name):
                    count += 1
                    session['count'] = count
                    x = m3found['ItemName']
                    test = newdict.get('ItemName')
                    print (test)
                    if x in newdict.values():
                        print ("hi")
                        print (newdict.values())
                        b += 1
                        newdict.setdefault('Qty', []).append(b)
                        b=0
                    else:
                        print ("oh")
                        print (newdict)
                        newdict.setdefault('ItemName', []).append(x)
                    with open('text1.json', 'w') as f:
                        json.dump(newdict, f)
                    print(m3found)
                    return redirect(url_for('home'))
            return redirect(url_for('home'))
        return redirect(url_for('menu'))
    else:
        session.pop('count', None)
        session.pop('user', None)
        session.pop('role', None)
        return redirect(url_for('login'))

@app.route("/admin/orderreview")
def orderreviewpage():
    if 'user' in session:
        with open('text1.json') as data_file:
            tempdata = json.load(data_file)
            print(tempdata)
            posts = tempdata['ItemName']
            print(posts)
        return render_template('orderreviewpage.html', posts = str(posts))
    else:
        session.pop('user', None)
        session.pop('role', None)
        return redirect(url_for('login'))

@app.route("/updateuser2c/<user_name>", methods=['GET','POST'])
def updateuser2c(user_name):
    if g.role == 'admin':
        users = mongo.db.login
        lgin_user = users.find_one({'email' : user_name})
        lgin_user['role'] = 'customer'
        users.save(lgin_user)
        return redirect(url_for('staff'))
    else:
        session.pop('user', None)
        session.pop('role', None)
        return redirect(url_for('login'))

@app.route("/updateuser2d/<user_name>", methods=['GET','POST'])
def updateuser2d(user_name):
    if g.role == 'admin':
        users = mongo.db.login
        lgin_user = users.find_one({'email' : user_name})
        lgin_user['role'] = 'delivery'
        users.save(lgin_user)
        return redirect(url_for('staff'))
    else:
        session.pop('user', None)
        session.pop('role', None)
        return redirect(url_for('login'))

@app.route("/updateuser2k/<user_name>", methods=['GET','POST'])
def updateuser2k(user_name):
    if g.role == 'admin':
        users = mongo.db.login
        lgin_user = users.find_one({'email' : user_name})
        lgin_user['role'] = 'kitchen'
        users.save(lgin_user)
        return redirect(url_for('staff'))
    else:
        session.pop('user', None)
        session.pop('role', None)
        return redirect(url_for('login'))

@app.route("/kitchenhomepage")
def kitchen():
    if g.role == 'kitchen':
        mlab = mongo.db
        order=mlab.order.find()
        Corder=mlab.Corder.find()
        return render_template('kitchenstaff.html', order=order,Corder=Corder)
    else:
        session.pop('user', None)
        session.pop('role', None)
        return redirect(url_for('login'))

@app.route("/tocooking/<order_id>", methods=['GET','POST'])
def tocooking(order_id):
    if g.role == 'kitchen':
        print(order_id)
        ordermd = mongo.db.order
        Cordermd = mongo.db.Corder
        o1found = ordermd.find_one({'OrderId' : order_id})
        print(o1found)
        if(o1found != None):
            if (o1found['OrderId'] == order_id):
                Cordermd.insert(o1found)
                ordermd.remove(o1found)
                i = int(o1found['CookTime'])
                while i < 0:
                    print (i)
                    flash( i + 'mins left','danger')
                    i = i - 1
            return redirect(url_for('kitchen'))
    else:
        session.pop('user', None)
        session.pop('role', None)
        return redirect(url_for('login'))

@app.route("/toready/<order_id>", methods=['GET','POST'])
def toready(order_id):
    if g.role == 'kitchen':
        print(order_id)
        Cordermd = mongo.db.Corder
        Rordermd = mongo.db.Rorder
        o1found = Cordermd.find_one({'OrderId' : order_id})
        print(o1found)
        if(o1found != None):
            if (o1found['OrderId'] == order_id):
                Rordermd.insert(o1found)
                Cordermd.remove(o1found)
            return redirect(url_for('kitchen'))
    else:
        session.pop('user', None)
        session.pop('role', None)
        return redirect(url_for('login'))


@app.route("/deliveryhomepage")
def delivery():
    if g.role == 'delivery':
        mlab = mongo.db
        Rorder=mlab.Rorder.find()
        Oorder=mlab.Oorder.find()
        Dorder=mlab.Dorder.find()
        return render_template('deliverystaff.html', Rorder=Rorder,Oorder=Oorder,Dorder=Dorder)
    else:
        session.pop('user', None)
        session.pop('role', None)
        return redirect(url_for('login'))

@app.route("/toout/<order_id>", methods=['GET','POST'])
def toout(order_id):
    if g.role == 'delivery':
        print(order_id)
        Rordermd = mongo.db.Rorder
        Oordermd = mongo.db.Oorder
        o1found = Rordermd.find_one({'OrderId' : order_id})
        print(o1found)
        if(o1found != None):
            if (o1found['OrderId'] == order_id):
                Oordermd.insert(o1found)
                Rordermd.remove(o1found)
            return redirect(url_for('delivery'))
    else:
        session.pop('user', None)
        session.pop('role', None)
        return redirect(url_for('login'))

@app.route("/todone/<order_id>", methods=['GET','POST'])
def todone(order_id):
    if g.role == 'delivery':
        print(order_id)
        Oordermd = mongo.db.Oorder
        Dordermd = mongo.db.Dorder
        o1found = Oordermd.find_one({'OrderId' : order_id})
        print(o1found)
        if(o1found != None):
            if (o1found['OrderId'] == order_id):
                Dordermd.insert(o1found)
                Oordermd.remove(o1found)
            return redirect(url_for('delivery'))
    else:
        session.pop('user', None)
        session.pop('role', None)
        return redirect(url_for('login'))

@app.route("/index")
def main():
    if g.role == 'customer':
        return render_template('main.html')
    else:
        session.pop('user', None)
        session.pop('role', None)
        return redirect(url_for('login'))

@app.route("/admin/orderstatus")
def aoverwatch():
    if g.role == 'admin':
        mlab = mongo.db
        order=mlab.order.find({'status':'pending'})
        Corder=mlab.order.find({'status':'cooking'})
        rorder=mlab.order.find({'status':'RFD'})
        Coorder=mlab.order.find({'status':'DC'})
        return render_template('aoverwatch.html', order=order,Corder=Corder, rorder=rorder,Coorder=Coorder)
    else:
        session.pop('user', None)
        session.pop('role', None)
        return redirect(url_for('login'))

@app.route("/admin/menu", methods=['GET', 'POST'])
def menu():
    if g.role == 'admin':
        posts = mongo.db.menu1.find()
        result = mongo.db.menu2.find()
        name = mongo.db.menu3.find()
        return render_template('menu.html',title='Menu', posts=posts, result=result, name=name)
    else:
        session.pop('user', None)
        session.pop('role', None)
        return redirect(url_for('login'))


@app.route("/admin/staff", methods=['GET', 'POST'])
def staff():
    if g.role == 'admin':
        mlab = mongo.db
        members = mlab.login.find()
        return render_template('user.html', title='Members', post=members)
    else:
        session.pop('user', None)
        session.pop('role', None)
        return redirect(url_for('login'))

if __name__ == '__main__':
    app.run(debug=True)
