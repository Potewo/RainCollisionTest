import p5 from "p5";

const sketch = (p: p5) => {
  let nRain = 300;
  let windowHeight = 400;
  let windowWidth = 400;
  let rain_x = new Array(nRain);
  let rain_y = new Array(nRain);
  let ball_x = 0;
  let ball_y = windowHeight;
  let ball_r = 30;
  let ball_speed = 0.5;
  let count = 0;
  p.setup = () => {
    p.createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < nRain; i++) {
      rain_x[i] = Math.random() * windowWidth;
      rain_y[i] = Math.random() * windowHeight;
    }
  };

  p.draw = () => {
    p.background(220);

    //draw rain
    for (let i = 0; i < nRain; i++) {
      rain_y[i] += 1;
      rain_y[i] %= windowHeight;
      p.rect(rain_x[i], rain_y[i], 1, 10);
    }

    //draw ball
    ball_x += ball_speed;
    p.circle(ball_x, ball_y, ball_r);

    //judge
    for (let i = 0; i < nRain; i++) {
      if (ball_r ** 2 > (ball_x - rain_x[i])**2 + (ball_y - rain_y[i])**2) {
        count += 1;
      }
    }
    console.log(count);
  };
};

new p5(sketch);
