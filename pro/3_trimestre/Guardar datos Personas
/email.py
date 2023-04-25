import re

class Email():
  
    @staticmethod
    def validar(email):       
        return re.match("[a-z]+@[a-z]+\..{2,3}" , email)