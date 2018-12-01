from flask import Flask, render_template, url_for, flash, redirect, request, session, g
from flask_pymongo import PyMongo
from forms import RegistrationForm, LoginForm, MenuForm, AccupdateForm, AcerrupdateForm
from flask_bcrypt import Bcrypt
from flask_login import LoginManager, login_required
import json
import urllib.request
import datetime
import string, json
from bson.json_util import dumps

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

class db:
    def dbget(self, obj1):
        allorder = mongo.db.order
        order = allorder.find_one({'OrderId' : obj1})
        ct = order['CookTime']
        eta = order['distanceETA']
        times = [ct,eta]
        return times

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
                try:
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
                    print(jdata['status'])
                    if float(distance) <= float(15):
                        hashed_password = bcrypt.generate_password_hash(form.password.data).decode('utf-8')
                        users.insert({'username' : form.username.data, 'email' : form.email.data, 'role' : 'customer', 'password' : hashed_password, 'telephone' : form.Telephone.data, 'address' : form.Address.data, 'distance' : distance, 'ETA' : time, 'Error' : 'flase' })
                        flash('Your account has been created! You are now able to log in', 'success')
                    else:
                        print (jdata['status'])
                        hashed_password = bcrypt.generate_password_hash(form.password.data).decode('utf-8')
                        users.insert({'username' : form.username.data, 'email' : form.email.data, 'role' : 'customer', 'password' : hashed_password, 'telephone' : form.Telephone.data, 'address' : form.Address.data, 'distance' : distance, 'ETA' : time, 'Error' : 'true' })
                        flash('Your account has been created! You are now able to log in', 'success')
                        flash('destination location crossed 15 miles delivery limit you will be taken to updae page once you login', 'danger')
                except:
                    flash('Invalid Address', 'danger')
                    return redirect(url_for('register'))
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
                    if (lgin_user['Error'] != 'true'):
                        next_page = request.args.get('next')
                        session['user'] = form.email.data
                        session['role'] = lgin_user['role']
                        if (lgin_user['role'] == 'admin'):
                            return redirect(url_for('admin'))
                        elif(lgin_user['role'] == 'kitchen'):
                            return redirect(url_for('kitchen'))
                        elif(lgin_user['role'] == 'delivery'):
                            return redirect(url_for('delivery'))
                        else:
                            pass
                        session.pop('count', None)
                        userlog.insert({ 'id':lgin_user['_id'], 'User' : lgin_user['email'], 'TimeStamp' : ts })
                        return redirect(next_page) if next_page else redirect(url_for('main'))
                    else:
                        flash('destination location crossed 15 miles delivery limit please change the address', 'danger')
                        return redirect(url_for('acuperror'))
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


@app.route("/updateuserdetails", methods=['GET','POST'])
def acupdate():
    if g.role == 'customer':
        form = AccupdateForm()
        if request.method == 'POST':
            users = mongo.db.login
            existing_user = users.find_one({'email' : session['user']})
            print(existing_user)
            if form.validate_on_submit():
                    api=googleapi()
                    addr = form.Address.data
                    jdata = api.get(addr)
                    timemd = jdata['rows'][0]['elements'][0]['duration']
                    time = timemd['text'].split(' ')
                    time = time[0]
                    distancemd = jdata['rows'][0]['elements'][0]['distance']
                    distance = distancemd['text'].split(' ')
                    distance = distance[0]
                    if jdata['status'] == 'OK':
                        if float(distance) <= float(15):
                            existing_user['telephone'] = form.Telephone.data
                            existing_user['address'] = form.Address.data
                            existing_user['distance'] = distance
                            existing_user['ETA'] = time
                            users.save(existing_user)
                            flash('Your account has been updated successfully!', 'success')
                        else:
                            flash('destination location crossed 15 miles delivery limit!. Please change address', 'danger')
                    else:
                        print (jdata['status'])
                        return jdata['status']
                    return redirect(url_for('main'))
        return render_template('accform.html', title='Account', form=form)
    else:
        session.pop('user', None)
        session.pop('role', None)
        return redirect(url_for('login'))

