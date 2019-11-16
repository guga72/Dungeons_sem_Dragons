create database DsemD;
use DsemD;

create table usuario(
       email varchar(100) primary key,
       senha varchar(100)
);

create table atributo(
       id_atributo int,
       ataque int,
       defesa int,
       defesa_magica int,
       dano_magico int
);

create table personagem(
       id_personagem int primary key,
       usuario varchar(100),
       nome_personagem varchar(100),
       atributo int,
       constraint fk_usuario foreign key (usuario) references usuario(email),
       constraint fk_atributo1 foreign key (atributo) references atributo(id_atributo)
);

create table inventario(
       personagem_fk int,
       equipamento_fk int,
       constraint fk_personagem foreign key (personagem_fk) references personagem (id_personagem),
       constraint fk_equipamento foreign key (equipamento) references equipamento(nome_equi))
);

create table equipamento(
       tipo_equipamento varchar(25), -- machado, espada, escudo, cajado, adaga
       atributo int, -- atributos de atq, defesa, ou qualquer outro que ter� que ser ligado com outra tabela
       nome_equi varchar(25) primary key, -- nome do equipamento
       descricao varchar(255), -- descri��o previa da arma
       constraint fk_atributo foreign key (atributo) references atributo_arma(atri_id)
);

create table atributo_arma(
       atri_id   int primary key,
       ataque    int, -- quantidade de ataque que vai dar a arma
       defesa    int, -- queantidade de defesa
       magia     int, -- quantidade de dano magico que a arma da
       estado    int -- a vida util da arma, quantidade de vida que ela tem(opcional)
       
);

CREATE TABLE personagem(
		id_personagem int primary key,
       vida int,
       nome VARCHAR(100),
       sexo VARCHAR(10),
       raca VARCHAR(50), -- isso vai ter uma tabela so para isso
       leel INTEGER,
       gold float,
       potions float,
       atributos int,
       ataques int,-- tabela
       itens int, -- tabela
       quest int -- tabela
);