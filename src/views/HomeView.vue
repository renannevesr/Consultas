
<template>
  <div class="home">
    <h3>Home</h3>
    <el-input maxlength="11" class="input_container" v-model="cpf" placeholder="Please input" clearable
      :formatter="handleFormatCPF">
      <template #append>
        <el-button @click="submit" :disabled="cpfStatus">Pesquisar</el-button>
      </template></el-input>
  </div>
</template>

<script>
import { ElLoading } from 'element-plus'
import { mapActions } from 'vuex'
export default {
  name: 'HomeView',
  data() {
    return { cpf: "", loading: false }
  },
  components: {

  },
  methods: {
    ...mapActions(['updateData']),

    submit() {
      //alert(this.cpf)
      const loading = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
      })
      setTimeout(() => {
        const tableData = [
          {
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
        ]

        loading.close()
        this.updateData(tableData)

        this.$router.push('/about')
      }, 2000)
    },
    handleFormatCPF(cpf) {
      
      let id = cpf?.replace(/\D/g, '') || ""
      
      return id?.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
    },
  },
  computed: {
    cpfStatus() {
      return this.cpf?.replace(/\D/g, '')?.length < 11
    }

  }
};

</script>
<style>
.input_container {
  width: 30% !important;
}
</style>