    
    var remote = document.querySelector('#remote');
    var timeline = document.querySelector('#timeline');
    var ray = document.querySelector('#ray');
    var touchStartAxes;
    var minScale = 0.1;
    var scaleMultiplier = 1;
    var newScale = currentScale = 1;
    var focused = false;

      // box color change
      timeline.addEventListener('raycaster-intersected', function () {
        if (focused) return;
        focused = true;
        box.setAttribute('light','point');
      });

      box.addEventListener('raycaster-intersected-cleared', function () {
        focused = false;
        box.setAttribute('light','ambient');
      })

      // trackpad to scale
      remote.addEventListener('axismove', function (e) {
        if (!touchStartAxes) return;
        var deltaX = e.detail.axis[0] - touchStartAxes[0];
        newScale = currentScale + deltaX*scaleMultiplier;
        if (newScale < minScale) newScale = minScale;
        box.setAttribute('scale',newScale+' '+newScale+' '+newScale);
      });
      remote.addEventListener('touchstart', function (e) {
        touchStartAxes = e.detail.axis;
      });
      remote.addEventListener('touchend', function (e) {
        touchStartAxes = null;
        currentScale = newScale;
      });
      remote.addEventListener('buttondown', function (e) {
        box.setAttribute('color','black');
      });
      remote.addEventListener('buttonup', function (e) {
        if (focused) {
          timeline.setAttribute('light','point');
        } else {
          timeline.setAttribute('light','ambient');
        }
      });