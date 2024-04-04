<script setup>
//
</script>

<template>
  <!-- sorry about trying to revert "bootstrap" grid -->
  <!-- basically i worked with bootstrap, bootstrap-vue and vuetify and some tailwind -->
  <el-main>
    <el-row justify="center">
      <el-col :xs="0" :sm="1" :md="2" :lg="4"></el-col>

      <el-col :xs="24" :sm="22" :md="20" :lg="16">
        <router-view />
      </el-col>

      <el-col :xs="0" :sm="1" :md="2" :lg="4"></el-col>
    </el-row>
  </el-main>
</template>
