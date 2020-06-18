// ハングリーデイズ　カップヌードル
$(function () {
  // 一旦hide()で隠してフェードインさせる
  $(".hungrydays-imgcupnoodle").hide().fadeIn("slow");
});

// 太陽が背景のパララックス
jQuery(function ($) {
  var $window = $(window);

  $(".content").each(function (index) {
    var $self = $(this);
    var offsetPositions = $self.offset();

    $(window).scroll(function () {
      // この領域がブラウザに表示されている場合
      if (
        $window.scrollTop() + $window.height() > offsetPositions.top &&
        offsetPositions.top + $self.height() > $window.scrollTop()
      ) {
        var offsetY = -(($window.scrollTop() - offsetPositions.top) / 17);
        //var offsetY =  -($window.scrollTop()/ 17);
        var positions = "50%" + offsetY + "px";
        $self.css(".background-image-Parallax-sun", positions);
      }
    });
  });
});

//浮き上がってくる文章
$(function () {
  $(window).scroll(function () {
    $(".if-onepeacecara-div").each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 200) {
        $(this).addClass("active");
      }
    });
  });
});

//もしも、ワンピースの登場人物が
$(function () {
  $(window).scroll(function () {
    $(".if-onepeacecara-div-p1").each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });
});
//　現代で高校生活を送っていたら――
$(function () {
  $(window).scroll(function () {
    $(".if-onepeacecara-div-p2").each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });
});
//手に負えないうねりとともに、
$(function () {
  $(window).scroll(function () {
    $(".if-onepeacecara-div-p3").each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });
});
//青くて、アツい、冒険の夜明けがやってくる。
$(function () {
  $(window).scroll(function () {
    $(".if-onepeacecara-div-p4").each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });
});

//ONE PIECE 青春
$(function () {
  $(window).scroll(function () {
    $(".onepiece-seisyunn").each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });
});

//　一つ目のカット
$(function () {
  $(window).scroll(function () {
    $(".inner-first").each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });
});

//　二つ目のカット
$(function () {
  $(window).scroll(function () {
    $(".inner-second").each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });
});

//　三つ目のカット
$(function () {
  $(window).scroll(function () {
    $(".inner-third").each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });
});

//　四つ目のカット
$(function () {
  $(window).scroll(function () {
    $(".inner-fourth").each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });
});

//　五つ目のカット
$(function () {
  $(window).scroll(function () {
    $(".inner-fifth").each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });
});

// 左に無限ループする背景
$(function () {
  var bgscx1 = 0;
  var bgscy1 = 0;
  setInterval(function () {
    bgscx1 += -0.15;
    bgscy1 += 0;
    $(".skinBody1").css("background-position", bgscx1 + "px " + bgscy1 + "px");
  });
});

// 固定背景其一
jQuery(function ($) {
  var $window = $(window);

  $(".content").each(function (index) {
    var $self = $(this);
    var offsetPositions = $self.offset();

    $(window).scroll(function () {
      // この領域がブラウザに表示されている場合
      if (
        $window.scrollTop() + $window.height() > offsetPositions.top &&
        offsetPositions.top + $self.height() > $window.scrollTop()
      ) {
        var offsetY = -(($window.scrollTop() - offsetPositions.top) / 17);
        //var offsetY =  -($window.scrollTop()/ 17);
        var positions = "50%" + offsetY + "px";
        $self.css("backgroundPosition", positions);
      }
    });
  });
});

// サンジの横で左に無限ループする画像

// 下からふわっと出てくる動き
$(function () {
  $(window).scroll(function () {
    $(".goldscroll").each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 200) {
        $(this).addClass("active");
      } else $(this).removeClass("active");
    });
  });
});

//　右端でカップヌードル持ってるサンジ
$(function () {
  $(window).scroll(function () {
    $(".sanji-img").each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });
});

//　味噌カップヌードルとノーマルのカップヌードル
$(function () {
  $(window).scroll(function () {
    $(".new-noodle-1").each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });
});

$(function () {
  $(window).scroll(function () {
    $(".samgetan-img").each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });
});

//　謎肉と濃厚海老のヌードル
$(function () {
  $(window).scroll(function () {
    $(".new-noodle-2").each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });
});

$(function () {
  $(window).scroll(function () {
    $(".samgetan-img-2").each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });
});

//　謎肉たっぷりフカヒレスープ
$(function () {
  $(window).scroll(function () {
    $(".new-noodle-3").each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });
});

$(function () {
  $(window).scroll(function () {
    $(".samgetan-img-3").each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });
});

//　グリーンカレーヌードル
$(function () {
  $(window).scroll(function () {
    $(".new-noodle-4").each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });
});

$(function () {
  $(window).scroll(function () {
    $(".samgetan-img-4").each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });
});

// 固定背景其２　燃え盛る場所
jQuery(function ($) {
  var $window = $(window);

  $(".section-twelveth").each(function (index) {
    var $self = $(this);
    var offsetPositions = $self.offset();

    $(window).scroll(function () {
      // この領域がブラウザに表示されている場合
      if (
        $window.scrollTop() + $window.height() > offsetPositions.top &&
        offsetPositions.top + $self.height() > $window.scrollTop()
      ) {
        var offsetY = -(($window.scrollTop() - offsetPositions.top) / 17);
        //var offsetY =  -($window.scrollTop()/ 17);
        var positions = "50%" + offsetY + "px";
        $self.css("backgroundPosition", positions);
      }
    });
  });
});

// パララックスの背景　ラスト　スペシャルまで
jQuery(function ($) {
  var $window = $(window);

  $(".content").each(function (index) {
    var $self = $(this);
    var offsetPositions = $self.offset();
    $(window).scroll(function () {
      // この領域がブラウザに表示されている場合
      if (
        $window.scrollTop() + $window.height() > offsetPositions.top &&
        offsetPositions.top + $self.height() > $window.scrollTop()
      ) {
        var offsetY = -(($window.scrollTop() - offsetPositions.top) / 17);
        //var offsetY =  -($window.scrollTop()/ 17);
        var positions = "50%" + offsetY + "px";
        $self.css(".background-image-Parallax-sun2", positions);
      }
    });
  });
});

// FacebookとTwitter　ホバーしたら半透明になる
$(document).ready(function () {
  $(".sharefatw-div-fa").hover(
    function () {
      $(this).css("opacity", 0.3); // マウスオーバーで透明度を30%にする
    },
    function () {
      $(this).css("opacity", 1.0); // マウスアウトで透明度を100%に戻す
    }
  );
});
// Twitter
$(document).ready(function () {
  $(".sharefatw-div-tw").hover(
    function () {
      $(this).css("opacity", 0.3); // マウスオーバーで透明度を30%にする
    },
    function () {
      $(this).css("opacity", 1.0); // マウスアウトで透明度を100%に戻す
    }
  );
});

// マウスオーバーしたら半透明になるフッターの画像たち
$(document).ready(function () {
  $(".producttype-1-img").hover(
    function () {
      $(this).css("opacity", 0.3); // マウスオーバーで透明度を30%にする
    },
    function () {
      $(this).css("opacity", 1.0); // マウスアウトで透明度を100%に戻す
    }
  );
});

// マウスオーバーしたら半透明になるフッターの画像たち
$(document).ready(function () {
  $(".producttype-2-img").hover(
    function () {
      $(this).css("opacity", 0.3); // マウスオーバーで透明度を30%にする
    },
    function () {
      $(this).css("opacity", 1.0); // マウスアウトで透明度を100%に戻す
    }
  );
});
