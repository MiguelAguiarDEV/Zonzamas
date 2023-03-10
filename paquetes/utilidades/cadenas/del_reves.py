class reves:
    def del_reves(texto):
        i = len(texto)-1
        texto_reves = ""
        while i >= 0:
            texto_reves += texto[i]
            i -= 1
        return texto_reves

