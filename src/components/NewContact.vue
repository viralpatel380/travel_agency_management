<template>

  <section class="container">
    <h1>Add New Travel Partner</h1>

    <form @submit.prevent="saveContact">

      <div class="field">
        <label class="label">Company Name</label>
        <div class="control">
          <input class="input" style="width:50%" type="text" placeholder="First Name" v-model="firstname" required>
        </div>
      </div>

      <div class="field">
        <label class="label">Contact Person</label>
        <div class="control">
          <input class="input" style="width:50%" type="text" placeholder="Contact Person" v-model="contactperson" required>
        </div>
      </div>

      <div class="field">
        <label class="label">Email Address</label>
        <div class="control">
          <input class="input" style="width:50%" type="email" placeholder="Email Address" v-model="emailaddress" required>
        </div>
      </div>

      <div class="field">
        <label class="label">Phone Number</label>
        <div class="control">
          <input class="input" style="width:50%" type="text" placeholder="Phone Number" v-model="phonenumber" required>
        </div>
      </div>


      <div class="field">
        <label class="label">Area</label>
        <div class="control">
          <input class="input" style="width:50%" type="text" placeholder="Area" v-model="area" required>
        </div>
      </div>


      <div class="field">
        <label class="label">City</label>
        <div class="control">
          <input class="input" style="width:50%" type="text" placeholder="City" v-model="city" required>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <button type="submit" style="border-radius:2000px" class="button is-success is-rounded">Submit</button>
         </router-link :to"success"> 
          <button class="button is-danger is-rounded" >Back</button>
          </router-link>
        </div> 
        
      </div>

    </form> 
    
  </section>

</template>

<script>
    import db from './firebaseInit'
    export default {
      name: 'new-contact',
      data () {
        return {
          firstname: null,
          contactperson: null,
          emailaddress: null,
          phonenumber: null,
          area: null,
          city: null

        }
      },
      methods: {
        saveContact () {
          const slug = this.generateUUID()

          db.collection('contacts').add({
            firstname: this.firstname,
            contactperson: this.contactperson,
            emailaddress: this.emailaddress,
            phonenumber: this.phonenumber,
            area: this.area,
            city: this.city,
            slug: slug
          })
            .then(docRef => {
              console.log('Document written with ID: ', docRef.id)
              this.$router.push(`/${slug}/success`)
            })
            .catch(function (error) {
              console.error('Error adding document: ', error)
            })
        },
        generateUUID () {
          let d = new Date().getTime()
          let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = (d + Math.random() * 16) % 16 | 0
            d = Math.floor(d / 16)
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
          })
          return uuid
        }
      }
    }
</script>

<style scoped>

  section {
    height: 100vh;
  }

  h1 {
    font-size: 30px;
    margin: 30px 0;
  }

  .input {
    height: 40px;
  }

</style>
