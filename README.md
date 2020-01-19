![OmniStackLogo](https://i.ibb.co/RbMMfqz/omnistack-wallpaper-1920x1080.png)<br>
OMNISTACK - SEMANA 10<br>
<hr>
<p>Projeto DevRadar desenvolvido durante Semana 10  Omnistack da Rocketseat</p>

## Tecnologias usadas
- Node.js
- React
- React Native
- Expo

## Projeto
O DevRadar é um projeto que visa conectar desenvolvedores com clientes utilizando a geolocalização de forma a indicar quais profissionais estão disponíveis em um raio de 10km
do ponto inicial do usuário. Permite que os profissionais possam se cadastrar e em tempo
real aparecerem no aplicativo conforme a pesquisa por tecnologias desejadas.

## Instalação e Inicialização do projeto

**BACKEND:** Configure o MongoDB e atualize a string de conexão com seu <code>User:Senha</code> no arquivo <code>index.js</code>.<br>

Para instalar as dependências e executar o Servidor (modo desenvolvimento), clone o projeto em seu computador e em seguida execute:<br>

```sh
$ cd backend
$ yarn install
$ yarn dev
```

Note que foi criado um [scritp de automatização para iniciar o backend](https://github.com/thiagohrcosta/OmniStack/commit/362ce50432431770c8c3d018b423fd912b9207ce) facilitando o processo. Este projeto **BACKEND** foi desenvolvido na aula 02, cujo início dos códigos se deu [aqui](https://github.com/thiagohrcosta/OmniStack/commit/42204d58b65629b4596049aab984bfcb3fcbf427).<br>

Inicie igualmente o **FRONT END**, do React utilizando: <br>

```sh
$ cd frontend
$ yarn install
$ yarn start
```

Uma vez iniciado o processo com <code> yarn start </code>, automaticamente será aberta a página localhost:3000, com o projeto React onde é possível cadastrar novos desenvolvedores. 
Este projeto **FRONTEND** foi desenvolvido na aula 03, cujo início dos códigos se deu [aqui](https://github.com/thiagohrcosta/OmniStack/commit/8bc578d4b302246c7ecf1d20176753f0ae4a0e25).<br>


Por fim, inicie o **MOBILE DO REACT NATIVE**, inicialmente altere o arquivo <code>src/services/api.js</code> para o endereço do seu servidor, posteriormente execute os comandos:

```sh
$ yarn global add install expo-cli
$ cd mobile
$ yarn install
$ yarn start
```

## Licença 

[MIT](https://github.com/thiagohrcosta/OmniStack/blob/master/LICENSE.md) © 2020 

