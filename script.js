function show(id){['intro','letter','reply'].forEach(x=>document.getElementById(x).style.display=x===id?'block':'none')}
function openLetter(){show('letter')}
const waNumber = "6285778840599";
function sendWhatsApp(message){
  const url = "https://wa.me/" + waNumber + "?text=" + encodeURIComponent(message);
  window.location.href = url;
}
function answerYes(){
  document.getElementById('replyIcon').textContent='🥹💗';
  document.getElementById('replyTitle').textContent='Yay, senang dengarnya!';
  document.getElementById('replyText').textContent='Makasih sudah jawab! WhatsApp akan terbuka dengan pesan yang bisa kamu kirim. 💙';
  show('reply');
  setTimeout(()=>sendWhatsApp("Aku mau kenalan lebih dekat! 💗"),500);
}
function answerMaybe(){
  document.getElementById('replyIcon').textContent='🌼';
  document.getElementById('replyTitle').textContent='That’s okay!';
  document.getElementById('replyText').textContent='Makasih sudah jawab! WhatsApp akan terbuka dengan pesan yang bisa kamu kirim. 💙';
  show('reply');
  setTimeout(()=>sendWhatsApp("Boleh aja, kita kenalan dulu ya :) 🌷"),500);
}
function answerFriend(){
  document.getElementById('replyIcon').textContent='🤝💙';
  document.getElementById('replyTitle').textContent='Teman juga nggak apa-apa!';
  document.getElementById('replyText').textContent='Makasih sudah jujur. Semoga kita tetap bisa berteman dan saling mengenal dengan nyaman. 💙';
  show('reply');
  setTimeout(()=>sendWhatsApp("Aku lebih nyaman kalau kita jadi teman dulu ya 🤝💙"),500);
}
function heart(){const e=document.createElement('span');e.className='float-heart';e.textContent=Math.random()>.5?'♡':'💙';e.style.left=Math.random()*100+'vw';e.style.fontSize=(14+Math.random()*13)+'px';e.style.animationDuration=(6+Math.random()*5)+'s';document.body.appendChild(e);setTimeout(()=>e.remove(),11000)}
setInterval(heart,850);
