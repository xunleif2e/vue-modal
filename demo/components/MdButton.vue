<template>
  <a class="button" href="javascript:;">
    <slot></slot>
  </a>
</template>

<style>
.button {
  display: inline-block;
  margin: 0.3em;
  padding: 1.2em 3em;
  overflow: hidden;
  position: relative;
  text-decoration: none;
  border-radius: 3px;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -ms-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  box-shadow: 0 2px 10px rgba(0,0,0,0.5);
  border: none;
  font-size: 14px;
  text-align: center;
}

.button:hover {
  box-shadow: 1px 6px 15px rgba(0,0,0,0.5);
}

.green {
  background-color: #4CAF50;
  color: white;
}

.red {
  background-color: #F44336;
  color: white;
}

.blue {
  background-color: #03A9F4;
  color: white;
}
</style>
