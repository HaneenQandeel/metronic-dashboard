<template>
  <!-- begin:: Content -->
  <div class="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
    <div class="kt-portlet kt-portlet--mobile">
      <div class="kt-portlet__head kt-portlet__head--lg">
        <div class="kt-portlet__head-label">
          <span class="kt-portlet__head-icon">
        											<i class="kt-font-brand flaticon2-line-chart"></i>
        										</span>
          <h3 class="kt-portlet__head-title">
            {{ title }}
          </h3>
        </div>
        <div class="kt-portlet__head-toolbar">
          <div class="kt-portlet__head-wrapper">
            <a href="#" class="btn btn-clean btn-icon-sm">
              <i class="la la-long-arrow-left"></i> Back
            </a>
            &nbsp;
            <div class="dropdown dropdown-inline">
              <button type="button" class="btn btn-brand btn-icon-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        													<i class="flaticon2-plus"></i> Add New
        												</button>
              <div class="dropdown-menu dropdown-menu-right">
                <ul class="kt-nav">
                  <li class="kt-nav__section kt-nav__section--first">
                    <span class="kt-nav__section-text">Choose an action:</span>
                  </li>
                  <li class="kt-nav__item">
                    <a href="#" class="kt-nav__link">
                      <i class="kt-nav__link-icon flaticon2-open-text-book"></i>
                      <span class="kt-nav__link-text">Reservations</span>
                    </a>
                  </li>
                  <li class="kt-nav__item">
                    <a href="#" class="kt-nav__link">
                      <i class="kt-nav__link-icon flaticon2-calendar-4"></i>
                      <span class="kt-nav__link-text">Appointments</span>
                    </a>
                  </li>
                  <li class="kt-nav__item">
                    <a href="#" class="kt-nav__link">
                      <i class="kt-nav__link-icon flaticon2-bell-alarm-symbol"></i>
                      <span class="kt-nav__link-text">Reminders</span>
                    </a>
                  </li>
                  <li class="kt-nav__item">
                    <a href="#" class="kt-nav__link">
                      <i class="kt-nav__link-icon flaticon2-contract"></i>
                      <span class="kt-nav__link-text">Announcements</span>
                    </a>
                  </li>
                  <li class="kt-nav__item">
                    <a href="#" class="kt-nav__link">
                      <i class="kt-nav__link-icon flaticon2-shopping-cart-1"></i>
                      <span class="kt-nav__link-text">Orders</span>
                    </a>
                  </li>
                  <li class="kt-nav__separator kt-nav__separator--fit">
                  </li>
                  <li class="kt-nav__item">
                    <a href="#" class="kt-nav__link">
                      <i class="kt-nav__link-icon flaticon2-rocket-1"></i>
                      <span class="kt-nav__link-text">Projects</span>
                    </a>
                  </li>
                  <li class="kt-nav__item">
                    <a href="#" class="kt-nav__link">
                      <i class="kt-nav__link-icon flaticon2-chat-1"></i>
                      <span class="kt-nav__link-text">User Feedbacks</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="kt-portlet__body">

        <!--begin: Search Form -->
        <div class="kt-form kt-form--label-right kt-margin-t-20 kt-margin-b-10">
          <div class="row align-items-center">
            <component v-for="filter in filters" :is="filter.component" :filter="filter" @change="filterChanged">

            </component>
            <div class="col-xl-8 order-2 order-xl-1">
              <div class="row align-items-center">
                <div class="col-md-4 kt-margin-b-20-tablet-and-mobile">
                  <div class="kt-input-icon kt-input-icon--left">
                    <input v-model="search" type="text" class="form-control" placeholder="Search..." @keypress.enter="performSearch">
                    <span class="kt-input-icon__icon kt-input-icon__icon--left">
        																<span><i class="la la-search"></i></span>
                    </span>
                  </div>
                </div>
                <div class="col-md-4 kt-margin-b-20-tablet-and-mobile">
                  <div class="kt-form__group kt-form__group--inline">
                    <div class="kt-form__label">
                      <label>Status:</label>
                    </div>
                    <div class="kt-form__control">
                      <select class="form-control bootstrap-select" id="kt_form_status">
        																	<option value="">All</option>
        																	<option value="1">Pending</option>
        																	<option value="2">Delivered</option>
        																	<option value="3">Canceled</option>
        																	<option value="4">Success</option>
        																	<option value="5">Info</option>
        																	<option value="6">Danger</option>
        																</select>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 kt-margin-b-20-tablet-and-mobile">
                  <div class="kt-form__group kt-form__group--inline">
                    <div class="kt-form__label">
                      <label>Type:</label>
                    </div>
                    <div class="kt-form__control">
                      <select class="form-control bootstrap-select" id="kt_form_type">
        																	<option value="">All</option>
        																	<option value="1">Online</option>
        																	<option value="2">Retail</option>
        																	<option value="3">Direct</option>
        																</select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 order-1 order-xl-2 kt-align-right">
              <a href="#" class="btn btn-default kt-hidden">
                <i class="la la-cart-plus"></i> New Order
              </a>
              <div class="kt-separator kt-separator--border-dashed kt-separator--space-lg d-xl-none"></div>
            </div>
          </div>
        </div>

        <!--end: Search Form -->
      </div>
      <div class="kt-portlet__body kt-portlet__body--fit">

        <!--begin: Datatable -->
        <div class="kt-datatable" id="local_data">

          <table-content :fields="fields" :resources="resources" :actions="actions" :resource-name="resourceName" @order="orderByField">
          </table-content>

        </div>

        <!--end: Datatable -->
      </div>
      <br>
      <pagination></pagination>

    </div>
  </div>

  <!-- end:: Content -->
