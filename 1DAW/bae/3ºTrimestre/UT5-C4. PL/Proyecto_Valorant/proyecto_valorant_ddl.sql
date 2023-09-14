drop database if exists Proyecto_Valorant;
create database Proyecto_Valorant;
use Proyecto_Valorant;



create table Integrantes (
    int_nick varchar(50),
    int_nom varchar(50),
    int_nacionalidad varchar(20) not null,
    int_edad int,
    int_fecha_nacimiento date,
    int_rol varchar(10) not null check (int_rol in ('Duelista', 'Iniciador', 'Centinela','Controlador','Analista','Entrenador')),
    constraint int_nick_pk primary key (nick)
);

create table Equipos (
    eq_nom varchar(50),
    eq_region varchar(50),
    constraint eq_nom_pk primary key (nombre)
);

create table Torneos(
    tor_nom varchar(50),
    tor_fec_ini date,
    tor_fec_fin date,
    tor_formato varchar(10) not null check (tor_formato in ('BO5','BO3','BO1')),
    constraint tor_nom_pk primary key (tor_nom)
);

create table Mapas(
    map_cod varchar(10),
    map_eq1 varchar(50),
    map_eq2 varchar(50),
    map_win_rounds_eq1 
    map_win_rounds_eq2
);

create table Historial(
    his_tor_nom varchar(50),
    his_par_cod 
    his_numero_ronda varchar(50),
    his_ganador_ronda varchar(50),
    his_ganador_ronda_bando varchar(10) not null check (his_ganador_ronda_bando in ('Atacante','Defensor')),
    his_perdedor_ronda varchar(50),
    his_perdedor_ronda_bando varchar(10) not null check (his_perdedor_ronda_bando in ('Atacante','Defensor')),
    constraint     
),


