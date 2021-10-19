from marshmallow import EXCLUDE, fields, Schema, validate, INCLUDE

from mm import mm
from models.users import UsersModel

from models.stock_purchases import StockPurchasesModel


class Users(mm.SQLAlchemyAutoSchema):
    class Meta:
        model = UsersModel
        dump_only = ('uuid',)
        load_only = ('salt', 'hash')
        include_fk = True
        unknown = EXCLUDE
        load_instance = True


class StockPurchases(mm.SQLAlchemyAutoSchema):
    class Meta:
        model = StockPurchasesModel
        include_fk = True
        load_instance = True

class StockPurchasesData(Schema):
    user_uuid = fields.Str(required=True)
    stock_purchase_id = fields.Str(required=True)
    stock_name = fields.Str(required=True)
    equity_type = fields.Str(required=True)
    symbol = fields.Str(required=True)
    price_bought = fields.Str(required=True)
    industry = fields.Str(required=True)
    sector = fields.Str(required=True)
    total_shares = fields.Str(required=True)
    value_at_time_of_purchase = fields.Str(required=True)
    currency = fields.Str(required=True)
    date_bought = fields.Str(required=True)
    is_sold = fields.Str(required=True)

    class Meta:
        unknown = INCLUDE


class InputRegistrationData(Schema):
    name = fields.Str(required=True, validate=validate.Length(min=3, max=50))
    email = fields.Str(required=True, validate=validate.Length(max=50))
    password = fields.Str(required=True, validate=validate.Length(min=15, max=50))

    class Meta:
        unknown = EXCLUDE


class InputUUID(Schema):
    uuid = fields.UUID(required=True)

    class Meta:
        unknown = EXCLUDE


class InputEmail(Schema):
    email = fields.Str(required=True, validate=validate.Length(max=50))

    class Meta:
        unknown = EXCLUDE


class InputEmailName(Schema):
    email = fields.Str(validate=validate.Length(max=50))
    name = fields.Str(validate=validate.Length(min=3, max=50))

    class Meta:
        unknown = EXCLUDE


class InputEmailPassword(Schema):
    email = fields.Str(required=True, validate=validate.Length(max=50))
    password = fields.Str(required=True, validate=validate.Length(min=15, max=50))

    class Meta:
        unknown = EXCLUDE
