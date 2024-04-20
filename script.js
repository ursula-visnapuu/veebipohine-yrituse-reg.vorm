const form = document.querySelector('#form')
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const tel = document.querySelector('#tel');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');

form.addEventListener('submit',(e)=>{
    
    if(!validateInputs()){
        e.preventDefault();
    }
})

function validateInputs(){
    const usernameVal = username.value.trim()
    const emailVal = email.value.trim();
    const telVal = tel.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    let success = true

    if(usernameVal===''){
        success=false;
        setError(username,'Username is required')
    }
    else{
        setSuccess(username)
    }

    if(emailVal===''){
        success = false;
        setError(email,'Meiliaadress on nõutud')
    }
    else if(!validateEmail(emailVal)){
        success = false;
        setError(email,'Palun sisesta korrektne meiliaadress')
    }
    else{
        setSuccess(email)
    }

       if(passwordVal === ''){
        success= false;
        setError(password,'Salasõna on nõutud')
    }
    else if(passwordVal.length<8){
        success = false;
        setError(password,'Salasõna peab olema vähemalt 8 tähemärki pikk')
    }
    else{
        setSuccess(password)
    }

    if(cpasswordVal === ''){
        success = false;
        setError(cpassword,'Salasõna kinnitamine on nõutud')
    }
    else if(cpasswordVal!==passwordVal){
        success = false;
        setError(cpassword,'Sisestatud salasõna ei ühti')
    }
    else{
        setSuccess(cpassword)
    }

    return success;

}
//element - password, msg- pwd is reqd
function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  <script>
    document.getElementById("form").addEventListener("submit", function(event) {
        // Vältige vormi tavapärast saatmist
        event.preventDefault();

        // Suunake kasutaja järgmisele lehele
        window.location.href = "aitah-leht.html"; 
    });
</script>