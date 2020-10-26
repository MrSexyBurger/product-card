function toggleActiveSections(){
    let sectionBtns =  document.querySelectorAll('.show__section__btn');

    sectionBtns.forEach((sectionBtn) => {
        sectionBtn.addEventListener('click', (event) => {
            toggleActiveBtn(getSection(event));
            toggleActiveSection(getSection(event));
        });
    })

    const getSection = event => event.target;
    const toggleActiveBtn = element => element.classList.toggle('active');

    const toggleActiveSection = element => {
        let sectionContentId = '#' + element.id.replace('btn','content');
        document.querySelector(sectionContentId).classList.toggle('active');
    }
}