<script setup>
import { ref, onMounted, watch } from "vue";
import { useHomesStore } from "../stores/homesStore";
import HomeFilter from "../components/HomeFilter.vue";

// Use
const homesStore = useHomesStore();
let timer = null;

// Data
const loading = ref(false);

// Methods
async function getHomes() {
  try {
    loading.value = true;
    await homesStore.getHomes();
  } catch (e) {
    console.error(e);
  } finally {
    loading.value = false;
  }
}

// Lifecycles
onMounted(async () => {
  homesStore.getHomes();
});

watch(homesStore.filterParams, () => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    getHomes();
  }, 500);
});
</script>

<template>
  <el-row>
    <el-col>
      <home-filter />

      <el-pagination
        background
        layout="prev, pager, next, ->, total"
        :page-size="homesStore.homes.meta.per_page"
        :total="homesStore.homes.meta.total"
        v-model:current-page="homesStore.filterParams.page"
        :disabled="loading"
      />

      <el-table :data="homesStore.homes.data" v-loading="loading" height="500">
        <el-table-column
          v-for="field in homesStore.tableFields"
          :label="field.label"
          :prop="field.key"
        />
      </el-table>
    </el-col>
  </el-row>
</template>
