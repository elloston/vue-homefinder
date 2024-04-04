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
  <div class="homes">
    <home-filter />

    <el-row>
      <el-col>
        <el-card>
          <el-row justify="space-between">
            <el-col :xs="24" :md="12">
              <el-pagination
                background
                layout="pager, ->"
                :page-size="homesStore.homes.meta.per_page"
                :total="homesStore.homes.meta.total"
                v-model:current-page="homesStore.filterParams.page"
                :disabled="loading"
                :pager-count="5"
              />
            </el-col>

            <el-col :xs="24" :md="12"
              ><div class="home-pagination-total">
                Total: {{ homesStore.homes.meta.total }}
              </div></el-col
            >
          </el-row>

          <el-table
            :data="homesStore.homes.data"
            v-loading="loading"
            height="500"
            stripe
          >
            <el-table-column
              v-for="field in homesStore.tableFields"
              :label="field.label"
              :prop="field.key"
            />
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style>
.homes-pagination {
  padding-top: 20px;
  padding-bottom: 20px;
}
.home-pagination-total {
  text-align: end;
}
</style>
