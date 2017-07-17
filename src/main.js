import Vue from 'vue'
import Vonic from 'vonic'

// Page Components
import About from './components/About.vue'
import Menu from './components/Menu.vue'
import Accounting from './components/Accounting.vue'
import Stat from './components/Stat.vue'
import Welcome from './components/Welcome.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Index from './components/Index.vue'

// Routes
const routes = {
    '/': {
        component: Index,
        subRoutes: {
            '/menu': {
                component: Menu
            },
            '/accounting': {
                component: Accounting
            },
            '/stat': {
                component: Stat
            }
        }
    },
    '/about': {
        component: About
    },
    '/welcome': {
        component: Welcome
    },
    '/login': {
        component: Login
    },
    '/register': {
        component: Register
    }
};

Vue.use(Vonic.app, {routes: routes, defaultRouteUrl: '/'});
