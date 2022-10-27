# Projeto talker Manager

Projeto desenvolvido em NodeJS com Express.

## Passo a passo para dar o start no projeto:

Faça o clone do repositorio com:

`git clone git@github.com:marianamohr/node-express.git`

Acesse o diretório com

`cd node-express`

### Rodando com docker: 


Abra a um terminal e rode o seguinte comando:

`docker-compose up -d`

### Acesse o container 

`docker exec -it talker_manager bash`
### Execute:
`npm install`

`npm start` 

## Testanto a Aplicação

Na Raiz do projeto existe um arquivo chamado thunder-collection_TalkerManager.json, ele é uma collection para testar os endpoints da Aplicação. Basta instalar a extensão no Thunder Client no VSCode e fazer o import dessa collecion.