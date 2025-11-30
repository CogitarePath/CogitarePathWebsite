# CogitarePathWebsite
## Resumo
O site da Cogitare Path foi produzido com o intuito de informar mais sobre a empresa, como o slogan, a missão visão e valores e os membros, além de apresentar os projetos que foram desenvolvidos pela própria. 

## Protótipo 

* Apresenta o básico sobre o jogo mais recente, como nome e sinopse.
<img width="1869" height="913" alt="image" src="https://github.com/user-attachments/assets/51edfe74-8df8-4c22-8468-d1d144f3a305" />

<br>
<br>
<br>

* Apresenta o slogan da empresa e a missão, visão e valores.
<img width="1861" height="904" alt="image" src="https://github.com/user-attachments/assets/80409eec-724e-460f-915f-4c0c62b6f43c" />

<br>
<br>
<br>

* Apresenta um pouco mais sobre o jogo em desenvolvimento, apresentando a sinopse e um pouco de como é o ambiente do jogo
<img width="1869" height="901" alt="image" src="https://github.com/user-attachments/assets/9740a8e1-8aae-4632-9e8f-b866cdc0f836" />

<br>
<br>
<br>

* Apresenta os membros da empresa
<img width="1857" height="900" alt="image" src="https://github.com/user-attachments/assets/92bde467-9d0b-4ddf-a893-1a08110e2a3d" />

<br>
<br>
<br>

* Um local onde pode ser visto nossas redes sociais, e pode entrar em contato a partir de um formulário
<img width="1835" height="931" alt="image" src="https://github.com/user-attachments/assets/9fa38040-1566-4b0a-bbcb-e800ef13d1a4" />

## Produção

A o site foi feito em apenas um arquivo HTML, a estilização foi feita com o CSS, e algumas funcionalidades foi adicionadas com JavaScript

### HTML

#### Header
* Usado para criar a barra de navegação onde contém o nome da empresa, links para navegar pela página foi configurado para acompanhar a rolagem do site  
```html
 <header class="header">
        <div id="menu-line">
            <h2 class="headerText" id="businessName">Cogitare Path</h2>
            <input type="checkbox" id="menu-button">
            <label for="menu-button" class="menu">
                <div class="linha"></div>
                <div class="linha"></div>
                <div class="linha"></div>
            </label>
        </div>
        <div class="rightSideText">
            <a class="headerText" href="#home">Home</a>
            <a class="headerText" href="#sobre">Sobre</a>
            <a class="headerText" href="#lancamentos">Lançamentos</a>
            <a class="headerText" href="#equipe">Time</a>
            <a class="headerText" href="#footer">Fale Conosco</a>
        </div>
    </header>
```

#### Home 
* Parte inicial do site tem o objetivo de cobrir toda a a altura da tela 

```html
<div class="topBackground" id="home">
        <div id="colorOverlay">
            <div class="gameInfo">
                <p id="gameName">Projeto A.G.I.R.O.</p>

                <p id="gameDesc">Luiza Koga viveu seus 22 anos de vida em um bunker, escondida de um perigo
                    desconhecido. Após se tornar a única restante ali, se vê obrigada a sair e se arriscar na
                    superfície, um mundo devastado por uma espécie de lodo preto misterioso. Explore a superfície,
                    descubra o que aconteceu com a cidade de Boa Saudade e encontre uma saída. E o mais importante, não
                    deixe que as ameaças te levem à insanidade.</p>
            </div>
        </div>
    </div>
```

| Site Computador | Site Responsivo |
| --- | --- |
| <img width="1307" height="685" alt="Captura de tela 2025-11-30 172120" src="https://github.com/user-attachments/assets/c06a508f-876a-4782-a483-a6106e6e885b" /> | <img width="423" height="913" alt="image" src="https://github.com/user-attachments/assets/64f9c59c-3290-4c45-ab24-6408c4acfff1" /> |

#### MVV
* Usado para apresentar nosso slogan e nossa missão, visão e valores
* Para a criação das caixas do mvv foi utilizados IDs para cada um e uma Classe para definir um padrão
  
