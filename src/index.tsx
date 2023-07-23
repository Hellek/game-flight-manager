import { createRoot } from 'react-dom/client'

import '@models/init'
import App from '@layout/App'

createRoot(document.getElementById('root')!).render(<App />)
