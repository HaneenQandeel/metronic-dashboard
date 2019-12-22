<template>
  <div class="kt-portlet kt-portlet--last">
    <portlet-head :title="title">
      <slot name="head" :title="title"></slot>
    </portlet-head>

    <portlet-body>
      <slot name="body"></slot>
    </portlet-body>


    <portlet-footer>
      <slot name="foot"></slot>
    </portlet-footer>

  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: 'Title'
      }
    },

  }
</script>
