window.onload = ->
  canvas = document.getElementById "field"
  ctx = canvas.getContext '2d'

  class Point
    constructor : (x, y, size) ->
      @x = x
      @y = y
      @size = size

    update: (dx, dy, dsize) ->
      @x += dx
      @y += dy
      @size -= dsize

  getRan = () -> (Math.random() - 0.5)*2

  nPoint = 1300
  points = (new Point(canvas.width/2, canvas.height/2, 5) for i in [0..nPoint])
  dpoints = ({dx:getRan(), dy:getRan(), dsize:0.01} for i in [0..nPoint])

  drawCircle = (pt) ->
    ctx.beginPath()
    ctx.arc pt.x, pt.y, pt.size, 0, Math.PI * 2, true
    ctx.fillStyle = "rgb(255,0,0)"
    ctx.fill()

  counter = 0

  acc = 1

  update = ->
    if counter<67
      ctx.beginPath()
      ctx.arc canvas.width/2, canvas.width/2, 40, 0, Math.PI * 2, true
      ctx.fill()
      ctx.font = "100px 'MS ゴシック'"
      ctx.fillText("3",150,150,200)
      counter += 1

    else if counter<133
      ctx.clearRect 0, 0, canvas.width, canvas.height
      ctx.beginPath()
      ctx.arc canvas.width/2, canvas.width/2, 40, 0, Math.PI * 2, true
      ctx.fillStyle = "rgb(100,0,100)"
      ctx.fill()
      ctx.fillStyle = "rgb(0,0,0)"
      ctx.font = "100px 'MS ゴシック'"
      ctx.fillText("2",150,150,200)
      counter += 1

    else if counter<200
      ctx.clearRect 0, 0, canvas.width, canvas.height
      ctx.beginPath()
      ctx.arc canvas.width/2, canvas.width/2, 40, 0, Math.PI * 2, true
      ctx.fillStyle = "rgb(255,50,50)"
      ctx.fill()
      ctx.fillStyle = "rgb(0,0,0)"
      ctx.font = "100px 'MS ゴシック'"
      ctx.fillText("1",150,150,200)
      counter += 1

    else
      ctx.clearRect 0, 0, canvas.width, canvas.height
      drawCircle(i) for i in points

      for i in [0..nPoint]
        d = dpoints[i]
        points[i].update(d.dx*acc, d.dy*acc, d.dsize*acc)

      acc *= 1.15
      counter +=1

    window.requestAnimationFrame update

  window.requestAnimationFrame update