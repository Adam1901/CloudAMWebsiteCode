<template>
  <div :class="layoutClass" class="auth-layout">
    <base-nav
      v-model="showMenu"
      type="light"
      :transparent="true"
      menu-classes="justify-content-end"
      class="navbar-horizontal navbar-main"
      expand="lg"
    >
      <div slot="brand" class="navbar-wrapper">
        <nuxt-link class="navbar-brand" to="/">
          <img id='content-desktop' src="/img/brand/cloudam.png" alt="Logo white" style="width: 150px; !important; height: 114px;!important;">
        </nuxt-link>
      </div>

      <template>
        <div class="navbar-collapse-header">
          <div class="row bg-primary">
            <div class="col-6 collapse-brand">
              <nuxt-link to="/">
                <img src="/img/brand/cloudam.png" alt="Logo green" style="width: 150px; !important; height: 114px;!important;">
              </nuxt-link>
            </div>
            <div class="col-6 collapse-close">
              <button type="button" class="navbar-toggler" @click="showMenu = false">
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>

        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <nuxt-link to="/" class="nav-link">
              <span class="nav-link-inner--text">Home</span>
           </nuxt-link>
         </li>

         <li class="nav-item">
           <nuxt-link to="/trackandtrace" class="nav-link">
             <span class="nav-link-inner--text">Track and Trace</span>
            </nuxt-link>
          </li>

          <li class="nav-item">
            <nuxt-link to="/que" class="nav-link">
              <span class="nav-link-inner--text">Que</span>
            </nuxt-link>
          </li>

          <li class="nav-item">
            <nuxt-link to="/threec" class="nav-link">
              <span class="nav-link-inner--text">threeC.tv</span>
            </nuxt-link>
          </li>

        </ul>
        <hr class="d-lg-none">
        <ul class="navbar-nav align-items-lg-center ml-lg-auto">
          <li class="nav-item">
            <a class="nav-link nav-link-icon" href="https://github.com/adam1901" target="_blank" rel="noopener" aria-label="Github">
              <i class="fab fa-github"></i>
              <span class="nav-link-inner--text d-lg-none">Github</span>
            </a>
          </li>
        </ul>
      </template>
    </base-nav>

    <div class="main-content">
      <nuxt></nuxt>
    </div>

    <content-footer></content-footer>
  </div>
</template>
<script>
import BaseNav from '~/components/argon-core/Navbar/BaseNav.vue';
import ContentFooter from "~/components/layouts/argon/ContentFooter";

export default {
  components: {
    BaseNav,
    ContentFooter
  },
  props: {
    backgroundColor: {
      type: String,
      default: 'black'
    }
  },
  data() {
    return {
      showMenu: false,
      menuTransitionDuration: 250,
      year: new Date().getFullYear(),
      pageClass: 'login-page',
    };
  },
  computed: {
    title() {
      return `${this.$route.name} Page`;
    },
    layoutClass() {
      let exceptions = ['index', 'home']
      if (!exceptions.includes(this.$route.name)) {
        return 'bg-default'
      } else {
        return ''
      }
    }
  },
  methods: {
    closeMenu() {
      document.body.classList.remove('nav-open');
      this.showMenu = false;
    },
  },
  watch: {
    '$route.path'() {
      if (this.showMenu) {
        this.closeMenu();
      }
    }
  }
};
</script>
<style lang="scss">
.auth-layout {
  min-height: 100vh;
}

#content-desktop {
  display: block;
}

@media screen and (max-width: 1000px) {
  #content-desktop {
    display: none;
  }

}
</style>
