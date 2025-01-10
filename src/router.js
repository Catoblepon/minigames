import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Homepage',
        component: () => import('./home.vue')
    },
    {
        path: '/tictactoe',
        name: 'TicTacToe',
        component: () => import('./minigames/TicTacToe.vue')
    },
    {
        path: '/guessthenumber',
        name: 'Guess the number',
        component: () => import('./minigames/GuessTheNumber.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;