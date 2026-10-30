 (function () {
    // Invoker Commands: abre/fecha o dialog via atributos HTML, sem JS.
    // Se o navegador não suportar, replicamos o comportamento.
    if (!('commandForElement' in HTMLButtonElement.prototype)) {
      document.addEventListener('click', function (e) {
        var btn = e.target.closest('button[commandfor]');
        if (!btn) return;
        var target = document.getElementById(btn.getAttribute('commandfor'));
        if (!target || !(target instanceof HTMLDialogElement)) return;
        var cmd = btn.getAttribute('command');
        if (cmd === 'show-modal') target.showModal();
        else if (cmd === 'close') target.close();
      });
    }
 
    if (!CSS.supports('animation-timeline: scroll()')) {
      var root = document.documentElement;
      var update = function () {
        var p = Math.min(Math.max(window.scrollY / (window.innerHeight * 0.55), 0), 1);
        root.style.setProperty('--hero-p', p);
      };
      window.addEventListener('scroll', update, { passive: true });
      update();
    }

    if (!('closedBy' in HTMLDialogElement.prototype)) {
      document.querySelectorAll('dialog.modal').forEach(function (dlg) {
        dlg.addEventListener('click', function (e) {
          if (e.target !== dlg) return; 
          var r = dlg.getBoundingClientRect();
          var inside = e.clientX >= r.left && e.clientX <= r.right &&
                       e.clientY >= r.top && e.clientY <= r.bottom;
          if (!inside) dlg.close();
        });
      });
    }
  })();