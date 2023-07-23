import { Game } from '@pages/Game'
import NotFound from '@pages/NotFound'

export const publicRoutes = {
  HomePage: {
    path: '/',
    element: <Game />,
  },
  NotFound: {
    path: '*',
    element: <NotFound />,
  },
}
