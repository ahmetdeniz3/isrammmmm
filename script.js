const messages = [
    "Emin misin?",
    "lütfen bebeğimmm",
    "lütfen balımmmmm",
    "Gerçekten Eminmisin??",
    "Son kararın mı??",
    "Yavrum Lütfeeeeen",
    "Bir düşünn!",
    "Hayır dersen gerçekten üzülücem...",
    "Çok üzülücem...",
    "Çok çok çok üzülücem...",
    "Tamam,sormayı bırakıcam hayıra basabilirsin...",
    "Şakaydı,evet de lütfen! ❤️",
    "ama ben seni çok seviyorum🥺",
    "tamam tamam bu sefer basabilirsin hayıra😔",
    "ŞAKKAAAAAAA",
    "Hatun yeter lütfen evete bas😔",
    "Yavrum ben eşşeğim lütfen evete bas😭",
    "1 kere daha hayıra basarsan baştan yalvarmaya başlarım"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}