function goToDetails(){
    window.location.href = 'details.html?project=panvelstp'
}

function getQueryParams(param){
    const UrlParams = new URLSearchParams(window.location.search);
    return UrlParams.get(param);
}

if (getQueryParams("project") === "panvelstp"){
    document.getElementById('hide').style.display = "none";
    document.getElementById('panvelstp').style.display = "block";

}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
