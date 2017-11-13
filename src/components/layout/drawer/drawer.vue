<template>
  <div>
    <q-list>
      <q-collapsible group="links" :label="index" v-for="(links, index) in groupedLinks" :key="index" class="collapsible-no-padding">
        <q-list no-border>
          <q-item v-for="(link, index) in links.routes" :key="index" :to="{ name: link.routeName }" link>
            <q-item-side>
              <q-item-tile avatar>
                <q-icon :name="`${link.materialIcon}`" size="30px"/>
              </q-item-tile>
            </q-item-side>
            <q-item-main>
              <q-item-tile label class="light-paragraph">{{link.name}}</q-item-tile>
            </q-item-main>
          </q-item>
        </q-list>
      </q-collapsible>
    </q-list>
  </div>
</template>
<script>
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
  QItemTile,
  QInnerLoading
} from 'quasar'
import { isLoggedIn } from 'components/utils/auth.js'
import { groupedLinksAuthorized, groupedLinksUnauthorized } from 'configs/sideBarLinks.js'
export default {
  name: 'drawer',
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
    QItemTile,
    QInnerLoading
  },
  props: ['loggedIn'],
  data () {
    return {
    }
  },
  beforeCreate () {
    var result = isLoggedIn()
    if (result) {
      this.groupedLinks = groupedLinksAuthorized
    }
    else {
      this.groupedLinks = groupedLinksUnauthorized
    }
  },
  watch: {
    loggedIn (value) {
      this.updateLinksOnLogin(value)
    }
  },
  methods: {
    toggleLeft () {
      this.$refs.layout.toggleLeft()
    },
    updateLinksOnLogin (result) {
      if (result) {
        this.groupedLinks = groupedLinksAuthorized
      }
      else {
        this.groupedLinks = groupedLinksUnauthorized
      }
      this.$forceUpdate()
    }
  }
}
</script>
<style scoped>
.router-link-active {
  border-right: 3px solid #7FD7FB;
  color: #2196F3;
}

.collapsible-no-padding {
  padding: 0;
}

#logo-background {
  position: absolute;
  left: 20px;
  bottom: 0;
  width: 250px;
  opacity: 0.1
}
</style>
