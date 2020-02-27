const string = `
  /*CSS reset*/
  .preview-wrapper * {box-sizing: border-box;}
  .preview-wrapper *:before, *:after {box-sizing: border-box;}
  .preview-wrapper * {margin: 0; padding: 0;}
  ul, ol { list-style: none; }
  a {color: inherit; text-decoration: none;}
  img {max-width: 100%; max-height: 100%;}
  
  .preview-wrapper {
    background: #fee7d7;
    color: #ffa264;
    font-weight: 700;
  }
  
  .container {
    margin: 1.07692rem auto;
    width: 6.53846rem;
    position: relative;
  }
  
  .container:before {
    content: '';
    position: absolute;
    border-radius: 100%;
    bottom: -2.61538rem;
    margin-left: -1.38462rem;
    width: 9.23077rem;
    height: 6.15385rem;
    background: #ffc99b;
    transform: rotateX(70deg);
  }
  
  .container .exclamationmark {
    font-size: 1.07692rem;
    position: absolute;
    top: -0.76923rem;
    right: -0.61538rem;
  }
  
  .container .sleep {
    font-size: 0.61538rem;
    position: absolute;
    top: -0.76923rem;
    left: -0.92308rem;
  }
  
  .dango {
    width: 3.90769rem;
    height: 2.36923rem;
    border-radius: 3.84615rem 3.84615rem 1.53846rem 1.53846rem;
    position: relative;
    margin-top: -0.30769rem;
  }
  
  .dango .eyes {
    position: absolute;
    top: 0.30769rem;
    left: 1.53846rem;
    width: 0.07692rem;
    height: 0.76923rem;
    background: #4e4e4e;
    display: block;
    border-radius: 0.15385rem;
  }
  
  .dango .eyes:before {
    border-radius: 0.15385rem;
    content: '';
    left: 0.61538rem;
    width: 0.07692rem;
    height: 0.76923rem;
    position: absolute;
    background: #4e4e4e;
  }
  
  .dango .eyes.squint {
    transform: rotate(-35deg);
    height: 0.38462rem;
  }
  
  .dango .eyes.squint:before {
    top: 0.24615rem;
    left: -0.13846rem;
    height: 0.38462rem;
    transform: rotate(60deg);
  }
  
  .dango .eyes.squint.second {
    left: 2rem;
    top: 0.53846rem;
    transform: rotate(160deg);
  }
  
  .dango .sleepeyes {
    width: 0.76923rem;
    height: 0.07692rem;
    position: absolute;
    background: #4e4e4e;
    border-radius: 0.15385rem;
    top: 0.61538rem;
    left: 0.92308rem;
  }
  
  .dango .sleepeyes:before {
    content: '';
    width: 0.76923rem;
    height: 0.07692rem;
    position: absolute;
    background: #4e4e4e;
    border-radius: 0.15385rem;
    left: 1.30769rem;
  }
  
  .dango .blush {
    height: 0.53846rem;
    width: 0.53846rem;
    position: absolute;
    top: 0.92308rem;
    left: 0.76923rem;
    background: #ff9cb0;
    border-radius: 100%;
  }
  
  .dango .blush:before {
    content: '';
    height: 0.53846rem;
    width: 0.53846rem;
    position: absolute;
    left: 1.61538rem;
    background: #ff9cb0;
    border-radius: 100%;
  }
  
  .dango.minX1 {
    transform: scale(0.5);
  }
  
  .dango.minX2 {
    transform: scale(0.25);
  }
  
  @keyframes blink {
  
    0%,
    20%,
    100% {
      height: 0.76923rem;
      width: 0.07692rem;
      top: 0.30769rem;
      left: 1.53846rem;
    }
  
    10% {
      height: 0.07692rem;
      top: 0.76923rem;
      width: 0.30769rem;
      left: 1.43077rem;
    }
  }
  
  @keyframes blinkBefore {
  
    0%,
    20%,
    100% {
      height: 0.76923rem;
      width: 0.07692rem;
    }
  
    10% {
      height: 0.07692rem;
      width: 0.30769rem;
    }
  }
  
  @keyframes wiggle {
  
    0%,
    100% {
      transform: rotate(0deg);
    }
  
    20% {
      transform: rotate(5deg);
    }
  
    60% {
      transform: rotate(-4deg);
    }
  }
  
  .dango.purple {
    border: 0.10769rem solid #bd9ad2;
    background: #d0b7ee;
    animation: wiggle 5s infinite;
    transform-origin: center bottom;
    z-index: 5;
    margin-left: 1.69231rem;
  }
  
  .dango.green {
    border: 0.10769rem solid #7bc590;
    background: #b9eed0;
    animation: wiggle 4.5s infinite;
    transform-origin: center bottom;
    z-index: 4;
    margin-left: 0.76923rem;
  }
  
  .dango.blue {
    border: 0.10769rem solid #7fbbdf;
    background: #cef1f3;
    animation: wiggle 3.5s infinite;
    transform-origin: center bottom;
    z-index: 3;
    margin-left: 0.2rem;
  }
  
  .dango.blue .blink {
    animation: blink 5s infinite;
    transform-origin: center bottom;
  }
  
  .dango.blue .blink:before {
    animation: blinkBefore 5s infinite;
    transform-origin: center bottom;
  }
  
  .dango.pink {
    border: 0.10769rem solid #ffa5b6;
    background: #ffd2dc;
    animation: wiggle 4s infinite;
    transform-origin: center bottom;
    z-index: 2;
    margin-left: 0.15385rem;
  }
  
  .dango.pink .blink {
    animation: blink 3.2s infinite;
    transform-origin: center bottom;
  }
  
  .dango.pink .blink:before {
    animation: blinkBefore 3.2s infinite;
    transform-origin: center bottom;
  }
  
  .dango.yellow {
    border: 0.10769rem solid #ffb351;
    background: #fff1b0;
    animation: wiggle 8s infinite;
    transform-origin: center bottom;
    z-index: 1;
  }
  
  .dango.yellow .blink {
    animation: blink 4s infinite;
    transform-origin: center bottom;
  }
  
  .dango.yellow .blink:before {
    animation: blinkBefore 4s infinite;
    transform-origin: center bottom;
  }
`

export default string;