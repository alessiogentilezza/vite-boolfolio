import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import ProjectCard from './pages/ProjectCard.vue';
import AppContact from './pages/AppContact.vue';
import SingleProject from './pages/SingleProject.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter(
    {
        history: createWebHistory(),
        routes: [
            {
                path: '/',
                name: 'home',
                component: AppHome
            },
            {
                path: '/progetti',
                name: 'projects',
                component: ProjectCard
            },
            {
                path: '/contatti',
                name: 'contact',
                component: AppContact
            },
            {
                path: '/progetti/:slug',
                name: 'single-project',
                component: SingleProject
            },
            {
                path: '/:pathMatch(.*)*',
                name: 'not-found',
                component: NotFound
            }

        ]
    }
);

export { router };