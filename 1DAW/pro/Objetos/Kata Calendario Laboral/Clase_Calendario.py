from abc import *




class Calendario():
    @abstractmethod
    def set_tipo_dia(dia,tipo):
        pass
    @abstractmethod
    def get_tipo_dia(dia):
        pass
    
    @abstractmethod
    def hoy():
        pass

    