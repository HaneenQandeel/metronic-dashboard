<template>
  <div>
    <div class="kt-portlet kt-portlet--mobile">
      <div class="kt-portlet__head kt-portlet__head--lg">
        <div class="kt-portlet__head-label">
          <span class="kt-portlet__head-icon">
  				<i class="kt-font-brand flaticon2-line-chart"></i>
  			</span>
          <h3 class="kt-portlet__head-title">
            JSON Datatable
            <small>initialized from remote json file</small>
          </h3>
        </div>
        <div class="kt-portlet__head-toolbar">
          <div class="kt-portlet__head-wrapper">
            <div class="kt-portlet__head-actions">
              <div class="dropdown dropdown-inline">
                <button type="button" class="btn btn-default btn-icon-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="la la-download"></i> Export
                                </button>
                <div class="dropdown-menu dropdown-menu-right">
                  <ul class="kt-nav">
                    <li class="kt-nav__section kt-nav__section--first">
                      <span class="kt-nav__section-text">Choose an option</span>
                    </li>
                    <li class="kt-nav__item">
                      <a href="#" class="kt-nav__link">
                        <i class="kt-nav__link-icon la la-print"></i>
                        <span class="kt-nav__link-text">Print</span>
                      </a>
                    </li>
                    <li class="kt-nav__item">
                      <a href="#" class="kt-nav__link">
                        <i class="kt-nav__link-icon la la-copy"></i>
                        <span class="kt-nav__link-text">Copy</span>
                      </a>
                    </li>
                    <li class="kt-nav__item">
                      <a href="#" class="kt-nav__link">
                        <i class="kt-nav__link-icon la la-file-excel-o"></i>
                        <span class="kt-nav__link-text">Excel</span>
                      </a>
                    </li>
                    <li class="kt-nav__item">
                      <a href="#" class="kt-nav__link">
                        <i class="kt-nav__link-icon la la-file-text-o"></i>
                        <span class="kt-nav__link-text">CSV</span>
                      </a>
                    </li>
                    <li class="kt-nav__item">
                      <a href="#" class="kt-nav__link">
                        <i class="kt-nav__link-icon la la-file-pdf-o"></i>
                        <span class="kt-nav__link-text">PDF</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              &nbsp;
              <router-link to="product/create" class="btn btn-brand btn-elevate btn-icon-sm">
                <i class="la la-plus"></i> New Record
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!--          Search-->

      <search @filtering="filtering"></search>

      <div class="kt-portlet__body kt-portlet__body--fit">
        <!--begin: Datatable -->
        <div class="kt-datatable kt-datatable--default kt-datatable--brand kt-datatable--loaded" id="json_data" style="">
          <table class="kt-datatable__table" style="display: block;">
            <thead class="kt-datatable__head">
              <tr class="kt-datatable__row" style="left: 0px;">
                <th data-field="RecordID" class="kt-datatable__cell--center kt-datatable__cell kt-datatable__cell--check"><span style="width: 20px;"><label class="kt-checkbox kt-checkbox--single kt-checkbox--all kt-checkbox--solid"><input type="checkbox">&nbsp;<span></span></label>
                  </span>
                </th>
                <th data-field="OrderID" class="kt-datatable__cell kt-datatable__cell--sort"><span style="width: 141px;">Order ID</span></th>
                <th data-field="Country" class="kt-datatable__cell kt-datatable__cell--sort"><span style="width: 141px;">Country</span></th>
                <th data-field="ShipAddress" class="kt-datatable__cell kt-datatable__cell--sort"><span style="width: 141px;">Ship Address</span></th>
                <th data-field="ShipDate" class="kt-datatable__cell kt-datatable__cell--sort"><span style="width: 141px;">Ship Date</span></th>
                <th data-field="Status" class="kt-datatable__cell kt-datatable__cell--sort"><span style="width: 141px;">Status</span></th>
                <th data-field="Type" data-autohide-disabled="false" class="kt-datatable__cell kt-datatable__cell--sort"><span style="width: 141px;">Type</span></th>
                <th data-field="Actions" data-autohide-disabled="false" class="kt-datatable__cell kt-datatable__cell--sort"><span style="width: 110px;">Actions</span></th>
              </tr>
            </thead>
            <tbody class="kt-datatable__body" style="">
              <tr data-row="0" class="kt-datatable__row" style="left: 0px;">
                <td class="kt-datatable__cell--center kt-datatable__cell kt-datatable__cell--check" data-field="RecordID"><span style="width: 20px;"><label class="kt-checkbox kt-checkbox--single kt-checkbox--solid"><input type="checkbox" value="1">&nbsp;<span></span></label>
                  </span>
                </td>
                <td data-field="OrderID" class="kt-datatable__cell"><span style="width: 141px;">61715-075</span></td>
                <td data-field="Country" class="kt-datatable__cell"><span style="width: 141px;">China CN</span></td>
                <td data-field="ShipAddress" class="kt-datatable__cell"><span style="width: 141px;">746 Pine View Junction</span></td>
                <td data-field="ShipDate" class="kt-datatable__cell"><span style="width: 141px;">2/12/2018</span></td>
                <td data-field="Status" class="kt-datatable__cell"><span style="width: 141px;"><span class="kt-badge  kt-badge--primary kt-badge--inline kt-badge--pill">Canceled</span></span>
                </td>
                <td data-field="Type" data-autohide-disabled="false" class="kt-datatable__cell"><span style="width: 141px;"><span class="kt-badge kt-badge--primary kt-badge--dot"></span>&nbsp;<span class="kt-font-bold kt-font-primary">Retail</span></span>
                </td>
                <td data-field="Actions" data-autohide-disabled="false" class="kt-datatable__cell"><span style="overflow: visible; position: relative; width: 110px;">						<div class="dropdown">							<a data-toggle="dropdown" class="btn btn-sm btn-clean btn-icon btn-icon-md">                                <i class="la la-ellipsis-h"></i>                            </a>						  	<div class="dropdown-menu dropdown-menu-right">						    	<a href="#" class="dropdown-item"><i class="la la-edit"></i> Edit Details</a>						    	<a href="#" class="dropdown-item"><i class="la la-leaf"></i> Update Status</a>						    	<a href="#" class="dropdown-item"><i class="la la-print"></i> Generate Report</a>						  	</div>						</div>						<a title="Edit details" class="btn btn-sm btn-clean btn-icon btn-icon-md">							<i class="la la-edit"></i>						</a>						<a title="Delete" class="btn btn-sm btn-clean btn-icon btn-icon-md">							<i class="la la-trash"></i>						</a>					</span></td>
              </tr>
              <tr data-row="1" class="kt-datatable__row kt-datatable__row--even" style="left: 0px;">
                <td class="kt-datatable__cell--center kt-datatable__cell kt-datatable__cell--check" data-field="RecordID"><span style="width: 20px;"><label class="kt-checkbox kt-checkbox--single kt-checkbox--solid"><input type="checkbox" value="2">&nbsp;<span></span></label>
                  </span>
                </td>
                <td data-field="OrderID" class="kt-datatable__cell"><span style="width: 141px;">63629-4697</span></td>
                <td data-field="Country" class="kt-datatable__cell"><span style="width: 141px;">Indonesia ID</span></td>
                <td data-field="ShipAddress" class="kt-datatable__cell"><span style="width: 141px;">01652 Fulton Trail</span></td>
                <td data-field="ShipDate" class="kt-datatable__cell"><span style="width: 141px;">8/6/2017</span></td>
                <td data-field="Status" class="kt-datatable__cell"><span style="width: 141px;"><span class="kt-badge  kt-badge--danger kt-badge--inline kt-badge--pill">Danger</span></span>
                </td>
                <td data-field="Type" data-autohide-disabled="false" class="kt-datatable__cell"><span style="width: 141px;"><span class="kt-badge kt-badge--success kt-badge--dot"></span>&nbsp;<span class="kt-font-bold kt-font-success">Direct</span></span>
                </td>
                <td data-field="Actions" data-autohide-disabled="false" class="kt-datatable__cell"><span style="overflow: visible; position: relative; width: 110px;">						<div class="dropdown">							<a data-toggle="dropdown" class="btn btn-sm btn-clean btn-icon btn-icon-md">                                <i class="la la-ellipsis-h"></i>                            </a>						  	<div class="dropdown-menu dropdown-menu-right">						    	<a href="#" class="dropdown-item"><i class="la la-edit"></i> Edit Details</a>						    	<a href="#" class="dropdown-item"><i class="la la-leaf"></i> Update Status</a>						    	<a href="#" class="dropdown-item"><i class="la la-print"></i> Generate Report</a>						  	</div>						</div>						<a title="Edit details" class="btn btn-sm btn-clean btn-icon btn-icon-md">							<i class="la la-edit"></i>						</a>						<a title="Delete" class="btn btn-sm btn-clean btn-icon btn-icon-md">							<i class="la la-trash"></i>						</a>					</span></td>
              </tr>
              <tr data-row="2" class="kt-datatable__row" style="left: 0px;">
                <td class="kt-datatable__cell--center kt-datatable__cell kt-datatable__cell--check" data-field="RecordID"><span style="width: 20px;"><label class="kt-checkbox kt-checkbox--single kt-checkbox--solid"><input type="checkbox" value="3">&nbsp;<span></span></label>
                  </span>
                </td>
                <td data-field="OrderID" class="kt-datatable__cell"><span style="width: 141px;">68084-123</span></td>
                <td data-field="Country" class="kt-datatable__cell"><span style="width: 141px;">Argentina AR</span></td>
                <td data-field="ShipAddress" class="kt-datatable__cell"><span style="width: 141px;">2 Pine View Park</span></td>
                <td data-field="ShipDate" class="kt-datatable__cell"><span style="width: 141px;">5/26/2016</span></td>
                <td data-field="Status" class="kt-datatable__cell"><span style="width: 141px;"><span class="kt-badge kt-badge--brand kt-badge--inline kt-badge--pill">Pending</span></span>
                </td>
                <td data-field="Type" data-autohide-disabled="false" class="kt-datatable__cell"><span style="width: 141px;"><span class="kt-badge kt-badge--primary kt-badge--dot"></span>&nbsp;<span class="kt-font-bold kt-font-primary">Retail</span></span>
                </td>
                <td data-field="Actions" data-autohide-disabled="false" class="kt-datatable__cell"><span style="overflow: visible; position: relative; width: 110px;">						<div class="dropdown">							<a data-toggle="dropdown" class="btn btn-sm btn-clean btn-icon btn-icon-md">                                <i class="la la-ellipsis-h"></i>                            </a>						  	<div class="dropdown-menu dropdown-menu-right">						    	<a href="#" class="dropdown-item"><i class="la la-edit"></i> Edit Details</a>						    	<a href="#" class="dropdown-item"><i class="la la-leaf"></i> Update Status</a>						    	<a href="#" class="dropdown-item"><i class="la la-print"></i> Generate Report</a>						  	</div>						</div>						<a title="Edit details" class="btn btn-sm btn-clean btn-icon btn-icon-md">							<i class="la la-edit"></i>						</a>						<a title="Delete" class="btn btn-sm btn-clean btn-icon btn-icon-md">							<i class="la la-trash"></i>						</a>					</span></td>
              </tr>
              <tr data-row="3" class="kt-datatable__row kt-datatable__row--even" style="left: 0px;">
                <td class="kt-datatable__cell--center kt-datatable__cell kt-datatable__cell--check" data-field="RecordID"><span style="width: 20px;"><label class="kt-checkbox kt-checkbox--single kt-checkbox--solid"><input type="checkbox" value="4">&nbsp;<span></span></label>
                  </span>
                </td>
                <td data-field="OrderID" class="kt-datatable__cell"><span style="width: 141px;">67457-428</span></td>
                <td data-field="Country" class="kt-datatable__cell"><span style="width: 141px;">Indonesia ID</span></td>
                <td data-field="ShipAddress" class="kt-datatable__cell"><span style="width: 141px;">3050 Buell Terrace</span></td>
                <td data-field="ShipDate" class="kt-datatable__cell"><span style="width: 141px;">7/2/2016</span></td>
                <td data-field="Status" class="kt-datatable__cell"><span style="width: 141px;"><span class="kt-badge kt-badge--brand kt-badge--inline kt-badge--pill">Pending</span></span>
                </td>
                <td data-field="Type" data-autohide-disabled="false" class="kt-datatable__cell"><span style="width: 141px;"><span class="kt-badge kt-badge--success kt-badge--dot"></span>&nbsp;<span class="kt-font-bold kt-font-success">Direct</span></span>
                </td>
                <td data-field="Actions" data-autohide-disabled="false" class="kt-datatable__cell"><span style="overflow: visible; position: relative; width: 110px;">						<div class="dropdown">							<a data-toggle="dropdown" class="btn btn-sm btn-clean btn-icon btn-icon-md">                                <i class="la la-ellipsis-h"></i>                            </a>						  	<div class="dropdown-menu dropdown-menu-right">						    	<a href="#" class="dropdown-item"><i class="la la-edit"></i> Edit Details</a>						    	<a href="#" class="dropdown-item"><i class="la la-leaf"></i> Update Status</a>						    	<a href="#" class="dropdown-item"><i class="la la-print"></i> Generate Report</a>						  	</div>						</div>						<a title="Edit details" class="btn btn-sm btn-clean btn-icon btn-icon-md">							<i class="la la-edit"></i>						</a>						<a title="Delete" class="btn btn-sm btn-clean btn-icon btn-icon-md">							<i class="la la-trash"></i>						</a>					</span></td>
              </tr>
              <tr data-row="4" class="kt-datatable__row" style="left: 0px;">
                <td class="kt-datatable__cell--center kt-datatable__cell kt-datatable__cell--check" data-field="RecordID"><span style="width: 20px;"><label class="kt-checkbox kt-checkbox--single kt-checkbox--solid"><input type="checkbox" value="5">&nbsp;<span></span></label>
                  </span>
                </td>
                <td data-field="OrderID" class="kt-datatable__cell"><span style="width: 141px;">31722-529</span></td>
                <td data-field="Country" class="kt-datatable__cell"><span style="width: 141px;">Austria AT</span></td>
                <td data-field="ShipAddress" class="kt-datatable__cell"><span style="width: 141px;">3038 Trailsway Junction</span></td>
                <td data-field="ShipDate" class="kt-datatable__cell"><span style="width: 141px;">5/20/2017</span></td>
                <td data-field="Status" class="kt-datatable__cell"><span style="width: 141px;"><span class="kt-badge  kt-badge--danger kt-badge--inline kt-badge--pill">Delivered</span></span>
                </td>
                <td data-field="Type" data-autohide-disabled="false" class="kt-datatable__cell"><span style="width: 141px;"><span class="kt-badge kt-badge--success kt-badge--dot"></span>&nbsp;<span class="kt-font-bold kt-font-success">Direct</span></span>
                </td>
                <td data-field="Actions" data-autohide-disabled="false" class="kt-datatable__cell"><span style="overflow: visible; position: relative; width: 110px;">						<div class="dropdown">							<a data-toggle="dropdown" class="btn btn-sm btn-clean btn-icon btn-icon-md">                                <i class="la la-ellipsis-h"></i>                            </a>						  	<div class="dropdown-menu dropdown-menu-right">						    	<a href="#" class="dropdown-item"><i class="la la-edit"></i> Edit Details</a>						    	<a href="#" class="dropdown-item"><i class="la la-leaf"></i> Update Status</a>						    	<a href="#" class="dropdown-item"><i class="la la-print"></i> Generate Report</a>						  	</div>						</div>						<a title="Edit details" class="btn btn-sm btn-clean btn-icon btn-icon-md">							<i class="la la-edit"></i>						</a>						<a title="Delete" class="btn btn-sm btn-clean btn-icon btn-icon-md">							<i class="la la-trash"></i>						</a>					</span></td>
              </tr>
              <tr data-row="5" class="kt-datatable__row kt-datatable__row--even" style="left: 0px;">
                <td class="kt-datatable__cell--center kt-datatable__cell kt-datatable__cell--check" data-field="RecordID"><span style="width: 20px;"><label class="kt-checkbox kt-checkbox--single kt-checkbox--solid"><input type="checkbox" value="6">&nbsp;<span></span></label>
                  </span>
                </td>
                <td data-field="OrderID" class="kt-datatable__cell"><span style="width: 141px;">64117-168</span></td>
                <td data-field="Country" class="kt-datatable__cell"><span style="width: 141px;">China CN</span></td>
                <td data-field="ShipAddress" class="kt-datatable__cell"><span style="width: 141px;">023 South Way</span></td>
                <td data-field="ShipDate" class="kt-datatable__cell"><span style="width: 141px;">11/26/2016</span></td>
                <td data-field="Status" class="kt-datatable__cell"><span style="width: 141px;"><span class="kt-badge  kt-badge--info kt-badge--inline kt-badge--pill">Info</span></span>
                </td>
                <td data-field="Type" data-autohide-disabled="false" class="kt-datatable__cell"><span style="width: 141px;"><span class="kt-badge kt-badge--success kt-badge--dot"></span>&nbsp;<span class="kt-font-bold kt-font-success">Direct</span></span>
                </td>
                <td data-field="Actions" data-autohide-disabled="false" class="kt-datatable__cell"><span style="overflow: visible; position: relative; width: 110px;">						<div class="dropdown">							<a data-toggle="dropdown" class="btn btn-sm btn-clean btn-icon btn-icon-md">                                <i class="la la-ellipsis-h"></i>                            </a>						  	<div class="dropdown-menu dropdown-menu-right">						    	<a href="#" class="dropdown-item"><i class="la la-edit"></i> Edit Details</a>						    	<a href="#" class="dropdown-item"><i class="la la-leaf"></i> Update Status</a>						    	<a href="#" class="dropdown-item"><i class="la la-print"></i> Generate Report</a>						  	</div>						</div>						<a title="Edit details" class="btn btn-sm btn-clean btn-icon btn-icon-md">							<i class="la la-edit"></i>						</a>						<a title="Delete" class="btn btn-sm btn-clean btn-icon btn-icon-md">							<i class="la la-trash"></i>						</a>					</span></td>
              </tr>
              <tr data-row="6" class="kt-datatable__row" style="left: 0px;">
                <td class="kt-datatable__cell--center kt-datatable__cell kt-datatable__cell--check" data-field="RecordID"><span style="width: 20px;"><label class="kt-checkbox kt-checkbox--single kt-checkbox--solid"><input type="checkbox" value="7">&nbsp;<span></span></label>
                  </span>
                </td>
                <td data-field="OrderID" class="kt-datatable__cell"><span style="width: 141px;">43857-0331</span></td>
                <td data-field="Country" class="kt-datatable__cell"><span style="width: 141px;">China CN</span></td>
                <td data-field="ShipAddress" class="kt-datatable__cell"><span style="width: 141px;">56482 Fairfield Terrace</span></td>
                <td data-field="ShipDate" class="kt-datatable__cell"><span style="width: 141px;">6/28/2016</span></td>
                <td data-field="Status" class="kt-datatable__cell"><span style="width: 141px;"><span class="kt-badge  kt-badge--danger kt-badge--inline kt-badge--pill">Delivered</span></span>
                </td>
                <td data-field="Type" data-autohide-disabled="false" class="kt-datatable__cell"><span style="width: 141px;"><span class="kt-badge kt-badge--success kt-badge--dot"></span>&nbsp;<span class="kt-font-bold kt-font-success">Direct</span></span>
                </td>
                <td data-field="Actions" data-autohide-disabled="false" class="kt-datatable__cell"><span style="overflow: visible; position: relative; width: 110px;">						<div class="dropdown">							<a data-toggle="dropdown" class="btn btn-sm btn-clean btn-icon btn-icon-md">                                <i class="la la-ellipsis-h"></i>                            </a>						  	<div class="dropdown-menu dropdown-menu-right">						    	<a href="#" class="dropdown-item"><i class="la la-edit"></i> Edit Details</a>						    	<a href="#" class="dropdown-item"><i class="la la-leaf"></i> Update Status</a>						    	<a href="#" class="dropdown-item"><i class="la la-print"></i> Generate Report</a>						  	</div>						</div>						<a title="Edit details" class="btn btn-sm btn-clean btn-icon btn-icon-md">							<i class="la la-edit"></i>						</a>						<a title="Delete" class="btn btn-sm btn-clean btn-icon btn-icon-md">							<i class="la la-trash"></i>						</a>					</span></td>
              </tr>
              <tr data-row="7" class="kt-datatable__row kt-datatable__row--even" style="left: 0px;">
                <td class="kt-datatable__cell--center kt-datatable__cell kt-datatable__cell--check" data-field="RecordID"><span style="width: 20px;"><label class="kt-checkbox kt-checkbox--single kt-checkbox--solid"><input type="checkbox" value="8">&nbsp;<span></span></label>
                  </span>
                </td>
                <td data-field="OrderID" class="kt-datatable__cell"><span style="width: 141px;">64980-196</span></td>
                <td data-field="Country" class="kt-datatable__cell"><span style="width: 141px;">Croatia HR</span></td>
                <td data-field="ShipAddress" class="kt-datatable__cell"><span style="width: 141px;">0 Elka Street</span></td>
                <td data-field="ShipDate" class="kt-datatable__cell"><span style="width: 141px;">8/5/2016</span></td>
                <td data-field="Status" class="kt-datatable__cell"><span style="width: 141px;"><span class="kt-badge  kt-badge--danger kt-badge--inline kt-badge--pill">Danger</span></span>
                </td>
                <td data-field="Type" data-autohide-disabled="false" class="kt-datatable__cell"><span style="width: 141px;"><span class="kt-badge kt-badge--danger kt-badge--dot"></span>&nbsp;<span class="kt-font-bold kt-font-danger">Online</span></span>
                </td>
                <td data-field="Actions" data-autohide-disabled="false" class="kt-datatable__cell"><span style="overflow: visible; position: relative; width: 110px;">						<div class="dropdown">							<a data-toggle="dropdown" class="btn btn-sm btn-clean btn-icon btn-icon-md">                                <i class="la la-ellipsis-h"></i>                            </a>						  	<div class="dropdown-menu dropdown-menu-right">						    	<a href="#" class="dropdown-item"><i class="la la-edit"></i> Edit Details</a>						    	<a href="#" class="dropdown-item"><i class="la la-leaf"></i> Update Status</a>						    	<a href="#" class="dropdown-item"><i class="la la-print"></i> Generate Report</a>						  	</div>						</div>						<a title="Edit details" class="btn btn-sm btn-clean btn-icon btn-icon-md">							<i class="la la-edit"></i>						</a>						<a title="Delete" class="btn btn-sm btn-clean btn-icon btn-icon-md">							<i class="la la-trash"></i>						</a>					</span></td>
              </tr>
              <tr data-row="8" class="kt-datatable__row" style="left: 0px;">
                <td class="kt-datatable__cell--center kt-datatable__cell kt-datatable__cell--check" data-field="RecordID"><span style="width: 20px;"><label class="kt-checkbox kt-checkbox--single kt-checkbox--solid"><input type="checkbox" value="9">&nbsp;<span></span></label>
                  </span>
                </td>
                <td data-field="OrderID" class="kt-datatable__cell"><span style="width: 141px;">0404-0360</span></td>
                <td data-field="Country" class="kt-datatable__cell"><span style="width: 141px;">Colombia CO</span></td>
                <td data-field="ShipAddress" class="kt-datatable__cell"><span style="width: 141px;">38099 Ilene Hill</span></td>
                <td data-field="ShipDate" class="kt-datatable__cell"><span style="width: 141px;">3/31/2017</span></td>
                <td data-field="Status" class="kt-datatable__cell"><span style="width: 141px;"><span class="kt-badge  kt-badge--danger kt-badge--inline kt-badge--pill">Delivered</span></span>
                </td>
                <td data-field="Type" data-autohide-disabled="false" class="kt-datatable__cell"><span style="width: 141px;"><span class="kt-badge kt-badge--danger kt-badge--dot"></span>&nbsp;<span class="kt-font-bold kt-font-danger">Online</span></span>
                </td>
                <td data-field="Actions" data-autohide-disabled="false" class="kt-datatable__cell"><span style="overflow: visible; position: relative; width: 110px;">						<div class="dropdown">							<a data-toggle="dropdown" class="btn btn-sm btn-clean btn-icon btn-icon-md">                                <i class="la la-ellipsis-h"></i>                            </a>						  	<div class="dropdown-menu dropdown-menu-right">						    	<a href="#" class="dropdown-item"><i class="la la-edit"></i> Edit Details</a>						    	<a href="#" class="dropdown-item"><i class="la la-leaf"></i> Update Status</a>						    	<a href="#" class="dropdown-item"><i class="la la-print"></i> Generate Report</a>						  	</div>						</div>						<a title="Edit details" class="btn btn-sm btn-clean btn-icon btn-icon-md">							<i class="la la-edit"></i>						</a>						<a title="Delete" class="btn btn-sm btn-clean btn-icon btn-icon-md">							<i class="la la-trash"></i>						</a>					</span></td>
              </tr>
              <tr data-row="9" class="kt-datatable__row kt-datatable__row--even" style="left: 0px;">
                <td class="kt-datatable__cell--center kt-datatable__cell kt-datatable__cell--check" data-field="RecordID"><span style="width: 20px;"><label class="kt-checkbox kt-checkbox--single kt-checkbox--solid"><input type="checkbox" value="10">&nbsp;<span></span></label>
                  </span>
                </td>
                <td data-field="OrderID" class="kt-datatable__cell"><span style="width: 141px;">52125-267</span></td>
                <td data-field="Country" class="kt-datatable__cell"><span style="width: 141px;">Thailand TH</span></td>
                <td data-field="ShipAddress" class="kt-datatable__cell"><span style="width: 141px;">8696 Barby Pass</span></td>
                <td data-field="ShipDate" class="kt-datatable__cell"><span style="width: 141px;">1/26/2017</span></td>
                <td data-field="Status" class="kt-datatable__cell"><span style="width: 141px;"><span class="kt-badge kt-badge--brand kt-badge--inline kt-badge--pill">Pending</span></span>
                </td>
                <td data-field="Type" data-autohide-disabled="false" class="kt-datatable__cell"><span style="width: 141px;"><span class="kt-badge kt-badge--success kt-badge--dot"></span>&nbsp;<span class="kt-font-bold kt-font-success">Direct</span></span>
                </td>
                <td data-field="Actions" data-autohide-disabled="false" class="kt-datatable__cell"><span style="overflow: visible; position: relative; width: 110px;">						<div class="dropdown">							<a data-toggle="dropdown" class="btn btn-sm btn-clean btn-icon btn-icon-md">                                <i class="la la-ellipsis-h"></i>                            </a>						  	<div class="dropdown-menu dropdown-menu-right">						    	<a href="#" class="dropdown-item"><i class="la la-edit"></i> Edit Details</a>						    	<a href="#" class="dropdown-item"><i class="la la-leaf"></i> Update Status</a>						    	<a href="#" class="dropdown-item"><i class="la la-print"></i> Generate Report</a>						  	</div>						</div>						<a title="Edit details" class="btn btn-sm btn-clean btn-icon btn-icon-md">							<i class="la la-edit"></i>						</a>						<a title="Delete" class="btn btn-sm btn-clean btn-icon btn-icon-md">							<i class="la la-trash"></i>						</a>					</span></td>
              </tr>
            </tbody>
          </table>
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
              <li style=""></li>
              <li><a title="Next" class="kt-datatable__pager-link kt-datatable__pager-link--next" data-page="2"><i class="flaticon2-next"></i></a></li>
              <li><a title="Last" class="kt-datatable__pager-link kt-datatable__pager-link--last" data-page="4"><i class="flaticon2-fast-next"></i></a></li>
            </ul>
            <div class="kt-datatable__pager-info">
              <div class="dropdown  kt-datatable__pager-size" style="width: 60px;"><select class="selectpicker kt-datatable__pager-size" title="Select page size" data-width="60px" data-selected="10" tabindex="-98"><option class="bs-title-option" value=""></option><option value="10">10</option><option value="20">20</option><option value="30">30</option><option value="50">50</option><option value="100">100</option></select>
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
              </div><span class="kt-datatable__pager-detail">Showing 1 - 10 of 40</span></div>
          </div>
        </div>
        <!--end: Datatable -->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      filtering: function() {
        console.log('filtering')
      }
    }

  }
</script>
