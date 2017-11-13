<template>
  <div id="q-app">
    <q-ajax-bar ref="bar" position="top" size="8"></q-ajax-bar>
    <q-layout :style="{ backgroundColor: backgroundColor}"
      ref="layout"
      :view="view"
      :reveal="reveal">
      <q-toolbar slot="header" class="bg-primary">
        <q-toolbar-title class="no-padding pointer" @click="$refs.layout.toggleLeft()">
          <div class="row xs-gutter">
            <div class="col-auto self-center">
              <button class="hidebtn hidden" @click="$refs.layout.toggleLeft()">...</button>
            </div>
            <div class="col-auto">
              <h5>First Vue App</h5>
            </div>
          </div>
        </q-toolbar-title>
        <q-btn class="relative-position" small round color="secondary" v-if="showForNow">
          <q-icon name="fa-envelope-o"></q-icon>
          <message-popover :posts="posts"></message-popover>
        </q-btn>
        <q-btn color="secondary" small round id="botao-menu" @click="toogleMenu" icon="menu" v-if="loggedIn"> </q-btn>
      </q-toolbar>
      <drawer slot="left" ref="oqmDrawer" v-bind:loggedIn="loggedIn"></drawer>
      <q-transition appear enter="flipInX" leave="flipOutX" duration="500">
        <user-menu v-on:logout="toogleMenu" v-if="showMenu" v-bind:name="name"></user-menu>
      </q-transition>
      <div class="layout-padding">
        <router-view></router-view>
      </div>
    </q-layout>
    <q-inner-loading :visible="showMenu" dark size="0" />
    <!--<div id="tooltipWindow" class="tooltipContainer">
      <div></div>
    </div>-->
  </div>
</template>
<script type="text/javascript">
import Drawer from '@/layout/drawer/drawer.vue'
import ContentHeader from './components/layout/content-header.vue'
import UserMenu from '@/layout/userMenu.vue'
import MessagePopover from '@/layout/messagePopover.vue'
import jQuery from 'jquery'
import { mapGetters } from 'vuex'
import { isLoggedIn, getUserId } from 'components/utils/auth.js'
import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QListHeader,
  QItem,
  QItemSide,
  QItemMain,
  QAjaxBar,
  QCollapsible,
  QSearch,
  QDatetime,
  QDataTable,
  QInput,
  QSelect,
  QTransition,
  QInnerLoading,
  Loading,
  QSpinnerGears,
  Toast
} from 'quasar'
export default {
  name: 'app',
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain,
    QAjaxBar,
    QCollapsible,
    QSearch,
    QDatetime,
    QDataTable,
    QInput,
    QSelect,
    QTransition,
    QInnerLoading,
    Drawer,
    ContentHeader,
    UserMenu,
    MessagePopover,
    jQuery,
    Loading,
    QSpinnerGears
  },
  mounted () {
    this.getPosts()
    this.$refs.layout.toggleLeft()
    this.loggedIn = isLoggedIn()
    this.name = getUserId()
    this.$root.masterPage = this
  },
  data () {
    return {
      showForNow: false,
      posts: [],
      showMenu: false,
      backgroundColor: 'rgb(249, 249, 249)',
      view: 'lHh Lpr lFf',
      reveal: true,
      loggedIn: false,
      name: ''
    }
  },
  computed: {
    ...mapGetters(['getLayoutNeeded', 'getMobileMode'])
  },
  methods: {
    toogleMenu () {
      this.showMenu = !this.showMenu
      setTimeout(() => {
        document.getElementsByClassName('dark')[0].addEventListener('click', () => {
          this.closeMenu()
        })
      }, 500)
    },
    closeMenu () {
      this.showMenu = false
    },
    getPosts () {
      this.$http.jsonplaceholder.get(`posts`)
        .then(response => { this.posts = response.data })
    },
    showLoginError () {
      Toast.create['negative']({
        html: 'Login failed with the provided credentials.'
      })
    },
    showLoader () {
      Loading.show()
    },
    hideLoader () {
      Loading.hide()
    }
  }
}
</script>

<style>
html,
body {
  max-width: 100%;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  height: 100%;
  min-width: 950px;
}

#logo {
  width: 122px;
  margin-top: 8px;
}

.q-toolbar {
  padding: 0px 12px;
  box-shadow: 0 2px 8px rgba(59, 89, 178, 0.2);
}

.q-card,
.layout-aside.fixed.on-layout {
  box-shadow: 0 2px 8px rgba(59, 89, 178, 0.2);
}

.collapsible-no-padding .q-collapsible-sub-item {
  padding: 0 0 0 0;
}

.collapsible-no-padding .q-item-label {
  font-weight: 300;
}

@media (min-width: 1000px) {
  .layout-padding {
      padding: 1rem 1rem;
      margin: auto;
  }
}

.q-if-label {
  top: 20px;
  font-size: 16px;
}

.hidebtn {
  position: fixed;
  z-index: 1;
  vertical-align: top;
  background: inherit;
  border: none;
  top: -11px;
}

.pointer {
  cursor: pointer;
}
.tooltipContainer {
  position: fixed;
  height: auto;
  width: auto;
  background: ghostwhite;
  padding: 10px;
}
</style>
