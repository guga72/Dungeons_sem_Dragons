create table usuario(
    email varchar(255) primary key,
    senha varchar(255)
);

create table classe(
    id_classe int primary key,
    nome varchar(255),
    armas_equipaveis varchar(255)
);

create table raca(
    id_raca int primary key,
    nome varchar(255)
);

create table personagem(
    id_personagem int primary KEY,
    nome varchar(255),
    gold int,
    nivel int,
    ataque int,
    defesa int,
    magia int,
    defesam int,
    id_raca int,
    id_classe int,
    id_usuario varchar(255),
    FOREIGN KEY(id_raca) references raca (id_raca),
    FOREIGN KEY(id_usuario) references usuario (email),
    FOREIGN KEY(id_classe) references classe (id_classe)
);