var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;

for (var i=0; i<navMenuAnchorTags.length; i++){
    navMenuAnchorTags[i].addEventListener('click', function(event){
        event.preventDefault();
        var targetSectionId = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionId);
        interval = setInterval(scrollVertically, 0.5, targetSection);
    })
}

function scrollVertically(targetSection){
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if (targetSection.id=='contact' && targetSectionCoordinates.top<=200){
        clearInterval(interval);
        return;
    }else if (targetSection.id!='contact' && targetSectionCoordinates.top<=20) {
        clearInterval(interval);
        return;
    }
    window.scrollBy(0, 5);
}

var progressBars = document.querySelectorAll('.skill-progress > div');
var skillsContainer = document.getElementById('skills_container');
window.addEventListener('scroll', checkScroll);
var animationDone = false;

function initialiseBars(){
    for (var bar of progressBars){
        bar.style.width = 0 + '%';
    }
}

initialiseBars();

function fillBars(){
    for (let bar of progressBars){
        let targetWidth = bar.getAttribute('data_bar_width');
        let currentWidth = 0;
        let interval = setInterval(function(){
            if (currentWidth > targetWidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + '%';
        }, 0.5);
    }
}

function checkScroll(){
    var coordinates = skillsContainer.getBoundingClientRect();
    if (!animationDone && coordinates.top < window.innerHeight){
        //console.log("skills is visible");
        fillBars();
        animationDone = true;
    } else if (coordinates.top > window.innerHeight){
        animationDone = false;
        initialiseBars();
    }
}

function dw_getScrollOffsets() {
    var doc = document, w = window;
    var x, y, docEl;
    if ( typeof w.pageYOffset === 'number' ) {
        x = w.pageXOffset;
        y = w.pageYOffset;
    } else {
        docEl = (doc.compatMode && doc.compatMode === 'CSS1Compat')?
                doc.documentElement: doc.body;
        x = docEl.scrollLeft;
        y = docEl.scrollTop;
    }
    return {x:x, y:y};
}

// console.log(dw_getScrollOffsets());
var id = setInterval(check, 1000);
function check(){
    var x = dw_getScrollOffsets();
    // console.log(x);
    // console.log(Math.round(x.y/6254 * 100));
}
//atnetbbswgjezmhy
var form = document.getElementById('send_mail');
form.addEventListener('click', function() {
    var name = document.getElementById('input-name').value;
    var email = document.getElementById('input-email').value;
    var message = document.getElementById('input-message').value;
    Email.send({
        Host: "smtp.gmail.com",
        Username: "soumyadeepsp@gmail.com",
        Password: "atnetbbswgjezmhy",
        To: "soumyadeepsp@gmail.com",
        From: "soumyadeepsp@gmail.com",
        Subject: `${name} sent you a message`,
        Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`
    }).then((message) => alert("Hi! I have received your message. I would reach back to you ASAP. \nHave a great day ahead!"));
    document.getElementById('input-name').value = "";
    document.getElementById('input-email').value = "";
    document.getElementById('input-message').value = "";
});

var amazon = document.getElementById('amazon');
amazon.addEventListener('click', function() {
    window.open("https://clone-468a0.firebaseapp.com/")
});
var messenger = document.getElementById('messenger');
messenger.addEventListener('click', function() {
    window.open("https://messenger-clone-92f21.web.app/")
});
var covid = document.getElementById('covid');
covid.addEventListener('click', function() {
    window.open("https://covid-tracker-bc947.web.app")
});
var netflix = document.getElementById('netflix');
netflix.addEventListener('click', function() {
    window.open("https://netflix-clone-f17e3.web.app/")
});
var pollinet = document.getElementById('pollinet');
pollinet.addEventListener('click', function() {
    window.open("https://github.com/soumyadeepsp/pollinet")
});
var twitter = document.getElementById('twitter');
twitter.addEventListener('click', function() {
    window.open("https://github.com/soumyadeepsp/twitterclone")
});