```html
    <section class="MVVBackground" id="sobre">
        <img id="line" src="img/linha.png" alt="">
        <img id="line2" src="img/linhaNeon.png" alt="">

        <div id="slogan">Pensar diferente é superar o impossível</div>

        <div id="MVVSection">

            <div id="mission" class="MVVTitle">
                <p class="MVVType">Missão</p>
                <p class="MVVDescription">Proporcionar por meio da imersão, a reflexão.</p>
            </div>
            <div id="vision" class="MVVTitle">
                <p class="MVVType">Visão</p>
                <p class="MVVDescription">Ser referência na criação de jogos com pensamento crítico e filosófico.</p>
            </div>
            <div id="values" class="MVVTitle">
                <p class="MVVType">Valores</p>
                <p class="MVVDescription">Valorizar o respeito e trabalho em equipe,
                    proporcionando boas experiências para o jogador.</p>
            </div>
        </div>

    </section>
```

| Site Computador | Site Responsivo |
| --- | --- |
| <img width="1314" height="685" alt="Captura de tela 2025-11-30 172132" src="https://github.com/user-attachments/assets/2a32e09f-1654-44b7-8ed4-65bd67fe1de5" /> | <img width="417" height="909" alt="image" src="https://github.com/user-attachments/assets/98057c93-f57b-443e-be34-41e54113ea17" /> |

#### Lançamentos

* Para criar o efeito colorido do fundo foram criados esferas de varias cores e colocado uma camada de blur em cima.
* O texto foi alinhado com Justify para ficar em formato justificado.  

```html
    <section class="areaLancamentos">

        <div class="circle" id="laranja"></div>
        <div class="circle" id="azul"></div>
        <div class="circle" id="roxo"></div>
        <div id="rosa"></div>
        <div id="fundo">
            <div id="textoLancamentos">
                <p class="titulo">Lançamentos</p>
                <div class="align-center">
                    <p class="nomeLanc">Projeto  A.G.I.R.O.</p>
                    <p id="descricaoLancamentos">Luiza Koga viveu seus 22 anos de vida em um bunker, escondida de um
                        perigo
                        desconhecido. Após se tornar a única restante ali, se vê obrigada a sair e se arriscar na
                        superfície, se deparando com um mundo devastado por uma espécie de lodo preto.
                        Fazem 25 anos desde o dia em que essa substância destruiu, deprimiu e transformou o mundo em um
                        cenário de uma tragédia. Este dia, conhecido como “O dia da Queda”, foi resultado de um
                        experimento
                        científico falho, da vontade de entender algo do qual não queria ser compreendido.
                        Presa na cidade de Boa Saudade, local de origem e o centro do problema, Luiza precisa descobrir
                        a
                        verdade por trás disso tudo e fugir com vida. Enfrentando em sua jornada, criaturas originadas a
                        partir do lodo, formadas principalmente pelo medo de suas vítimas.
                        Explore a superfície, descubra o que aconteceu com a cidade de Boa Saudade e encontre uma saída.
                        E o
                        mais importante, não deixe que as ameaças te levem à insanidade.</p>
                </div>
            </div>

            <div id="secaoImagens">
                <div id="img-align">
                    <div id="img1" class="lancamentosImagens"></div>
                    <div id="imgContainer">
                        <div id="img2" class="lancamentosImagens"></div>
                        <div id="img3" class="lancamentosImagens"></div>
                    </div>
                </div>
                <div id="img4" class="lancamentosImagens"></div>
            </div>
        </div>
    </section>

```

| Site Computador | Site Responsivo |
| --- | --- |
| <img width="1312" height="688" alt="Captura de tela 2025-11-30 172145" src="https://github.com/user-attachments/assets/a343a55c-9eb1-4009-b8a1-bba85202a1f0" /> | <img width="417" height="911" alt="image" src="https://github.com/user-attachments/assets/c498c040-9143-4dd6-bfc6-32cee418ff3b" /> |






