const app = Vue.createApp({
    data() {
      return {
        firstName: 'Augusto',
        lastName: 'Diaz',
        email: 'augustordiaz@gmail.com',
        gender: 'male',
        picture: 'https://firebasestorage.googleapis.com/v0/b/my-projects-97ae6.appspot.com/o/Photos%20Augusto%2FAugusto_128x128.png?alt=media&token=3ceb0a98-efe8-4675-90df-f28a09a526e5'
      }
    },
    methods: {
      async getUser() {
        const res = await fetch('https://randomuser.me/api')
        const { results } = await res.json()
  
        this.firstName = results[0].name.first
        this.lastName = results[0].name.last
        this.email = results[0].email
        this.gender = results[0].gender
        this.picture = results[0].picture.large
      },
    },
  })
  
  app.mount('#app')
  