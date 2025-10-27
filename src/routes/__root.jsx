import { Router, RootRoute, Route, Outlet } from '@tanstack/react-router'
import Home from './index'
import About from './About'
import Contact from './contact'
import { Link } from '@tanstack/react-router'

const rootRoute = new RootRoute({
  component: () => (
    <div>
      <nav style={{ display: 'flex', gap: '1rem', marginBottom: '20px' }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Outlet />
    </div>
  ),
})

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
})

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
})

const contactRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: Contact,
})

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute, contactRoute])
export const router = new Router({ routeTree })
