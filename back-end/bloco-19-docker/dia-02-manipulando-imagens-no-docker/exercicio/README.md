# Exercício bloco 19.2

  - Vamos usar uma imagem disponível no DockerHub conhecida como "cowsay" (uma vaca falante no terminal 🐮)!
A ideia é deixarmos a mensagem para o cowsay parametrizável. Dessa forma, conseguiremos executar o seguinte comando:

  Para isso:
    - [x] Crie um Dockerfile utilizando a imagem chuanwen/cowsay.
    - [x] Defina um ENTRYPOINT para a execução do comando.
      * Observe que o executável cowsay está no diretório /usr/games/
      * Lembre-se que com ele, diferente do CMD, o comando não poderá ser sobrescrito com o docker run, porém conseguiremos passar parâmetros ao binário e exploraremos esse recurso para poder passar a mensagem.
    - [x] Utilize o CMD para definir uma mensagem padrão.
    - [x] Gere uma build e execute um container baseado em sua imagem sem passar nenhum comando.
    - [x] Execute um novo container passando sua mensagem para testar. Além da mensagem você pode utilizar a opção -l para listar outros personagens disponíveis e então executar algo como docker container run cowsay -f dragon-and-cow "VQV TRYBE", para exibir um dragão junto com a vaquinha.