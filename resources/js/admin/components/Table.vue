<template>
  <div>
    <vue-good-table
      :columns="columns"
      :rows="rows"
      :line-numbers="true"
      :pagination-options="{
            enabled: true,
            mode: 'records',
            perPage: 5,
            perPageDropdown: [8, 10, 12],
            dropdownAllowAll: true,
            nextLabel: 'next',
            prevLabel: 'prev',
            rowsPerPageLabel: 'Rows per page',
            ofLabel: 'of',
            pageLabel: 'page',
            allLabel: 'All',
         }">
        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'btn'">
           <b-button @click="detailes(props.row)" variant="primary" v-b-modal.modal-1 >Show detailes</b-button>

            <b-button @click="deleteUser(props.row)" variant="primary">Delete</b-button>

          </span>
        </template>
      </vue-good-table>

        <b-modal  id="modal-1" title="User Detailes">
            <div>
            <p class="my-4"  > <span>Id : </span> {{  userData.id }} </p>
            <p class="my-4"  > <span>Email :</span>  {{  userData.email }} </p>
            <p class="my-4"  > <span>First Name :</span>  {{  userData.first_name }} </p>
            <p class="my-4"  > <span>Last Name: :</span>  {{  userData.last_name }} </p>
            <div class="my-4" > <span> Avatar :</span> {{ mg }} </div>
            </div>
        </b-modal>
      </div>
</template>

<script>
export default {
    data(){
    return {
      columns: [
        {
          label: 'Id',
          field: 'id',
        },
        {
          label: 'Email',
          field: 'email',
        },
        {
          label: 'first_name',
          field: 'first_name',

        },
        {
          label: 'last_name',
          field: 'last_name',

        },
        {
          label: 'Avatar',
          field: 'avatar',
          html: true,
        },
        {
            label: 'show user details',
            field: 'btn',
            html: true,
        },
        // {
        //     label: 'Delete',
        //     field: 'btnn',
        //     html: true,
        // },

      ],
      rows:[],
      userData:{},
      mg:''
    };

  },

  mounted: function() {
        axios.get('https://reqres.in/api/users')
            .then((response) => {

                //this.rows.push(response.data.data)

                this.rows = response.data.data

                console.log(response.data.data)
                for(let i=0 ; i<=response.data.data.length ;i++){
                    let res = response.data.data[i];
                    // let eId =  response.data.data[i].id;
                    // console.log(eId)
                    res.avatar = "<img src =" + response.data.data[i].avatar + ">";
                    // res.btn =  '<button style ="background-color: #716aca;color: azure;;border-radius: 20%;">Edit</button>';
                    // res.btnn =  '<button  style ="background-color: #716aca;color: azure;;border-radius: 20%;" >Delete</button>';
                }

            }).catch(error => console.log(error))

    },methods:{
        deleteUser(row){
            console.log('mohammed seyam');
            let id = row.id;
            let index = this.rows.findIndex(x => x.id === id);
                swal({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                    }).then((result) => {
                        // Send request to the server
                          this.rows.splice(index, 1);
                        axios.delete("https://reqres.in/api/users/" + id,{data: {id: this.id}}).then(()=>{

                                        swal(
                                        'Deleted!',
                                        'The User has been deleted.',
                                        'success'
                                        )
                                }).catch(()=> {
                                    swal("Failed!", "There was something wronge.", "warning");
                                });
                         })
                    },
                    detailes(row){
                        let id = row.id;
                        let index = this.rows.findIndex(x => x.id === id);
                        this.userData =this.rows[index];
                        console.log(this.userData);
                        this.mg = this.userData.avatar;
                         console.log(this.mg);
                        },
            }


      ,

    // methods: {
    // deleteEmployee(eId) {
    //   console.log(eId);
    //    }
    // }


}
</script>
<style scoped>
.table.vgt-table{
     font-size: 16px;
    border-collapse: collapse;
    background-color: #fff;
    width: 94%;
    max-width: 1100px;
    table-layout: unset;
    border: 1px solid #dcdfe6;
    margin: 0 auto;
    margin: 10px 10px 10px 50px;
}
.vgt-inner-wrap{
    width: 1000px;
    margin: auto;
}
.vgt-wrap {
    min-height: 500px;
    width: 1000px;
    padding: 10px;
    margin: 10px 10px 10px 50px;
}
h5{
    display: inline-block;
    color: brown;
}
span{
    color: brown;
    font-size: 13.5px;
    font-weight: bolder;
}

</style>
