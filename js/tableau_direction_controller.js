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
let services = [
    ["SSB", "SFR", "SSSA", "SSPI", "SRB"],
    ["DG1", "DG2"],
  ];
  
  let divisions = [
    [
      ["SCME", "SREX","qsf","fdsf"],
      ["SC", "SX"],
      ["SE", "SR"],
      ["SCE", "SRE"],
      ["CE", "RE"],
    ],
  ];

 
  let baseUrl = window.location.href;
  let directionId = baseUrl.substring(baseUrl.lastIndexOf("=") + 1);
  console.log(drId);
  $(".title").text(`DIRECTION ${direction[directionId]}`);

  services[directionId].forEach((service,index)=>{
    let serviceId = index
  })