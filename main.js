import Game from './lib/game.js'
import * as P from 'pixi.js'

window.addEventListener('DOMContentLoaded', initGame)

function removeExistingGame() {
  const els = document.body.children
  if (els.length > 0) document.body.removeChild(els.item(0))
}

function init() {
  removeExistingGame()
  const app = new P.Application(
      window.outerWidth
    , window.outerHeight
    , { backgroundColor: 0x1099bb }
  )
  document.body.appendChild(app.view)
  return app
}

function initGame() {
  const app = init()
  const game = new Game(app)
  game.start()
}

if (module.hot) {
  module.hot.accept(function accept() {
    initGame()
  })
}
