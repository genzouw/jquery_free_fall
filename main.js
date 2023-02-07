$(() => {
  $("#one_fall").click(() => {
    $("#block").animate(
      {
        top: "500px",
      },
      "normal",
      "easeInCirc"
    )
  })

  $("#any_fall").click(() => {
    $("<div />")
      .addClass("block")
      .appendTo($("#sandbox"))
      .css({
        left: Math.random() * 500,
      })
      .animate(
        {
          top: "500px",
        },
        "normal",
        "easeInCirc"
      )
  })

  $("#any_up").click(() => {
    $("<div />")
      .addClass("block")
      .appendTo($("#sandbox"))
      .css({
        top: "500px",
        left: Math.random() * 500,
      })
      .animate(
        {
          top: "0px",
        },
        "normal",
        "easeOutCirc"
      )
      .animate(
        {
          top: "500px",
        },
        "normal",
        "easeInCirc"
      )
  })

  $("#any_arrow").click(() => {
    $("<div />")
      .addClass("block")
      .appendTo($("#sandbox"))
      .css({
        top: "500px",
        left: "0px",
      })
      .animate(
        {
          top: "0px",
        },
        {
          duration: 400,
          easing: "easeOutCirc",
          queue: true,
        }
      )
      .animate(
        {
          top: "500px",
        },
        {
          duration: 400,
          easing: "easeInCirc",
          queue: true,
        }
      )
      .animate(
        {
          left: "500px",
        },
        {
          duration: 800,
          easing: "linear",
          queue: false,
        }
      )
  })

  $("#any_two").click(() => {
    $("#any_up").trigger("click")
    $("#any_arrow").trigger("click")
  })
})
