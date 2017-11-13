<template>
  <q-card class="bg-white text-black" id="menu">
    <q-card-main>
      <div class="quote">
        <div class="row">
          <div class="col-4">
          </div>
          <div class="col">
            <h5>{{name}}</h5>
          </div>
        </div>
      </div>
      <div class="text-right">
        <q-btn color="faded" outline @click="logoutt">Logout</q-btn>
      </div>
    </q-card-main>
  </q-card>
</template>
<script>
import { QBtn, QList, QItemTile, QItem, QItemSide, QItemMain, QCardMain, QCard } from 'quasar'
import { logout } from '../utils/auth.js'
export default {
  props: {
    name: String,
    email: String
  },
  components: { QBtn, QList, QItemTile, QItem, QItemSide, QItemMain, QCardMain, QCard },
  methods: {
    logoutt () {
      logout(this.$root)
    }
  }
}
</script>
<style scoped>
#menu {
  position: absolute;
  top: -0.5vw;
  z-index: 3000;
  right: 0px;
  width: 380px;
}

img {
  width: 86px;
  border-radius: 50%;
}

.quote {
  border-left: 5px solid #7FD7FB !important;
}
</style>
