<!--<template>
<div>
<div class="m-login__signin">
							<div class="m-login__head">
								<h3 class="m-login__title">Sign In To Admin</h3>
							</div>
							<form class="m-login__form m-form" action="">
								<div class="form-group m-form__group">
									<input class="form-control m-input" type="text" placeholder="Email" name="email" autocomplete="off" v-model="email">
								</div>
								<div class="form-group m-form__group">
									<input class="form-control m-input m-login__form-input--last" type="password" placeholder="Password" name="password" v-model="password">
								</div>
								<div class="row m-login__form-sub">
									<div class="col m--align-left m-login__form-left">
										<label class="m-checkbox  m-checkbox--focus">
											<input type="checkbox" name="remember"> Remember me
											<span></span>
										</label>
									</div>
									<div class="col m--align-right m-login__form-right">
										<a href="javascript:;" id="m_login_forget_password" class="m-link">Forget Password ?</a>
									</div>
								</div>
								<div class="m-login__form-action">
									<button id="m_login_signin_submit" class="btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air m-login__btn m-login__btn--primary" @click.prevent="LogiIn()" >Sign In </button>
								</div>
							</form>
						</div>
                        <div class="m-login__account">
							<span class="m-login__account-msg">
								Don't have an account yet ?
							</span>&nbsp;&nbsp;
							<router-link to="/Register" id="m_login_signup" class="m-link m-link--light m-login__account-link">Sign Up</router-link>
						</div>
                 </div>
</template>
<script>
export default{
    data(){
		return {
			email:'',
			password:''
		}
	},
    methods :{
        LogiIn(){
			axios.post('https://reqres.in/api/login',({
				email:this.email,
				password:this.password
			})).then((response) => {
			   console.log(response.data)
			   let token = response.data.token
			   localStorage.setItem('token',token);
			   this.$router.push('/');

            })

        }
        }

    }

</script>
<style>

</style>-->
<template>
    <div class="row">
        <h2>Signup</h2>

        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-md-offset-3">

            <input type="email" v-model="formData.email" class="form-control" placeholder="email">
            <br>
            <input type="password" v-model="formData.password" class="form-control" placeholder="password">
            <br>
            <button class="btn btn-success" @click="signUp">SignUp</button>
        </div>

    </div>
</template>
<script>
import firebase from 'firebase'
    export default {
        name: 'Signup',
        data () {
            return {
                formData:{
                    email:'',
                    password:''
                },

            }
        },
        methods: {
            signUp(){
                firebase.auth().createUserWithEmailAndPassword(this.formData.email,this.formData.password)
                    .then((user)=>{
                      this.$router.push('/')
                    })
                    .catch((e)=>{
                    alert('oops'+e.message);
                    })
            }
        },
        created(){
        },

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>
