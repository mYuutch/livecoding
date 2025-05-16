// @title "lavender forest type beat"
//  @by myuutch
// @version 1.0
// https://strudel.cc/?gxtHWn508zmo

setcpm(110)

stack(
stack(
  note("<[A3 C4 E4 G#3 B3 E4]>/4").sound("sawtooth").color("red").decay(.2).delay(perlin.range(.5, 2)).gain(.6),
  note("<[A4 ~ E5 G#4 B4 ~]>/4").sound("belltree").gain(10).color("pink")
).mask("<0!8 1!500>")._punchcard({labels:1, height:128}),


  
  stack(
      note("<A1 E2>/4").sound("timpani2").gain("5"),
      note("<B1 ~ G#1*2 ~ E2 A2>/2").sound("gm_epiano1").gain("2")
  ).mask("<0!24 1!500>")._punchcard({labels:1}),


  stack(
    s("hh").struct("  <x ~ x ~ x x>*1.5"),
    s("pink").struct("<~ x ~ ~ x ~>*1.5").gain(1.2),
  )._punchcard({labels:1}),

  s("<east:5 ~ ~ ~ ~ ~>/3").echo(3,1/2,.4).gain(".5").mask("<0!8 1!500>"),

  // s("<crow>/6").gain(500).delay(5).distort(5)
)
