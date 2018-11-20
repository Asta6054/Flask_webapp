from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField, BooleanField, IntegerField, SelectField
from wtforms.validators import DataRequired, Length, Email, EqualTo, ValidationError, Regexp

class RegistrationForm(FlaskForm):
    username = StringField('Username', validators=[DataRequired(), Length(min=5, max=20)])
    email = StringField('Email', validators=[DataRequired(), Email(), Length(min=1, max=50)])
    password = PasswordField('Password',validators=[DataRequired(), Length(min=8, max=50)])
    confirm_password = PasswordField('Confirm Password',validators=[DataRequired(), EqualTo('password'), Length(min=8, max=50)])
    Address = StringField('Address', validators=[DataRequired(), Length(min=10, message="Enter Valid Address")])
    submit = SubmitField('Sign Up')
    Telephone = StringField('Telephone', validators=[DataRequired(), Regexp('(^[+0-9]{1,3})*([0-9]{10,11}$)', message="Enter Valid Phone Number")])

class LoginForm(FlaskForm):
    email = StringField('Email', validators=[DataRequired(), Email()])
    password = PasswordField('Password', validators=[DataRequired()])
    submit = SubmitField('Login')

class AccupdateForm(FlaskForm):
    Address = StringField('Address', validators=[DataRequired(), Length(min=10, message="Enter Valid Address")])
    submit = SubmitField('Update')
    Telephone = StringField('Telephone', validators=[DataRequired(), Regexp('(^[+0-9]{1,3})*([0-9]{10,11}$)', message="Enter Valid Phone Number")])

class MenuForm(FlaskForm):
    cateogry = SelectField(
        'Cateogry',
        choices=[('rcd', 'ROTISSERIE CHICKEN DINNERS'), ('pz', 'PIZZAS'), ('sd', 'SANDWICHES')]
    )
    ItemName = StringField('ItemName', validators=[DataRequired()])
    Description = StringField('Description', validators=[DataRequired()])
    Price = StringField('Price', validators=[DataRequired(), Regexp('(^[0-9]*$)', message="Enter Price")])
    Time = StringField('Time', validators=[DataRequired(), Regexp('(^[0-9]*$)', message="Enter time")])
    submit = SubmitField('Add')
