import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/router'
import { store } from './app/store/index'
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "/node_modules/primeflex/primeflex.css"
import 'primeicons/primeicons.css';
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={ store }>
      <RouterProvider router={ router }/>
    </Provider>
  </StrictMode>
)
