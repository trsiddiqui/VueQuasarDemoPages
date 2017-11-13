/* eslint-disable */
import {mapMutations} from 'vuex'
import Vivus from 'vivus'
// import logoData from './../logoData'
import { login, roles } from '../../../utils/auth.js'
import drawer from '../../../layout/drawer/drawer.vue'
import { required } from 'vuelidate/lib/validators'
import {
  Loading,
  QSpinnerGears,
  Platform,
  QRadio,
  QCard,
  QCardTitle,
  QBtn,
  QCardActions,
  QInput,
  QList,
  QCollapsible,
  Toast,
} from 'quasar'
export default {
  components: { 
    QRadio,
    QCardTitle,
    QCard,
    QBtn,
    QCardActions,
    QInput,
    QList,
    QCollapsible,
    required,
    Toast,
    QSpinnerGears
  },
  validations: {
    email: {
      required
    },
    password: {
      required
    }
  },
  mounted () {
    GlobalEventBus.$emit('hideLeft', this.$root.masterPage);
  },
  beforeDestroy () {
  },
  computed: {
    heightSize (){
      if (Platform.is.desktop) {
        return 'items-center'
      }
      return ''
    },
    finalBgColor () {
      return `bg-${this.bgColor}-${this.toneColor}`
    }
    // logoMethod () {
    //   return logoData[this.logo]
    // }
  },
  data () {
    return {
      // logos: Object.keys(logoData),
      logo: 'Digitalizer',
      email: '',
      password: '',
      bgColor: 'purple',
      toneColor: 10,
      colors: ['purple', 'blue', 'red', 'green', 'amber'],
      colorTones: ['2', '4', '6', '8', '10'],
      buttonClasses: ['normal','outline', 'clear', 'push', 'bordered', 'round'],
      buttonClass: 'normal',
      vivus: ''
    }
  },
  methods: {
    login () {
      if (this.$v.email.$invalid || this.$v.password.$invalid) {
        Toast.create['negative']({
          html: 'Please enter credentials to log in'
        })
        return
      }
      var name = this.$route.query['redirect'] ? this.$route.query['redirect'] : '/'
      login(this.email, this.password, name, this.$root) 
    },
    clear () {
      this.email = ''
      this.password = ''
    }
  }
}
