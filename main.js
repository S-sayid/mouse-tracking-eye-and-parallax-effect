let mainEle = document.querySelector('.face-main')
let sights = document.querySelectorAll('.sight')
mainEle.addEventListener('mousemove', function (){
	sights.forEach(sight=>{
		let top = sight.getBoundingClientRect().top + (sight.clientHeight / 2)
		let left = sight.getBoundingClientRect().left + (sight.clientWidth / 2)
		let mTop = event.pageY
		let mLeft = event.pageX

		let redial = Math.atan2(top-mTop, mLeft - left)
		let rotated = (redial * (180 / Math.PI)* -1)+190
		sight.style.transform = "rotate("+rotated+"deg)"
	})
})

/*patallax*/
let parent = document.querySelector('.para')
let allItems = document.querySelectorAll('.item')
parent.addEventListener('mousemove', function(){
	allItems.forEach(item=>{
		let speed = item.dataset.time
		let mx = (window.innerWidth - event.pageX * speed )/100
		let my = (window.innerHeight - event.pageY * speed )/ 100
		console.log(mx, my)
		item.style.transform = `translate(${mx}px, ${my}px)`
	})
})