/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function NeedForSpeed() {

  const [animation, setAnimation] = useState<Animation>();
  const [lapsFinished, setLapsFinished] = useState<number>(0);

  useEffect(() => {
    const sim = document.querySelector('#car')?.animate([
      { left: 'calc(0vw - 300px)' },
      { left: 'calc(100vw + 300px)' },
    ], {
      duration: 5000,
      fill: "none"
    });

    if (!sim) return

    sim.pause();
    sim.onfinish = () => {
      sim.play();

      setLapsFinished((lastValue) => {
        return lastValue + (sim.playbackRate < 0 ? -1 : 1);
      })
    };
    setAnimation(sim);
  }, [])


  const fullThrottle = () => {
    animation?.play();
  }

  const pressBreak = () => {
    animation?.pause();
  }


  const changeGear = (speed: number) => {
    animation?.updatePlaybackRate(speed);
  }

  return (
    <div className="App">
      <div className="">
        <img id="car" src="marea.png" />
        <img id="road" src="https://img.favpng.com/13/7/23/road-asphalt-png-favpng-1NyacQEjRn6aYfyXGhpJzRHNK.jpg" width="100vw" />
        <div className="commands">
          <h5>Voltas completas {lapsFinished}</h5>
          <div>
            <button id="break" onClick={() => pressBreak()}>FREIO</button>
            <button id="throttle" onClick={() => fullThrottle()}>ACELERADOR</button>
          </div>
          <div className="gearbox">
            <button onClick={() => changeGear(1)}>1</button>
            <button onClick={() => changeGear(2)}>2</button>
            <button onClick={() => changeGear(3)}>3</button>
            <button onClick={() => changeGear(4)}>4</button>
            <button onClick={() => changeGear(5)}>5</button>
            <button onClick={() => changeGear(-1)}>R</button>
          </div>
          <div>
            <Link to="./">Voltar para a apresentação</Link>{' - '}
            <a href="https://drafts.csswg.org/web-animations-1/">W3C DRAFT</a>{' - '}
            <a href="https://developer.mozilla.org/pt-BR/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API">Tutorial Mozilla!</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NeedForSpeed;
