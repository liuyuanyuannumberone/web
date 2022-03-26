<template>
    <v2-table :data="list4" border
              :loading="loading"
              :total="total"
              :shown-pagination="true"
              :pagination-info="paginationInfo"
              @page-change="handlePageChange">
        <v2-table-column label="Name" prop="name"></v2-table-column>
        <v2-table-column label="Date" prop="date"></v2-table-column>
        <v2-table-column label="Address" prop="address" width="150"></v2-table-column>
        <v2-table-column label="Birthday" prop="birthDay"></v2-table-column>
        <v2-table-column label="Songs" prop="songs"></v2-table-column>
        <v2-table-column label="Province" prop="province"></v2-table-column>
        <v2-table-column label="City" prop="city"></v2-table-column>
        <v2-table-column label="Country" prop="country"></v2-table-column>
        <v2-table-column label="Age" prop="age"></v2-table-column>
        <v2-table-column label="Salary" prop="salary"></v2-table-column>
        <v2-table-column label="Desc" prop="desc"></v2-table-column>
    </v2-table>
</template>

<script>
  export default {
    data () {
      return {
        currentPage: 1,
        total: 198,
        loading: false,
        paginationInfo: {
          text: '<span>Total of <strong>198</strong>, <strong>10</strong> per page</span>'
        },
        list4: [{
          date: '2017-12-02',
          name: 'test1',
          address: 'Shenzhen,China',
          birthDay: '1988-09-08',
          songs: 100,
          province: 'Guangdong',
          city: 'Shenzhen',
          country: 'China',
          age: 30,
          salary: 12000,
          desc: 'no desc'
        }, {
          date: '2017-11-02',
          name: 'test2',
          address: 'Guangzhou,China',
          birthDay: '1978-09-08',
          songs: 98,
          province: 'Guangdong',
          city: 'Guangzhou',
          country: 'China',
          age: 40,
          salary: 10000,
          desc: 'no desc'
        }, {
          date: '2018-01-02',
          name: 'test3',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        },{
          date: '2018-01-02',
          name: 'test4',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        }, {
          date: '2018-01-02',
          name: 'test5',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        }, {
          date: '2018-01-02',
          name: 'test6',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        }, {
          date: '2018-01-02',
          name: 'test7',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        }, {
          date: '2018-01-02',
          name: 'test8',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        }, {
          date: '2018-01-02',
          name: 'test9',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        }, {
          date: '2018-01-02',
          name: 'test10',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        }]
      }
    },

    methods: {
      handlePageChange(page) {
        this.currentPage = page;
        this.loading = true;
        let start = (page - 1) * 10 + 1;

        const list = this.list4.map(item => {
          return Object.assign({}, item, {
            name: `test${start++}`
          });
        });

        setTimeout(() => {
          this.loading = false;
          this.list4 = [].concat(list);
        }, 2000);
      }
    }
  }
</script>