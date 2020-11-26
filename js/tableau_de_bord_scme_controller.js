let themes = [{
        id: 1,
        name: "Theme #01",
        activities: [{
                id: 1,
                title: "Activité #01"
            },
            {
                id: 2,
                title: "Activité #02"
            },
        ],
    },
    {
        id: 2,
        name: "Theme #02",
        activities: [{
                id: 1,
                title: "Activité #01"
            },
            {
                id: 2,
                title: "Activité #02"
            },
            {
                id: 3,
                title: "Activité #03"
            },
            {
                id: 4,
                title: "Activité #04"
            },
            {
                id: 5,
                title: "Activité #05"
            },
        ],
    },
];

//selecteur de date de fin d'activité
$('#date__de__fin').fu_popover({
    content: '<input type="date" name="date de fin" style="color:#000" >',
    placement: 'right',
    width: '170px',
    dismissable: true,
    delay: {
        "show": 100,
        "hide": 100
    }
})


//Rendu des themes sur le DOM
themes.forEach((theme, index) => {
    let template = `<div class="theme__container theme-${theme.id}">
    <div class="theme__title">
        <h4>${theme.name} </h4>
        <span class="theme__icon"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></span>
    </div>
    <div class="theme__content-${theme.id} theme__content ">
        <div class="activité__container-${theme.id} activité__container">
            <span class="theme__action ajout__activity-${theme.id}">
                <span>
                    <span class="action__icon">
                        <i class="fa fa-plus" aria-hidden="true"></i>
                    </span>
                    <input class="activity__add-${theme.id}" type="text" placeholder="Ajouter">
                </span>
            </span>
        </div>
    </div>
</div>`

    $('.division__content').append(template)

    themes[index].activities.forEach((activity) => {
        let act__template = `
   <span class="activity activity-${activity.id}" >
         <h4>${activity.title}</h4>
         <span>
             <i class="fa fa-bars" aria-hidden="true"></i>
         </span>
    </span>`
        $(`.ajout__activity-${theme.id}`).before(act__template)

        $(`.activity-${activity.id}`).click(() => {
            $('.modal').modal({
                fadeDuration: 300,
                showClose: false,
            })

            $('.activity__title').text(activity.title)
        })
    })
    console.log($('.title__theme').text(`Dans ${theme.name}`))

})

$('#ajout__tache').click(() => {
    let template = `<div class="attribution__list "style="height:auto">
    <div class="attrib__responsable " style="margin-top:1rem">
        <span class=" responsable " >
            <span class="icon__left">
                <i class="fa fa-pencil" aria-hidden="true"></i>
            </span>
            <span class="name">Persone 01</span>
        </span>
        <span class="icon__right "><i class="fa fa-times"
                aria-hidden="true"></i></span>
    </div>
    <div class="attrib__checklist " style="margin-top:1rem">
        <span class="list ">
            <span class=" icon__left ">
                <i class="fa fa-pencil" aria-hidden="true"></i>
            </span>
            <span class="name">Liste 01</span>
        </span>
        <span class="icon__right "><i class="fa fa-times"
                aria-hidden="true"></i></span>
    </div>
    <div class="attrib__state w-full">
        <div class="state__check" style="margin-top:1rem">
            <span class=" relative  ">
                <span class="absolute  "><i class="fa fa-recycle"
                        aria-hidden="true"></i></span>
                <span class="background"></span>
            </span>
            <span class="relative ">
                <span class="absolute "><i class="fa fa-check"
                        aria-hidden="true"></i></span>
                <span class=" background"></span></span>
            <span class=" relative  ">
                <span class="absolute  text-yellow-600 "><i class="fa fa-archive"
                        aria-hidden="true"></i></i></span>
                <span class="background  "></span>
            </span>
            <span id="date__de__fin" class="relative ">
                <span class="absolute  text-red-600 "><i class="fa fa-clock-o"
                        aria-hidden="true"></i></i></span>
            </span>


        </div>
    </div>
</div>`
    $('.ajouter__une__tache').before(template)
})