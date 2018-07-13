/* eslint-disable */
let fullScreenChangeListenerFunc = (cb) => {
  let fullState = document.fullscreenElement || document.msFullscreenElement || document.mozFullScreen || document.webkitIsFullScreen
  cb(fullState)
}

const fullScreenChange = (cb) => {
  document.addEventListener('fullscreenchange', () => {
    fullScreenChangeListenerFunc(cb)
  })
  document.addEventListener('msfullscreenchange', () => {
    fullScreenChangeListenerFunc(cb)
  })
  document.addEventListener('mozfullscreenchange', () => {
    fullScreenChangeListenerFunc(cb)
  })
  document.addEventListener('webkitfullscreenchange', () => {
    fullScreenChangeListenerFunc(cb)
  })
}

const removeFullScreenChange = () => {
  document.removeEventListener('fullscreenchange')
  document.removeEventListener('msfullscreenchange')
  document.removeEventListener('mozfullscreenchange')
  document.removeEventListener('webkitfullscreenchange')
}

const fullScreen = (element = document, handleFullChange) => {
  let el = document.documentElement
  let rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen
  if (typeof rfs != "undefined" && rfs) {
    rfs.call(element)
  } else if (typeof window.ActiveXObject != "undefined") {
    let wscript = new ActiveXObject("WScript.Shell")
    if (wscript != null) {
      wscript.SendKeys("{F11}")
    }
  }
}

const fullExit = () => {
  // let element = document.getElementById("app")
  let rfs = document.exitFullscreen || document.webkitCancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen
  if (typeof rfs != "undefined" && rfs) {
    rfs.call(document)
  } else if (typeof window.ActiveXObject != "undefined") {
    let wscript = new ActiveXObject("WScript.Shell")
    if (wscript != null) {
      wscript.SendKeys("{F11}")
    }
  }
}

export {
  removeFullScreenChange,
  fullScreenChange,
  fullScreen,
  fullExit
}
