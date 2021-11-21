import { createGlobalStyle } from 'styled-components';

//`` se chama template literals, feature do javascript
export const GlobalStyle = createGlobalStyle` 
    :root {
        --background: #f8f2f5;
        --red: #E52E4D;
        --blue: #5429CC;
        --green: #33CC95;

        --blue-light: #6933FF;

        --text-title: #363F5F;
        --text-body: #969CB3;

        --background: #f8f2f5;
        --shape: #FFFFFF;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    //tamanho de fonte da aplicação
    html {//valor inicial é 16px, valor "bom" para desktop
        //em dispositivos menores faz sentido que a fonte fica menor
        @media (max-width: 1080px) { //se tiver em uma tela menor que 1080px
            font-size: 93.75%; //15px
        }

        @media(max-width: 720px) {
            font-size: 87.5%; //14px
            // usar pixel não é boa prática, pois fixa o valor direto na tela do usuário (ignorando qualquer configuração de acessibilidade)
        }
        // REM - 1rem - 16px (ou o tamanho da fonte da página, de acordo com a tela). 
        //usando isso, todas as medidas se adaptam de acordo com o tamanho do dispositivo
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;//no chrome e outros browser baseados em chrome permite com  que as fontes fiquem mais nítidas        
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif; // se o servidor da google estiver off, pega sans-serif
        font-weight: 400; // está no layout do figma
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600; //está no layout do figma
    }

    button {
        cursor: pointer;
    }

    [disabled] {//tudo que estiver desabilitado na aplicação
        opacity: 0.6;
        cursor: not-allowed;
    }

    //como os modais são muito parecidos entre toda a aplicação, foi criado uma estilização global
    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);

        //pega a tela inteira
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position: relative; //explicação
        border-radius: 0.25rem;
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);
        }
    }
`;