const tips = [
    "اقفل النور وانت خارج من الاوضة",
    "استخدم شنطة قماش بدل البلاستيك",
    "افصل الزبالة قابل \ غير قابل لاعادة التدوير",
    "ازرع زرعة ف البالكونة",
    "صلح الحاجة بدل مترميها"
];

document.getElementById("randomTipBtn").addEventListener("click", () => {
    const i = Math.floor(Math.random() * tips.length);
    document.getElementById("randomTipText").textContent = tips[i];
});

//carpon
document.getElementById("calcBtn").addEventListener("click", () => {
    const t = Number(document.getElementById("transport").value);

    const e = Number(document.getElementById("electric").value);

    const p = Number(document.getElementById("plastic").value);


    const score = t + e + p;
    const resultBox = document.getElementById("carbonResult");

    let text = "";
    let advice = "";

    if (score <= 1){
        text = "بصمتك قليلة-تمام كدة";
        advice = "استمر ف العادات الحلوة وحافظ عليها";
    } else if (score <= 3){
        text = "بصمتك متوسطة - مش بطال بس ممكن تتحسن";
        advice = "جرب تقلل استخدام العربية اة الشنط البلاستيك";
    } else{
        text = "بصمتك عالية - محتاج تغير شوية عادات دلوقتى";
        advice = "ابدأ بحاجة واحدة وقلل استخدام البلاستيك او العربية";
    }

    if (score <= 1){
        resultBox.style.background = "#d4edda";
    } else if (score <= 3){
        resultBox.style.background = "#fff3cd";
    }else {resultBox.style.background = "#f8d7da";}

    resultBox.innerHTML = `<strong>${text}</strong><br>${advice}`;
});

//reset button at carpon
document.getElementById("resetBtn").addEventListener("click", () =>{
    document.getElementById("transport").value = "0";
    document.getElementById("electric").value = "0";
    document.getElementById("plastic").value = "0";

    document.getElementById("carbonResult").textContent = "";
});

const menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", () => {
    const nav = document.querySelector(".nav");
    if (nav.style.display === "flex")nav.style.display = "none";

    else nav.style.display = "flex";
});