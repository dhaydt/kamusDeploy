import Vue from "vue";
import Vuex from "vuex";
import { getField, updateField } from "vuex-map-fields";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    records: [
      {
        _id: "",
        kata: "",
        keterangan: "",
      },
    ],

    artiNama: [
      {
        id: "",
        judul_nama: "",
        kelamin_nama: null,
        asal_nama: "",
        isi_nama: "",
        perfix_nama: "",
      },
    ],

    glosarium: [
      {
        id_glos: "",
        judul_glos: "",
        bid_glos: "",
        isi_glos: "",
        judul_seo: "",
        perfix_glos: "",
      },
    ],

    adv: [
      {
        title: "",
        image: "",
        detail: "",
      },
    ],

    popKbbi: [
      {
        _id: "",
        kata: "",
        view: "",
      },
    ],
  },

  getters: {
    getField,
  },

  mutations: {
    updateField,

    addRecordsRow(state) {
      state.records.push({
        kata: "",
        keterangan: "",
      });
    },

    addArtiNamaRow(state) {
      state.artiNama.push({
        judul_nama: "",
        kelamin_nama: null,
        asal_nama: "",
        isi_nama: "",
        perfix_nama: "",
      });
    },

    addGlosRow(state) {
      state.glosarium.push({
        judul_glos: "",
        bid_glos: "",
        isi_glos: "",
        judul_seo: "",
        perfix_glos: "",
      });
    },
  },
  actions: {},
  modules: {},
});
