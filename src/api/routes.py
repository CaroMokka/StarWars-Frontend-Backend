"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required


api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route('/signup', methods=['POST'])
def add_user():
    request_body = request.get_json()
    username = request_body["username"]
    name = request_body["name"]
    email = request_body["email"] 
    password = request_body["password"]

    user = User.query.filter_by(email=email).first()
    if user:
        return jsonify({"msg":"Usuario ya existe"}), 444
    else:
        new_user = User(username=username,name=name,email=email,password=password,is_active=True)
        db.session.add(new_user)
        db.session.commit()
        print(new_user)
        return jsonify({"msg":"Usuario registrado exitosamente"}), 200

    
@api.route("/token", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if email != "invitad@" or password != "invitad@":
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token) 



#@jwt_required()
@api.route("/private", methods=["GET"])
@jwt_required()
def get_private():
    

    email = get_jwt_identity()
    dictionary = {"message": "Bienvenid@ " + email + ". Que la fuerza te acompañe!"}
   
    return jsonify(dictionary)



