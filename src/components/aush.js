function PageLoadingAnimation() {
  $("#PageLoadingAnimation").animate(
    { animationPlayState: "paused", opacity: "0" },
    400
  ),
    $("#PageLoadingAnimation").css({ display: "none" }, 400),
    $("body").css("overflow", "scroll"),
    $("html, body").animate({ scrollTop: $("#HomePage").offset().top }, 400)
}
function Cursor() {
  var e = document.querySelector("#CursorX"),
    o = { x: window.innerWidth / 2, y: window.innerHeight / 2 },
    t = { x: o.x, y: o.y },
    r = gsap.quickSetter(e, "x", "px"),
    a = gsap.quickSetter(e, "y", "px")
  gsap.set("#CursorX", { xPercent: -50, yPercent: -50 }),
    window.addEventListener("mousemove", e => {
      ;(t.x = e.x),
        (t.y = e.y),
        gsap.to("#CursorX", { scale: 1, duration: 2.2, ease: "power3.out" })
    })
  gsap.ticker.add((e, n) => {
    var i = n * (31 / 1300),
      s = 1 - Math.pow(0.9, i)
    ;(o.x += (t.x - o.x) * s), (o.y += (t.y - o.y) * s), r(o.x), a(o.y)
  })
  var n = document.querySelector("#CursorXC"),
    i = { x: window.innerWidth / 2, y: window.innerHeight / 2 },
    s = { x: i.x, y: i.y },
    c = gsap.quickSetter(n, "x", "px"),
    g = gsap.quickSetter(n, "y", "px")
  gsap.set("#CursorXC", { xPercent: -50, yPercent: -50 }),
    window.addEventListener("mousemove", e => {
      ;(s.x = e.x), (s.y = e.y)
    })
  gsap.ticker.add((e, o) => {
    var t = o * (130 / 2200),
      r = 1 - Math.pow(0.9, t)
    ;(i.x += (s.x - i.x) * r), (i.y += (s.y - i.y) * r), c(i.x), g(i.y)
  })
  const l = gsap.timeline({ defaults: { ease: "power3.out" }, paused: !0 })
  l.to(n, { scale: 1, duration: 1.3 }),
    $(".CursorA").mouseenter(function () {
      l.reversed(!l.timeScale(1).play())
    }),
    $(".CursorA").mouseleave(function () {
      l.reversed(!l.timeScale(2.2).reversed())
    })
}
function Menu() {
  const e = gsap.timeline({ defaults: { ease: "power3.out" }, paused: !0 })
  e
    .from("#MenuWrap", { opacity: 0, duration: 0.31 }, 0)
    .from(
      "#MenuWrap #LogoBG h1",
      { opacity: 0, yPercent: 13, duration: 1.3 },
      0
    )
    .from(
      "#MenuWrap nav li a",
      { opacity: 0, yPercent: 70, duration: 1.3, stagger: 0.22 },
      0.31
    )
    .from(
      "#social a span img",
      { opacity: 0, yPercent: 100, duration: 1.52, stagger: 0.22 },
      0.31
    ),
    $("#MobileMenuNav h1").click(function () {
      e.reversed(!e.timeScale(1).play()),
        $("#MenuWrap").css({ "pointer-events": "all" })
    }),
    $("#MenuWrap").click(function () {
      e.reversed(!e.timeScale(3.1).reversed()),
        $("#MenuWrap").css({ "pointer-events": "none" })
    })
}
function HomePage() {
  $("#HomePage nav li:nth-child(1) a").attr("href", "#MyWorks"),
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#HomePage",
          toggleActions: "play reverse play reverse",
          onToggle: e => e.animation.timeScale(e.isActive ? 1 : -1.3),
          start: "0% 13%",
          end: "100% 70%",
        },
      })
      .from(
        "#HomePage #HiThere h1 .char",
        {
          opacity: 0,
          yPercent: 50,
          duration: 2.2,
          ease: "power3.out",
          stagger: 0.13,
        },
        0
      )
      .from(
        "#HomePage #intro h2 span .char",
        {
          opacity: 0,
          yPercent: 100,
          ease: "power3.out",
          duration: 2.2,
          stagger: 0.13,
        },
        0.5
      )
      .from(
        "#HomePage #intro h5 span .word",
        {
          opacity: 0,
          yPercent: 100,
          ease: "power3.out",
          duration: 2.2,
          stagger: 0.13,
        },
        1.5
      )
      .from(
        "#HomePage #logo h3,#HomePage #MobileMenuNav #Mobilelogo h3",
        { opacity: 0, yPercent: 100, ease: "power3.out", duration: 2.2 },
        3
      )
      .from(
        "#HomePage #MobileMenuNav h1 span",
        { opacity: 0, yPercent: 100, ease: "power3.out", duration: 2.2 },
        3
      )
      .from(
        "#HomePage nav li a",
        {
          opacity: 0,
          yPercent: 100,
          ease: "power3.out",
          duration: 2.2,
          stagger: 0.31,
        },
        3
      )
      .from(
        "#HomePage #social a span",
        {
          opacity: 0,
          yPercent: 100,
          ease: "power3.out",
          duration: 2.2,
          stagger: 0.31,
        },
        3
      )
      .from(
        "#HomePage #codeby p",
        {
          opacity: 0,
          yPercent: 100,
          ease: "power3.out",
          duration: 2.2,
          stagger: 0.31,
        },
        3
      )
      .from(
        "#HomePage #scrolldown span p",
        { opacity: 0, yPercent: 100, ease: "power2.out", duration: 2.2 },
        3
      )
}
function HomePageX() {
  $("#HomePage nav li:nth-child(1) a").attr("href", "#MyWorksX")
}
function MyWorks() {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#MyWorks",
        toggleActions: "play reverse play reverse",
        onToggle: e => e.animation.timeScale(e.isActive ? 1 : -1.3),
        start: "0% 70%",
        end:
          "+=" +
          (document.querySelector("#ProjectWrap").scrollWidth -
            0.3 * window.innerWidth),
      },
    })
    .from(
      "#MyWorks #MyWorksBG h1 .char",
      {
        opacity: 0,
        yPercent: 50,
        duration: 2.2,
        ease: "power3.out",
        stagger: 0.13,
      },
      0
    )
  let e = gsap.utils.toArray(".ProjectSlides")
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#MyWorks #ProjectWrap",
        pin: "#MyWorks",
        start: "0% 0%",
        end:
          "+=" +
          (document.querySelector("#MyWorks #ProjectWrap").scrollWidth -
            window.innerWidth),
        scrub: 1.3,
        snap: {
          snapTo: 1 / (e.length - 1),
          duration: { min: 0.13, max: 0.22 },
          delay: 0,
          ease: "power3.out",
        },
      },
    })
    .to(e, { xPercent: -100 * (e.length - 1), ease: "none" }),
    gsap.utils.toArray(".ProjectSlides").forEach(function (e, o) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: e,
            start: () => "top top-=" + (e.offsetLeft - 0.2 * window.innerWidth),
            end: () => "+=" + (e.offsetWidth - 0.6 * window.innerWidth),
            toggleActions: "play play play reverse",
          },
        })
        .from(
          e.querySelectorAll("h4 span .word"),
          {
            yPercent: 130,
            opacity: 0,
            duration: 1.3,
            ease: "power3.out",
            stagger: 0.13,
          },
          0
        )
        .from(
          e.querySelectorAll("h2 span .char"),
          { yPercent: 220, ease: "power3.out", duration: 1.3, stagger: 0.13 },
          0
        )
        .from(
          e.querySelectorAll("#ProjectImageWrap span "),
          { opacity: 0, duration: 0.013 },
          0
        )
        .from(
          e.querySelectorAll("#ProjectImageWrap span "),
          { height: 0, ease: "power3.inOut", duration: 1.3 },
          0
        )
        .from(
          e.querySelectorAll("#ProjectImageWrap span img"),
          { yPercent: -22, scale: 2.2, ease: "power1.inOut", duration: 1.3 },
          0
        )
        .from(
          e.querySelectorAll("#ViewCode"),
          { yPercent: 113, opacity: 0, duration: 1.3, ease: "power3.out" },
          0.8
        )
        .from(
          e.querySelectorAll("#ViewPage"),
          { yPercent: 113, opacity: 0, duration: 1.3, ease: "power3.out" },
          0.93
        )
    })
}

