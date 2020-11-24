let direction = [
    "DB",
    "DGEAE",
    "DSP",
    "DPE",
    "SAF",
    "SPERS",
    "SCI",
    "SAI",
    "SCGA",
    "SSEB",
    "SPE",
    "SCOM",
    "PRMP",
    "CIFAG",
    "CA",
  ];

direction.forEach((item,index)=>{
 //rendu des directions sur le DOM   
    let template = `<div id='${index}' class="direction"><span>${item}</span></div>`
    $('.dashboard__content').append(template)
//redirection vers la page de chaque direction

    $(`#${index}`).click(function(){
        window.location.href = `tableau_direction.html?id=${index}`
        e.preventDefault();
    })
})
