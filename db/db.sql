CREATE DATABASE ccai_api_v1;

USE ccai_api_v1;

create table usuario(
correo varchar(60) primary key unique not null,
password varchar(45) not null,
tipo varchar(15) not null,
foto varchar(255)
);


create table perfilEstudiante(
    correo varchar(60) unique not null,
    tipo varchar(15) not null,
    nombres varchar(45) not null,
    apellido_p varchar(45) not null,
    apellido_m varchar(45) not null,
    division varchar(45) not null,
    matricula varchar(45) not null,
    telefono varchar(45) not null,

    foreign key (correo) references estudiante(correo)
);

alter table actividad_participante modify column correo varchar(60);
alter table actividad_participante modify column observaciones text;