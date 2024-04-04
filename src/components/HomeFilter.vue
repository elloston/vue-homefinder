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
  <el-row>
    <!-- Multiple select -->
    <el-form-item
      v-for="(field, key) in fields"
      :key="key"
      :label="field.label"
    >
      <el-select
        v-model="homesStore.filterParams[field.key]"
        multiple
        collapse-tags
        :max-collapse-tags="3"
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
    <!-- Price -->
    <el-form-item label="Price From">
      <el-input v-model="homesStore.filterParams.price.from" />
    </el-form-item>
    <el-form-item label="Price To">
      <el-input v-model="homesStore.filterParams.price.to" />
    </el-form-item>
    <!-- Reset -->
    <el-button
      type="primary"
      plain
      @click="homesStore.resetFilter()"
      native-type="button"
      >Reset filter</el-button
    >
  </el-row>
</template>
