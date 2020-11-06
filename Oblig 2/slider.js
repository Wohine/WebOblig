const carouselslider = document.queryselector(".carousel-slider");
const carouselbilder = document.queryselectorall(".carousel-slider img");

const prevbtn = document.queryselector("#prevbtn");
const nextbtn = document.queryselector("#nextbtn");

let counter = 1;
const size = carouselbilder[0].clientwidth;

carouselslider.style.transform = "translatex(" + (-size * counter) + "px)";

nextbtn.addventlistener("click",() => {
	if (counter >= carouselbilder.length - 1) return;
	carouselslider.style.transition = "transform 0.4s ease-in-out";
	counter++;
	carouselslider.style.transform = "translatex(" + (-size * counter) + "px";

});
  
pervbtn.addventlistener("click",()=>{
	if (counter <= 0) return;
	carouselslider.style.transition = "transform 0.4s ease-in-out";
	counter--;
	carouselslider.style.transform = "translatex(" + (-size * counter) + "px";
	
});

carouselslider.addventlistener("transitionend", ()=>{
	if (carouselbilder[counter]. id ==="lastclone"){
		carouselslider.style.transition = "none";
		counter = carouselslider.length - 2;
		carouselslider.style.transform = "translatex(" + (-size * counter) + "px";
	}
	if (carouselbilder[counter]. id ==="firstclone"){
		carouselslider.style.transition = "none";
		counter = carouselslider.length - counter;
		carouselslider.style.transform = "translatex(" + (-size * counter) + "px";
	}
});

