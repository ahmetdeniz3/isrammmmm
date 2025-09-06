const messages = [
    "Emin misin?",
    "Gerçekten Eminmisin??",
    "Son kararın mı??",
    "Yavrum Lütfeeeeen",
    "Bir düşünn!",
    "Hayır dersen gerçekten üzülücem...",
    "Çok üzülücem...",
    "Çok çok çok üzülücem...",
    "Tamam,sormayı bırakıcam hayıra basabilirsin...",
    "Şakaydı,evet de lütfen! ❤️",
    "lütfen bebeğimmm",
    "lütfen balımmmmm",
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