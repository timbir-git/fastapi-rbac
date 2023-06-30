import os

from pydantic import BaseSettings, IPvAnyAddress, EmailStr, PositiveInt, StrictInt
from typing import Optional, Tuple


class Settings(BaseSettings):
    mysql_address: IPvAnyAddress
    mysql_port: PositiveInt = 3306
    mysql_db_name: str
    mysql_user: str
    mysql_password: str
    certificate_check_time: Tuple[int, int, int]
    certificate_alert_time: Tuple[int, int, int]
    certificate_days_remaining: list[int, ...]
    mail_sender_address: EmailStr
    mail_from: str
    mail_smtp_server: str
    mail_server_port: int
    mail_sender_username: EmailStr
    mail_sender_password: str
    mail_receiver: Tuple[EmailStr, ...]

    class Config:
        env_file = os.path.join(os.path.dirname(__file__), "../.env")
        env_file_encoding = "utf-8"
        case_sensitive = True


config = Settings()
