document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a.abstract').forEach(function (link) {
    link.addEventListener('click', function () {
      link.parentElement.parentElement.querySelector('.abstract.hidden').classList.toggle('open');
    });
  });
  document.querySelectorAll('a.bibtex').forEach(function (link) {
    link.addEventListener('click', function () {
      link.parentElement.parentElement.querySelector('.bibtex.hidden').classList.toggle('open');
    });
  });
});
