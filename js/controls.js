function KeyboardHandler(e){
  let velocity = 50 * (MAX_VELOCITY / player.radius);
  switch (e.key) {
    case "ArrowRight":
      player.vx = velocity ;
      player.vy = 0;
      break;
    case "ArrowLeft":
      player.vx = -velocity;
      player.vy = 0;
      break;
    case "ArrowDown":
      player.vx = 0;
      player.vy = velocity;
      break;
    case "ArrowUp":
      player.vx = 0;
      player.vy = -velocity;
      break;
    default:

  }
}
window.addEventListener('keydown', KeyboardHandler);
