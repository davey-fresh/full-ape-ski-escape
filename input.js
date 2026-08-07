// FULL APE SKI ESCAPE v0.15 — input
function updateTouchFromEvent(e){if(!e.touches||!e.touches.length)return;e.preventDefault();const rect=canvas.getBoundingClientRect();const touchX=e.touches[0].clientX-rect.left;touchLeft=touchX<(canvas.width/2);touchRight=touchX>=(canvas.width/2)}
canvas.addEventListener('touchstart',updateTouchFromEvent,{passive:false});
canvas.addEventListener('touchmove',updateTouchFromEvent,{passive:false});
function clearTouch(){touchLeft=false;touchRight=false}
canvas.addEventListener('touchend',clearTouch);canvas.addEventListener('touchcancel',clearTouch);
setTimeout(()=>{gameState='intro';resetGame();gameLoop()},100);
