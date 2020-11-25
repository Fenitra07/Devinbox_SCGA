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

themes.forEach((theme) => {
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
                    <input class="" type="text" placeholder="Ajouter">
                </span>
            </span>
        </div>
    </div>
</div>`

    $('.division__content').append(template)

    theme.activities.forEach((activity) => {
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
        })
    })

})