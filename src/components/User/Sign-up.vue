<template>
        <div>
            <v-container>
                <v-layout row v-if="error">
                    <v-flex xs12 sm6 offset-sm3>
                        <app-alert :text="error.message" @dismissed="onDismissed"></app-alert>
                    </v-flex>
                </v-layout>
                <v-layout>
                    <v-flex xs12 sm6 offset-sm3>
                        <v-card>
                            <v-card-text>
                                <v-container>
                                    <form @submit.prevent="onSignUp">
                                        <v-layout row>
                                            <v-flex xs12>
                                                <v-text-field
                                                name="email"
                                                label="Mail"
                                                id="mail"
                                                v-model="email"
                                                type="email"
                                                required></v-text-field>
                                            </v-flex>
                                        </v-layout>
                                        <v-layout row>
                                            <v-flex xs12>
                                                <v-text-field
                                                name="password"
                                                label="Password"
                                                id="password"
                                                v-model="password"
                                                type="password"
                                                required></v-text-field>
                                            </v-flex>
                                        </v-layout>
                                        <v-layout row>
                                            <v-flex xs12>
                                                <v-text-field
                                                name="confirmPassword"
                                                label="Confirm Password"
                                                id="confirmPassword"
                                                v-model="confirmPassword"
                                                type="password"
                                                required
                                                :rules="[comparePassword]"></v-text-field>
                                            </v-flex>
                                        </v-layout>
                                        <v-layout row>
                                            <v-flex xs12>
                                                <v-btn type="submit"
                                                :disabled="loading"
                                                :loading="loading">
                                                    Sign-up
                                                    <span slot="loader" class="custom-loader">
                                                        <v-icon light>cached</v-icon>
                                                    </span>
                                                    </v-btn>
                                            </v-flex>
                                        </v-layout>
                                    </form>
                                </v-container>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </div>
    
</template>

<script>
    export default  {
        data () {
           return {
               email:'',
               password:'',
               confirmPassword:''
           }
        },
        computed:{
            comparePassword(){
                return this.password !== this.confirmPassword ? 'Passwords did not match!': ''
            },
            user () {
                return this.$store.getters.user
            },
            error () {
                return this.$store.getters.error
            },
            loading(){
                return this.$store.getters.loading
            }
        },
        watch:{
            user (value) {
                if (value != null && value !== undefined){
                    this.$router.push('/')
                }
            }
        },
        methods: {
            onSignUp(){
                //Vuex
                this.$store.dispatch('signUserUp', {email:this.email, password:this.password})
            },
            onDismissed (){
                console.log('Dismissed')
                this.$store.dispatch('clearError')
            }
        }
    }
</script>
<style>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>