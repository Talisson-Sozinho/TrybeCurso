# Bloco 19.3 - exercícios do dia

## exercício 01: 
  [x] - Crie um arquivo HTML chamado missao_trybe.html que tenha a seguinte estrutura:
      - Tag <title> com o seguinte texto "Trybe";
      - Tag <H1> com o seguinte texto "Missão da Trybe";
      - Tag <p> com o seguinte texto "Gerar oportunidade para pessoas";
      - Salve o arquivo em qualquer lugar da sua máquina com a extensão html

  [x] - Crie um contêiner para manter um servidor httpd:2.4 Apache e vincule sua porta interna com a porta 4545 da sua máquina local.

  [x] - Após criar o contêiner, acesse a página HTML que está rodando no servidor em seu browser.

  [x] - Acesse o arquivo missao_trybe.html e acrescente a tag <p> com o seguinte texto: "Nosso negócio é GENTE! #VQV";

  [x] - Obtenha o id do contêiner httpd:2.4;

  [x] - Obtenha o Mounts através da propriedade Source, que deve mostrar o volume desse contêiner no Docker Host;

  [x] - Agora pare o contêiner httpd:2.4;

  [x] - Exclua o seu contêiner;

  [x] - Verifique se a pasta onde você salvou o arquivo html permanece no mesmo lugar;

  [x] - Obtenha o IMAGE ID do servidor;

  [x] - Depois de obter o IMAGE ID, exclua a imagem.

## exercício 02: 
  [ ] - Crie o arquivo Compose para subir um ghost blog. Essa plataforma é similar ao Wordpress e é utilizada para criar sites de conteúdo. Você pode ler no site oficial como criar conteúdos nele e utilizá-lo. Para esse exercício, utilizaremos apenas sua página de exemplo:
   - Utilize a versão "3" no arquivo;
   - Crie um service para subir a plataforma. Para isso, utilize a imagem ghost:1-alpine;
   - Publique a porta 2368, fazendo bind também para a 2368;
   - Suba a aplicação utilizando o docker-compose e então acesse a porta publicada para validar se deu tudo certo.

## exercício 03: Por padrão, o ghost utiliza um sqlite interno para salvar as informações, porém vamos alterar esse comportamento para exercitar nossos conhecimentos:

  [ ] - Crie um novo serviço para o nosso banco de dados. Nesse caso, podemos utilizar um mysql, portanto use a imagem mysql:5.7;

  [ ] - Precisamos definir uma senha root para o nosso bd. Para isso, utilize a variável MYSQL_ROOT_PASSWORD e lembre-se que é possível utilizar a sintaxe ${} para passar uma env do host para a env do container;

  [ ] - Agora precisamos configurar nosso service com o ghost para utilizar o MySQL. Para isso, defina a variável database__client para mysql;

  [ ] - Defina o nome ghost para o nome do database utilizando a variável database__connection__database;

  [ ] - Então, indique a conexão para o nosso MySQL na env database__connection__host;

  [ ] - Para definir a pessoa usuária (root) e senha (a mesma que definimos no nosso MySQL), utilize respectivamente as envs database__connection__user e database__connection__password.

  [ ] - Utilize a opção depends_on para criar relações de dependências entre os serviços.

  [ ] - Suba o ambiente com o novo arquivo usando o docker-compose e então acesse a porta.

## exercício 04: Agora vamos praticar os conceitos de volumes e networks.

  [ ] - Configure o nosso serviço mysql para utilizar um volume conforme vimos no conteúdo. Utilize o caminho target /var/lib/mysql.

  [ ] - Em vez de utilizar a rede padrão criada pelo Compose, defina uma rede chamada my-network para a comunicação dos dois serviços.

  [ ] - Suba o ambiente com o novo arquivo usando o docker-compose e então acesse-o.

## exercício 05: Agora vamos criar um novo arquivo Compose para rodarmos uma aplicação React, conforme vimos alguns exemplos do conteúdo:
  [ ] - Inicie um novo projeto ReactJS utilizando o create-react-app;
  [ ] - Crie o Dockerfile, conforme vimos na aula passada;
  [ ] - Crie um novo arquivo Compose utilizando a versão 3;
  [ ] - Defina um serviço no arquivo para nosso app. Para isso, utilize a opção build para apontar para o Dockerfile;
  [ ] - Publique a porta exposta no Dockerfile fazendo bind para a porta 8080 do localhost;

## exercício 06:00
  [ ] - Para simularmos o processo de desenvolvimento, faça a alteração em alguma parte do código do app react. Então, execute o comando para subir o serviço novamente, "rebuildando" a imagem para aplicar as alterações.
