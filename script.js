document.getElementById('shortenerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const longUrl = document.getElementById('urlInput').value;

    // Mockup shortening, real implementation would call your backend API
    const shortUrl = 'http://short.url/' + btoa(longUrl).slice(0, 8);
    
    const resultDiv = document.getElementById('result');
    resultDiv.innerText = `Short URL: `;
    
    const shortLink = document.createElement('a');
    shortLink.href = shortUrl;
    shortLink.target = '_blank';
    shortLink.innerText = shortUrl;
    
    resultDiv.appendChild(shortLink);
});
