<template>
    <div class="col-md-7 col-lg-8">
      <h4 class="mb-3">Contact</h4>
      <form class="needs-validation">
        <div class="row g-3">
          <div class="col-sm-6">
            <label for="firstName" class="form-label">First name</label>
            <input
              type="text"
              class="form-control"
              id="firstName"
              placeholder=""
              value=""
            />
            <div class="invalid-feedback">Valid first name is required.</div>
          </div>
  
          <div class="col-sm-6">
            <label for="lastName" class="form-label">Last name</label>
            <input
              type="text"
              class="form-control"
              id="lastName"
              placeholder=""
              value=""
            />
            <div class="invalid-feedback">Valid last name is required.</div>
          </div>
  
          <div class="col-12">
            <label for="username" class="form-label">Username</label>
            <div class="input-group has-validation">
              <span class="input-group-text">@</span>
              <input
                type="text"
                class="form-control"
                id="username"
                placeholder="Username"
              />
              <div class="invalid-feedback">Your username is required.</div>
            </div>
          </div>
  
          <div class="col-12">
            <label for="email" class="form-label"
              >Email <span class="text-muted">(Optional)</span></label
            >
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="you@example.com"
            />
            <div class="invalid-feedback">
              Please enter a valid email address for shipping updates.
            </div>
          </div>
  
          <div class="col-12">
            <label for="address" class="form-label">Address</label>
            <input
              type="text"
              class="form-control"
              id="address"
              placeholder="1234 Main St"
            />
            <div class="invalid-feedback">
              Please enter your shipping address.
            </div>
          </div>
  
          <div class="col-12">
            <label for="address2" class="form-label"
              >Address 2 <span class="text-muted">(Optional)</span></label
            >
            <input
              type="text"
              class="form-control"
              id="address2"
              placeholder="Apartment or suite"
            />
          </div>
  
          <div class="col-md-5">
            <label for="country" class="form-label">Country</label>
            <select class="form-select" id="country" >
              <option value="">Choose...</option>
              <option>United States</option>
            </select>
            <div class="invalid-feedback">Please select a valid country.</div>
          </div>
  
          <div class="col-md-4">
            <label for="state" class="form-label">State</label>
            <select class="form-select" id="state">
              <option value="">Choose...</option>
              <option>California</option>
            </select>
            <div class="invalid-feedback">Please provide a valid state.</div>
          </div>
  
          <div class="col-md-3">
            <label for="zip" class="form-label">Zip</label>
            <input
              type="text"
              class="form-control"
              id="zip"
              placeholder=""
            />
            <div class="invalid-feedback">Zip code required.</div>
          </div>
        </div>
  
        <hr class="my-4" />
  
        <button class="w-100 btn btn-primary btn-lg" type="submit">Submit</button>
      </form>
    </div>
  </template>

  <script>

  import { onBeforeRouteLeave } from 'vue-router'; 

export default {
  setup() {
    onBeforeRouteLeave((to, from)=>{
      const answer = window.confirm('Do you really want out?');
      if(!answer) return true
    })
  },

  beforeRouteEnter() {
    
    const isAuth = true;
    if(!isAuth) {
      return '/login';
    }
  }
}

</script>
  