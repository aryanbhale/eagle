// goToDetails now accepts projectId as parameter
// document.addEventListener("DOMContentLoaded", () => {
    function goToDetails(projectId) {
        // window.location.href = 'details.html?project=panvelstp';
        window.location.href = 'details.html?project=' + projectId;
    }

    function getQueryParams(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    const projectId = getQueryParams("project");

    document.querySelectorAll(".win").forEach(el => el.style.display = "none");
    document.querySelectorAll(".crawler").forEach(el => el.style.display = "none");


    // const projecterr = document.getElementById('hide');
    // if (projecterr){
    //     projecterr.style.display = "none"
    // }

    if (projectId) {
        const projectDiv = document.getElementById(projectId);
        const projecterr = document.getElementById('#hide');
        // projecterr.style.display = "none"

        if (projectDiv) {
            projectDiv.style.display = "block";
            projecterr.style.display = "none";
        }
    }

    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
// });
















// function goToDetails(){
//     window.location.href = 'details.html?project=' + projectId;
// }

// function getQueryParams(param){
//     const UrlParams = new URLSearchParams(window.location.search);
//     return UrlParams.get(param);
// }
// const projectId = getQueryParams("project");

// if(projectId) {
//   const projectDiv = document.getElementById(projectId);
//     if (projectDiv){
//       projectDiv.style.display = "block";
//   }
// }

// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }
