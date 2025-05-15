// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App'
// import Router from './routes/index.tsx'
// javascript 파일 특성상, 'index' 라는 파일은 선언 안해줘도 알아서 이걸 먼저 찾아주기 때문에 생략 가능.
import Router from './routes'

createRoot(document.getElementById('root')!).render(
  <>
    <Router />
  </> // Fragment. Rendering 이 안되는 tag. 개발용
)
