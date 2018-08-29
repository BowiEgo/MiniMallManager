import Vue from 'vue'
import msgboxVue from './MessageBox.vue'
import { resolve } from '../../../../../../../../node_modules/url';
import { reject } from 'when';

const MessageBoxConstructor = Vue.extend(msgboxVue)

let instance, currentMsg
let msgQueue = []

const defaultCallBack = action => {
  console.info('defaultCallBack-action', action)
  if (currentMsg) {
    // let callback = currentMsg.callback
    if (currentMsg.resolve) {
      currentMsg.resolve()
    }
  }
}

const initInstance = () => {
  instance = new MessageBoxConstructor({
    el: document.createElement('div')
  })
  instance.callback = defaultCallBack
}

const showNextMsg = () => {
  if (!instance) {
    initInstance()
  }

  if (msgQueue.length > 0) {
    currentMsg = msgQueue.shift()

    let options = currentMsg.options
    for (let prop in options) {
      if (options.hasOwnProperty(prop)) {
        instance[prop] = options[prop]
      }
    }
    if (options.callback === undefined) {
      instance.callback = defaultCallBack
    }
    let oldCb = instance.callback

    instance.callback = (action, instance) => {
      oldCb(action, instance)
      // showNextMsg()
    }
  }

  document.body.appendChild(instance.$el)

  Vue.nextTick(() => {
    instance.visible = true
  })
}

const MessageBox = (options, callback) => {
  return new Promise((resolve, reject) => {
    msgQueue.push({
      options: options,
      callback: callback,
      resolve: resolve,
      reject: reject
    })

    showNextMsg()
  })
}

MessageBox.confirm = (message, title, options) => {
  console.info('MessageBox-options', options)
  return MessageBox({
    title: title,
    message: message,
    transitionName: 'bounce-in',
    $type: 'confirm',
    showCancelButton: true
  })
}

// MessageBox.close = () => {
//   instance.doClose()
//   instance.visible = false
// }

export default MessageBox
export {
  MessageBox
}