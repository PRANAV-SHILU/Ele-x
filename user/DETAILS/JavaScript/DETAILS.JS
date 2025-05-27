
function goBack() {
    history.back();
}

// Image switch function
function switchImage(element) {
    var mainImage = document.getElementById('mainImage');
    mainImage.src = element.src;
    mainImage.alt = element.alt;
}

// Review form submission
document.getElementById('reviewForm').addEventListener('submit', function (e) {
    e.preventDefault();

    this.reset();
    document.getElementById('successMessage').style.display = 'block';


});
