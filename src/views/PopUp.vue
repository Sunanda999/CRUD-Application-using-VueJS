<template>
    <div id="popup">
        <span>{{ formData.name }}</span>
        <form style="text-align: center;margin: 50vh auto;">
            <button class="cancel" @click="$emit('cancelEvent')">
                <i class="fa fa-close" style="font-size:24px"></i>
            </button>
            <table>
                <tr>
                    <td><input type="text" :value="formData.name" @input="details.name = $event.target.value"/></td>
                    <td><input type="text" :value="formData.email" @input="details.email = $event.target.value"/></td>
                    <td><input type="text" :value="formData.dateofbirth" @input="details.dateofbirth = $event.target.value"/></td>
                </tr>
            </table>
            <input type="submit" value="Save" @click="saveData()"/>
        </form>
    </div>
</template>

<script>
export default {
    name: 'PopUp',
    data() {
        return {
        };
    },
    props: {
        formData: {
            type: Object,
            default: () => ({
                name: '',
                email: '',
                dateofbirth: '',
            }),
        },
    },
    methods: {
        saveData() {
            this.$emit('update:apiData', this.details); 
            this.$emit('cancelEvent');
        },
    },
    computed: {
        details() {
            return this.formData;
        },
    },
};
</script>

<style scoped>
#popup {
    position: fixed;
    top: 0px;
    left: 0px;
    background:rgba(245,245,245,0.6);
    width:100%;
    height:100%;
}
table {
    margin: 0px auto;
    width: 90%;
    background: black;
}
td {
    padding: 8px;
}
input[type=text] {
    background: black;
    color: white;
    border: none;
    outline: none;
}
input[type=submit] {
    margin-top: 5px;
    padding: 9px;
    color: white;
    border: none;
    background: #17B169;
}
input[type=submit]:hover {
    background: #6af79a;
}
.cancel{
    position: fixed;
    top: calc(50vh - 15px);
    right: 2%;
    color: black;
}
</style>