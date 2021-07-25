/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Slide from '../../component/slide/slide';

const json = [
  {
    id: 1,
    style: {
      backgroundImage: 'url(https://www.serasaconsumidor.com.br/ecred/og/banner.png)',
      backgroundColor: 'white',
      zIndex: 1 - 1,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '98% 98%'
    },
    content: {
      cover: {
        text: 'Web Animations 😎'
      }
    }
  },
  {
    id: 2,
    style: {
      backgroundColor: '#dcdcdc',
      zIndex: 1 - 2,
    },
    content: {
      columns:
        [
          {
            header: 'DÁ PRA ANIMAR QUALQUER ELEMENTO!',
            text: `A ideia principal por tras dessa API toda é que seja totalmente possível manipular os elementos de maneira mais específica(ou não), cadenciada e independente.
            `
          },
          {
            text: '<img src="https://media1.giphy.com/media/l2SpVTUhrAV8WP9Dy/giphy.gif" />'
          },
        ],
    }
  },
  {
    id: 3,
    style: {
      backgroundColor: '#e9e9e9',
      zIndex: 1 - 3,
    },
    content: {
      columns:
        [
          {
            header: 'O QUE DA PRA FAZER?',
            text: `<ul>
            <li>Rodar a animação; .play()</li>
            <li>Pausar; .pause()</li>
            <li>Inverter a animação; .revert()</li>
            <li>Listener ao terminar uma animação; .onfinish = ()=> ...</li>
            <li>Listener ao cancelar uma animação; .oncancel = ()=> ...</li>
            <li>Alterar o momento da animação .currentTime = 3000</li>
            <li>Consultar a velocidade da animação .playbackRate</li>
            <li>Alterar a velocidade da animação .updatePlaybackRate(3000)</li>
          </ul>
          <p><b>A ideia é muito semelhante aos famosos LottieFiles (mas aqui quem anima é você)</b></p>`
          },
          {
            text: '<img src="https://static.wikia.nocookie.net/45b63111-ae30-411e-b318-dadfab7bbc79" />'
          },
        ],
    }
  },
  {
    id: 4,
    style: {
      backgroundColor: '#262626',
      color: 'white',
      zIndex: 1 - 4,
    },
    content: {
      columns:
        [
          {
            header: 'QUANDO USAR?',
            text: `<ul>
            <li>Após uma request, como resposta visual</li>
            <li>Após completar um fluxo estenuante, como recompensa visual</li>
            <li>Quando quiser dar ao usuário uma experiência mais e rica e responsiva</li>
            <li>É semelhante a inserir uma classe na tag, porém tem-se mais opções de execução</li>
            <li>Precisar manipular os parâmetros de execução</li>
          </ul>
          <h1>QUANDO NÃO USAR?</h1>
          <ul>
            <li>Quando precisar de uma animação simples</li>
            <li>Quando não precisar encadear outras animações em paralelo ou em série</li>
          </ul>
          `
          },
          {
            text: `<img src="https://media0.giphy.com/media/SCt3Miv6ugvSg/200.gif" />
          `
          },
        ],
    }
  },
  {
    id: 5,
    style: {
      backgroundColor: '#262626',
      color: 'white',
      zIndex: 1 - 5,
    },
    content: {
      columns:
        [
          {
            text: `<img src="https://media1.tenor.com/images/9e5b3dce0022e950bde3c859475d43e5/tenor.gif?itemid=18164907" width="100%" /><p>Cliquem no ícone abaixo e acelerem o marea da Serasa, mas cuidado pra não explodir.</p>`
          },
        ],
    }
  }
];


function Presentation({ setShowPresentation }: any) {

  const [btnAnimB, setBtnAnimB] = useState<Animation>();
  const [btnAnimF, setBtnAnimF] = useState<Animation>();

  const [direction, setDirection] = useState<'up' | 'down'>('down');

  const [slideFocus, setSlideFocus] = useState(0);

  useEffect(() => {
    const temp = document.querySelector(`#slide-${slideFocus + (direction === 'down' ? 0 : 1)}`)?.animate([
      { top: '0vh' },
      { top: '100vh' },
    ], {
      duration: 1000,
      iterations: 1,
      fill: 'both'
    });

    temp?.pause();

    if (direction === 'up') {
      temp?.reverse();
      return;
    }

    temp?.play();

  }, [slideFocus]);

  useEffect(() => {
    const blink = [
      { backgroundColor: 'black' },
      { backgroundColor: '#2b2b2b' },
      { backgroundColor: 'black' },
    ];
    const duration = {
      duration: 200,
      iterations: 1
    }

    const bAnim = document.querySelector(`#backward`)?.animate(blink, duration);
    bAnim?.pause();
    setBtnAnimB(bAnim);

    const fAnim = document.querySelector(`#forward`)?.animate(blink, duration);
    fAnim?.pause();
    setBtnAnimF(fAnim);

  }, []);

  const changePage = (value: 'forward' | 'backward') => {
    const behaviour = {
      'forward': { state: btnAnimF, action: (num: number) => num + 1 },
      'backward': { state: btnAnimB, action: (num: number) => num - 1 },
    }
    behaviour[value].state?.play();
    if (behaviour[value].action(slideFocus) > slideFocus) {
      setDirection('up');
      setSlideFocus(slideFocus - 1);
    } else {
      setDirection('down');
      setSlideFocus(slideFocus + 1);
    }

  };

  return (
    <div className="App">
      <div className="true-center bottom-controls">
        <div id="forward" className={(slideFocus === 0 ? 'block' : '') + ' true-center'} onClick={() => changePage('forward')}>{'<'}</div>
        <div id="backward" className={(slideFocus === json.length - 1 ? 'block' : '') + ' true-center'} onClick={() => changePage('backward')}>{'>'}</div>
        <div className="true-center">
          <span onClick={() => { setShowPresentation(false) }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M23.5 7c.276 0 .5.224.5.5v.511c0 .793-.926.989-1.616.989l-1.086-2h2.202zm-1.441 3.506c.639 1.186.946 2.252.946 3.666 0 1.37-.397 2.533-1.005 3.981v1.847c0 .552-.448 1-1 1h-1.5c-.552 0-1-.448-1-1v-1h-13v1c0 .552-.448 1-1 1h-1.5c-.552 0-1-.448-1-1v-1.847c-.608-1.448-1.005-2.611-1.005-3.981 0-1.414.307-2.48.946-3.666.829-1.537 1.851-3.453 2.93-5.252.828-1.382 1.262-1.707 2.278-1.889 1.532-.275 2.918-.365 4.851-.365s3.319.09 4.851.365c1.016.182 1.45.507 2.278 1.889 1.079 1.799 2.101 3.715 2.93 5.252zm-16.059 2.994c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5zm10 1c0-.276-.224-.5-.5-.5h-7c-.276 0-.5.224-.5.5s.224.5.5.5h7c.276 0 .5-.224.5-.5zm2.941-5.527s-.74-1.826-1.631-3.142c-.202-.298-.515-.502-.869-.566-1.511-.272-2.835-.359-4.441-.359s-2.93.087-4.441.359c-.354.063-.667.267-.869.566-.891 1.315-1.631 3.142-1.631 3.142 1.64.313 4.309.497 6.941.497s5.301-.184 6.941-.497zm2.059 4.527c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5zm-18.298-6.5h-2.202c-.276 0-.5.224-.5.5v.511c0 .793.926.989 1.616.989l1.086-2z" /></svg></span>
        </div>
      </div>
      {json.map((j) => (<Slide id={j.id} key={j.id} style={j.style} content={j.content} />))}
    </div>
  );
}

export default Presentation;
