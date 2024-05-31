const marker=document.querySelector(".rect");

function setMarker(e) {
    marker.style.left = e.offsetLeft+"px";
    marker.style.width = e.offsetWidth+"px";
}

const sections = document.querySelectorAll("section")
const menus = document.querySelectorAll("li")
const titlemoves = document.querySelectorAll(".title_move")
const boxlist = document.querySelector(".box_list")
const infomoves = document.querySelectorAll(".little_move")
const skillsTag = document.querySelector(".skills")
const skillwrapper = document.querySelector(".skill_wrapper")
const personimage = document.querySelector(".person_image")
const aboutboxinfo = document.querySelector(".about_info")
const award = document.querySelector(".award")
const works = document.querySelector(".works")
const workstitle = document.querySelector(".works .title")
const infowrapper = document.querySelector(".info_wrapper")
const pic = document.querySelector(".pic")
const aboutbox = document.querySelector(".aboutbox")


let worksTop = works.getBoundingClientRect().top;


document.addEventListener("scroll",function(){
    let aboutboxinfoTop = aboutboxinfo.getBoundingClientRect().top;
    if(aboutboxinfoTop <500){
        aboutboxinfo.classList.add("aboutboxinfo_move");
        console.log("add");  
    }else{
        aboutboxinfo.classList.remove("aboutboxinfo_move");
        console.log("remove");      
    }



    let current=""

    sections.forEach(section=>{
      
        let sectionTop = section.getBoundingClientRect().top;
        let sectionmid = sectionTop + section.getBoundingClientRect().height/2;
        let windowmid = window.innerHeight/2;

        if(Math.abs(windowmid - sectionmid)<100) {
            current = section.getAttribute("id");

            menus.forEach(menu=>{
                menu.classList.remove("change");
                const href = menu.getAttribute("href").substring(1);
                if(href===current) {
                   
                    menu.classList.add("change");
                    setMarker(menu);
                }
            })

        }
        
    })

    titlemoves.forEach(titlemove => {
        let boxlistTop = boxlist.getBoundingClientRect().top;

        if(boxlistTop < 600) {
            titlemove.classList.add("right_left");
        }else{
            titlemove.classList.remove("right_left");
        }
    })

    let worksTop = works.getBoundingClientRect().top;
    if(worksTop < 500) {
        infowrapper.classList.add("infowrapper_move");
    }else{
        infowrapper.classList.remove("infowrapper_move");
    }
    

    infomoves.forEach(infomove => {
        let skillTop = skillsTag.getBoundingClientRect().top;
        if(skillTop < 500){
            // infomove.style.transform = "translateX("+ Math.random()+"px)";
            infomoves[0].style.width = "250px";
            infomoves[1].style.width = "300px";
            infomoves[2].style.width = "310px";
            infomoves[3].style.width = "200px";
           
            infomoves[4].style.width = "250px";
            infomoves[5].style.width = "120px";
            infomoves[6].style.width = "250px";
            infomoves[7].style.width = "250px";
            
            infomoves[8].style.width = "250px";
            infomoves[9].style.width = "200px";
            infomoves[10].style.width = "120px";
            infomoves[11].style.width = "160px";
            
        }else{
            infomove.style.width = "150px";
        }
    })

    const viewportMid = window.innerHeight/2;

    sections.forEach(section =>{
        const sectionTop = section.getBoundingClientRect().top;
        const sectionMid = sectionTop + section.getBoundingClientRect().height/2;
        const distance = viewportMid - sectionMid;
    
        const awardtitleTag = document.querySelector(".award .title");
        const skilltitleTag = document.querySelector(".skills .title");
        
        awardtitleTag.style.transform = `translateY(${-distance/10}px)`
        skilltitleTag.style.transform = `translateY(${-distance/10}px)`
        // infowrapper.style.transform = `translateX(${distance/30}px)`
        workstitle.style.transform = `translateX(${-distance/16}px)`
    })
    

})


const picture = document.querySelector(".picture")
 

picture.addEventListener("mouseover", function(){
    picture.style.borderRadius = '0px'

    let imgArray=new Array();
    imgArray[0]="card_1.png";
    imgArray[1]="card_2.png";
    imgArray[2]="card_3.png";
  
  
    var slideIndex = 0;
    showSlides();
    function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
     
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
          slideIndex = 1
      }
      slides[slideIndex - 1].style.display = "block";
  
      change = setTimeout(showSlides, 1000); // 2초마다 이미지가 체인지됩니다
  }

})

picture.addEventListener("mouseout", function(){
    picture.style.borderRadius = '256px'
    clearInterval(change);
})



/*rolling-----------------------------------------------*/

var interval;
        document.addEventListener('DOMContentLoaded', ()=>{
            // 롤링 초기화
            interval = window.setInterval(rollingCallback, 2000);

        })
        
        function rollingCallback(){
            //.prev 클래스 삭제
            document.querySelector('.rolling .roll_one').classList.remove('roll_one');

            //.current -> .prev
            let current = document.querySelector('.rolling .roll_two');
            current.classList.remove('roll_two');
            current.classList.add('roll_one');

            //.next -> .current
            let next = document.querySelector('.rolling .roll_three');
            //다음 목록 요소가 널인지 체크
            if(next.nextElementSibling == null){
                document.querySelector('.rolling span:first-child').classList.add('roll_three');
            }else{
                //목록 처음 요소를 다음 요소로 선택
                next.nextElementSibling.classList.add('roll_three');
            }
            next.classList.remove('roll_three');
            next.classList.add('roll_two');

            console.log("fd")
        }