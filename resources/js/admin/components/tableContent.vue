<template>
  <!--begin: Datatable -->
  <div class="kt-datatable kt-datatable--default kt-datatable--brand kt-datatable--loaded">
    <table class="kt-datatable__table" id="html_table" width="100%" style="display: block;">
       <thead class="kt-datatable__head">
                    <tr class="kt-datatable__row">
                        <th v-for="field in fields" :key="field.name" class="kt-datatable__cell">
                            <sorting-icon
                                    @sort="requestOrderByChange(field)"
                                    :resource-name="resourceName"
                                    :uri-key="field.name"
                                    v-if="field.sortable"
                            >
                                {{ field.name }}
                            </sorting-icon>

                            <span v-else> {{ field.name }} </span>
                        </th>

                        <th v-if="actions">Actions</th>

                    </tr>

                </thead>
      <tbody style="" class="kt-datatable__body">
        <table-row v-for="resource in resources" :fields="fields" :resource="resource"
        :actions="actions"
        :key="resource.name" class="kt-datatable__row" style="left: 0px;"></table-row>
      </tbody>
    </table>

  </div>
</template>

<script>
  export default {
     props: {
            fields: {
                required: true,

            },
            actions: {
                required: true,

            },
            resources: {
                required: true,
            },

            resourceName: {
                required: false,
                default: 'resource'
            }
        },
         methods: {
            requestOrderByChange(field) {
                this.$emit('order', field)
            },
        },

  }

</script>
