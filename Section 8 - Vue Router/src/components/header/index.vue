<template>
    <div class="container">
      <header
        class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"
      >
        <router-link
          to="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <span class="fs-4">Beardit.com</span>
    </router-link>
  
        <ul class="nav nav-pills">
          <li class="nav-item">
           
             <router-link to="/" class="nav-link" aria-current="page">Home</router-link>
          </li>
          <li class="nav-item"><router-link :to="{name: 'contact'}" class="nav-link">Contact</router-link></li>
          <li class="nav-item"><router-link to="/articles" class="nav-link">Articles</router-link></li>
        </ul>
      </header>
    </div>
     <!-- router-link вместо классического тега <a></a> и href -->
    <!-- <a href="#" class="nav-link active" aria-current="page">Home</a> -->
  </template>
  
  <style>
  body {
    padding: 0;
    margin: 0;
    font-family: "Roboto", sans-serif;
  }
  </style>