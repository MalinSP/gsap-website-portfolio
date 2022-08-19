import gsap from "gsap"

export function formatAMPM(date) {
  var hours = date.getHours()
  var minutes = date.getMinutes()
  var ampm = hours >= 12 ? "pm" : "am"
  hours = hours % 12
  hours = hours ? hours : 12 // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes
  var strTime = hours + ":" + minutes + ampm
  return strTime
}

export function hoverAnimation(tl, hamburgerMenuRef, wordRef) {
  return (tl.current = gsap
    .timeline({ paused: true })
    .to(wordRef.current, {
      autoAlpha: 1,
      y: "-50%",
      duration: 0.7,
      stagger: 0.5,
      ease: "expo.InOut",
      delay: 0.15,
      scale: 1,
    })
    .to(
      hamburgerMenuRef.current,
      {
        autoAlpha: 0,
        y: -10,
        stagger: 0.2,
        duration: 0.7,
        ease: "expo.InOut",
        scale: 0.5,
      },
      0
    ))
}

export function menuAnimation(tl, ...vars) {
  console.log(...vars)
  const targets = [...vars]
  console.log(targets)
  tl.current = gsap
    .timeline({ paused: true })
    .to(...vars, {
      y: 0,
      duration: 1,
      ease: "power3.inOut",
    })
    .to("#svg", { color: "#f7ede2", duration: 1 }, "<=0.5")
    .to(...vars, { color: "#f7ede2", duration: 1 }, 0)
    .to(
      ...vars,
      {
        x: 0,
        duration: 1.5,
        stagger: {
          amount: 0.4,
        },
        ease: "expo.inOut",
      },
      "<=0.5"
    )
  // .to(
  //   ".top h6 span",
  //   {
  //     y: 0,
  //     ease: "power4.inOut",
  //     // skewY: 7,
  //     duration: 1.2,
  //   },
  //   "<=0.9"
  // )
  // .to(
  //   ".top ul li a span",
  //   {
  //     y: 0,
  //     // autoAlpha: 0,
  //     ease: "power4.inOut",
  //     duration: 1.2,
  //     stagger: {
  //       amount: 0.4,
  //     },
  //   },
  //   "<"
  // )
}
