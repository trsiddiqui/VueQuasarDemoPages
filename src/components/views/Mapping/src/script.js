import {
  QUploader,
  QTabs,
  QTab,
  QTabPane,
  Alert,
  QCheckbox,
  QAlert,
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
  QTooltip,
  QCard,
  QCardTitle,
  QCardMain,
  QCardSeparator,
  QToggle,
  QItemTitle,
  QItemTile,
  QFixedPosition,
  QModal,
  QStepper,
  QStep,
  QStepperNavigation,
  QInnerLoading,
  QOptionGroup,
  QPopover,
  QChip,
  QSpinnerRadio,
  QSpinnerHourglass,
  QAutocomplete,
  QLabel,
  Toast
} from 'quasar'
import jQuery from 'jquery'
// import { required } from 'vuelidate/lib/validators'
import mappings from './mappings.json'
import data from './data.json'
// import { serviceUris } from '../../../../configs/api.js'
// import { resourceStrings } from '../../../../configs/stringResources.js'
// import { getAccessToken } from '@/utils/auth.js'
import { GlobalEventBus } from '@/utils/globalevents.js'
// import EventBus from 'vertx3-eventbus-client'
export default {
  name: 'index',
  components: {
    QUploader,
    QTabs,
    QTab,
    QTabPane,
    QAutocomplete,
    QCheckbox,
    QAlert,
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
    QTooltip,
    QCard,
    QCardTitle,
    QCardMain,
    QCardSeparator,
    QToggle,
    QItemTitle,
    QItemTile,
    QFixedPosition,
    QModal,
    QStepper,
    QStep,
    QStepperNavigation,
    QInnerLoading,
    QOptionGroup,
    QPopover,
    QChip,
    QSpinnerRadio,
    QSpinnerHourglass,
    QLabel,
    Toast,
    jQuery
    // required
  },
  validations: {
  },
  data () {
    return {
      pastedCsv: '',
      editMode: false,
      data: data,
      mappings: [],
      mappingData: [],
      labSearchText: '',
      selectedLabsFrom: [],
      selectedLabsTo: [],
      selectedLab: [],
      saveDisabled: true,
      mappingColumns: [
        { label: 'From Code', field: 'fromCode', type: 'string', width: '60px', sort (a, b) { return (a > b) - (a < b) } },
        { label: 'From Description', field: 'fromDescription', width: '100px', sort (a, b) { return (a > b) - (a < b) } },
        { label: 'To Code', field: 'toCode', width: '60px', sort (a, b) { return (a > b) - (a < b) } },
        { label: 'To Description', field: 'toDescription', width: '100px', sort (a, b) { return (a > b) - (a < b) } },
        { label: 'Type', field: 'type', width: '40px', sort (a, b) { return (a > b) - (a < b) } },
        { label: 'Delete', field: 'mappingId', width: '30px' }
      ],
      mappingConfigs: {
        rowHeight: '55px',
        columnPicker: false,
        messages: {
          noData: 'No mappings defined'
        },
        pagination: {
          rowsPerPage: 5,
          options: [5, 10, 15, 30, 50, 500]
        }
      }
    }
  },
  methods: {
    populateMappings () {
      for (var index = 0; index < mappings.length; index++) {
        mappings[index].label = '<div class="row"><div class="col-6"><b>' + mappings[index].from.Name + '</b>' + (mappings[index].from.srcCode ? ' (' + mappings[index].from.srcCode + ')' : '') + '</div><div class="col"><i class="q-icon fa fa-arrows-h mapping-icon-middle-fix" aria-hidden="true"></i></div><div class="col-5 justify-end right-align">' + (mappings[index].to.srcCode ? '(' + mappings[index].to.srcCode + ') ' : '') + '<b>' + mappings[index].to.Name + '</b>' + '</div></div>'
      }
      this.mappings = mappings
    },
    getMap (map) {
      if (!map.data || (map.data && map.data.length === 0)) {
        map.data = this.data
        this.mappings.push({})
        this.mappings.splice(this.mappings.length - 1, 1)
      }
    },
    closeMap (map) {
    },
    emptyIfNotExists (a) {
      var exists = mappings.find(function (ele) {
        return ele.from.Name === a || ele.to.Name === a
      })
      if (!exists) {
        this.labSearchText = ''
      }
    },
    filterMappings () {
      var list = []
      var thisComponent = this
      if (this.selectedLabsFrom.length) {
        list = mappings.filter(function (ele) {
          return thisComponent.selectedLabsFrom.includes(ele.from.Name)
        })
        this.mappings = list
      }
      else {
        this.mappings = mappings
      }
      if (this.selectedLabsTo.length) {
        list = this.mappings.filter(function (ele) {
          return thisComponent.selectedLabsTo.includes(ele.to.Name)
        })
        this.mappings = list
      }
      if (!this.selectedLabsFrom.length && !this.selectedLabsTo.length) {
        this.mappings = mappings
      }
    },
    AddRow (map) {
      map.data.unshift({
        fromCode: '',
        toCode: '',
        fromDescription: '',
        toDescription: '',
        type: '',
        mappingId: Math.max.apply(Math, map.data.map(function (ele) { return ele.mappingId })) + 1
      })
      this.editMode = true
    },
    deleteRow (map, cell) {
      map.data = map.data.filter(function (ele) { return ele.mappingId !== cell.data })
    },
    modalClosed () {
      setTimeout(function () {
        if (jQuery('.modal:visible').length > 0) {
          jQuery('.modal:visible').hide()
        }
      }, 1)
    },
    openModal () {
      this.$refs.basicModal.open()
      window.setTimeout(function () {
        var mod = jQuery('.modal:visible')
        if (mod.length === 0) {
          jQuery('.modal').show()
        }
      }, 100)
    },
    handleFileSelection (evt) {
      var files = evt.target.files // The files selected by the user (as a FileList object).

      if (!files) {
        alert('<p>At least one selected file is invalid - do not select any folders.</p><p>Please reselect and try again.</p>')
        return
      }
      console.log(window.URL.createObjectURL(evt.target.files[0])) // Assumes "file" is some sort of graphics file type.
      console.log(evt.target.files[0].name)
      this.processFile(evt.target.files[0])
    }, // handleFileSelection
    dragOver (evt) {
      evt.stopPropagation()
      evt.preventDefault()
    },
    handleFileDrop (evt) {
      evt.stopPropagation() // Do not allow the drop event to bubble.
      evt.preventDefault() // Prevent default drop event behavior.

      var files = evt.dataTransfer.files // Grab the list of files dragged to the drop box.

      if (!files) {
        alert('<p>At least one selected file is invalid - do not select any folders.</p><p>Please reselect and try again.</p>')
        return
      }

      // "files" is a FileList of file objects. List a few file object properties:
      for (var i = 0; i < files.length; i++) {
        try {
          this.processFile(files[i]) // If anything goes awry, the error would occur here.
        } // try
        catch (fileError) {
          alert('<p>An unspecified file error occurred.</p><p>Selecting one or more folders will cause a file error.</p>');
          console.log('The following error occurred at i = ' + i + ': ' + fileError) // Send the error object to the browser's debugger console window, if active.
          return
        } // catch
      } // for
    },
    processFile (file) {
      var reader = new FileReader()
      reader.onload = function (event) {
        console.log(event.target.result)
      }
      reader.readAsText(file)
    },
    emulateButtonClick () {
      document.getElementById('fileInput').click()
    },
    closeModal () {
      this.$refs.basicModal.close()
      setTimeout(function () {
        if (jQuery('.modal:visible').length > 0) {
          jQuery('.modal:visible').hide()
        }
      }, 1)
    }
  },
  mounted () {
    GlobalEventBus.$emit('hideLeft', this.$root.masterPage)
    this.populateMappings()
  },
  beforeDestroy () {
  },
  created () {
  },
  destroyed () {
  },
  computed: {
    labOptionsFrom () {
      var list = []
      for (var index = 0; index < mappings.length; index++) {
        var exists = list.find(function (ele) {
          return ele.label === mappings[index].from.Name
        })
        if (!exists) {
          list.push({
            label: mappings[index].from.Name,
            value: mappings[index].from.Name
          })
        }
      }
      return list
    },
    labOptionsTo () {
      let list = []
      for (var index = 0; index < mappings.length; index++) {
        var exists = list.find(function (ele) {
          return ele.label === mappings[index].to.Name
        })
        if (!exists) {
          list.push({
            label: mappings[index].to.Name,
            value: mappings[index].to.Name
          })
        }
      }
      return list
    },
    allLabs () {
      var list = []
      list = mappings.map(function (ele) {
        return ele.from.Name
      })
      list.push.apply(list, mappings.map(function (ele) {
        return ele.to.Name
      }))
      // removing duplicates
      list = list.reduce(function (a, b) {
        if (a.indexOf(b) < 0) a.push(b)
        return a
      }, [])
      list = list.map(function (ele) {
        return {
          label: ele,
          value: ele
        }
      })
      return list
    }
  },
  watch: {
    labSearchText (val) {
      if (val) {
        this.mappings = mappings.filter(function (ele) {
          return ele.from.Name === val || ele.to.Name === val
        })
      }
      else {
        this.mappings = mappings
      }
    },
    selectedLabsFrom () {
      this.filterMappings()
    },
    selectedLabsTo () {
      this.filterMappings()
    }
  }
}
