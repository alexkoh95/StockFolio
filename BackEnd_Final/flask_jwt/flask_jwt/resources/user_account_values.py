import secrets

import argon2
from flask import request
from flask_jwt_extended import jwt_required, get_jwt, get_jwt_identity
from flask_restful import Resource

import auth
import schemas

from models.user_account_values import UserAccountValueModel


class UserAccountValue(Resource):

    # create UserAccountValue
    @classmethod
    @jwt_required()
    def put(cls):
        input_json = schemas.InputStockPurchasesData().load(request.get_json())
        # input uuid line get_user_uuid
        user_uuid = get_jwt_identity()
        account_cash = 250000

        try:

            user_account_value_model = UserAccountValueModel(
                user_uuid=user_uuid,
                account_cash=account_cash,
            )

            user_account_value_model.save()

        except Exception as error:
            print(f'User Account Value Creation Error: {error}')
            return {'Error': 'User Account Value not created (You have no money!)'}, 400

        return {'msg': 'User Account Value Created - You have $250,000!.'}, 200
    #
    # # select user with email
    # @classmethod
    # @jwt_required()
    # def post(cls):
    #     input_json = schemas.InputEmail().load(request.get_json())
    #     users_model = UsersModel.find_by_email(input_json['email'])
    #
    #     return schemas.Users().dump(users_model), 200
    #
    # # update user
    # @classmethod
    # @jwt_required()
    # def patch(cls):
    #     claims = get_jwt()
    #
    #     if claims['role'] == 'ADMIN':
    #         input_json = schemas.InputUUID().load(request.get_json())
    #         uuid = input_json['uuid']
    #     else:
    #         uuid = get_jwt_identity()
    #
    #     users_model = UsersModel.find_by_uuid(uuid)
    #
    #     if users_model:
    #         input_json = schemas.InputEmailName().load(request.get_json())
    #
    #         if input_json.get('email') and len(input_json['email']) > 0 and input_json['email'] != users_model.email:
    #             if find_duplicate_email(input_json['email']):
    #                 return {'err': 'duplicate email'}
    #
    #             users_model.email = input_json['email']
    #
    #         if input_json.get('name') and len(input_json['name']) > 0 and input_json['name'] != users_model.name:
    #             users_model.name = input_json['name']
    #
    #         users_model.save()
    #
    #         return {'info': 'user updated'}, 200
    #
    #     else:
    #         return {'err': 'user not found'}, 400
    #
    # @classmethod
    # @jwt_required()
    # def delete(cls):
    #     claims = get_jwt()
    #
    #     if claims['role'] == 'ADMIN':
    #         input_json = schemas.InputUUID().load(request.get_json())
    #         user_model = UsersModel.find_by_uuid(input_json['uuid'])
    #
    #         if user_model:
    #             user_model.delete()
    #
    #             return {'info': 'user deleted'}, 200
    #
    #         else:
    #             return {'err': 'user not found'}, 400
    #
    #     else:
    #         return {'err': 'not authorised'}, 401