function ContactMe() {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#ContactMe",
        toggleActions: "play reverse play reverse",
        onToggle: e => e.animation.timeScale(e.isActive ? 1 : -1.3),
        start: "0% 70%",
        end: "100% 0%",
      },
    })
    .from(
      "#ContactMe #ContactMeBG h1 .char",
      {
        opacity: 0,
        yPercent: 50,
        duration: 2.2,
        ease: "power3.out",
        stagger: 0.13,
      },
      0
    )
    .from(
      "#ContactMe section h3 span .char",
      {
        opacity: 0,
        yPercent: 100,
        ease: "power3.out",
        duration: 2.2,
        stagger: 0.13,
      },
      0.5
    )
    .from(
      "#ContactMe section h4 span .word",
      {
        opacity: 0,
        yPercent: 100,
        ease: "power3.out",
        duration: 2.2,
        stagger: 0.13,
      },
      1.5
    )
    .from(
      "#ContactMe #logo a span",
      { opacity: 0, yPercent: 100, ease: "power3.out", duration: 2.2 },
      3
    )
    .from(
      "#ContactMe #EmailPhoneNoSocial #EmailnPhoneNoBorderTop",
      { width: 0, ease: "power2.out", duration: 2.2 },
      3
    )
    .from(
      "#ContactMe #EmailPhoneNoSocial p a span",
      {
        opacity: 0,
        yPercent: 100,
        ease: "power3.out",
        duration: 2.2,
        stagger: 0.31,
      },
      3
    )
    .from(
      "#ContactMe #social a span",
      {
        opacity: 0,
        yPercent: 100,
        ease: "power3.out",
        duration: 2.2,
        stagger: 0.31,
      },
      3.5
    )
    .from(
      "#ContactMe #address #AddressBorderTop",
      { width: 0, ease: "power2.out", duration: 3.5 },
      3
    )
    .from(
      "#ContactMe #address p span .word",
      {
        opacity: 0,
        yPercent: 100,
        ease: "power3.out",
        duration: 2.2,
        stagger: 0.31,
      },
      3.5
    )
}
function ColorAnimation() {
  let e = gsap.timeline({
    defaults: { ease: "power3.out", duration: 1.3, ease: "power3.out" },
    paused: !0,
    repeat: -1,
    yoyo: !0,
    repeatDelay: 80,
  })
  e
    .to(":root", { "--ColorLight1": "#0d0d0d" }, 4.4)
    .to(":root", { "--ColorLight2": "#121212" }, 4.2)
    .to(":root", { "--ColorLight3": "#1f1f1f" }, 4)
    .to(":root", { "--ColorDark3": "#e3e3e3" }, 4)
    .to(":root", { "--ColorDark2": "#ebebeb" }, 4.2)
    .to(":root", { "--ColorDark1": "#f2f2f2" }, 4.4)
    .set("#FiverrIcon img", { attr: { src: "Icon/FiverrBlack.svg" } }, 4.4)
    .set("#BehanceIcon img", { attr: { src: "Icon/BehanceBlack.svg" } }, 4.4)
    .set("#CodepenIcon img", { attr: { src: "Icon/CodepenBlack.svg" } }, 4.4)
    .set("#GithubIcon img", { attr: { src: "Icon/GithubBlack.svg" } }, 4.4)
    .fromTo(
      "#MyWorks #ProjectWrap #ProjectSlide h2 span",
      { WebkitTextStrokeColor: "#333333", color: "#ffffff" },
      { WebkitTextStrokeColor: "#0d0d0d", color: "#ebebeb" },
      4.2
    ),
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#ContactMe",
          toggleActions: "play none none none",
          start: "0% 22%",
          end: "31% 0%",
        },
      })
      .add(e.play(), 3.1)
}
function ContactMeX() {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#ContactMe",
        toggleActions: "play reverse play reverse",
        onToggle: e => e.animation.timeScale(e.isActive ? 1 : -1.3),
        start: "0% 70%",
        end: "100% 0%",
      },
    })
    .from(
      "#ContactMe #ContactMeBG h1 .char",
      {
        opacity: 0,
        yPercent: 50,
        duration: 2.2,
        ease: "power3.out",
        stagger: 0.13,
      },
      0
    )
    .from(
      "#ContactMe section h3 span .word",
      {
        opacity: 0,
        yPercent: 100,
        ease: "power3.out",
        duration: 2.2,
        stagger: 0.13,
      },
      0.5
    )
    .from(
      "#ContactMe section h4 span .word",
      {
        opacity: 0,
        yPercent: 100,
        ease: "power3.out",
        duration: 2.2,
        stagger: 0.13,
      },
      1.5
    )
    .from(
      "#ContactMe #EmailnAddressX p a span",
      {
        opacity: 0,
        yPercent: 100,
        ease: "power3.out",
        duration: 2.2,
        stagger: 0.31,
      },
      2
    )
    .from(
      "#ContactMe #EmailnAddressX #Address h1 .word, #ContactMe #EmailnAddressX #Address h2 .word",
      {
        opacity: 0,
        yPercent: 100,
        ease: "power3.out",
        duration: 2.2,
        stagger: 0.31,
      },
      2.2
    )
}
function ColorAnimationMobileTL() {
  gsap.set("#FiverrIcon img", { attr: { src: "Icon/FiverrBlack.svg" } }),
    gsap.set("#BehanceIcon img", { attr: { src: "Icon/BehanceBlack.svg" } }),
    gsap.set("#CodepenIcon img", { attr: { src: "Icon/CodepenBlack.svg" } }),
    gsap.set("#GithubIcon img", { attr: { src: "Icon/GithubBlack.svg" } })
  let e = gsap.timeline({
    defaults: { ease: "power3.out", duration: 1.3, ease: "power3.out" },
    paused: !0,
    repeat: -1,
    yoyo: !0,
    repeatDelay: 31,
  })
  e
    .to(":root", { "--ColorLight1": "#ffffff" }, 3.4)
    .to(":root", { "--ColorLight2": "#cccccc" }, 3.2)
    .to(":root", { "--ColorLight3": "#bfbfbf" }, 3)
    .to(":root", { "--ColorDark3": "#404040" }, 3)
    .to(":root", { "--ColorDark2": "#333333" }, 3.2)
    .to(":root", { "--ColorDark1": "#000000" }, 3.4)
    .set("#FiverrIcon img", { attr: { src: "Icon/FiverrWhite.svg" } }, 3.4)
    .set("#BehanceIcon img", { attr: { src: "Icon/BehanceWhite.svg" } }, 3.4)
    .set("#CodepenIcon img", { attr: { src: "Icon/CodepenWhite.svg" } }, 3.4)
    .set("#GithubIcon img", { attr: { src: "Icon/GithubWhite.svg" } }, 3.4),
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#ContactMe",
          toggleActions: "play none none none",
          start: "0% 22%",
          end: "31% 0%",
        },
      })
      .add(e.play(), 3.1)
}
function ParallaxAnimation() {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#HomePage",
        start: "0% 0%",
        end: () => `+=${document.querySelector("#HomePage").offsetHeight}`,
        scrub: 0,
      },
    })
    .to("#HomePage #HiThere h1", { yPercent: 22, ease: "none" }, 0)
    .from("#MyWorks #MyWorksBG h1", { yPercent: -22, ease: "none" }, 0),
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#ContactMe",
          start: "0% 100%",
          end: "100% 100%",
          scrub: 0,
        },
      })
      .to("#MyWorks #MyWorksBG h1", { yPercent: 22, ease: "none" }, 0)
      .from("#ContactMe #ContactMeBG h1", { yPercent: -22, ease: "none" }, 0)
}
Splitting(),
  gsap.registerPlugin(ScrollTrigger),
  (window.onload = () => {
    window.matchMedia("(max-width: 480px)").matches
      ? (PageLoadingAnimation(),
        Menu(),
        ColorAnimationMobileTL(),
        HomePage(),
        MyWorksX(),
        ContactMeX(),
        ParallaxAnimation())
      : window.matchMedia("(max-width: 1080px)").matches
      ? (PageLoadingAnimation(),
        ColorAnimationMobileTL(),
        HomePage(),
        HomePageX(),
        MyWorksX(),
        ContactMe(),
        ParallaxAnimation())
      : (PageLoadingAnimation(),
        Cursor(),
        HomePage(),
        MyWorks(),
        ContactMe(),
        ParallaxAnimation(),
        ColorAnimation())
  })
