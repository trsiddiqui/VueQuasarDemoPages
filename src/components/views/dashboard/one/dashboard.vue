<template>
  <div>
    <div class="row ">
      <div class="col-3 hvr-float-shadow">
        <card-total titleClass="bg-positive " icon="fa-check-square-o" titulo="Resulted" :conteudo="totalPosts"></card-total>
      </div>
      <div class="col-3 hvr-float-shadow">
        <card-total titleClass="bg-purple" icon="fa-spinner" titulo="Released" :conteudo="totalComments"></card-total>
      </div>
      <div class="col-3 hvr-float-shadow">
        <card-total titleClass="bg-red" icon="fa-exclamation-triangle" titulo="Exception" :conteudo="totalTodos"></card-total>
      </div>
      <div class="col-3 hvr-float-shadow">
        <card-total titleClass="bg-orange" icon="fa-star" titulo="Outstanding" :conteudo="1200"></card-total>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-5">
        <q-card class="bg-white ">
          <q-card-main>
            <bar-graph :data="dataForGraph" :labels="labelsForGraph"> </bar-graph>
          </q-card-main>
        </q-card>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import CardTotal from './cardTotal'
import BarGraph from './barGraph'
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
  QInnerLoading,
  QCard,
  QCardMain
} from 'quasar'
export default {
  name: 'DashboardOne',
  components: {
    CardTotal,
    BarGraph,
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
    QInnerLoading,
    QCard,
    QCardMain
  },
  mounted () {
    // Axios.all not working
    Promise.all([
      this.$http.jsonplaceholder.get('posts'),
      this.$http.jsonplaceholder.get('comments'),
      this.$http.jsonplaceholder.get('todos')
    ])
      .then(response => {
        this.totalPosts = response[0].data.length
        this.totalComments = response[1].data.length
        this.totalTodos = response[2].data.length
      })
  },
  data () {
    return {
      labelsForGraph: ['Resulted', 'Released', 'Outstanding'],
      totalPosts: 0,
      totalComments: 0,
      totalTodos: 0
    }
  },
  computed: {
    dataForGraph () {
      return [
        { label: 'Resulted', backgroundColor: '#2196F3', data: [this.totalPosts] },
        { label: 'Released', backgroundColor: '#D81B60', data: [this.totalTodos] },
        { label: 'Outstanding', backgroundColor: '#21BA45', data: [this.totalComments] }
      ]
    }
  }
}
</script>
<style>
@media (min-width: 1000px) {
  .layout-padding {
    padding: 2rem 2rem;
    margin: auto;
  }
}
</style>
