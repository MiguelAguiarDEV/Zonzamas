drop database if exists ong;
create database ong;
use ong;

create table Asociacion (
    cif VARCHAR(20),
    denominacion VARCHAR(20),
    provincia VARCHAR(20),
    tipo VARCHAR(20),
    entidad_publica BOOLEAN,
    CONSTRAINT aso_cif_pk PRIMARY KEY (cif)
);

create table Formada (
    cif VARCHAR(20),
    dni INT,
    f_alta DATE NOT NULL, 
    cuota DECIMAL(6,2),
    aportacion DECIMAL(6,2),
    CONSTRAINT for_cif_fk FOREIGN KEY (cif) REFERENCES Asociacion(cif) ON DELETE CASCADE,
    CONSTRAINT for_dni_fk FOREIGN KEY (dni) REFERENCES Socio(dni) ON DELETE CASCADE,
    CONSTRAINT for_cif_dni_pk PRIMARY KEY (cif,dni)
);

create table Proyecto (
    cif_aso VARCHAR(20),
    n_id INT NOT NULL,
    zona VARCHAR(20),
    pais VARCHAR(20),
    objetivo VARCHAR(20),
    beneficiario VARCHAR(20),
    cif_padre VARCHAR(20),
    n_id_padre INT,
    CONSTRAINT pro_aso_fk FOREIGN KEY (cif_aso) REFERENCES Asociacion(cif) ON DELETE CASCADE, 
    CONSTRAINT pro_cif_id_pad_fk FOREIGN KEY (cif_padre , n_id_padre) REFERENCES Proyecto(cif_aso , n_id) ON DELETE CASCADE, 
    CONSTRAINT pro_aso_n_id_pk PRIMARY KEY (cif_aso , n_id)
);


create table Participante (
    dni INT,
    nombre VARCHAR(30) NOT NULL,
    tipo VARCHAR(20) NOT NULL,
    CONSTRAINT par_dni_pk PRIMARY KEY (dni),
    CONSTRAINT per_tipo_ck CHECK (tipo in ('Trabajador','Socio'))
);

create table Socio (
    dni INT,
    provinca VARCHAR(20),
    direccion VARCHAR(20),
    CONSTRAINT soc_dni_fk FOREIGN KEY (dni) REFERENCES Participante(dni) ON DELETE CASCADE,
    CONSTRAINT soc_dni_pk PRIMARY KEY (dni)
);

create table Trabajador (
    dni INT,
    f_ini DATE NOT NULL,
    tipo VARCHAR(20) NOT NULL,
    cif_aso VARCHAR(20) NOT NULL,
    CONSTRAINT tra_cif_fk FOREIGN KEY (cif_aso) REFERENCES Asociacion(cif) ON DELETE CASCADE,
    CONSTRAINT tra_dni_fk FOREIGN KEY (dni) REFERENCES Participante(dni) ON DELETE CASCADE,
    CONSTRAINT tra_tipo_ck CHECK (tipo in ('Asalariado','Voluntario')),
    CONSTRAINT tra_dni_pk PRIMARY KEY (dni)
);

create table Asalariado (
    dni INT,
    ss INT NOT NULL,
    irpf decimal(6,2),
    CONSTRAINT asa_dni_fk FOREIGN KEY (dni) REFERENCES Participante(dni),
    CONSTRAINT asa_dni_pk PRIMARY KEY (dni)  
);

create table Voluntario (
    dni INT,
    edad INT,
    profesion VARCHAR(20),
    horas INT DEFAULT 0,
    CONSTRAINT vol_dni_fk FOREIGN KEY (dni) REFERENCES Participante(dni),
    CONSTRAINT vol_dni_pk PRIMARY KEY (dni)  
);

