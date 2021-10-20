from marshmallow import EXCLUDE, fields, Schema, validate, INCLUDE

from mm import mm
from models.users import UsersModel
from models.stock_purchases import StockPurchasesModel
from models.user_account_values import UserAccountValueModel


class Users(mm.SQLAlchemyAutoSchema):
    class Meta:  # this tells Marshmallow that everything within the meta is part of the database
        model = UsersModel
        dump_only = ('uuid',)
        load_only = ('salt', 'hash')
        include_fk = True
        unknown = EXCLUDE
        load_instance = True


class StockPurchases(mm.SQLAlchemyAutoSchema):
    class Meta:
        model = StockPurchasesModel
        dump_only = ('uuid', 'id')
        include_fk = True
        load_instance = True


class UserAccountValue(mm.SQLAlchemyAutoSchema):
    class Meta:
        model = UserAccountValueModel
        include_fk = True
        load_instance = True


class InputStockPurchasesData(Schema):
    stock_name = fields.Str(required=True, validate=validate.Length(
        max=100))  # try to put a maximum or minimum - just use what the database is using (e.g. 20)
    equity_type = fields.Str(required=True, validate=validate.Length(max=50))
    symbol = fields.Str(required=True, validate=validate.Length(max=10))
    price_bought = fields.Float(required=True, validate=validate.Range(min=1))
    industry = fields.Str(required=True, validate=validate.Length(max=500))
    sector = fields.Str(required=True, validate=validate.Length(max=500))
    total_shares = fields.Float(required=True)  # change this to float or integer, depending on the
    value_at_time_of_purchase = fields.Float(required=True,  validate=validate.Range(min=1))
    currency = fields.Str(required=True, validate=validate.Length(max=10))
    date_bought = fields.Str(required=True)
    is_sold = fields.Bool(required=True)

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
