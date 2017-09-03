import Vue from 'vue'
import Vonic from 'vonic'
import resource from 'vue-resource'

// Page Components
import About from './components/About.vue'
import Menu from './components/Menu.vue'
import Accounting from './components/Accounting.vue'
import Stat from './components/Stat.vue'
import Welcome from './components/Welcome.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Index from './components/Index.vue'
import ChangePassword from './components/ChangePassword.vue'
import EditInfo from './components/EditInfo.vue'
import NewRecord from './components/NewRecord.vue'
import EditRecord from './components/EditRecord.vue'
import ResetPassword from './components/ResetPassword.vue'

// Routes
const routes = {
    '/accounting/new': {
        component: NewRecord
    },
    '/accounting/:accounting_id/edit': {
        component: EditRecord
    },
    '/about': {
        component: About
    },
    "/user/edit": {
        component: EditInfo
    },
    "/password/edit": {
        component: ChangePassword
    },
    '/welcome': {
        component: Welcome
    },
    '/login': {
        component: Login
    },
    '/register': {
        component: Register
    },
    '/password/new': {
        component: ResetPassword
    },
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
    }
};

Vue.use(resource);
Vue.http.options.root = "http://localhost:3000";

Vue.use(Vonic.app, {routes: routes, defaultRouteUrl: '/'});