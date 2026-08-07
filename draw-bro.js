// FULL APE SKI ESCAPE v0.15 — Bros (Titus-like V-taper)
function drawBro(bx,by,phase){
  const bounce=Math.sin(phase)*6;
  const leanB=Math.sin(phase*0.7)*0.15;
  ctx.save();
  ctx.translate(bx, by+bounce);
  ctx.rotate(leanB*0.08);
  ell(0, 52, 24, 6, 'rgba(0,0,0,0.22)');
  ell(-10, 34, 9, 14, '#121212');
  ell(-10, 34, 6, 11, '#222');
  ell(10, 34, 9, 14, '#121212');
  ell(10, 34, 6, 11, '#222');
  ell(0, 8, 22, 14, '#0e0e0e');
  ell(0, 8, 18, 11, '#1a1a1a');
  ell(0, 18, 14, 10, '#121212');
  ell(0, 18, 11, 8, '#1e1e1e');
  ell(-8, 4, 8, 7, '#222');
  ell(8, 4, 8, 7, '#222');
  px(-5, 12, 4, 3, '#1a1a1a');
  px(1, 12, 4, 3, '#1a1a1a');
  px(-5, 16, 4, 3, '#1a1a1a');
  px(1, 16, 4, 3, '#1a1a1a');
  ell(0, -18, 14, 14, '#0e0e0e');
  ell(0, -18, 11, 11, '#1c1c1c');
  ell(-12, -18, 4, 5, '#0c0c0c');
  ell(12, -18, 4, 5, '#0c0c0c');
  px(-6, -12, 12, 4, '#f5f0e0');
  px(-5, -11, 2, 3, '#fff');
  px(3, -11, 2, 3, '#fff');
  px(-10, -22, 20, 6, '#050505');
  px(-8, -21, 7, 4, '#0e2040');
  px(1, -21, 7, 4, '#0e2040');
  const armY=Math.sin(phase*2.3)*10;
  ell(-20, 4+armY, 7, 12, '#121212');
  ell(20, 4-armY, 7, 12, '#121212');
  ctx.restore();
}
