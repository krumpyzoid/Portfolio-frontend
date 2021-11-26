import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import Messages from '../views/Messages.vue'
import Testimonials from '../views/Testimonials.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/torus',
    name: 'torus',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Knot.vue')
  },
  {
    path: '/krumpadmin',
    name: 'Admin',
    component: Admin,
    children: [
      {
        path: 'messages',
        name: 'Messages',
        component: Messages
      },
      {
        path: 'messages/:id',
        name: 'ViewMessage',
        component: () => import('../views/ViewMessage.vue')
      },
      {
        path: 'testimonials',
        name: 'Testimonials',
        component: Testimonials,
      },
      {
        path: 'testimonials/:id/edit',
        name: 'EditTestimonial',
        component: () => import('../views/Testimonial.vue')
      },
      {
        path: 'testimonials/new',
        name: 'NewTestimonial',
        component: () => import('../views/Testimonial.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