#### Equipe

* As fotos foram colocadas em uma grid feita para ficar 3 em cada linha

```html


    <section id="equipe">
        <p class="titulo">Nossa equipe</p>
        <div id="lista">
            <div class="membros">
                <img src="img/Daniel.png" alt="" class="imgMembro">
                <p class="nome">Daniel Carvalho</p>
            </div>

            <div class="membros">
                <img src="img/Christian2.jpeg" alt="" class="imgMembro">
                <p class="nome">Christian Varandas</p>
            </div>
            <div class="membros">
                <img src="img/Alex.png" alt="" class="imgMembro">
                <p class="nome">Alex C. de Oliveira</p>
            </div>
            <div class="membros">
                <img src="img/Guilherme.png" alt="" class="imgMembro">
                <p class="nome">Guilherme H.</p>
            </div>
            <div class="membros">
                <img src="img/MariaEduarda.png" alt="" class="imgMembro">
                <p class="nome">Maria Eduarda</p>
            </div>

            <div class="membros">
                <img src="img/GabrielGaudi.png" alt="" class="imgMembro">
                <p class="nome">Gabriel Gaudí</p>
            </div>
        </div>
    </section>

```

| Site Computador | Site Responsivo |
| --- | --- |
| <img width="1305" height="686" alt="Captura de tela 2025-11-30 172200" src="https://github.com/user-attachments/assets/5416e015-abd4-43cf-85b2-dba22595be28" /> | <img width="420" height="915" alt="image" src="https://github.com/user-attachments/assets/4ecae548-2406-4b38-bbb1-381dcf2b7c3f" /> |







#### footer

* Foi usado um link que direciona para o instagram da empresa.
* Foi criado um formulário onde pode ser colocado o nome, email e a mensagem que deseja ser passada para a empresa 

```html
<footer id="footer">
        <div id="faleConosco">
            <h1 id="faletext">Fale Conosco</h1>
            <hr>
            <table id="faleSpace">
                <tr>
                    <td>
                        <img src="img/local.png" alt="localização" class="iconFale">
                    </td>
                    <td>
                        <h3 class="subtitle">Cogitare Path</h3>
                        <p class="description">Rua Harmonia, 77 - São Paulo - SP</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src="img/email.png" alt="localização" class="iconFale">
                    </td>
                    <td>
                        <h3 class="subtitle">E-mail</h3>
                        <p class="description">contato.cogitarepath@gmail.com</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src="img/telefone.png" alt="localização" class="iconFale">
                    </td>
                    <td>
                        <h3 class="subtitle">Telefone</h3>
                        <p class="description">(11) 3429-7174</p>
                    </td>
                </tr>
            </table>
            <h2 id="socialText">Redes Sociais</h2>
            <a href="https://www.instagram.com/cogitarepath/"><img src="img/insta.png" alt="" class="icon"></a>
            <a href=""><img src="img/envelope.png" alt="" class="icon"></a>

        </div>
        <form id="formCont">
            <div id="align">
                <p class="textForm">Nome</p>
                <input type="text" name="nome" class="boxStyle" id="nome" placeholder="Digite seu nome">
                <p class="textForm">E-mail</p>
                <input type="email" name="email" class="boxStyle" id="email" placeholder="Digite seu E-mail">
                <p class="textForm">Mensagem</p>
                <textarea name="descrição" class="boxStyle" id="mensagem" placeholder="Digite sua Mensagem"></textarea>
                <input type="button" value="Enviar" id="buttonStyle">
            </div>
        </form>
    </footer>
```

| Site Computador | Site Responsivo |
| --- | --- |
| <img width="1317" height="689" alt="Captura de tela 2025-11-30 172212" src="https://github.com/user-attachments/assets/d3213334-cab0-48f5-956a-81118a0d8fb1" /> | <img width="417" height="914" alt="image" src="https://github.com/user-attachments/assets/4f4ce098-fe4f-4ac0-8e86-92697d79c958" /> |





