<template>
    <div class="">
        <h1>Data of users registered</h1>
        <table id="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Date of Birth</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody v-if="Object.keys(apiData).length!=0">
                <tr v-for="(item, index) in apiData" :key="index">
                    <td> {{item.name}} </td>
                    <td>{{item.email}}</td>
                    <td>{{item.dateofbirth}}</td>
                    <td>
                        <button @click="onPopupCliked(index)">
                            <i class='far fa-edit' style='font-size:24px;color: #1CAC78'></i>
                        </button>
                        <button style="margin-left: 10%;" @click="deleteEntry(index)">
                            <i class='fas fa-trash' style='font-size:24px;color: #142d4c'></i>
                       </button>
                       <div class="popup" id="popup">
                            <PopUp v-bind:formData="formEntry"
                            @cancelEvent="onPopupClosed()"
                            @update:apiData="updateValue($event)"/>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td width="100%" colspan="4">No data found</td></tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';
import PopUp from '../views/PopUp.vue'

export default {
    name: 'FormContents',
    components: { PopUp },
    data() {
        return {
            apiData: {},
            formEntry: {},
            index: null,
        };
    },
    created() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            axios.get('http://localhost:3001/users').then((response) => {
                this.apiData = (response.data);
            }).catch((error) => {
                console.log(error);
            });
        },
        deleteEntry(index) {
            this.apiData.splice(index, 1);
        },
        onPopupCliked(index) {
            this.formEntry = this.apiData[index];
            let doc = document.getElementById('popup');
            doc.classList.add('openpopup'); 
            this.index = index;
        },
        onPopupClosed() {
            let doc = document.getElementById('popup');
            doc.classList.remove('openpopup'); 
        },
        updateValue(value) {
            console.log('index', this.index);
            this.apiData[this.index] = value;
        },
    }
};
</script>

<style>
h1 {
    color: white;
    padding: 20px;
}
thead th {
    background: #1CAC78;
    color: black;
    font-family: Arial, sans-serif;
}
th,td{
    color: white;
    border: 1px solid white;
    padding: 8px;
}
#table {
    margin: 0px auto;
    border-collapse: collapse;
    width: 90%;
    border: 2px solid white;
}
button {
    cursor: pointer;
}
.popup {
    /* display: none; */
    visibility: hidden;
    /* z-index: 1; */
}
.openpopup{
    visibility: visible;
}
</style>