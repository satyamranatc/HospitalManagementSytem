let SignUpForm = document.getElementById("SignUpForm");
let LoginForm = document.getElementById("LoginForm");


window.addEventListener("DOMContentLoaded", function(){
  let User = JSON.parse(localStorage.getItem("user"));
  if(User)
  {
      window.location.href = "../Home/Home.html"
   
  }
})



SignUpForm.addEventListener("submit",async (e)=>{
    e.preventDefault();

    let UserData = {
        fullName:e.target[0].value,
        username:e.target[1].value,
        password:e.target[2].value
    }

    let Res = await axios.post("http://localhost:8080/api/admin/signup",UserData)
    console.log(Res.data);

    localStorage.setItem("user",JSON.stringify(Res.data))
    window.location.href = "../Patients/Patients.html"


});

LoginForm.addEventListener("submit",async (e)=>{
    e.preventDefault();

    let UserData = {
        username:e.target[0].value,
        password:e.target[1].value
    }

    let Res = await axios.post("http://localhost:8080/api/admin/login",UserData)
    
    console.log(Res.data);
    localStorage.setItem("user",JSON.stringify(Res.data))
    window.location.href = "../Patients/Patients.html"


});