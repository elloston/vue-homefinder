<script setup>
import { ref } from "vue";
import { useHomesStore } from "../stores/homesStore";

// Use
const homesStore = useHomesStore();

// Data
const countParams = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

const fields = ref([
  { label: "Bedrooms", key: "bedrooms" },
  { label: "Bathrooms", key: "bathrooms" },
  { label: "Storeys", key: "storeys" },
  { label: "Garages", key: "garages" },
]);
</script>

<template>
  <el-card class="home-filter">
    <el-row justify="space-between" align="bottom">
      <!-- Name -->
      <el-col :xs="24" :md="3">
        <el-form-item label="Name">
          <el-input v-model="homesStore.filterParams.name" />
        </el-form-item>
      </el-col>
      <!-- Price -->
      <el-col :xs="24" :md="3">
        <el-form-item label="Price From">
          <el-input v-model="homesStore.filterParams.price.from" />
        </el-form-item>
      </el-col>
      <el-col :xs="24" :md="3">
        <el-form-item label="Price To">
          <el-input v-model="homesStore.filterParams.price.to" />
        </el-form-item>
      </el-col>
      <!-- Multiple select -->
      <el-col v-for="(field, key) in fields" :key="key" :xs="24" :md="3">
        <el-form-item :label="field.label">
          <el-select
            v-model="homesStore.filterParams[field.key]"
            multiple
            collapse-tags
            :max-collapse-tags="1"
            placeholder="Select"
          >
            <el-option
              v-for="item in countParams"
              :label="item"
              :value="item"
              :key="item"
            />
          </el-select>
        </el-form-item>
      </el-col>
      <!-- Reset -->
      <el-button
        type="primary"
        plain
        @click="homesStore.resetFilter()"
        native-type="button"
        >Reset filter</el-button
      >
    </el-row>
  </el-card>
</template>

<style>
.home-filter {
  margin-bottom: 20px;
}
</style>
