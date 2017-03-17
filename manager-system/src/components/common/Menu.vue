<template>
  <div class="sidebar">
    <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-menu"></i>表格</template>
        <el-menu-item index="menua">1</el-menu-item>
        <el-menu-item index="menub">2</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-date"></i>表单</template>
        <el-menu-item index="baseform">3</el-menu-item>
        <el-menu-item index="vueeditor">4</el-menu-item>
        <el-menu-item index="markdown">5</el-menu-item>
        <el-menu-item index="upload">6</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-star-on"></i>图表</template>
        <el-menu-item index="basecharts">7</el-menu-item>
        <el-menu-item index="mixcharts">8</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<style>
  .sidebar{
    display: block;
    position: absolute;
    width: 250px;
    left: 0;
    top: 70px;
    bottom:0;
    background: #2E363F;
  }
  .sidebar > ul {
    height:100%;
  }
</style>
