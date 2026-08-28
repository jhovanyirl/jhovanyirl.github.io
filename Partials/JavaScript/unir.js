fetch('../../Partials/header.html')
  .then(res => res.text())
  .then(html => { document.getElementById('header-placeholder').innerHTML = html; });

fetch('../../Partials/footer.html')
  .then(res => res.text())
  .then(html => { document.getElementById('footer-placeholder').innerHTML = html; });