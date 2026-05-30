document.addEventListener('DOMContentLoaded', function() {
    const topbarHTML = `
        <div class="topbar">
            <img src="Untitled.jpg" style="height: 25px; width: 100px; margin-right: 10px;">
            <a href="index.html" class="button" style="margin-right: 10px;">home</a>
            <a href="sign.html" class="button">your account</a>
        </div>
    `;
    document.body.insertAdjacentHTML('afterbegin', topbarHTML);
});