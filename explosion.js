(function() {
  window.onload = function() {
    var Point, acc, canvas, counter, ctx, dpoints, drawCircle, getRan, i, nPoint, points, update;
    canvas = document.getElementById("field");
    ctx = canvas.getContext('2d');
    Point = (function() {
      function Point(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
      }

      Point.prototype.update = function(dx, dy, dsize) {
        this.x += dx;
        this.y += dy;
        return this.size -= dsize;
      };

      return Point;

    })();
    getRan = function() {
      return (Math.random() - 0.5) * 2;
    };
    nPoint = 1300;
    points = (function() {
      var _i, _results;
      _results = [];
      for (i = _i = 0; 0 <= nPoint ? _i <= nPoint : _i >= nPoint; i = 0 <= nPoint ? ++_i : --_i) {
        _results.push(new Point(canvas.width / 2, canvas.height / 2, 5));
      }
      return _results;
    })();
    dpoints = (function() {
      var _i, _results;
      _results = [];
      for (i = _i = 0; 0 <= nPoint ? _i <= nPoint : _i >= nPoint; i = 0 <= nPoint ? ++_i : --_i) {
        _results.push({
          dx: getRan(),
          dy: getRan(),
          dsize: 0.01
        });
      }
      return _results;
    })();
    drawCircle = function(pt) {
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, pt.size, 0, Math.PI * 2, true);
      ctx.fillStyle = "rgb(255,0,0)";
      return ctx.fill();
    };
    counter = 0;
    acc = 1;
    update = function() {
      var d, _i, _j, _len;
      if (counter < 67) {
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.width / 2, 40, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.font = "100px 'MS ゴシック'";
        ctx.fillText("3", 150, 150, 200);
        counter += 1;
      } else if (counter < 133) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.width / 2, 40, 0, Math.PI * 2, true);
        ctx.fillStyle = "rgb(100,0,100)";
        ctx.fill();
        ctx.fillStyle = "rgb(0,0,0)";
        ctx.font = "100px 'MS ゴシック'";
        ctx.fillText("2", 150, 150, 200);
        counter += 1;
      } else if (counter < 200) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.width / 2, 40, 0, Math.PI * 2, true);
        ctx.fillStyle = "rgb(255,50,50)";
        ctx.fill();
        ctx.fillStyle = "rgb(0,0,0)";
        ctx.font = "100px 'MS ゴシック'";
        ctx.fillText("1", 150, 150, 200);
        counter += 1;
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (_i = 0, _len = points.length; _i < _len; _i++) {
          i = points[_i];
          drawCircle(i);
        }
        for (i = _j = 0; 0 <= nPoint ? _j <= nPoint : _j >= nPoint; i = 0 <= nPoint ? ++_j : --_j) {
          d = dpoints[i];
          points[i].update(d.dx * acc, d.dy * acc, d.dsize * acc);
        }
        acc *= 1.15;
        counter += 1;
      }
      return window.requestAnimationFrame(update);
    };
    return window.requestAnimationFrame(update);
  };

}).call(this);
