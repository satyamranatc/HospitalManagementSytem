let patientGrid  = document.getElementById("patientGrid")

async function GetPatients() 
{

    let Res = await axios.get("http://localhost:8080/api/patients/list")
    let Patients = Res.data;
    ShowPatients(Patients)
}



function Fun(Pt)
{
   alert("hello")
   console.log(Pt);
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
            Fun(i)
        })

        UpdBtns.addEventListener("click", () => {
            Fun(i)
        })

        DelBtn.addEventListener("click", () => {
            Fun(i)
        })

        
        patientGrid.append(Card)

    }

}



GetPatients()