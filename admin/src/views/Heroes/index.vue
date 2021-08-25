<template>
  <div class="about">
    <h1>新建英雄</h1>
    <el-form :model="model" label-width="120px" :rules="rules">
      <el-tabs type="border-card">
        <el-tab-pane label="基础信息">
          <el-form-item prop="name" label="名称">
            <el-input v-model="model.name"></el-input>
          </el-form-item>
          <el-form-item prop="title" label="称号">
            <el-input v-model="model.title"></el-input>
          </el-form-item>
          <el-form-item label="头像">
            <el-upload
              class="avatar-uploader"
              action="/"
              :show-file-list="false"
            >
              <i class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="Banner">
            <el-upload
              class="avatar-uploader"
              action="/"
              :show-file-list="false"
            >
              <i class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item prop="categories" label="类型">
            <el-select v-model="model.categories" multiple>
              <el-option label="hah" value="1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="难度">
            <el-rate style="margin-top: 0.8rem" show-score :max="9" v-model="model.scores.difficult"></el-rate>
          </el-form-item>
          <el-form-item label="技能">
            <el-rate style="margin-top:0.8rem" :max="9" show-score v-model="model.scores.skills"></el-rate>
          </el-form-item>
          <el-form-item label="攻击">
            <el-rate style="margin-top:0.6rem" :max="9" show-score v-model="model.scores.attack"></el-rate>
          </el-form-item>
          <el-form-item label="生存">
            <el-rate style="margin-top:0.6rem" :max="9" show-score v-model="model.scores.survive"></el-rate>
          </el-form-item>
          <el-form-item label="顺风出装">
            <el-select v-model="model.items1" multiple>
              <el-option></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="逆风出装">
            <el-select v-model="model.items2" multiple>
              <el-option></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="使用技巧">
            <el-input type="textarea" v-model="model.usageTips"></el-input>
          </el-form-item>
          <el-form-item label="对抗技巧">
            <el-input type="textarea" v-model="model.battleTips"></el-input>
          </el-form-item>
          <el-form-item label="团战思路">
            <el-input type="textarea" v-model="model.teamTips"></el-input>
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="技能" name="skills">
          <el-button size="small" @click="model.skills.push({})">
            <i class="el-icon-plus"></i>添加技能
          </el-button>
          <el-row type="flex" style="flex-wrap: wrap;">
            <el-col :md="12" v-for="(item, i) in model.skills" :key="i">
              <el-form-item label="名称">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="图标">
                <el-upload
                  class="avatar-uploader"
                  :show-file-list="false"
                >
                  <i class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
              <el-form-item label="冷却值">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="消耗">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="描述">
                <el-input type="textarea"></el-input>
              </el-form-item>
              <el-form-item label="小提示">
                <el-input type="textarea"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button size="small" type="danger" @click="model.skills.splice(i, 1)">删除</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="最佳搭档" name="partners">
          <el-button size="small" @click="model.partners.push({})">
            <i class="el-icon-plus"></i>添加英雄 
          </el-button>
          <el-row type="flex" style="flex-wrap: wrap">
            <el-row :md="12" v-for="(item, i) in model.partners" :key="i">
              <el-form-item label="英雄">
                <el-select filterable>
                  <el-option
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="描述">
                <el-input type="textarea"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button size="small" type="danger" @click="model.partners.splice(i, 1)">删除</el-button>
              </el-form-item>
            </el-row>
          </el-row>
        </el-tab-pane>
      </el-tabs>
      <el-form-item style="margin-top: 1rem;">
        <el-button type="primary">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup>
import { reactive } from 'vue'
const model = reactive({
  name: '',
  title: '',
  categories: [],
  scores: {
    difficult: '',
    skills: '',
    attack: '',
    survive: ''
  },
  skills: [],
  partners: [],
  items1: [],
  items2: [],
  usageTips: '',
  battleTips: '',
  teamTips: ''
})
const rules = reactive({
  name: [
    { required: true, message: '请输入名称' }
  ],
  title: [
    { required: true, message: '请输入称号' }
  ],
  categories: [
    { required: true, message: '请选择类型' }
  ]
})
</script>