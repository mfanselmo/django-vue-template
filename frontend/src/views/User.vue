<template>
  <div class="user">
    <h1>Here are the users</h1>
    <ul>
      <li v-for="user in users" :key="user.username">{{user.username}} | {{user.email}}</li>
    </ul>
  </div>
</template>
<script>
import {getUsers} from '@/api'

export default {
  name: "User",
  data() {
      
      return {
          users: []}
  },
  mounted() {
      getUsers().then(res => {
          this.users=res.results
          console.log(this.users[0].email)
      }).catch(err => {
          console.error('error',err)
      })

  }

};
</script>