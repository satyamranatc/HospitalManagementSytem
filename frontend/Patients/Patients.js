// Documentat Loaded:
let UserDiv = document.getElementById("User") 
window.addEventListener("DOMContentLoaded", function(){
  let User = JSON.parse(localStorage.getItem("user"));
  if(User)
  {
    UserDiv.innerHTML = User.fullName
    GetPatients()
  }
  else
  {
    window.location.href = "../Auth/Auth.html"
  }
})

function logout()
{
    localStorage.removeItem("user")
    window.location.href = "../Auth/Auth.html"
}


let patientGrid  = document.getElementById("patientGrid")


async function AddPatient()
{
    // ASK PROMPt FOR String name;
    // ASK PROMPt FOR int age;
    // ASK PROMPt FOR String diagnosis;
    // ASK PROMPt FOR String doctor;
    // ASK PROMPt FOR String admitDate;
    // ASK PROMPt FOR String contact;
    // ASK PROMPt FOR String status;
    // ASK PROMPt FOR String image;

    let name = prompt("Enter Patient Name");
    let age = prompt("Enter Patient Age");
    let diagnosis = prompt("Enter Patient Diagnosis");
    let doctor = prompt("Enter Patient Doctor");
    let admitDate = prompt("Enter Patient Admit Date");
    let contact = prompt("Enter Patient Contact");
    let status = prompt("Enter Patient Status");
    let image = prompt("Enter Patient Image URL");

    let Patient = {
        name:name,
        age:age,
        diagnosis:diagnosis,
        doctor:doctor,
        admitDate:admitDate,
        contact:contact,
        status:status,
        image:image
    }

    await axios.post("http://localhost:8080/api/patients/add",Patient)
    GetPatients()

}



async function GetPatients() 
{
    let Res = await axios.get("http://localhost:8080/api/patients/list")
    let Patients = Res.data;
    ShowPatients(Patients)
}






async function Update(Pt)
{

   let ConfirmDelte = confirm("Are you sure you want to Update this patient?")
   if(ConfirmDelte)
   {

        let name = prompt("Enter Patient Name");
    let age = prompt("Enter Patient Age");
    let diagnosis = prompt("Enter Patient Diagnosis");
    let doctor = prompt("Enter Patient Doctor");
    let admitDate = prompt("Enter Patient Admit Date");
    let contact = prompt("Enter Patient Contact");
    let status = prompt("Enter Patient Status");
    let image = prompt("Enter Patient Image URL");

    let Patient = {
        name:name,
        age:age,
        diagnosis:diagnosis,
        doctor:doctor,
        admitDate:admitDate,
        contact:contact,
        status:status,
        image:image
    }



    await axios.put(`http://localhost:8080/api/patients/update/${Pt.id}`,Patient)
    GetPatients()
   }
   
}

async function Delete(Pt)
{

   let ConfirmDelte = confirm("Are you sure you want to delete this patient?")
   if(ConfirmDelte)
   {
    await axios.delete(`http://localhost:8080/api/patients/delete/${Pt.id}`)
    GetPatients()
   }
   
}


function ShowPatients(Patients) 
{
    patientGrid.innerHTML = "";
    for(let i of Patients)
    {
        let Card = document.createElement("div")
        Card.classList.add("patient-card")
        Card.innerHTML = `     

                <div class="patient-header">
                    <div class="patient-img">
                        <img src="${i.image}" alt="Patient photo">
                    </div>
                    <div class="patient-status ${i.status}">${i.status}</div>
                </div>
                <div class="patient-details">
                    <h3>${i.name}</h3>
                    <div class="detail-row">
                        <span class="label">Age:</span>
                        <span class="value">${i.age}</span>
                    </div>
                    <div class="detail-row">
                        <span class="label">Diagnosis:</span>
                        <span class="value">${i.diagnosis}</span>
                    </div>
                    <div class="detail-row">
                        <span class="label">Doctor:</span>
                        <span class="value">${i.doctor}</span>
                    </div>
                    <div class="detail-row">
                        <span class="label">Admit Date:</span>
                        <span class="value">${i.admitDate}</span>
                    </div>
                    <div class="detail-row">
                        <span class="label">Contact:</span>
                        <span class="value">${i.contact}</span>
                    </div>
                </div>
                <div class="patient-actions">
                    <button class="action-btn view"><i class="fas fa-eye"></i></button>
                    <button class="action-btn edit"><i class="fas fa-edit"></i></button>
                    <button class="action-btn delete"><i class="fas fa-trash-alt"></i></button>
                </div>
        `
        let ViewBtn = Card.querySelectorAll(".patient-actions button")[0];
        let UpdBtns = Card.querySelectorAll(".patient-actions button")[1];
        let DelBtn = Card.querySelectorAll(".patient-actions button")[2];

        ViewBtn.addEventListener("click", () => {
            // Fun(i)
        })

        UpdBtns.addEventListener("click", () => {
            Update(i)
        })

        DelBtn.addEventListener("click", () => {
            Delete(i)
        })

        
        patientGrid.append(Card)

    }

}



