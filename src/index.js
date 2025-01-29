function copyToClipboard() {
    const text = "kasianovalexander@outlook.com";
    navigator.clipboard.writeText(text).then(function() {
        alert('Copied ' + text + ' to clipboard');
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
}