<template>
  <div class="col-sm-6 col-md-4 col-lg-3">
    <div class="panel panel-default">
      <div class="panel-body expData">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script></script>

<style>
  .panel-body {
    font-family: 'monospace', cursive;
    color: white;
    box-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
    margin-top: 55px;
    font-size: 24px;
    width: 300px;
    color: #000;
  }
  .expData {
    cursor: pointer;
  }
  .expData:hover {
    background-color: #ffe2e2;
  }
</style>
