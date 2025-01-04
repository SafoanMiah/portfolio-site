import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AccentColorProvider } from './context/AccentColorContext'

createRoot(document.getElementById("root")!).render(
    <AccentColorProvider>
        <App />
    </AccentColorProvider>
);
