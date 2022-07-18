<template>
  <div>
    {{ selectedIds }}
    <button @click="rows = []">empty row</button>
    <button @click="resetTable">reset Table</button>
    <button @click="hideColumn">hide column</button>
    <button @click="setFilter">SetFilter</button>
    <button @click="changePage">Change Page</button>
    <input type="text" v-model="searchTerm" />
    <vue-good-table
      ref="my-table"
      @on-column-filter="onColumnFilter"
      @on-select-all="onSelectAll"
      @on-sort-change="onSortChange"
      @on-page-change="onPageChange"
      @on-per-page-change="onPerPageChange"
      @on-search="onSearch"
      @on-selected-rows-change="onSelectChanged"
      :columns="columns"
      :rows="rows"
      :pagination-options="paginationOptions"
      :select-options="{
        enabled: true,
        selectOnCheckboxOnly: false,
        disableSelectInfo: true,
      }"
      theme="polar-bear"
      styleClass="vgt-table"
      :sort-options="{
        enabled: true,
        multipleColumns: false,
      }"
      :search-options="{
        enabled: true,
        skipDiacritics: true,
      }"
    >
    </vue-good-table>
  </div>
</template>

<script>
import GroupedTable from "./grouped-table.vue";
import RemoteTable from "./remote-table.vue";
import rowdata from "./data.json";
export default {
  name: "test",
  data() {
    return {
      currentPage: 1,
      selectedIds: [],
      rowStyleClass: "red",
      searchTerm: "",
      paginationOptions: {
        enabled: true,
        mode: "records",
        perPage: 3,
        perPageDropdown: [3, 5, 10, 200, 300, 500, 1000],
        perPageDropdownEnabled: true,
        jumpFirstOrLast: true,
        // infoFn: (params) => `alala ${params.firstRecordOnPage} to ${params.lastRecordOnPage} of ${params.totalRecords}`,
      },
      columns: [
        {
          label: "First Name",
          field: "firstName",
          filterOptions: {
            styleClass: "", // class to be added to the parent th element
            enabled: true, // enable filter for this column
            // placeholder: "First Name Filter", // placeholder for filter input
            // filterValue: "Jane", // initial populated value for this filter
            filterDropdownItems: [], // dropdown (with selected values) instead of text input
            // filterFn: this.columnFilterFn, //custom filter function that
            // trigger: "enter", //only trigger on enter not on keyup
          },
        },
        {
          label: "Last Name",
          field: "lastName",
          filterOptions: {
            enabled: true,
          },
        },
        {
          label: "Phone Nr.",
          field: "phoneNr",
          filterOptions: {
            enabled: true,
          },
        },
        {
          label: "City",
          field: "city",
          filterOptions: {
            enabled: true,
          },
        },
        {
          label: "Created at",
          field: "created_at",
          type: "date",
          dateInputFormat: "yyyy-MM-dd HH:mm:ss", // expects 2018-03-16
          dateOutputFormat: "dd/MM/yyyy HH:mm", // outputs Mar 16th 2018
          convertUtcToLocal: true,
        },
      ],
      rows: rowdata,
    };
  },
  methods: {
    fieldValid(row) {
      return row.bool;
    },
    fieldExact(row) {
      return row.exact;
    },
    changePage() {
      this.currentPage += 1;
      this.$set(this.paginationOptions, "setCurrentPage", this.currentPage);
    },
    funcValue(row) {
      return row.age + 5;
    },
    tdClassFunc(row) {
      if (row.age > 50) {
        return "red";
      }
      return "green";
    },
    getRowStyle() {
      return "";
    },
    hideColumn() {
      this.$set(this.columns[0], "hidden", true);
    },
    resetTable() {
      this.$refs["my-table"].reset();
    },
    onSelectAll(params) {
      console.log(params);
      // this.unselectAll();
      // if (params.selected) {
      //   for (let i = 0; i < params.selectedRows.length; i++) {
      //     // lets get the original index of the row
      //     const originalIndex = params.selectedRows[i].originalIndex;
      //     // now lets set that row's selected value to be true
      //     this.$set(this.rows[originalIndex], 'selected', true);
      //   }
      // }
    },
    unselectAll() {
      for (let i = 0; i < this.rows.length; i++) {
        this.$set(this.rows[i], "selected", false);
      }
    },
    toggleSelectRow(params) {
      console.log(params.row, params.pageIndex, params.selected);
      // if (this.rows[row.originalIndex].selected) {
      //   this.$set(this.rows[row.originalIndex], 'selected', false);
      // } else {
      //   this.$set(this.rows[row.originalIndex], 'selected', true);
      // }
    },
    selectCell(params) {
      console.log("select cell called");
      console.log(params);
    },
    searchedRow(params) {
      console.log(params);
    },
    setFilter() {
      // this.columns[0].filterOptions.filterValue = 'John';
      this.$set(this.columns[0].filterOptions, "filterValue", "Chris");
      // const column1 = JSON.parse(JSON.stringify(this.columns[0]));
      // column1.filterOptions.filterValue = 'John';
      // this.$set(this.columns, 0, column1);
      // const column2 = JSON.parse(JSON.stringify(this.columns[1]));
      // column2.filterOptions.filterValue = 20;
      // this.$set(this.columns, 1, column2);
      // this.$set(this.columns[1], 'filterOptions', { enabled: true, filterValue: 20 });
      // this.$set(this.columns[0], 'filterOptions', {
      //   enabled: true,
      //   placeholder: 'All',
      //   filterDropdownItems: ['Chris', 'Dan', 'Susan', 'John'],
      //   filterValue: 'John',
      // });
    },
    autofilter(type) {
      if (type === "name") {
        this.columns[0].filterOptions.filterValue = "John";
      }
      if (type === "age") {
        this.columns[1].filterOptions.filterValue = ">30";
      }
      if (type === "reset") {
        this.columns[0].filterOptions.filterValue = "";
        this.columns[1].filterOptions.filterValue = "";
        // this.columns[1].filterOptions.filterValue = null;
      }
    },

    filterAge(data, filterString) {
      if (filterString === ">30" && parseInt(data, 10) > 30) {
        return true;
      }
      if (filterString === "<=30" && parseInt(data, 10) <= 30) {
        return true;
      }
      return false;
    },

    onClick() {
      console.log("clicked");
      this.rowStyleClass = "green";
    },
    addRow() {
      this.rows.push({
        name: `Chris ${Math.random()}`,
        age: 20,
      });
    },
    editRow() {
      this.$set(this.rows[12], "age", 300);
    },
    sortFn(x, y, col) {
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    },
    formatAge(value) {
      return `lala${value}lala`;
    },
    addFilter() {
      this.$set(this.columns[2], "filterValue", "Jane");
      console.log(this.columns);
    },

    // events
    // ===================================================
    onPerPageChange(evt) {
      // { currentPage: 1, currentPerPage: 10, total: 5 }
      console.log("per-page-changed:");
      console.log(evt);
    },

    onPageChange(evt) {
      // { currentPage: 1, currentPerPage: 10, total: 5 }
      console.log("page-changed:");
      console.log(evt);
    },

    onColumnFilter(params) {
      // { currentPage: 1, currentPerPage: 10, total: 5 }
      console.log("on-column-filters:");
      console.log(params);
    },

    onSearch(params) {
      console.log("on-search:");
      console.log(params);
    },

    onSortChange(params) {
      console.log("on-sort-change:");
      console.log(params);
      const [nameFilter] = params;
      console.log(typeof nameFilter.field === "function");
    },

    onRowClick(params) {
      console.log("on-row-click");
      console.log(params);
    },

    onSelectChanged(params) {
      console.log(params);
      const selectedIds = params.selectedRows.reduce((acc, row) => {
        acc.push(row.id);
        return acc;
      }, []);
      console.log(params.selectedRows);
      console.log(selectedIds);
      this.selectedIds = selectedIds;
    },
  },
  mounted() {
    // axios.get('https://jsonplaceholder.typicode.com/posts')
    //   .then((response) => {
    //     console.log(response);
    //     this.rows = response.data;
    //   });
  },
  components: {
    "grouped-table": GroupedTable,
    RemoteTable,
  },
};
</script>

<style lang="css">
.row-style {
  background-color: red;
}
* {
  font-family: "Open Sans";
}
.red {
  background-color: red;
}
.green {
  background-color: green;
}
/* .vgt-selection-info-row.info-custom{
    background: red;
  } */
</style>
