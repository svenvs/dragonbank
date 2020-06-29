import Vue from 'vue';
import VueRouter from 'vue-router';
import SavingsGoalsOverview from '../pages/SavingsGoalsOverview.vue';
import AddNewSavingsGoal from '../pages/AddNewSavingsGoal.vue';
import Login from '../pages/Login.vue';

import BuyWhat from '../components/BuyWhat.vue';
import HowExpensive from '../components/HowExpensive.vue';
import HowToSave from '../components/HowToSave.vue';
import SavingHelp from '../components/SavingHelp.vue';
import AlmostThere from '../components/AlmostThere.vue';
import NewGoalSuccess from '../components/NewGoalSuccess.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'SavingsGoalsOverview',
    component: SavingsGoalsOverview,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/nieuw-spaardoel',
    name: 'AddNewSavingsGoalStep',
    component: AddNewSavingsGoal,
    children: [
      { path: 'wat', component: BuyWhat },
      { path: 'hoe-duur', component: HowExpensive },
      { path: 'hoe-sparen', component: HowToSave },
      { path: 'hulp', component: SavingHelp },
      { path: 'bijna-klaar', component: AlmostThere },
      { path: 'jouw-nieuwe-spaardoel', component: NewGoalSuccess },
    ],
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && sessionStorage.loginStatus !== 'authenticated') {
    next({ name: 'Login' });
  } else next();
});

export default router;
