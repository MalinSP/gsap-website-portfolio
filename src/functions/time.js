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

export function hoverAnimation(tl, hamburgerRef, wordRef) {
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
      hamburgerRef.current,
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
