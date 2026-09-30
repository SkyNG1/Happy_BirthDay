function openGift() {

    document.getElementById("start").style.display = "none";

    document.getElementById("letter").style.display = "block";


    // Nhạc nền

    let music = document.getElementById("bgMusic");

    music.play();


    // Hiệu ứng gõ chữ

    typeText(
        "text1",
        "Chúc em có một sinh nhật thật vui vẻ nhé!",
        50,
        function() {

            typeText(
                "text2",
                "Mong rằng tuổi mới của em sẽ có thật nhiều niềm vui và những điều tuyệt vời nhé!",
                50,
                function() {

                    typeText(
                        "text3",
                        "Bé à, sinh nhật năm nay em đã có anh rồi, nó đã khác so với 16 lần sinh nhật trước nên là có lẽ sẽ đặc biệt!",
                        50,
                        function() {

                            typeText(
                                "text4",
                                "anh xin lũi bé nhiều ạ huhu, vì những chuyện vừa qua, đã làm em mỗi mệt nhiều rùi, em đừng giận a nhé. Hãy thứ lỗi cho anh nhen bé iu:333, chỉ iu em thui.",
                                50,
                                function() {

                                    typeText(
                                        "text5",
                                        "Anh đã giành nỗi lòng của mình vào món quà này. Vì vậy em đừng chê nhen hihi^^ ❤️",
                                        50
                                    );

                                }
                            );

                        }
                    );

                }
            );

        }
    );

}



function typeText(id, text, speed, callback) {

    let element = document.getElementById(id);

    let i = 0;

    element.innerHTML = "";


    function type() {

        if (i < text.length) {

            element.innerHTML += text.charAt(i);

            i++;

            setTimeout(type, speed);

        }
        else {

            if (callback) {
                callback();
            }

        }

    }


    type();

}



let images = [

    "images/anh1.jpg",

    "images/anh2.jpg",

    "images/anh3.jpg",

    "images/anh4.jpg"

];


let current = 0;



function showImage() {

    document.getElementById("mainImage").src =
        images[current];

    document.getElementById("number").innerHTML =
        (current + 1) + " / " + images.length;

}



function nextImage() {

    current++;


    if (current >= images.length) {

        current = 0;

    }


    showImage();

}



function prevImage() {

    current--;


    if (current < 0) {

        current = images.length - 1;

    }


    showImage();

}



/* TIM BAY */

function createHeart() {

    let heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.animationDuration =
        (4 + Math.random() * 4) + "s";


    heart.style.fontSize =
        (15 + Math.random() * 20) + "px";


    document.body.appendChild(heart);


    setTimeout(function() {

        heart.remove();

    }, 8000);

}


setInterval(createHeart, 700);