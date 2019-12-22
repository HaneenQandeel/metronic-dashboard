import Vue from 'vue'
import Pagination from './components/pagination'
import VTable from "./components/table";
import tableContent from "./components/tableContent";
import Create from "./views/product/create";
import VAside from "./partials/aside";
import VHeader from "./partials/header";
import tableRow from "./components/tableRow";
import PageHeader from "./components/PageHeader";
import Page from "./components/Page";
import PageBody from "./components/PageBody";
import PortletHead from "./components/PortletHead";
import PortletBody from "./components/PortletBody";
import PortletFooter from "./components/PortletFooter";
import Portlet from "./components/Portlet";
import VLayout from "./views/layout";

Vue.component('pagination', Pagination)
Vue.component('v-table', VTable)
Vue.component('table-content', tableContent)
Vue.component('create', Create)
Vue.component('v-aside', VAside)
Vue.component('v-header', VHeader)
Vue.component('table-row', tableRow)
Vue.component('page-header', PageHeader)
Vue.component('page', Page)
Vue.component('page-body', PageBody)
Vue.component('portlet', Portlet)
Vue.component('portlet-head', PortletHead)
Vue.component('portlet-body', PortletBody)
Vue.component('portlet-footer', PortletFooter)
Vue.component('v-layout', VLayout)
