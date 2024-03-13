// ■ 変更: App.vue -> App.tsx化
import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import HeaderView from '@/views/common/HeaderView'
import FooterView from '@/views/common/FooterView'
import SidebarView from '@/views/common/SidebarView'

export default defineComponent({
  components: {
    RouterLink,
    RouterView
  },
  setup() {
    return () => (
      <div>
        <div class="grid">
          <div class="g-col-12 g-col-md-12">
            <HeaderView />
          </div>
        </div>
        <div class="grid">
          <div class="g-col-12 g-col-md-12">
            <nav>
              <RouterLink to="/">Home</RouterLink>
              <RouterLink to="/about">About</RouterLink>
            </nav>
          </div>
        </div>
        <div class="grid">
          <div class="g-col-4 g-col-md-4">
            <SidebarView />
          </div>
          <div class="g-col-8 g-col-md-8">
            <RouterView />
          </div>
        </div>
        <div class="grid">
          <div class="g-col-12 g-col-md-12">
            <FooterView />
          </div>
        </div>
      </div>
    )
  }
})

/*
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
*/
