import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import PrivacyPolicy from "../views/PrivacyPolicy";

const Home = () => import('../views/Home')
const About = () => import('../views/About')
const Contact = () => import('../views/Contact')
const Services = () => import('../views/Services')
const NotFound = () => import('../views/NotFound')

const siteUrl = 'https://abersoft.se'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'Abersoft Technologies — Skapa något fantastiskt',
      metaTags: [
        {
          name: 'description',
          content: 'Skapa något fantastiskt. MVPs, Appar, Hemsidor & Mjukvara, inga problem, vi fixar det.'
        },
        {
          property: 'og:description',
          content: 'Skapa något fantastiskt. MVPs, Appar, Hemsidor & Mjukvara, inga problem, vi fixar det.'
        },
        {
          property: 'og:image',
          content: `${siteUrl}${require('../assets/abersoft-og-image.png')}`
        },
        {
          property: 'og:title',
          content: 'Abersoft Technologies — Skapa något fantastiskt'
        }
      ]
    },
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: 'Abersoft Technologies — Om Oss',
      metaTags: [
        {
          name: 'description',
          content: 'Mer information om Abersoft. Möt teamet bakom Abersoft.'
        },
        {
          property: 'og:description',
          content: 'Mer information om Abersoft. Möt teamet bakom Abersoft.'
        },
        {
          property: 'og:image',
          content: `${siteUrl}${require('../assets/abersoft-og-image.png')}`
        },
        {
          property: 'og:title',
          content: 'Abersoft Technologies — Om Oss'
        }
      ]
    },
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    meta: {
      title: 'Abersoft Technologies — Kontakta Oss',
      metaTags: [
        {
          name: 'description',
          content: 'Redo att jobba med oss? Har du några funderingar, fyll i formuläret. Vi ser fram emot att höra mer om er.'
        },
        {
          property: 'og:description',
          content: 'Redo att jobba med oss? Har du några funderingar, fyll i formuläret. Vi ser fram emot att höra mer om er.'
        },
        {
          property: 'og:image',
          content: `${siteUrl}${require('../assets/abersoft-og-image.png')}`
        },
        {
          property: 'og:title',
          content: 'Abersoft Technologies — Kontakta Oss'
        }
      ]
    },
    component: Contact
  },
  {
    path: '/services',
    name: 'Services',
    meta: {
      title: 'Abersoft Technologies — Tjänster',
      metaTags: [
        {
          name: 'description',
          content: 'Vi gör dina ideér till verklighet. Skapa innovativa produkter så du kan nå dina kunder som är mer digitala än någonsin.'
        },
        {
          property: 'og:description',
          content: 'Vi gör dina ideér till verklighet. Skapa innovativa produkter så du kan nå dina kunder som är mer digitala än någonsin.'
        },
        {
          property: 'og:image',
          content: `${siteUrl}${require('../assets/abersoft-og-image.png')}`
        },
        {
          property: 'og:title',
          content: 'Abersoft Technologies — Tjänster'
        }
      ]
    },
    component: Services
  },
  {
    path: '/privacy-policy',
    name: 'Villkor',
    meta: {
      title: 'Abersoft Technologies — Villkor',
      metaTags: [
        {
          name: 'description',
          content: 'This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.'
        },
        {
          property: 'og:description',
          content: 'This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.'
        },
        {
          property: 'og:image',
          content: `${siteUrl}${require('../assets/abersoft-og-image.png')}`
        },
        {
          property: 'og:title',
          content: 'Abersoft Technologies — Villkor'
        }
      ]
    },
    component: PrivacyPolicy
  },
  {
    path: '*',
    name: 'Page Not Found',
    meta: {
      title: 'Abersoft Technologies — Sidan hittas inte',
      metaTags: [
        {
          name: 'description',
          content: 'Hej kompis! Du verkar förlorad. Tyvärr, men vi kan inte hitta den sida du letar efter.'
        },
        {
          property: 'og:description',
          content: 'Hej kompis! Du verkar förlorad. Tyvärr, men vi kan inte hitta den sida du letar efter.'
        },
        {
          property: 'og:image',
          content: `${siteUrl}${require('../assets/abersoft-og-image.png')}`
        },
        {
          property: 'og:title',
          content: 'Abersoft Technologies — Sidan hittas inte'
        }
      ]
    },
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes
})

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start()
  }
  next()
})

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create, so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
      // Add the meta tags to the document head.
      .forEach(tag => document.head.appendChild(tag));

  next();
});

router.afterEach(() => {
  NProgress.done()
})

export default router
