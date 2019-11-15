create database DsemD;
use DsemD;
create table equipamentos(
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