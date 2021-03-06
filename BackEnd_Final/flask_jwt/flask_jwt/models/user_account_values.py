from typing import List

from sqlalchemy.dialects.postgresql import UUID, TIMESTAMP

from models.db import db


class UserAccountValueModel(db.Model):
    __tablename__ = 'user_account_values'

    user_uuid = db.Column(UUID(as_uuid=True), db.ForeignKey('users.uuid'), nullable=False)
    account_cash = db.Column(db.Float, server_default=db.FetchedValue(), nullable=False)
    id = db.Column(db.INT, server_default=db.FetchedValue(), primary_key=True)
    #  @classmethod
    #  def find_by_id(cls, _id: int) -> "AuthModel":
    #  return AuthModel.query.filter_by(id=_id).first()

     # @classmethod
     # def find_by_user_uuid(cls, user_uuid: str) -> List["AuthModel"]:
     # return AuthModel.query.filter_by(user_uuid=user_uuid).all()

    #  @classmethod
    #  def find_by_jti(cls, jti: str) -> "AuthModel":
    #  return AuthModel.query.filter_by(jti=jti).first()

    #  @classmethod
    #   def find_by_parent_access_token_id(cls, _id: int) -> "AuthModel":
    #  return AuthModel.query.filter_by(parent_access_token_id=_id).first()

    #  def delete(self) -> None:
    #  db.session.delete(self)
    #  db.session.commit()

    def save(self) -> None:
        db.session.add(self)
        db.session.commit()

# def prune_database():
#     now = datetime.now()
#     expired = LoggedInModel.query.filter(LoggedInModel.expires < now).all()
#     for token in expired:
#         db.session.delete(token)
#     db.session.commit()
