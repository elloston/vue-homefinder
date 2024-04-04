<script setup>
import { computed, ref, onMounted } from "vue";
import api from "@/api";

// Data
const tableData = ref({
  data: [],
  links: {},
  meta: {
    current_page: 1,
    per_page: 50,
    total: 0,
  },
});
const filterParams = ref({
  name: null,
  bedrooms: [],
  bathrooms: [],
  storeys: [],
  garages: [],
  price: {
    from: null,
    to: null,
  },
});
const loading = ref(false);
const countParams = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Methods
async function getHomes() {
  try {
    loading.value = true;

    filterParams.value.page = tableData.value.meta.current_page;
    const { data } = await api.get("homes", { params: filterParams.value });
    tableData.value = data;
  } catch (e) {
    console.error(e);
  } finally {
    loading.value = false;
  }
}
async function resetFilter() {
  filterParams.value = {
    name: null,
    bedrooms: [],
    bathrooms: [],
    storeys: [],
    garages: [],
    price: {
      from: null,
      to: null,
    },
  };

  await getHomes();
}

// Lifecycles
onMounted(async () => {
  await getHomes();
});
</script>

<template>
  <el-row>
    <el-col>
      <div>
        <el-form-item label="Name" class="mr-4">
          <el-input v-model="filterParams.name" @change="getHomes()" />
        </el-form-item>

        <el-form-item label="Bedrooms">
          <el-select
            v-model="filterParams.bedrooms"
            @change="getHomes()"
            multiple
            collapse-tags
            :max-collapse-tags="3"
            placeholder="Select"
          >
            <el-option
              v-for="item in countParams"
              :label="item"
              :value="item"
            />
          </el-select>
        </el-form-item>

        <el-form-item label="Bathrooms">
          <el-select
            v-model="filterParams.bathrooms"
            @change="getHomes()"
            multiple
            collapse-tags
            :max-collapse-tags="3"
            placeholder="Select"
          >
            <el-option
              v-for="item in countParams"
              :label="item"
              :value="item"
            />
          </el-select>
        </el-form-item>

        <el-form-item label="Storeys">
          <el-select
            v-model="filterParams.storeys"
            @change="getHomes()"
            multiple
            collapse-tags
            :max-collapse-tags="3"
            placeholder="Select"
          >
            <el-option
              v-for="item in countParams"
              :label="item"
              :value="item"
            />
          </el-select>
        </el-form-item>

        <el-form-item label="Garages">
          <el-select
            v-model="filterParams.garages"
            @change="getHomes()"
            multiple
            collapse-tags
            :max-collapse-tags="3"
            placeholder="Select"
          >
            <el-option
              v-for="item in countParams"
              :label="item"
              :value="item"
            />
          </el-select>
        </el-form-item>
      </div>

      <div>
        <el-form-item label="Price From">
          <el-input v-model="filterParams.price.from" @change="getHomes()" />
        </el-form-item>

        <el-form-item label="Price To">
          <el-input v-model="filterParams.price.to" @change="getHomes()" />
        </el-form-item>
      </div>

      <el-button type="primary" plain @click="resetFilter()" native-type="reset"
        >Reset filter</el-button
      >

      <div>
        <el-pagination
          background
          layout="prev, pager, next, ->, total"
          :page-size="tableData.meta.per_page"
          :total="tableData.meta.total"
          v-model:current-page="tableData.meta.current_page"
          @current-change="getHomes()"
          :disabled="loading"
        />
      </div>

      <el-table :data="tableData.data" v-loading="loading" height="500">
        <el-table-column label="Name" prop="name" />
        <el-table-column label="Bedrooms" prop="bedrooms" />
        <el-table-column label="Bathrooms" prop="bathrooms" />
        <el-table-column label="Storeys" prop="storeys" />
        <el-table-column label="Garages" prop="garages" />
        <el-table-column label="Price" prop="price" />
      </el-table>
    </el-col>
  </el-row>
</template>
