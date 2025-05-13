function sendEmail() {
    var comment = document.querySelector('textarea[name="comment"]').value;
    var mailtoLink =
        "mailto:someone@example.com?subject=Form Submission&body=" +
        encodeURIComponent(comment);
    window.location.href = mailtoLink;
}