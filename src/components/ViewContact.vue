<template>
  <section class="container">

    <h1>Travel Partner</h1>

    <div class="notification is-success" v-if="success">Contact successfully saved!</div>

    <div class="contact--section">
      <p class="__name">{{firstname}} </p>
      <p>Contact Person : {{contactperson}}</p>

      <p>Email          : {{emailaddress}}</p>

      <p>Phone No.      :{{phonenumber}}</p>
      <p>Area : {{area}}</p>
      <p>City : {{city}}</p>

    </div>
  </section>
</template>

<script>
  import db from './firebaseInit'
  export default {
    name: 'view-contact',
    data () {
      return {
        firstname: null,
        contactperson: null,
        emailaddress: null,
        phonenumber: null,
        area: null,
        city: null,
        success: (this.$route.params.success)
      }
    },
    beforeRouteEnter (to, from, next) {
      db.collection('contacts').where('slug', '==', to.params.person).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          next(vm => {
            vm.firstname = doc.data().firstname
            vm.contactperson = doc.data().contactperson
            vm.emailaddress = doc.data().emailaddress
            vm.phonenumber = doc.data().phonenumber
            vm.area = doc.data().area
            vm.city = doc.data().city
          })
        })
      })
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData () {
        db.collection('contacts').where('slug', '==', this.$route.params.person).get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            console.log(doc.id, ' => ', doc.data())
            this.firstname = doc.data().firstname
            this.contactperson = doc.data().contactperson
            this.emailaddress = doc.data().emailaddress
            this.phonenumber = doc.data().phonenumber
            this.area = doc.data().area
            this.success = this.$route.params.success
          })
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  section {
    height: 100vh;
  }
  h1 {
    font-size: 30px;
    margin: 30px 0;
  }
  p {
    margin-bottom: 20px;
  }
  .contact--section {
    background-color: white;
    padding: 20px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.05);
    .__name {
      font-size: 30px;
    }
  }
</style>