@app.route("/user/distance_error_update", methods=['GET','POST'])
def acuperror():
        form = AcerrupdateForm()
        if request.method == 'POST':
            users = mongo.db.login
            existing_user = users.find_one({'email' : form.email.data})
            print(existing_user)
            if form.validate_on_submit():
                    api=googleapi()
                    addr = form.Address.data
                    jdata = api.get(addr)
                    timemd = jdata['rows'][0]['elements'][0]['duration']
                    time = timemd['text'].split(' ')
                    time = time[0]
                    distancemd = jdata['rows'][0]['elements'][0]['distance']
                    distance = distancemd['text'].split(' ')
                    distance = distance[0]
                    if jdata['status'] == 'OK':
                        if float(distance) <= float(15):
                            existing_user['address'] = form.Address.data
                            existing_user['Error'] = 'flase'
                            existing_user['distance'] = distance
                            existing_user['ETA'] = time
                            users.save(existing_user)
                            flash('Your account has been Updated successfully! You are now able to login and place orders', 'success')
                        else:
                            flash('destination location crossed 15 miles delivery limit!. Please change address', 'danger')
                    else:
                        print (jdata['status'])
                        return jdata['status']
                    return redirect(url_for('login'))
        return render_template('acerrform.html', title='Account', form=form)

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





@app.route("/useraccount", methods=['GET','POST'])
def useraccountpage():
    if g.role == 'customer':
        users = mongo.db.login
        members = users.find_one({'email' : session['user']})
        username = members['username']
        email = members['email']
        address = members['address']
        contact = members['telephone']
        return render_template('account.html',username = username, email = email, address = address, contact = contact)
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
        return render_template('aoverwatch.html',title='Admin Overview')
    else:
        session.pop('user', None)
        session.pop('role', None)
        return redirect(url_for('login'))
@app.route("/admin/orderstatus_dc")
def vod():
    if g.role == 'admin':
        return render_template('avdc.html',title='Admin Overview')
    else:
        session.pop('user', None)
        session.pop('role', None)
        return redirect(url_for('login'))
@app.route("/admin/orderstatus_pending")
def vop():
    if g.role == 'admin':
        return render_template('avpending.html',title='Admin Overview')
    else:
        session.pop('user', None)
        session.pop('role', None)
        return redirect(url_for('login'))
@app.route("/admin/orderstatus_cooking")
def voc():
    if g.role == 'admin':
        return render_template('avcooking.html',title='Admin Overview')
    else:
        session.pop('user', None)
        session.pop('role', None)
        return redirect(url_for('login'))
@app.route("/admin/orderstatus_rfd")
def vor():
    if g.role == 'admin':
        return render_template('avrfd.html',title='Admin Overview')
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

@app.route("/customer/current_order", methods=['GET', 'POST'])
def cuscurrentorder():
    if g.role == 'customer':
        return render_template('corder.html', title='Personal Orders')
    else:
        session.pop('user', None)
        session.pop('role', None)
        return redirect(url_for('login'))

@app.route("/customer/order_history", methods=['GET', 'POST'])
def cusorderhistory():
    if g.role == 'customer':
        return render_template('coh.html', title='Members')
    else:
        session.pop('user', None)
        session.pop('role', None)
        return redirect(url_for('login'))

# --------------------------- CUSTOMER_ETA_PENDING -------------------------

@app.route("/new_time", methods=['GET','POST'])
def new_t():
    estp = 0
    estp2 = 0
    info = request.args.get("info")
    print("521",info)
    allorder = mongo.db.order
    user = mongo.db.order.find_one({'OrderId' : int(info)})
    print("533",user)
    pipeline = [{ '$match':{'status':"pending"}},{ '$group':{'_id':"$status",'total':{'$sum': "$CookTime"}}}]
    cursor = allorder.aggregate(pipeline,allowDiskUse = False)
    if allorder.count() != 0:
        for test in cursor:
            estp = test['total']
            print(test['total'])
    else:
        estp = 0
    pipeline2 = [{ '$match':{'status':"cooking"}},{ '$group':{'_id':"$status",'total':{'$max': "$CookTime"}}}]
    cursor2 = allorder.aggregate(pipeline2,allowDiskUse = False)
    if allorder.count() != 0:
        for test2 in cursor2:
            estp2 = test2['total']
            print(test2['total'])
    else:
        estp2 = 0

    return json.dumps({'status':'OK','time': user['CookTime'], 'distanceETA' : user['distanceETA'], 'pETA':estp, 'cETA':estp2});





# ---------------------------- ORDER PAGE START----------------------------


