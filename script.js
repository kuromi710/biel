const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const gif = document.querySelector('.gif');
const yesBtn = document.querySelector('.Yes');
const noBtn = document.querySelector('.No');
const mp3 = document.querySelector('.mp3');
const mp4 = document.querySelector('.mp4');

yesBtn.addEventListener('click', () => {
    question.innerHTML = "Thankyou for this opportunity and I promise not to waste this chance."
    gif.src =
     "https://i.pinimg.com/originals/90/df/66/90df6664fb0bf88a11fec12e34caf53d.gif"
     
    mp3.play(mp3.document)
    mp4.pause(mp4.document)
    noBtn.style.opacity = "1"
    yesBtn.style.opacity = "1"
});
noBtn.addEventListener('click', () => {
    question.innerHTML = "Are you Sure?"
    gif.src = "https://media.tenor.com/mQgsdMciwSQAAAAj/kuromi-crying.gif://media3.giphy.com/media/k8etDFKWMUpTi7yATD/giphy.gif?cid=6c09b952f2rfyasa28pa6n9gc5vha3khl0v595rqf9o78rh5&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"
    mp4.play(mp4.document)
    mp3.pause(mp3.document)
    yesBtn.ariaSetSize =+1
        
    

    yesBtn.style.opacity = "1"
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.Height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    
    
});