</template>

<script>
  export default {
    props: {
      resourceName: {
        type: String,
        required: true,
      }
    },
    data: function() {
      return {
        orderBy: '',
        orderByDirection: '',
        search: '',
        allMatchingResourceCount: 0,

        fields: [],

        resources: [],

        actions: [],

        filters: [],

      }
    },
    methods: {
      getFields() {
        this.fields = [{
            name: 'id',
            label: 'Id',
            sortable: true,
            asHtml: false,
          },
          {
            name: 'order_id',
            label: 'Order Id',
            sortable: true,
            asHtml: false,
          },
          {
            name: 'car_make',
            label: 'Car Make',
            sortable: true,
            asHtml: false,
          },
          {
            name: 'car_model',
            label: 'Car Model',
            sortable: true,
            asHtml: false,
          },
          {
            name: 'color',
            label: 'Color',
            sortable: true,
            asHtml: false,
          },
          {
            name: 'deposit_paid',
            label: 'Deposit Paid',
            sortable: true,
            asHtml: false,
          },
          {
            name: 'order_date',
            label: 'Order Date',
            sortable: true,
            asHtml: false,
          },
          {
            name: 'status',
            label: 'Status',
            sortable: true,
            asHtml: false,
          },
          {
            name: 'Type',
            label: 'type',
            sortable: true,
            asHtml: false,
          }
        ]

      },

      getResources() {
        this.resources = [{
            id: 1,
            order_id: '0006-3629',
            car_make: 'Land Rover',
            car_model: 'Range Rover',
            color: 'Orange',
            deposit_paid: '$22672.60',
            order_date: '2016-11-28',
            status: 'Canceled',
            type: 'Direct'

          },
          {
            id: 2,
            order_id: '66403-315',
            car_make: 'GMC',
            car_model: 'Jimmy',
            color: 'Goldenrod',
            deposit_paid: '$55141.29',
            order_date: '2017-04-29',
            status: 'Success',
            type: 'Retail'

          },
          {
            id: 3,
            order_id: '48951-3040',
            car_make: 'Mitsubishi',
            car_model: 'Eclipse',
            color: 'Aquamarine',
            deposit_paid: '$22471.73',
            order_date: '2016-04-17',
            status: 'Pending',
            type: 'Online'

          }

        ]

      },
      orderByField(field) {
        var direction = this.currentOrderByDirection == 'asc' ? 'desc' : 'asc'
        if (this.currentOrderBy != field.name) {
          direction = 'asc'
        }
        this.updateQueryString({
          [this.orderByParameter]: field.name,
          [this.orderByDirectionParameter]: direction,
        })
      },

      performSearch(event) {
        if (event.which != 9) {
          this.updateQueryString({
            [this.searchParameter]: this.search,
          })
        }

      },
      initializeSearchFromQueryString() {
        this.search = this.currentSearch
      }

    },
            computed: {
            currentOrderByDirection() {
                return this.$route.query[this.orderByDirectionParameter] || 'desc'
            },

            orderByDirectionParameter() {
                return this.resourceName + '_direction'
            },

            currentOrderBy() {
                return this.$route.query[this.orderByParameter] || ''
            },

            orderByParameter() {
                return this.resourceName + '_order'
            },

            resourceRequestQueryString() {
                return {
                    search: this.currentSearch,
                    orderBy: this.currentOrderBy,
                    orderByDirection: this.currentOrderByDirection

                }
            },

            currentSearch() {
                return this.$route.query[this.searchParameter] || ''
            },


            searchParameter() {
                return this.resourceName + '_search'
            },


            resourceCountLabel() {
                const first = this.perPage * (this.currentPage - 1)

                return (
                    this.resources.length &&
                    `${first + 1}-${first + this.resources.length} of ${
                        this.allMatchingResourceCount
                    }`
                )
            },

        },

        created() {

            this.initializeSearchFromQueryString()


            this.getFields()


            this.getResources()


            this.$watch(

                () => {
                    return (
                        this.resourceName +
                        this.currentOrderBy +
                        this.currentOrderByDirection +
                        this.currentSearch
                    )
                },
                () => {
                    this.getResources()
                }
            )

        },

  }
</script>
