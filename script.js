document.getElementById('accept').onclick = function() {
    alert('Cảm ơn bé iu nhiều lắm! Anh yêu em! ❤️');
};
document.getElementById('reject').onclick = function() {
    alert('Anh sẽ cố gắng hơn để làm em vui ! 😢');
    this.style.display = 'none';  // Ẩn nút 'Không bao giờ'
};