/*Inserindo o primeiro id da tabela*/
insert ignore into tb_usuario (id_usuario, nome, email, telefone, assunto, mensagem) values
(1,'Carmen', 'carmen.alice@gmail.com', '11232345454','Interesse no sistema','Olá, sou diretora de uma escola em Sorocaba e gostaria de aplicar o Face Mouse nos nossos notebooks.');

insert ignore into tb_admin (id_admin, email, senha) values
(1, 'admin.evellyn@gmail.com', 'adminFaceMouse'),
(2, 'admin.lais@gmail.com', 'adminFaceMouse'),
(3, 'admin.nathalia@gmail.com', 'adminFaceMouse'),
(4, 'admin.nicole@gmail.com', 'adminFaceMouse');