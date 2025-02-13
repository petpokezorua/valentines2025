const messages = [
    "Đi mò",
    "Năn nỉiii",
    "Siu năn nỉ",
    "Pấm có là cho ăng gà rán",
    "Xong rùi con gâu gâu sẽ mua socolaaa",
    "Hong thoi con gâu gâu siu pùn",
    "Siu siu pùn lun đóooooo",
    "Siu cấp pùn ngồi sủa gâu gâu ngoài cửa nhà lun đó :<",
    "Năn nỉ siu cấp lần cuối nói có điiii ❤️"
];

let messageIndex = 0;
let noClickCount = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
    
    noClickCount++;
    localStorage.setItem('noClickCount', noClickCount);
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}