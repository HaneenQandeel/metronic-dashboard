<template>
<div class="kt-datatable kt-datatable--default kt-datatable--brand kt-datatable--loaded">
    <div class="kt-datatable__pager kt-datatable--paging-loaded">
      <ul class="kt-datatable__pager-nav">
        <li><a title="First" class="kt-datatable__pager-link kt-datatable__pager-link--first kt-datatable__pager-link--disabled" data-page="1" disabled="disabled"><i class="flaticon2-fast-back"></i></a></li>
        <li><a title="Previous" class="kt-datatable__pager-link kt-datatable__pager-link--prev kt-datatable__pager-link--disabled" data-page="1" disabled="disabled"><i class="flaticon2-back"></i></a></li>
        <li style=""></li>
        <li style="display: none;"><input type="text" class="kt-pager-input form-control" title="Page number"></li>
        <li><a class="kt-datatable__pager-link kt-datatable__pager-link-number kt-datatable__pager-link--active" data-page="1" title="1">1</a></li>
        <li><a class="kt-datatable__pager-link kt-datatable__pager-link-number" data-page="2" title="2">2</a></li>
        <li><a class="kt-datatable__pager-link kt-datatable__pager-link-number" data-page="3" title="3">3</a></li>
        <li><a class="kt-datatable__pager-link kt-datatable__pager-link-number" data-page="4" title="4">4</a></li>
        <li><a class="kt-datatable__pager-link kt-datatable__pager-link-number" data-page="5" title="5">5</a></li>
        <li></li>
        <li><a title="Next" class="kt-datatable__pager-link kt-datatable__pager-link--next" data-page="2"><i class="flaticon2-next"></i></a></li>
        <li><a title="Last" class="kt-datatable__pager-link kt-datatable__pager-link--last" data-page="15"><i class="flaticon2-fast-next"></i></a></li>
      </ul>
      <div class="kt-datatable__pager-info">
        <div class="dropdown bootstrap-select kt-datatable__pager-size" style="width: 60px;"><select class="selectpicker kt-datatable__pager-size" title="Select page size" data-width="60px" data-container="body" data-selected="10" tabindex="-98"><option class="bs-title-option" value=""></option><option value="10">10</option><option value="20">20</option><option value="30">30</option><option value="50">50</option><option value="100">100</option></select>
          <button
            type="button" class="btn dropdown-toggle btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-3" aria-haspopup="listbox" aria-expanded="false" title="Select page size">
            <div class="filter-option">
              <div class="filter-option-inner">
                <div class="filter-option-inner-inner">10</div>
              </div>
            </div>
            </button>
            <div class="dropdown-menu ">
              <div class="inner show" role="listbox" id="bs-select-3" tabindex="-1">
                <ul class="dropdown-menu inner show" role="presentation"></ul>
              </div>
            </div>
        </div></div>
    </div>
    </div>
</template>

<script>
  export default {

    methods: {
    }
  }
</script>
