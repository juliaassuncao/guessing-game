import styles from "./app.module.css"

import { Header } from "./components/Header"
import { Tip } from "./components/Tip"
import { Letter } from "./components/Letter"
import { Input } from "./components/Input"

export function App() {

  function handleRestartgame() {
    alert("Reiniciar o jogo!")
  }

  return(
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestartgame} />
        
        <Tip tip="Biblioteca para criar interfaces Web com Javascript." />
        
        <div className={styles.word}>
          <Letter value="R" />
          <Letter value="E" />
          <Letter value="A" />
          <Letter value="C" />
          <Letter value="T" />
        </div>

        <h4>Palpite</h4>
        <div>
          <Input autoFocus maxLength={1} placeholder="?" />
        </div>
      </main>
    </div>
  )
} 