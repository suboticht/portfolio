import Home from '../components/Home';
import About from '../components/About';
import Project from '../components/Project';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/project',
        name: 'Project',
        component: Project
    },
]

export default routes;