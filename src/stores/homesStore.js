/**
 * stores/homesStore.js
 */

import { defineStore } from "pinia";
import api from "@/api";

export const useHomesStore = defineStore("homes", {
  state: () => ({
    homes: {
      data: [],
      links: {},
      meta: {
        current_page: 1,
        per_page: 50,
        total: 0,
      },
    },
    filterParams: {
      page: 1,
      name: null,
      bedrooms: [],
      bathrooms: [],
      storeys: [],
      garages: [],
      price: {
        from: null,
        to: null,
      },
    },
    tableFields: [
      {
        label: "Name",
        key: "name",
      },
      {
        label: "Bedrooms",
        key: "bedrooms",
      },
      {
        label: "Bathrooms",
        key: "bathrooms",
      },
      {
        label: "Storeys",
        key: "storeys",
      },
      {
        label: "Garages",
        key: "garages",
      },
      {
        label: "Price",
        key: "price",
      },
    ],
  }),
  actions: {
    async getHomes() {
      try {
        const { data } = await api.get("homes", { params: this.filterParams });
        this.homes = data;
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
    resetFilter() {
      this.$patch({
        filterParams: {
          page: 1,
          name: null,
          bedrooms: [],
          bathrooms: [],
          storeys: [],
          garages: [],
          price: {
            from: null,
            to: null,
          },
        },
      });
    },
  },
});
