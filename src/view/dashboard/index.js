import React, { useEffect } from "react";
import Weirdgood from '../../assets/images/weird-good.png';
import EyeLeft from '../../assets/images/eye-left.png';
import EyeRight from '../../assets/images/eye-right.png';
import Styled from 'styled-components';

const WeirdgoodStyle = Styled.div`
    background-image: url(${Weirdgood});
    background-position: center center;
    background-repeat: no-repeat;
    height: calc(100vh - 50px);
    display: flex;

    div#eyes-left-parent {
      background-image: url(${EyeLeft});
      background-size: cover;
      position: relative;
      width: 40px;
      height: 40px;
      left: calc(50vw - 55px);
      top: calc(50vh + 10px);
    }

    div#eyes-left-white {
      position: relative;
      width: 10px;
      height: 10px;
      left: 15px;
      top: 13px;
    }

    div#eye-left {
      position: absolute;
      transform: translate(-50%,-50%);
      height: 25px;
      width: 25px;
      left: 500px;
      top: 500px;
      border-radius: 50%;
      background-color: black;
    }

    div#eyes-right-parent {
      background-image: url(${EyeRight});
      background-size: cover;
      position: relative;
      width: 40px;
      height: 40px;
      left: calc(50vw - 45px);
      top: calc(50vh + 10px);
    }

    div#eyes-right-white {
      position: relative;
      width: 10px;
      height: 10px;
      left: 15px;
      top: 13px;
    }

    div#eye-right {
      position: absolute;
      transform: translate(-50%,-50%);
      height: 25px;
      width: 25px;
      left: 500px;
      top: 500px;
      border-radius: 50%;
      background-color: black;
    }
`

const Dashboard = () => {

  useEffect(() => {
    window.scrollTo(0, 0);

    let eyeleft = document.getElementById('eye-left');
    let eyeright = document.getElementById('eye-right');
    const handleMouseMove = (e) => {
      if(e.pageX >= document.getElementById('eyes-left-white').offsetWidth + document.getElementById('eyes-left-white').getBoundingClientRect().left)
        eyeleft.style.left = document.getElementById('eyes-left-white').offsetWidth + 'px';
      else if(e.pageX <= document.getElementById('eyes-left-white').getBoundingClientRect().left)
        eyeleft.style.left = '0px';
      else
        eyeleft.style.left = (e.pageX - document.getElementById('eyes-left-white').getBoundingClientRect().left) + 'px'; 

      if(e.pageY >= document.getElementById('eyes-left-white').offsetHeight + document.getElementById('eyes-left-white').getBoundingClientRect().top)
        eyeleft.style.top = document.getElementById('eyes-left-white').offsetHeight + 'px';
      else if(e.pageY <= document.getElementById('eyes-left-white').getBoundingClientRect().top)
        eyeleft.style.top = '0px';
      else
        eyeleft.style.top = (e.pageY - document.getElementById('eyes-left-white').getBoundingClientRect().top) + 'px';

      eyeright.style.left = eyeleft.style.left;
      eyeright.style.top = eyeleft.style.top;
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <WeirdgoodStyle>
      <div id="eyes-left-parent">
        <div id="eyes-left-white">
          <div id="eye-left"></div>
        </div>
      </div>
      <div id="eyes-right-parent">
        <div id="eyes-right-white">
          <div id="eye-right"></div>
        </div>
      </div>
    </WeirdgoodStyle>
  );
}

export default Dashboard;