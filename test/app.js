function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

  const form = document.getElementById('contactForm')
   
   form.addEventListener('submit',function(e){

      e.preventDefault()

      const name = document.getElementById('name').value
      const sdt = document.getElementById('sdt').value
      const vitri = document.getElementById('vitri').value
      const ex = document.getElementById('ex').value
      const fileInput = document.getElementById('file').value
      const email = document.getElementById('email').value

      fetch("https://freemind-test.netlify.app/.netlify/functions/test",{
        method: 'POST',
        headers:{
          "Content-Type":"application/json; charset=UTF-8"
        },
        body: JSON.stringify({
          name:name,
          sdt:sdt,
          vitri:vitri,
          ex:ex,
          nameFile:fileInput,
          email:email
           
        })
        

      })
      .then(function(response){
        return response.json();
      })
      .then(function(data){
        console.log(data);

        const render = document.getElementById('render')

        
      })
     
   })