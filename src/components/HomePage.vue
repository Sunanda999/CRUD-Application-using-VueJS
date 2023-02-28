<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="registration-form">
      <h2>Registration form</h2>
      <form @submit="$event.preventDefault()">
        <label for="name">Name</label>
        <input v-model="username" type="text" id="name" name="username" placeholder="Enter your name"/>
        <label for="email">Email</label>
        <input v-model="useremail" type="email" id="email" name="email" placeholder="Enter your email"/>
        <label for="dob">Date of birth</label>
        <input v-model="dateofbirth" type="date" id="dob" name="dateofbirth"/>
        <input type="submit" value="Submit" @click="submitEvent()"/>
      </form>
    </div>
    <router-link :to="{ name: 'FormContents' }">Click here to check the list of registered people</router-link>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  data() {
    return {
      username: '',
      useremail: '',
      dateofbirth: '',
    };
  },
  methods: {
    submitEvent() {
      axios.post('http://localhost:3001/users', {
        name: this.username,
        email: this.useremail,
        dateofbirth: this.dateofbirth,
      }).then((response) => {
        console.log(response);
        this.username = '';
        this.useremail = '';
        this.dateofbirth = '';
      }).catch((error) => {
        console.log(error);
      });
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: white;
  font-family: Helvetica, sans-serif;
  margin-bottom: 20px;
}
h2 {
  padding: 10px;
  font-family: Helvetica, sans-serif;

}
input {
  width: 100%;
  padding: 10px;
  border: solid #9ba6a5 2px;
  border-radius: 10px;
  box-sizing: border-box;
}
label {
  text-align: left;
  display: block;
  padding: 10px;
  padding-left: 0px;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}
.registration-form {
  background-color: #42b883;
  margin: 0px 25vw;
  padding: 20px;
}
input[type=submit] {
  width: 100px;
  margin-top: 20px;
  background-color: #132743;
  font-size: inherit;
  color: white;
  box-sizing: content-box;
  border: solid #132743 2px;
  cursor: pointer;
}
input[type=submit]:hover {
  background-color: #24527a;
  border: solid #24527a 2px;
}
a {
  display: block;
  color: #8dc6ff;
  margin: 10px 0px 55px 0px;
}
</style>
