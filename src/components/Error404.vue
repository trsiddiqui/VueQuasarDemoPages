<template>
  <div class="error-page window-height window-width bg-light column items-center">
    <div class="error-code bg-primary flex items-center justify-center">
      404
    </div>
    <q-card>
      <q-card-media>
        <q-icon name="warning" size="120px" />
      </q-card-media>
      <q-card-title>
        No page found
      </q-card-title>
      <q-card-main>
        <p class="text-faded">Nothing here</p>
      </q-card-main>
      <q-card-separator />
      <q-card-actions>
        <q-btn flat round small><q-icon name="event" /></q-btn>
        <div class="col"></div>
        <q-btn flat color="primary" href="\">Reserve</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script type="text/javascript">
import {
  QCard,
  QCardTitle,
  QBtn,
  QCardActions,
  QInput,
  QList,
  QCollapsible,
  QIcon,
  QCardMain,
  QCardMedia,
  QCardSeparator,
  Toast
} from 'quasar'
export default {
  components: {
    QCardTitle,
    QCard,
    QBtn,
    QCardActions,
    QInput,
    QList,
    QCollapsible,
    QIcon,
    QCardMain,
    QCardMedia,
    QCardSeparator,
    Toast
  },
  data () {
    return {
      canGoBack: window.history.length > 1
    }
  },
  methods: {
    goBack () {
      window.history.go(-1)
    }
  }
}
</script>

<style lang="stylus">
.error-page
  .error-code
    height 50vh
    width 100%
    padding-top 15vh
    font-size 30vmax
    color rgba(255, 255, 255, .2)
    overflow hidden
  .error-card
    margin-top -25px
    width 90vw
    max-width 600px
    padding 50px
    i
      font-size 5rem
</style>
