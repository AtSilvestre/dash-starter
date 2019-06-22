
const routes = [
  {
    path: '/',
    component: () => import('layouts/mainLayout.vue'),
    meta: { authRequired: true },
    children: [
      { path: '', name: 'dashboard.index', component: () => import('pages/index.vue') },
      { path: '/users', name: 'users.index', component: () => import('pages/user/components/user-main.vue') },
      { path: '/user/:id/edit', name: 'user.edit', component: () => import('pages/user/components/forms/user-form') },
      { path: '/user/create', name: 'user.new', component: () => import('pages/user/components/forms/user-form') }
    ]
  },
  {
    path: '/auth',
    component: () => import('layouts/authLayout.vue'),
    children: [
      { path: '', name: 'auth.index', component: () => import('pages/auth/auth.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/error404.vue')
  })
}

export default routes
