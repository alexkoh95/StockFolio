from typing import List

from sqlalchemy.dialects.postgresql import UUID, TIMESTAMP

from models.db import db

class StockPurchasesModel(db.Model):
    __tablename__ = 'stock_purchases'

    user_uuid = db.Column(UUID(as_uuid=True), db.ForeignKey('users.uuid'), nullable=False)
    stock_purchase_id = id = db.Column(db.INT, server_default=db.FetchedValue(), primary_key=True)
    stock_name = db.Column(db.VARCHAR(100), nullable=False)
    equity_type = db.Column(db.VARCHAR(50), nullable=False)
    symbol = db.Column(db.VARCHAR(10), nullable=False)
    price_bought = db.Column(db.Float, nullable=False)
    industry = db.Column(db.VARCHAR(500), nullable=False)
    sector = db.Column(db.VARCHAR(500), nullable=False)
    total_shares = db.Column(db.Float, nullable=False)
    value_at_time_of_purchase = db.Column(db.Float, nullable=False)
    currency = db.Column(db.DATE, nullable=False)
    date_bought = db.Column(db.VARCHAR(20), nullable=False)
    is_sold = db.Column(db.Boolean, nullable=False)

    #  @classmethod
    #  def find_by_id(cls, _id: int) -> "AuthModel":
        #  return AuthModel.query.filter_by(id=_id).first()

    #  @classmethod
    #  def find_by_user_uuid(cls, user_uuid: str) -> List["AuthModel"]:
        #  return AuthModel.query.filter_by(user_uuid=user_uuid).all()

    #  @classmethod
    #  def find_by_jti(cls, jti: str) -> "AuthModel":
        #  return AuthModel.query.filter_by(jti=jti).first()

    #  @classmethod
   #   def find_by_parent_access_token_id(cls, _id: int) -> "AuthModel":
        #  return AuthModel.query.filter_by(parent_access_token_id=_id).first()

    #  def delete(self) -> None:
        #  db.session.delete(self)
        #  db.session.commit()

    #  def save(self) -> None:
        #  db.session.add(self)
        #  db.session.commit()


# def prune_database():
#     now = datetime.now()
#     expired = LoggedInModel.query.filter(LoggedInModel.expires < now).all()
#     for token in expired:
#         db.session.delete(token)
#     db.session.commit()
