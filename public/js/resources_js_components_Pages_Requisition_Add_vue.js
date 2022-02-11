"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Pages_Requisition_Add_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Requisition/Add.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Requisition/Add.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VisaForm_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VisaForm.vue */ "./resources/js/components/Pages/Requisition/VisaForm.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    VisaForm: _VisaForm_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      form: {
        kafil_iD: '',
        requisition_date: '',
        sector_id: [],
        company_id: '',
        is_approved: '',
        visaFormdata: [],
        tradeFormdata: []
      },
      errors: '',
      companies: [],
      companysectors: ''
    };
  },
  methods: {
    addRequisition: function addRequisition() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().post('add-requisition', this.form).then(function (response) {
        if (response.data.msg) {
          Toast.fire({
            icon: 'success',
            title: response.data.msg
          }); // this.$router.push({name:'RequisitionList'});

          _this.$router.push({
            name: 'Companies'
          });
        }

        _this.errors = '';
      })["catch"](function (e) {
        _this.errors = e.response.data.errors;
      });
    },
    formData: function formData(event) {
      this.form.visaFormdata = event.visa;
      this.form.tradeFormdata = event.trade;
    },
    changeCompany: function changeCompany() {
      var _this2 = this;

      var id = this.form.company_id;
      axios__WEBPACK_IMPORTED_MODULE_1___default().get("search-sector-by-company/".concat(id)).then(function (res) {
        _this2.companysectors = res.data.data;

        if (res.data.msg) {
          Toast.fire({
            icon: 'error',
            title: res.data.msg
          });
        }
      });
    },
    lelectSector: function lelectSector(sector) {
      //checking is item in list  or not
      var item = this.form.sector_id.filter(function (a) {
        return a.id == sector.id;
      });

      if (item.length) {
        var index = this.form.sector_id.indexOf(sector);
        this.form.sector_id.splice(index, 1);
        console.log('new items', this.form.sector_id.length);
      } // if item not in list then push this iten in list
      else {
        this.form.sector_id.push(sector);
        console.log('old items', this.form.sector_id.length);
      }
    }
  },
  computed: {
    sector_of_company: function sector_of_company() {
      var _this3 = this;

      return this.companysectors.filter(function (item) {
        return item.company_id === _this3.form.company_id;
      });
    }
  },
  mounted: function mounted() {
    var _this4 = this;

    axios__WEBPACK_IMPORTED_MODULE_1___default().get('companies').then(function (response) {
      _this4.companies = response.data.companies; // this.companysectors = response.data.companysector;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Requisition/VisaForm.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Requisition/VisaForm.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      visaForm: {
        visa_no: '',
        visa_qty: '',
        visaData: []
      },
      tradeForm: {
        trade_qty: '',
        trade: '',
        salary: '',
        price_reference: '',
        trade_visa_no: ''
      },
      formData: []
    };
  },
  methods: {
    formvisa: function formvisa() {
      var newData = {
        trade: this.tradeForm.trade,
        salary: this.tradeForm.salary,
        price_reference: this.tradeForm.price_reference,
        trade_qty: this.tradeForm.trade_qty,
        trade_visa_no: this.tradeForm.trade_visa_no
      };
      this.formData.push(newData);
      var visaTrade = {
        visa: this.visaForm.visaData,
        trade: this.formData
      };
      this.$emit('formData', visaTrade);
    },
    removeTrade: function removeTrade(trade) {
      // let data = this.formData.filter(item => item.visa_no !== visa.visa_no);
      var index = this.formData.indexOf(trade);
      this.formData.splice(index, 1);
      var visaTrade = {
        visa: this.visaForm.visaData,
        trade: this.formData
      };
      this.$emit('formData', visaTrade);
    },
    addVisaNo: function addVisaNo() {
      if (!this.visaForm.visa_no) {
        alert('Form can`t be empty!');
      } else {
        var newData = {
          visa_no: this.visaForm.visa_no,
          visa_qty: this.visaForm.visa_qty
        };
        this.visaForm.visaData.push(newData);
      }
    },
    removeVisa: function removeVisa(visa) {
      var index = this.visaForm.visaData.indexOf(visa);
      this.visaForm.visaData.splice(index, 1);
    }
  },
  computed: {
    visaTotalQty: function visaTotalQty() {
      return this.visaForm.visaData.reduce(function (a, b) {
        return a.visa_qty + b.visa_qty;
      });
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Requisition/Add.vue?vue&type=style&index=0&id=995b5d70&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Requisition/Add.vue?vue&type=style&index=0&id=995b5d70&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.visinfo_btn[data-v-995b5d70]{\r\n    margin-top: 36px !important;\n}\ntable.dataTable thead th[data-v-995b5d70], table.dataTable thead td[data-v-995b5d70] {\r\n    font-size: 13px;\r\n    color: rgb(43, 43, 43);\n}\n.table td[data-v-995b5d70], .table th[data-v-995b5d70] {\r\n    padding: 0.75rem;\r\n    vertical-align: top;\r\n    border-top: 1px solid #e3e6f0;\r\n    font-size: 13;\n}\n.form-control.all_sectors.filter-select[data-v-995b5d70] {\r\n    height: 200px;\r\n    overflow-y: scroll;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Requisition/VisaForm.vue?vue&type=style&index=0&id=0bf6ef8e&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Requisition/VisaForm.vue?vue&type=style&index=0&id=0bf6ef8e&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.visinfo_btn[data-v-0bf6ef8e]{\r\n    margin-top: 36px !important;\n}\ntable.dataTable thead th[data-v-0bf6ef8e], table.dataTable thead td[data-v-0bf6ef8e] {\r\n    font-size: 13px;\r\n    color: rgb(43, 43, 43);\n}\n.table td[data-v-0bf6ef8e], .table th[data-v-0bf6ef8e] {\r\n    padding: 0.75rem;\r\n    vertical-align: top;\r\n    border-top: 1px solid #e3e6f0;\r\n    font-size: 13;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Requisition/Add.vue?vue&type=style&index=0&id=995b5d70&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Requisition/Add.vue?vue&type=style&index=0&id=995b5d70&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_995b5d70_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Add.vue?vue&type=style&index=0&id=995b5d70&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Requisition/Add.vue?vue&type=style&index=0&id=995b5d70&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_995b5d70_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_995b5d70_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Requisition/VisaForm.vue?vue&type=style&index=0&id=0bf6ef8e&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Requisition/VisaForm.vue?vue&type=style&index=0&id=0bf6ef8e&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VisaForm_vue_vue_type_style_index_0_id_0bf6ef8e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VisaForm.vue?vue&type=style&index=0&id=0bf6ef8e&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Requisition/VisaForm.vue?vue&type=style&index=0&id=0bf6ef8e&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VisaForm_vue_vue_type_style_index_0_id_0bf6ef8e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VisaForm_vue_vue_type_style_index_0_id_0bf6ef8e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Pages/Requisition/Add.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/Pages/Requisition/Add.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Add_vue_vue_type_template_id_995b5d70_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.vue?vue&type=template&id=995b5d70&scoped=true& */ "./resources/js/components/Pages/Requisition/Add.vue?vue&type=template&id=995b5d70&scoped=true&");
/* harmony import */ var _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add.vue?vue&type=script&lang=js& */ "./resources/js/components/Pages/Requisition/Add.vue?vue&type=script&lang=js&");
/* harmony import */ var _Add_vue_vue_type_style_index_0_id_995b5d70_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Add.vue?vue&type=style&index=0&id=995b5d70&scoped=true&lang=css& */ "./resources/js/components/Pages/Requisition/Add.vue?vue&type=style&index=0&id=995b5d70&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Add_vue_vue_type_template_id_995b5d70_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Add_vue_vue_type_template_id_995b5d70_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "995b5d70",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Pages/Requisition/Add.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Pages/Requisition/VisaForm.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/Pages/Requisition/VisaForm.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VisaForm_vue_vue_type_template_id_0bf6ef8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VisaForm.vue?vue&type=template&id=0bf6ef8e&scoped=true& */ "./resources/js/components/Pages/Requisition/VisaForm.vue?vue&type=template&id=0bf6ef8e&scoped=true&");
/* harmony import */ var _VisaForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VisaForm.vue?vue&type=script&lang=js& */ "./resources/js/components/Pages/Requisition/VisaForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _VisaForm_vue_vue_type_style_index_0_id_0bf6ef8e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VisaForm.vue?vue&type=style&index=0&id=0bf6ef8e&scoped=true&lang=css& */ "./resources/js/components/Pages/Requisition/VisaForm.vue?vue&type=style&index=0&id=0bf6ef8e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VisaForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VisaForm_vue_vue_type_template_id_0bf6ef8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _VisaForm_vue_vue_type_template_id_0bf6ef8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0bf6ef8e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Pages/Requisition/VisaForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Pages/Requisition/Add.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Pages/Requisition/Add.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Requisition/Add.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Pages/Requisition/VisaForm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Pages/Requisition/VisaForm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VisaForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VisaForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Requisition/VisaForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VisaForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Pages/Requisition/Add.vue?vue&type=style&index=0&id=995b5d70&scoped=true&lang=css&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/Pages/Requisition/Add.vue?vue&type=style&index=0&id=995b5d70&scoped=true&lang=css& ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_995b5d70_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Add.vue?vue&type=style&index=0&id=995b5d70&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Requisition/Add.vue?vue&type=style&index=0&id=995b5d70&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/Pages/Requisition/VisaForm.vue?vue&type=style&index=0&id=0bf6ef8e&scoped=true&lang=css&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/Pages/Requisition/VisaForm.vue?vue&type=style&index=0&id=0bf6ef8e&scoped=true&lang=css& ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VisaForm_vue_vue_type_style_index_0_id_0bf6ef8e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VisaForm.vue?vue&type=style&index=0&id=0bf6ef8e&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Requisition/VisaForm.vue?vue&type=style&index=0&id=0bf6ef8e&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/Pages/Requisition/Add.vue?vue&type=template&id=995b5d70&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/Pages/Requisition/Add.vue?vue&type=template&id=995b5d70&scoped=true& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_995b5d70_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_995b5d70_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_995b5d70_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Add.vue?vue&type=template&id=995b5d70&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Requisition/Add.vue?vue&type=template&id=995b5d70&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Pages/Requisition/VisaForm.vue?vue&type=template&id=0bf6ef8e&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/Pages/Requisition/VisaForm.vue?vue&type=template&id=0bf6ef8e&scoped=true& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VisaForm_vue_vue_type_template_id_0bf6ef8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VisaForm_vue_vue_type_template_id_0bf6ef8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VisaForm_vue_vue_type_template_id_0bf6ef8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VisaForm.vue?vue&type=template&id=0bf6ef8e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Requisition/VisaForm.vue?vue&type=template&id=0bf6ef8e&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Requisition/Add.vue?vue&type=template&id=995b5d70&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Requisition/Add.vue?vue&type=template&id=995b5d70&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", {}, [
      _c("div", { staticClass: "card shadow mb-4" }, [
        _c(
          "div",
          {
            staticClass:
              "card-header py-3 d-flex flex-row align-items-center justify-content-between",
          },
          [
            _c("h6", { staticClass: "m-0 font-weight-bold text-white" }, [
              _vm._v("Requisition Entry"),
            ]),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass: "btn bg-light btn-sm",
                attrs: { to: { name: "RequisitionList" } },
              },
              [_vm._v("Back To List")]
            ),
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("form", [
            _c("div", { staticClass: "form-group row" }, [
              _c("div", { staticClass: "col-md-3" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "Username" } }, [
                    _vm._v("Kafil ID"),
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.kafil_id,
                        expression: "form.kafil_id",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "number", required: "" },
                    domProps: { value: _vm.form.kafil_id },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "kafil_id", $event.target.value)
                      },
                    },
                  }),
                  _vm._v(" "),
                  _vm.errors.kafil_id
                    ? _c("small", { staticClass: "form-text text-danger" }, [
                        _vm._v(_vm._s(_vm.errors.kafil_id[0])),
                      ])
                    : _vm._e(),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-3" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Requisition Date")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.requisition_date,
                        expression: "form.requisition_date",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "date", required: "" },
                    domProps: { value: _vm.form.requisition_date },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "requisition_date",
                          $event.target.value
                        )
                      },
                    },
                  }),
                  _vm._v(" "),
                  _vm.errors.requisition_date
                    ? _c("small", { staticClass: "form-text text-danger" }, [
                        _vm._v(_vm._s(_vm.errors.requisition_date[0])),
                      ])
                    : _vm._e(),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-3" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "UserRole" } }, [
                    _vm._v("Company Name"),
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.company_id,
                          expression: "form.company_id",
                        },
                      ],
                      staticClass: "form-control filter-select",
                      attrs: { required: "" },
                      on: {
                        change: [
                          function ($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function (o) {
                                return o.selected
                              })
                              .map(function (o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.form,
                              "company_id",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          },
                          _vm.changeCompany,
                        ],
                      },
                    },
                    [
                      _c("option", { attrs: { value: "" } }, [
                        _vm._v("-- Select company --"),
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.companies, function (company) {
                        return _c(
                          "option",
                          { key: company.id, domProps: { value: company.id } },
                          [
                            _vm._v(
                              "\n                                        " +
                                _vm._s(company.company_name)
                            ),
                          ]
                        )
                      }),
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _vm.errors.company_id
                    ? _c("small", { staticClass: "form-text text-danger" }, [
                        _vm._v(_vm._s(_vm.errors.company_id[0])),
                      ])
                    : _vm._e(),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-3" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "UserRole" } }, [
                    _vm._v("Sector"),
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.sector_id,
                          expression: "form.sector_id",
                        },
                      ],
                      staticClass: "form-control filter-select",
                      attrs: { multiple: "true" },
                      on: {
                        change: function ($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function (o) {
                              return o.selected
                            })
                            .map(function (o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.form,
                            "sector_id",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                      },
                    },
                    [
                      _c("option", { attrs: { value: "", selected: "" } }, [
                        _vm._v("-- Select Sector --"),
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.companysectors, function (sector) {
                        return _c(
                          "option",
                          {
                            key: sector.id,
                            attrs: { required: "" },
                            domProps: { value: sector },
                          },
                          [
                            _vm._v(
                              "\n                                        " +
                                _vm._s(sector.sector_name)
                            ),
                          ]
                        )
                      }),
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _vm.errors.sector_id
                    ? _c("small", { staticClass: "form-text text-danger" }, [
                        _vm._v(_vm._s(_vm.errors.sector_id[0])),
                      ])
                    : _vm._e(),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mt-3" },
                [
                  _c("VisaForm", {
                    on: {
                      formData: function ($event) {
                        return _vm.formData($event)
                      },
                    },
                  }),
                ],
                1
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group row" }, [
              _c(
                "div",
                { staticClass: "col-md-4", staticStyle: { clear: "both" } },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-success",
                      on: {
                        click: function ($event) {
                          $event.preventDefault()
                          return _vm.addRequisition.apply(null, arguments)
                        },
                      },
                    },
                    [_vm._v("Save Changes")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    { staticClass: "btn btn-danger", attrs: { type: "reset" } },
                    [_vm._v("Cancle")]
                  ),
                ]
              ),
            ]),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Requisition/VisaForm.vue?vue&type=template&id=0bf6ef8e&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Requisition/VisaForm.vue?vue&type=template&id=0bf6ef8e&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "mt-3" }, [
    _c("div", { staticClass: "mt-3" }, [
      _c(
        "form",
        {
          on: {
            submit: function ($event) {
              $event.preventDefault()
              return _vm.formvisa()
            },
          },
        },
        [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-4 visa_no" }, [
              _c("h5", { staticClass: "my-2" }, [_vm._v("Vasi & Trade Info")]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("form", [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-5" }, [
                    _c("div", { staticClass: "form-group text-sm" }, [
                      _c("label", { attrs: { for: "Username" } }, [
                        _vm._v("Visa No"),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.visaForm.visa_no,
                            expression: "visaForm.visa_no",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { required: "", type: "number" },
                        domProps: { value: _vm.visaForm.visa_no },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.visaForm,
                              "visa_no",
                              $event.target.value
                            )
                          },
                        },
                      }),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-3" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "Username" } }, [
                        _vm._v("Qty"),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.visaForm.visa_qty,
                            expression: "visaForm.visa_qty",
                          },
                        ],
                        staticClass: "form-control text-sm",
                        attrs: { required: "", type: "number" },
                        domProps: { value: _vm.visaForm.visa_qty },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.visaForm,
                              "visa_qty",
                              $event.target.value
                            )
                          },
                        },
                      }),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-1" }, [
                    _c("div", { staticClass: "visinfo_btn" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-success btn-sm",
                          on: {
                            click: function ($event) {
                              $event.preventDefault()
                              return _vm.addVisaNo.apply(null, arguments)
                            },
                          },
                        },
                        [_c("i", { staticClass: "fas fa-plus-circle" })]
                      ),
                    ]),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _vm.visaForm.visaData.length
                ? _c("div", [
                    _c("p", [
                      _vm._v("Visa List () " + _vm._s(_vm.visaTotalQty)),
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _c(
                        "table",
                        {
                          staticClass: "mt-1 table table-hover table-bordered",
                        },
                        [
                          _vm._m(0),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            _vm._l(_vm.visaForm.visaData, function (visa) {
                              return _c("tr", { key: visa.visa_no }, [
                                _c("td", [_vm._v(_vm._s(visa.visa_no))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(visa.visa_qty))]),
                                _vm._v(" "),
                                _c("td", { staticStyle: { width: "60px" } }, [
                                  _c(
                                    "a",
                                    {
                                      attrs: { href: "#" },
                                      on: {
                                        click: function ($event) {
                                          return _vm.removeVisa(visa)
                                        },
                                      },
                                    },
                                    [
                                      _c("i", {
                                        staticClass:
                                          "fas delete_icon fa-trash-alt",
                                      }),
                                    ]
                                  ),
                                ]),
                              ])
                            }),
                            0
                          ),
                        ]
                      ),
                    ]),
                  ])
                : _vm._e(),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "trade_div col-md-8" }, [
              _c("h5", { staticClass: "my-2" }, [_vm._v("Trade Info")]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-2" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "UserRole" } }, [
                      _vm._v("Visa No"),
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.tradeForm.trade_visa_no,
                            expression: "tradeForm.trade_visa_no",
                          },
                        ],
                        staticClass: "form-control text-sm",
                        attrs: { required: "" },
                        on: {
                          change: function ($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function (o) {
                                return o.selected
                              })
                              .map(function (o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.tradeForm,
                              "trade_visa_no",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          },
                        },
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v("-- Select --"),
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.visaForm.visaData, function (item) {
                          return _c(
                            "option",
                            {
                              key: item.visa_no,
                              domProps: { value: item.visa_no },
                            },
                            [_vm._v(_vm._s(item.visa_no))]
                          )
                        }),
                      ],
                      2
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-2" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "UserRole" } }, [
                      _vm._v("Trade"),
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.tradeForm.trade,
                            expression: "tradeForm.trade",
                          },
                        ],
                        staticClass: "form-control filter-select",
                        attrs: { required: "", id: "UserRole" },
                        on: {
                          change: function ($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function (o) {
                                return o.selected
                              })
                              .map(function (o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.tradeForm,
                              "trade",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          },
                        },
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v("-- Select --"),
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "helper" } }, [
                          _vm._v("Helper"),
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "cleaner" } }, [
                          _vm._v("Cleaner"),
                        ]),
                      ]
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-2" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "Username" } }, [
                      _vm._v("Qty"),
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.tradeForm.trade_qty,
                          expression: "tradeForm.trade_qty",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { required: "", type: "number" },
                      domProps: { value: _vm.tradeForm.trade_qty },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.tradeForm,
                            "trade_qty",
                            $event.target.value
                          )
                        },
                      },
                    }),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-2" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "Username" } }, [
                      _vm._v("Salary"),
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.tradeForm.salary,
                          expression: "tradeForm.salary",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { required: "", type: "number" },
                      domProps: { value: _vm.tradeForm.salary },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.tradeForm, "salary", $event.target.value)
                        },
                      },
                    }),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-2" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "Username" } }, [
                      _vm._v("Price/Reference"),
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.tradeForm.price_reference,
                          expression: "tradeForm.price_reference",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { required: "", type: "number" },
                      domProps: { value: _vm.tradeForm.price_reference },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.tradeForm,
                            "price_reference",
                            $event.target.value
                          )
                        },
                      },
                    }),
                  ]),
                ]),
                _vm._v(" "),
                _vm._m(1),
                _vm._v(" "),
                _vm.formData.length > 0
                  ? _c("div", { staticClass: "database__table" }, [
                      _c(
                        "table",
                        {
                          staticClass: "table table-hover table-bordered",
                          attrs: { id: "example" },
                        },
                        [
                          _vm._m(2),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            _vm._l(_vm.formData, function (item) {
                              return _c("tr", { key: item.salary }, [
                                _c("td", [_vm._v(_vm._s(item.trade_visa_no))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(item.trade))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(item.trade_qty))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(item.salary))]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(item.price_reference)),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "btn brn-danger",
                                      attrs: { href: "#" },
                                      on: {
                                        click: function ($event) {
                                          return _vm.removeTrade(item)
                                        },
                                      },
                                    },
                                    [
                                      _c(
                                        "i",
                                        {
                                          staticClass:
                                            "fas delete_icon fa-trash-alt",
                                        },
                                        [
                                          _vm._v(
                                            "\n                                                    Remove"
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]),
                              ])
                            }),
                            0
                          ),
                        ]
                      ),
                    ])
                  : _vm._e(),
              ]),
            ]),
          ]),
        ]
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Visa No")]),
        _vm._v(" "),
        _c("th", [_vm._v("Qty")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "60px" } }, [_vm._v("Actions")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c("div", { staticClass: "visinfo_btn" }, [
        _c(
          "button",
          { staticClass: "btn btn-success btn-sm", attrs: { type: "submit" } },
          [_c("i", { staticClass: "fas fa-plus-circle" })]
        ),
        _vm._v(" "),
        _c(
          "button",
          { staticClass: "btn btn-danger btn-sm", attrs: { type: "reset" } },
          [_c("i", { staticClass: "fas fa-eraser" })]
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Visa No")]),
        _vm._v(" "),
        _c("th", [_vm._v("Trade")]),
        _vm._v(" "),
        _c("th", [_vm._v("Qty")]),
        _vm._v(" "),
        _c("th", [_vm._v("Salary")]),
        _vm._v(" "),
        _c("th", [_vm._v("Price/Ref.")]),
        _vm._v(" "),
        _c("th", [_vm._v("Actions")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);