{
    let btnAdmin = document.getElementById('btnAdmin')
    let expandDiv = document.querySelector(".dropDownSection");
    btnAdmin.addEventListener('click', function() {
        expandDiv.classList.toggle("active");
    })
    document.addEventListener("click", (event) => {
        if (event.target.closest("#btnAdmin")) return;
        expandDiv.classList.remove("active");
    });
}



// NavBar Section
{
    let tapOpen = document.querySelector(".tapOpen");
    let tapClose = document.querySelector(".tapClose");
    let expandNavBar = document.querySelector(".navBarSection");

    tapOpen.addEventListener('click', function() {
        tapOpen.classList.toggle('OpenBntActive')
        tapClose.classList.toggle('active')
        expandNavBar.classList.toggle("expandNavAction");
    })
    tapClose.addEventListener('click', function() {
        tapOpen.classList.toggle("OpenBntActive");
        tapClose.classList.toggle('active')
        expandNavBar.classList.toggle("expandNavAction");
    })

}
// flatpicker 
{
    config = {
        enableTime: true,
        plugins: [new confirmDatePlugin({})],
    };
    flatpickr("input[type=datetime-local]", config);
}