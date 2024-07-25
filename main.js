var typed= new Typed(".text",{
    strings :['Frontend Developer','Backend Developer', 'Java Full Stack Web Developer'],
    typeSpeed:50,
    backSpeed:50,
    backDelay:100,
    loop:true
});


  const scriptURL = 'https://script.google.com/macros/s/AKfycbwwDgU7etILp8HfESK81V8mlNkanbWrDk5pnsgmMYZDKfYFlO-KsBc1ZWmhW_WI4-Clvg/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message Sent Successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
