let lifes = 4;

function openWindow(id){
    document.getElementById(id).removeAttribute("style");
}
function closeWindow(id){
    document.getElementById(id).style.display = "none";
}

function kfdkdfk(){
    let asd = "cGFzc3dvcmRfZGlmZmljaWxl";
    let erfd = btoa(document.getElementById("erfd").value);
    if(asd === erfd){
        document.getElementsByTagName("body")[0].innerHTML = 
        "<p>SYSTEM ERROR: 0x1234. Safe_script executed and returned unknown error</p>" +
        "<p>{error: bravo! Hai trovato la password. ora non ti re..2-23.94389437weò,ew-rwr</p>" +
        "<p style='color: red;'>3ds5#@#@[@{}@èòa+èòsdòàùzòùà<àùòùàò#@@[]@</p>" +
        "<p style='color: red;'>--__-___-w.sa.d_£4343_:sp+èpq+è32pè$£$asdasòlò.ew</p> <br>" +
        "<p style='color: red;' class='selector' onclick='location.href=\"\"'>./r3st4rt.sh</p>";
    }
    else{
        lifes--;
        document.getElementById("pswd_status").innerText = "Password errata. Tentativi rimasti: " + lifes;
        document.getElementById("pswd_status").style.color = "red";
        if(lifes == 0){
            document.getElementsByTagName("body")[0].style.backgroundColor = "darkred";
            document.getElementsByTagName("body")[0].innerHTML = "<p>TENTATIVI FINITI: E ora cosa ti succede?!!=!=!=!=!=?!?!?!?</p>" +
            "<p>Vuoi proprio saperlo?!?!? Nulla, non ti faccio nulla. Pace e amore</p>" +
            "<p class='selector' onclick='location.href=\"\"'>./r3st4rt.sh</p>";
            return;
        }
        if(lifes == 1) document.getElementsByTagName("body")[0].classList.add("shake-animation");
    }
}