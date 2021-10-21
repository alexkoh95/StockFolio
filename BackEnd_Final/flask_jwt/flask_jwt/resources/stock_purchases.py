import secrets

import argon2
from flask import request
from flask_jwt_extended import jwt_required, get_jwt, get_jwt_identity
from flask_restful import Resource

import auth
import schemas

from models.stock_purchases import StockPurchasesModel


# def find_duplicate_email(email):
#     users_model = UsersModel.find_by_email(email)
#
#     if users_model:
#         return True
#     else:
#         return False
#
#
# def gen_random_string(n):
#     s = secrets.token_urlsafe(64)
#     return s[:n]
#
#
# def hash_password(password):
#     salt = gen_random_string(50)
#
#     password_salt = password + salt
#
#     ph = argon2.PasswordHasher()
#     _hash = ph.hash(password_salt)
#
#     return salt, _hash


class StockPurchases(Resource):

    @classmethod
    @jwt_required()
    def get(cls):
        stockPurchases_list = StockPurchasesModel.find_all_byUUID()

        return schemas.Users(many=True).dump(stockPurchases_list), 200

    # create Stock Purchase
    @classmethod
    @jwt_required()
    def put(cls):
        input_json = schemas.InputStockPurchasesData().load(request.get_json())
        # input uuid line get_user_uuid
        user_uuid = get_jwt_identity()
        stock_name = input_json['stock_name']
        equity_type = input_json['equity_type']
        symbol = input_json['symbol']
        price_bought = input_json['price_bought']
        sector = input_json['sector']
        industry = input_json['industry']
        total_shares = input_json['total_shares']
        value_at_time_of_purchase = input_json['value_at_time_of_purchase']
        currency = input_json['currency']
        is_sold = input_json['is_sold']
        date_bought = input_json['date_bought']

        try:

            stock_purchases_model = StockPurchasesModel(
                user_uuid=user_uuid,
                stock_name=stock_name,
                equity_type=equity_type,
                symbol=symbol,
                price_bought=price_bought,
                sector=sector,
                industry=industry,
                total_shares=total_shares,
                value_at_time_of_purchase=value_at_time_of_purchase,
                currency=currency,
                is_sold=is_sold,
                date_bought=date_bought,
            )

            stock_purchases_model.save()

        except Exception as error:
            print(f'Stock Purchase error: {error}')
            return {'Error': 'Stock Not Purchased'}, 400

        return {'msg': 'Stock Purchased.'}, 200

    # select user's stocks with uuid
    @classmethod
    @jwt_required()
    def post(cls):
        input_json = schemas.InputUUID().load(request.get_json())
        stock_info = StockPurchasesModel.find_by_user_uuid(input_json['uuid'])

        return schemas.StockPurchases(many=True).dump(stock_info), 200
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
