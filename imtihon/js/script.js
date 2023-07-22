       // timer
let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

let day = document.querySelector('.day');
let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second');

let deadline = new Date("2023-07-22T14:05:00Z")

const countDown = (targetData) => {
    setInterval(() => updataCountDown(targetData), 1000);
}
const formaTime = (time) => {
    return time < 10 ? `0${time}` : time;
   }

const updataCountDown = (deadline) =>{
   let currentTime = Date.parse(new Date())
   let timeDifference = Date.parse(deadline) - currentTime;  


   let calcSeconds = Math.floor(timeDifference / 1000) % 60;
   let calcMinutes =Math.floor(timeDifference / 1000 / 60) % 60;
   let calcHours = Math.floor(timeDifference / 1000 / 60 / 60) % 24;
   let calcDays = Math.floor(timeDifference / 1000 / 60 / 60 / 24);

   days.textContent = formaTime(calcDays);
   hours.textContent = formaTime(calcHours);
   minutes.textContent = formaTime(calcMinutes);
   seconds.textContent = formaTime(calcSeconds);
   

   if(days.textContent == 0){
      day.style.display = 'none'
   }if(hours.textContent == 0 && days.textContent == 0){
	hour.style.display = "none"
   }if(minutes.textContent == 0 && hours.textContent == 0 && days.textContent == 0){
	minute.style.display = "none"
   }if(seconds.textContent == 0 && minutes.textContent == 0 && hours.textContent == 0 && days.textContent == 0){
	second.style.display = "none"
   }
   
}
countDown(deadline);





     // slider 
let prevBtn = document.querySelector('.prev-btn')
let nextBtn = document.querySelector('.next-btn')
let slides = document.querySelectorAll('.slide')

let slideCount = 0;

prevBtn.addEventListener('click', () => {
	if(slideCount <= 0){
		slideCount = slides.length - 1
	}else{
		slideCount--
	}
	hideSlide()
	showSlide(slideCount)
	console.log(slideCount)
})

nextBtn.addEventListener('click', () => {
	if(slideCount > slides.length - 2){
		slideCount = 0
	}else{
		slideCount++  
	}
	hideSlide()
	showSlide(slideCount)
})

function showSlide(i = 0){
	slides[i].classList.add('active')
}

function hideSlide(){
	slides.forEach((slide) => {
		slide.classList.remove('active')
	})
}

hideSlide()
showSlide()






let tabLinks = document.querySelectorAll('.tab-link')
let tabContents = document.querySelectorAll('.tab-item')
let tabLinkParent = document.querySelector('.tab-links')
let tabLink = document.querySelector()

function hideTab(){
	tabContents.forEach((tabContent) => {
		console.log(tabContent)
		tabContent.classList.remove('isOpen')
	})

	tabLinks.forEach((tabLink) => {
		tabLink.classList.remove('active')
	})

}

function showTab(i = 0){
	tabContents[i].classList.add('isOpen')
	tabLinks[i].classList.add('active')
	
}

tabLinkParent.addEventListener('click', (e) => {
	tabLinks.forEach((tabLink, i) => {
		if(e.target === tabLink){
			hideTab(i)
			showTab(i)
		}
	})
})

hideTab()
showTab(0)