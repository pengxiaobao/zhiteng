
$(function () {
  var b = !1;
  var skinLayout = [
    {
      "name": "bigPlayButton",
      "align": "blabs",
      "x": 30,
      "y": 80
    },
    {
      "name": "H5Loading",
      "align": "cc"
    },
    {
      "name": "errorDisplay",
      "align": "tlabs",
      "x": 0,
      "y": 0
    },
    {
      "name": "infoDisplay"
    },
    {
      "name": "tooltip",
      "align": "blabs",
      "x": 0,
      "y": 56
    },
    {
      "name": "thumbnail"
    },
    {
      "name": "controlBar",
      "align": "blabs",
      "x": 0,
      "y": 0,
      "children": [
        {
          "name": "progress",
          "align": "blabs",
          "x": 0,
          "y": 44
        },
        {
          "name": "playButton",
          "align": "tl",
          "x": 15,
          "y": 12
        },
        {
          "name": "timeDisplay",
          "align": "tl",
          "x": 10,
          "y": 7
        },
        {
          "name": "fullScreenButton",
          "align": "tr",
          "x": 10,
          "y": 12
        },
        {
          "name": "volume",
          "align": "tr",
          "x": 5,
          "y": 10
        }
      ]
    }
  ];

  function A() {
    if ($(".content-form").fadeOut) {
      $(window).scrollTop() <= ($(window).height() / 2) ? $(".content-form").fadeOut() : $(window).height() + $(window).scrollTop() >= $(".footer-wrap").offset().top ? $(".content-form").fadeOut() : $(".content-form").fadeIn()
    }
  }

  $(window).resize(function () {
    A();
  });

  $(window).on("scroll", function () {
    A();
  });

  A();



  $("#submit").click(function () {
    var name = $.trim($("#name").val());
    var phone = $.trim($("#phone").val());
    var message = $.trim($("#message").val());
    var addr = $.trim($("#addr").val());
    if (name === null || name === undefined || name === "") {
      alert("请填写姓名");
      return;
    }
    if (phone === null || phone === undefined || phone === "") {
      alert("请填写联系方式");
      return;
    }
    if (addr === null || addr === undefined || addr === "") {
      alert("请填写联系地址");
      return;
    }
    $.ajax({
      url: "./zt-api/public/addWebMessage.json",
      type: "post",
      data: {
        fullName: name,
        contactTel: phone,
        message: message,
        contactAddr: addr
      },
      dataType: "json",
      async: "false",
      success: function (a) {
        if (a.returnCode === "000000") {
          alert("亲，您已提交成功！");
        } else {
          alert("亲，不好意思，提交失败了，请稍后重试下");
        }
      },
      error: function (a) {
        alert("亲，不好意思，提交失败了，请稍后重试下！");
      }
    })
  });

  // 特色课程
  $(".class-list").slide && $(".class-list").slide({
    titCell: ".class-tabs li",
    mainCell: ".class-content",
    autoPlay: !0,
    trigger: "click"
  });

  // 赛事活动
  new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 100000,
    },
  });


  $(".video-paly").click(function () {
    var href = $(this).attr("video-src");
    console.log(href)
    $("#videoModal333").modal();
    0 == b && (a = Aliplayer({
      id: "video-site11",
      autoplay: !1,
      width: "100%",
      height: "auto",
      "autoplay": true,
      "isLive": false,
      "rePlay": false,
      "playsinline": true,
      "preload": true,
      "controlBarVisibility": "hover",
      "useH5Prism": true,
      "skinLayout": skinLayout,
      source: href
    }), b = !0);
    a.play()
  });
  $("#videoModal333").on("show.bs.modal", function () {
    1 == b && a.play()
  });
  $("#videoModal333").on("hidden.bs.modal", function () {
    1 == b && a.pause()
  })








  /**********************mobile */
  function t(a) {
    if (1 == a) {
      $(".nav-1805-1601 li").css({
        height: "0%"
      });
      $(".nav-1805-1601").css("visibility", "visible");
      var b = 0,
        d = 100;
      $(".nav-1805-1601 li").each(function (a) {
        $(this).stop().delay(b).animate({
          height: d + "%"
        }, 500, "linear");
        $(this).children("a").children(".text-box").stop().delay(b + 200).animate({
          bottom: "4vh"
        }, 500, "linear");
        b += 200;
        d -= 100 / 6
      });
      setTimeout(function () {
        e = 0
      }, 1200)
    } else $(".nav-1805-1601 li").children("a").children(".text-box").stop().animate({
      bottom: "50vh"
    }, 400, "linear"), $(".nav-1805-1601 li").stop().animate({
      height: "0%"
    }, 400, "linear"), setTimeout(function () {
      e = 0;
      $(".nav-1805-1601").css("visibility", "hidden")
    }, 500)
  }

  var r = !1,
    e = 0;
  $(".content-1805 .drop-btn").on("click", function () {
    0 == e && (e = 1, r ? (r = !1, t(0), $("body").removeClass("pageHide")) : (r = !0, t(1), $("body").addClass("pageHide")), $(this).toggleClass("close"))
  });
  $(".nav-1805-1601 li").on("mouseover", function () {
    if (0 == e) {
      var a = 0,
        b = "2vh",
        d = $(this).index();
      $(".nav-1805-1601 li").each(function (f) {
        $(this).stop().animate({
          height: 100 - a + "%"
        }, 600, "linear");
        f == d ? (a += 40, b = "14vh") : (a += 30, b = "7.5vh");
        $(this).children("a").children(".text-box").stop().animate({
          bottom: b
        }, 600, "linear")
      })
    }
  });
  $(".nav-1805-1601 li").on("mouseout", function () {
    0 == e && $(".nav-1805-1601 li").each(function (a) {
      $(this).stop().animate({
        height: 100 - 100 / 3 * a + "%"
      }, 600, "linear");
      $(this).children("a").children(".text-box").stop().animate({
        bottom: "10vh"
      }, 600, "linear")
    })
  });


});
