
// 각 메뉴에 마우스를 올리면 연한 회색으로 배경색 바뀜
var menu_content = document.getElementsByClassName("menu_content");
for(let i=0;i<menu_content.length;i++) {
    menu_content[i].addEventListener("mouseover", changeBg1);
}
for(let i=0;i<menu_content.length;i++) {
    menu_content[i].addEventListener("mouseout", changeBg2);
}

function changeBg1() {
    this.style.backgroundColor = 'rgb(200, 200, 200)';
}

function changeBg2() {
    this.style.backgroundColor = '';
}

// 라이트 박스 : 각 그림을 클릭하면 그림 커지는 기능
var pics = document.getElementsByClassName("pic");
var lightbox = document.getElementById("lightbox");
var lightboxImage = document.getElementById("lightboxImage");

for(let i=0;i<pics.length;i++) {
    pics[i].addEventListener("click", showLightbox);
}

function showLightbox() {
    var bigLocation = this.getAttribute("data-src");
    lightboxImage.setAttribute("src", bigLocation);
    lightbox.style.display = "block";
}

lightbox.onclick = function() {
    lightbox.style.display = "none";
}

//유저 버튼을 누르면 회원가입 모달창 나오는 기능

var user = document.querySelector(".fa-circle-user");
var modal = document.getElementById("modal");

user.addEventListener("click", showModal);
function showModal() {
    modal.style.display="block";
}

modal.onclick = function() {
    modal.style.display = "none"
}


// 각 유저 목록 마우스 올리면 연한 회색
var modals = document.getElementsByClassName("modal");
for(let i=0;i<modals.length;i++) {
    modals[i].addEventListener("mouseover", function() {
        this.style.backgroundColor = '#eee';
    });
}
for(let i=0;i<modals.length;i++) {
    modals[i].addEventListener("mouseout", changeBg2);
}
