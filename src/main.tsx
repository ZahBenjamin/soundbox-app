import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SoundButton from './SoundButton.tsx'
import snareSound from './assets/sounds/snare-chop_C_major.wav'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SoundButton soundFile={snareSound}/>
  </StrictMode>,
)
