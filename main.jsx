import { createRoot } from 'react-dom/client'
import { App } from './src/App'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('app')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)