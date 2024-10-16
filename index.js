// UPDATE: I was able to get this working again... Enjoy!

var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})


let datecountdown = new Date("March 22, 2025 08:00:00").getTime()
            
            let x = setInterval(function(){

                let mtn = new Date().getTime();
                let tpsrestant = datecountdown - mtn;
                let jours = Math.floor(tpsrestant / (1000*60*60*24));
                let heures = Math.floor(tpsrestant % (1000*60*60*24) / (1000*60*60));
                let minutes = Math.floor(tpsrestant % (1000*60*60) / (1000*60));
                let secondes = Math.floor(tpsrestant % (1000*60) / (1000));

                document.querySelector(".countdown").innerHTML =`
                    <div class="boite">
                        <span class="valeur">${jours}</span>
                        <span class="unite">jours</span>
                    </div>
                    <div class="boite">
                        <span class="valeur">${heures}</span>
                        <span class="unite">heures</span>
                    </div>                    
                    <div class="boite">
                        <span class="valeur">${minutes}</span>
                        <span class="unite">minutes</span>
                    </div>                    
                    <div class="boite">
                        <span class="valeur">${secondes}</span>
                        <span class="unite">secondes</span>
                    </div`
                ;
                if (tpsrestant < 1){
                    clearInterval(x);
                    jours, heures, minutes, secondes= 0
                }
            }, 1000);
