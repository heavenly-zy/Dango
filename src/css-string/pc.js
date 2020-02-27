const string = `
/*CSS reset*/
.preview-wrapper * {box-sizing: border-box;}
.preview-wrapper *:before, *:after {box-sizing: border-box;}
.preview-wrapper * {margin: 0; padding: 0;}
ul, ol { list-style: none; }
a {color: inherit; text-decoration: none;}
img {max-width: 100%; max-height: 100%;}

/*背景*/
.preview-wrapper {
    background: #fee7d7;
    color: #ffa264;
    font-weight: 700
}

.container {
    margin: 70px auto;
    width: 425px;
    position: relative;
}

/*地板*/
.container:before {
    content: '';
    position: absolute;
    width: 600px;
    height: 400px;
    background: #ffc99b;
    border-radius: 100%;
    bottom: -170px;
    margin-left: -80px;
    transform: rotateX(70deg);
}

/*感叹号*/
.container .exclamationmark {
    position: absolute;
    font-size: 70px;
    top: -50px;
    right: -40px;
}

/*zzz...*/
.container .sleep {
    position: absolute;
    font-size: 40px;
    top: -50px;
    left: -60px;
}

.dango {
    width: 254px;
    height: 154px;
    border-radius: 250px 250px 100px 100px;
    margin-top: -20px;
    position: relative;
}

/*紫色的团子*/
.dango.purple {
    border: 7px solid #bd9ad2;
    background: #d0b7ee;
    animation: wiggle 5s infinite;
    transform-origin: center bottom;
    z-index: 5;
    margin-left: 110px;
}

/*绿色的团子*/
.dango.green {
    border: 7px solid #7bc590;
    background: #b9eed0;
    animation: wiggle 4.5s infinite;
    transform-origin: center bottom;
    z-index: 4;
    margin-left: 50px;
}

/*蓝色的团子*/
.dango.blue {
    border: 7px solid #7fbbdf;
    background: #cef1f3;
    animation: wiggle 3.5s infinite;
    transform-origin: center bottom;
    z-index: 3;
    margin-left: 13px;
}

/*蓝色的团子会眨眼*/
.dango.blue .blink {
    animation: blink 5s infinite;
    transform-origin: center bottom;
}

.dango.blue .blink:before {
    animation: blinkBefore 5s infinite;
    transform-origin: center bottom;
}

/*粉色的团子*/
.dango.pink {
    border: 7px solid #ffa5b6;
    background: #ffd2dc;
    animation: wiggle 4s infinite;
    transform-origin: center bottom;
    z-index: 2;
    margin-left: 10px;
}

.dango.pink .blink {
    animation: blink 3.2s infinite;
    transform-origin: center bottom;
}

/*粉色的团子会眨眼*/
.dango.pink .blink:before {
    animation: blinkBefore 3.2s infinite;
    transform-origin: center bottom;
}

/*黄色的团子*/
.dango.yellow {
    border: 7px solid #ffb351;
    background: #fff1b0;
    animation: wiggle 8s infinite;
    transform-origin: center bottom;
    z-index: 1;
}

/*黄色的团子会眨眼*/
.dango.yellow .blink {
    animation: blink 4s infinite;
    transform-origin: center bottom;
}

.dango.yellow .blink:before {
    animation: blinkBefore 4s infinite;
    transform-origin: center bottom;
}

.dango .eyes {
    position: absolute;
    top: 20px;
    left: 100px;
    width: 5px;
    height: 50px;
    background: #4e4e4e;
    display: block;
    border-radius: 10px;
}

.dango .eyes:before {
    border-radius: 10px;
    content: '';
    left: 40px;
    width: 5px;
    height: 50px;
    position: absolute;
    background: #4e4e4e;
}

.dango .eyes.squint {
    transform: rotate(-35deg);
    height: 25px;
}

.dango .eyes.squint:before {
    top: 16px;
    left: -9px;
    height: 25px;
    transform: rotate(60deg);
}

.dango .eyes.squint.second {
    left: 130px;
    top: 35px;
    transform: rotate(160deg);
}

/*绿色的团子在睡觉*/
.dango .sleepeyes {
    width: 50px;
    height: 5px;
    position: absolute;
    background: #4e4e4e;
    border-radius: 10px;
    top: 40px;
    left: 60px;
}

.dango .sleepeyes:before {
    content: '';
    width: 50px;
    height: 5px;
    position: absolute;
    background: #4e4e4e;
    border-radius: 10px;
    left: 85px;
}

/*团子脸上的红晕*/
.dango .blush {
    height: 35px;
    width: 35px;
    position: absolute;
    top: 60px;
    left: 50px;
    background: #ff9cb0;
    border-radius: 100%;
}

.dango .blush:before {
    content: '';
    height: 35px;
    width: 35px;
    position: absolute;
    left: 105px;
    background: #ff9cb0;
    border-radius: 100%;
}

/*动画*/
@keyframes blink {

    0%,
    20%,
    100% {
        height: 50px;
        width: 5px;
        top: 20px;
        left: 100px;
    }

    10% {
        height: 5px;
        top: 50px;
        width: 20px;
        left: 93px;
    }
}

@keyframes blinkBefore {

    0%,
    20%,
    100% {
        height: 50px;
        width: 5px;
    }

    10% {
        height: 5px;
        width: 20px;
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

`

export default string;