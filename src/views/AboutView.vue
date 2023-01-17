<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class ="table-container">
      <el-table :data="tableData" :default-sort="{ prop: 'date', order: 'descending' }" style="width: 100%">
        <el-table-column prop="date" label="Date" sortable width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" :formatter="formatter" />
      </el-table>
    </div>
  </div>
</template>
<script>

import { mapGetters } from 'vuex'
export default {
  name: 'AboutView',
  data() {
    return {
      tableData: 'Test'
    }
  },
  methods: {
    ...mapGetters(['getData']),

  },
  created() {
    this.tableData = this.getData()
    if(!this.tableData.length>0
){
  this.$router.push("/")
}
  }

}
</script>

<style>
.table-container{
  border: 1px solid #6666;
  width: 80%;
  margin-left: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;

}

</style>
