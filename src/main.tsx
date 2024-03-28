import React from 'react'
import ReactDOM from 'react-dom/client'
import 'reset-css' // 这个要放在引入 App 之前, 这样App的样式才能覆盖这个, 生效
// UI 框架样式
// 全局样式
import '@/assets/styles/global.scss'
// 组件样式
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
