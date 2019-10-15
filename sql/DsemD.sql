create table equipamentos(
       tipo_equipamento varchar2(25), -- machado, espada, escudo, cajado, adaga
       atributo number, -- atributos de atq, defesa, ou qualquer outro que terá que ser ligado com outra tabela
       nome_equi varchar2(25) primary key, -- nome do equipamento
       descricao description, -- descrição previa da arma
       foreign key (atributo) references atributo_arma(atri_id)
);

create table atributo_arma(
       atri_id   number,
       ataque    number, -- quantidade de ataque que vai dar a arma
       defesa    number, -- queantidade de defesa
       magia     number, -- quantidade de dano magico que a arma da
       estado    number, -- a vida util da arma, quantidade de vida que ela tem(opcional)
       
);

CREATE TABLE personagem(
       vida NUMBER(10),
       nome VARCHAR2(100),
       sexo VARCHAR2(10),
       raca VARCHAR2(50), -- isso vai ter uma tabela so para isso
       leel INTEGER,
       gold NUMBER(20,2),
       potions NUMBER(2),
       atributos NUMBER(3),
       ataques NUMBER(3), -- tabela
       itens NUMBER(10), -- tabela
       quest NUMBER(10) -- tabela
);

CREATE TABLE raca(


);