@app.route("/review", methods=['GET', 'POST'])
def reviewAjax():
    info = request.args.get("info")
    items = info.split(";")[:-1]
    item_str = []
    qty = ""
    estp = 0
    estp2 = 0
    time_list = []
    order_status = "pending"
    menu1 = mongo.db.menu1
    menu2 = mongo.db.menu2
    menu3 = mongo.db.menu3

    print(len(items))
    for item in items:
        print(item)
        (name, num) = item.split(",")
        if True:
            try:
                res = menu1.find_one({'ItemName': name})
                time_list.append(int(res["Time"].split(" ")[0]))
        #     # print (res["Time"])
                item_str.append(name+"*"+num+";")

            except:
                print ("not in 1")
            try:
        # elif (name == menu2.find_one({'ItemName': name})):
                res = menu2.find_one({'ItemName': name})
                time_list.append(int(res["Time"].split(" ")[0]))

                item_str.append(name+"*"+num+";")
            except:
                print ("not in 2")
        # elif (name == menu3.find_one({'ItemName': name})):
            try:
                res = menu3.find_one({'ItemName': name})
                time_list.append(int(res["Time"].split(" ")[0]))
                item_str.append(name+"*"+num+";")
            except:
                print ("not in 3")


    order = mongo.db.order
    print("608 ",order['CookTime'])

    count_order = order.find().count() + 1
    print ("order:", count_order)

    print("$$",time_list)

    item_str2 = []
    for item in items:
        item_dic = {}
        (name, num) = item.split(",")
        item_dic['Itemname'] = name
        item_dic['Qty'] = num
        item_str2.append(item_dic)

    cook_time ="%d" % (max(time_list))
    print (time_list, "max:", cook_time)
    user_email = request.args.get('user')
    # print (user_email)
    user = mongo.db.login.find_one({'email' : user_email})
    pipeline = [{ '$match':{'status':"pending"}},{ '$group':{'_id':"$status",'total':{'$sum': "$CookTime"}}}]
    cursor = order.aggregate(pipeline,allowDiskUse = False)
    if order.count() != 0:
        for test in cursor:
            estp = test['total']
            print(test['total'])
    else:
        estp = 0
    pipeline2 = [{ '$match':{'status':"cooking"}},{ '$group':{'_id':"$status",'total':{'$max': "$CookTime"}}}]
    cursor2 = order.aggregate(pipeline2,allowDiskUse = False)
    if order.count() != 0:
        for test2 in cursor2:
            estp2 = test2['total']
            print(test2['total'])
    else:
        estp2 = 0
    return json.dumps({'status':'OK','time':cook_time, 'address':user['address'], 'distanceETA' : user['ETA'], 'pETA':estp, 'cETA':estp2});



@app.route("/upload_menu", methods=['GET','POST'])
def upload_m():


    info = request.args.get("info")
    print(info)
    price = request.args.get("price")
    cusETA = request.args.get("ETA")
    ETAresu = request.args.get("ETAts")
    print(price)
    username = request.args.get("username")
    print(username)
    placedts = request.args.get("plcdts")
    user = mongo.db.login.find_one({'email' : username})
    items = info.split(";")[:-1]
    item_str = []
    qty = ""
    time_list = []
    pend_time_list = []
    order_status = "pending"
    menu1 = mongo.db.menu1
    menu2 = mongo.db.menu2
    menu3 = mongo.db.menu3

    print(len(items))
    for item in items:
        print(item)
        (name, num) = item.split(",")
        if True:
            try:
                res = menu1.find_one({'ItemName': name})
                time_list.append(int(res["Time"].split(" ")[0]))
        #     # print (res["Time"])
                item_str.append(name+"*"+num+";")

            except:
                print ("not in 1")
            try:
        # elif (name == menu2.find_one({'ItemName': name})):
                res = menu2.find_one({'ItemName': name})
                time_list.append(int(res["Time"].split(" ")[0]))

                item_str.append(name+"*"+num+";")
            except:
                print ("not in 2")
        # elif (name == menu3.find_one({'ItemName': name})):
            try:
                res = menu3.find_one({'ItemName': name})
                time_list.append(int(res["Time"].split(" ")[0]))
                item_str.append(name+"*"+num+";")
            except:
                print ("not in 3")


    order = mongo.db.order
    count_order = order.find().count() + 1
    print ("order:", count_order)
    print("$$",time_list)

    item_str2 = []
    for item in items:
        item_dic = {}
        (name, num) = item.split(",")
        item_dic['Itemname'] = name
        item_dic['Qty'] = num
        item_str2.append(item_dic)

    cook_time ="%d" % (max(time_list))
    print (time_list, "max:", cook_time)
    order.insert_one({"Uid": user['username'], "Ueid": username, "OrderId" : count_order, "Itemlist": item_str2,'TotalPrice' : price, 'CookTime' : int(cook_time),
    'distanceETA' : user['ETA'], 'status' : order_status, 'address':user['address'], 'contact':user['telephone'],
     'CustomerETA': cusETA, 'distance':user['distance'], 'expETA':int(ETAresu), 'plcdts':int(placedts) , 'cookts':'blank', 'rfdts':'blank', 'ofdts':'blank', 'dcts':'blank'})

    # return "succ"
    return json.dumps({'status':'OK', 'time':cook_time, 'distanceETA':user['ETA']});

# ---------------------------- ORDER PAGE END ----------------------------

if __name__ == '__main__':
    app.run(debug=True)
