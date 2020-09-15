<template>
  <div id="home">
    <div class="top">
      <span class="title"><i class="el-icon-s-home"></i>首页管理</span>
      <div>
        <el-button size="mini" type="primary" @click="fun()" v-show="!a"
          >编辑</el-button
        >
        <el-button size="mini" type="primary" @click="submit()" v-show="a"
          >保存</el-button
        >
        <el-button size="mini" type="primary" @click="remove()" v-show="a"
          >取消</el-button
        >
      </div>
    </div>
    <div class="contain">
      <div class="front" style="height:180px;width:100%" v-if="!a">
        <el-image
          style="width: 100%; height:180px"
          :src="homeFormfirst.bannerurl"
        >
        </el-image>
      </div>
      <el-upload
        v-else
        class="avatar-uploader front"
        :action="joggle"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforebannerAvatarUpload"
      >
        <img
          v-if="homeForm.bannerurl"
          :src="homeForm.bannerurl"
          class="avatar"
        />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        <div class="back" v-show="a">
          <p>点击我更改banner</p>
        </div>
      </el-upload>
      <div class="carousel front">
        <div class="left">
          <div class="input_video" v-show="isshowvideo">
            <video-player
              class="video-player vjs-custom-skin"
              ref="videoPlayer"
              :playsinline="true"
              :options="playerOptions"
            ></video-player>
          </div>
          <img :src="homeFormfirst.tableData.url" alt="" v-show="isshowimage" />
        </div>
        <div class="right ">
          <h3>{{ homeFormfirst.tableData.title }}</h3>
          <p>
            {{ homeFormfirst.tableData.description }}
          </p>
        </div>
        <div class="back" v-show="a" @click="changecarousel()">
          <p>点击我更改视频图片文字描述</p>
        </div>
      </div>
      <div class="category">
        <h3 class="front">
          {{ homeFormfirst.titleone }}
          <div class="back" v-show="a" @click="changetitle()">
            <p>点击我更改标题</p>
          </div>
        </h3>
        <div class="box1">
          <div class="front">
            <img src="../../assets/images/2.png" alt="" />
            <p>虚拟仿真</p>
            <p>biubiu</p>
            <div class="back" v-show="a" @click="changelink()">
              <p>点击我更改banner</p>
            </div>
          </div>
          <div class="front">
            <img src="../../assets/images/2.png" alt="" />
            <p>虚拟仿真</p>
            <p>biubiu</p>
            <div class="back" v-show="a" @click="changelink()">
              <p>点击我更改banner</p>
            </div>
          </div>
          <div class="front">
            <img src="../../assets/images/2.png" alt="" />
            <p>虚拟仿真</p>
            <p>biubiu</p>
            <div class="back" v-show="a" @click="changelink()">
              <p>点击我更改banner</p>
            </div>
          </div>
        </div>
        <div class="box2">
          <div class="front">
            <img src="../../assets/images/2.png" alt="" />
            <p>虚拟仿真</p>
            <p>biubiu</p>
            <div class="back" v-show="a" @click="changelink()">
              <p>点击我更改banner</p>
            </div>
          </div>
          <div class="front">
            <img src="../../assets/images/2.png" alt="" />
            <p>虚拟仿真</p>
            <p>biubiu</p>
            <div class="back" v-show="a" @click="changelink()">
              <p>点击我更改banner</p>
            </div>
          </div>
          <div class="front">
            <img src="../../assets/images/2.png" alt="" />
            <p>虚拟仿真</p>
            <p>biubiu</p>
            <div class="back" v-show="a" @click="changelink()">
              <p>点击我更改banner</p>
            </div>
          </div>
        </div>
      </div>
      <div class="article">
        <h3 class="front">
          {{ homeFormfirst.titletwo }}
          <div class="back" v-show="a" @click="changearticle()">
            <p>点击更改标题</p>
          </div>
        </h3>
        <div class="articlelink">
          <h3 class="front">
            {{ homeFormfirst.linkcolumn }}
            <div class="back" v-show="a" @click="changecolumn()">
              <p>点击更改栏目链接</p>
            </div>
          </h3>
          <h3 class="front">
            {{ homeFormfirst.linkcolumntwo }}
            <div class="back" v-show="a" @click="changecolumntwo()">
              <p>点击更改栏目链接</p>
            </div>
          </h3>
        </div>
        <div class="articledetails">
          <img :src="homeFormfirst.linkcolumnarticletop.bgImgUrl" alt="" />
          <div>
            <span>{{ homeFormfirst.linkcolumnarticletop.title }}</span>
            <p v-html="homeFormfirst.linkcolumnarticletop.textContent"></p>
            <span class="timebottom">{{
              homeFormfirst.linkcolumnarticletop.createTime
            }}</span>
          </div>
        </div>
        <div class="articledetailsitem">
          <div
            v-for="value in homeFormfirst.linkcolumnarticlebottom"
            :key="value.id"
          >
            <img :src="value.bgImgUrl" alt="" />
            <p>{{ value.title }}</p>
            <p class="time">{{ value.createTime }}</p>
          </div>
        </div>
      </div>
      <div class="bottom front">
        友情链接
        <div class="back" v-show="a" @click="changefriendlink()">
          <p>点击我更改友情链接</p>
        </div>
      </div>
    </div>
    <!-- 对话框 -->
    <el-dialog
      title="项目滑动内容"
      :visible.sync="dialogFormVisible"
      width="60%"
    >
      <div v-if="carouseemptyimg" class="emptybox">
        <img class="empty" src="../../assets/images/无数据.png" alt="" />
        <p @click="addcarousel()">还没有项目哦~点我添加项目</p>
      </div>

      <div v-else>
        <el-table
          ref="multipleTable"
          :data="homeForm.tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
          align="center"
        >
          <el-table-column label="编号" width="60" align="center">
            <template slot-scope="scope">{{ scope.$index + 1 }}</template>
          </el-table-column>
          <el-table-column label="视频图片" width="120" align="center">
            <template slot-scope="scope">
              <div class="demo-image__placeholder">
                <el-image :src="scope.row.url"></el-image>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="标题" width="120" align="center">
            <template slot-scope="scope">{{ scope.row.title }}</template>
          </el-table-column>
          <el-table-column label="排序值" width="120" align="center">
            <template slot-scope="scope"
              ><i
                class="el-icon-bottom"
                @click="bottom(scope.$index, scope.row)"
                v-if="scope.$index != homeForm.tableData.length - 1"
              ></i
              ><i
                class="el-icon-top"
                @click="top(scope.$index)"
                v-if="scope.$index != 0"
              ></i
            ></template>
          </el-table-column>
          <el-table-column label="操作" width="250" align="center">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
                >编辑</el-button
              >
              &emsp;
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
                >删除</el-button
              >
              &emsp;<el-switch
                :active-value="0"
                :inactive-value="1"
                v-model="scope.row.isOpen"
              >
              </el-switch>
            </template>
          </el-table-column>
        </el-table>
        <div id="add">
          <i class="el-icon-circle-plus-outline" @click="addcarousel()"></i>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button @click="cancel()">取 消</el-button>
          <el-button type="primary" @click="okone()">确 定</el-button>
        </div>
      </div>
    </el-dialog>
    <el-dialog title="修改项目" :visible.sync="dialogeditcarousel" width="60%">
      <el-form :model="homeForm.editcarousel" :rules="rules">
        <el-form-item label="栏目图片" :label-width="formLabelWidth">
          <el-upload
            class="avatar-uploader"
            :action="joggle"
            v-bind:data="{ FoldPath: '上传目录', SecretKey: '安全验证' }"
            :show-file-list="false"
            :on-success="handleeditcarousel"
            :before-upload="beforeAvatarUpload"
          >
            <img
              v-if="imageshow"
              :src="homeForm.editcarousel.url"
              class="avatar"
            />

            <video
              class="avatar"
              controls="controls"
              v-else-if="videoshow"
              :src="homeForm.editcarousel.url"
            ></video>
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>

        <el-form-item
          id="carouseltitle"
          prop="title"
          label="标题名称"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="homeForm.editcarousel.title"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="content" label="内容" :label-width="formLabelWidth">
          <el-input
            v-model="homeForm.editcarousel.content"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogeditcarousel = false">取 消</el-button>
        <el-button type="primary" @click="editCarousel()">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="添加项目" :visible.sync="dialogcarousel" width="60%">
      <el-form :model="homeForm.addcarousel" :rules="rules" ref="addcarousel">
        <el-form-item label="文件选择" :label-width="formLabelWidth">
          <el-upload
            class="avatar-uploader"
            :action="joggle"
            v-bind:data="{ FoldPath: '上传目录', SecretKey: '安全验证' }"
            :show-file-list="false"
            :on-success="handlecarousel"
            :before-upload="beforeAvatarUpload"
          >
            <img
              v-if="imageshow"
              :src="homeForm.addcarousel.url"
              class="avatar"
            />

            <video
              class="avatar"
              controls="controls"
              v-else-if="videoshow"
              :src="homeForm.addcarousel.url"
            ></video>
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>

        <el-form-item
          id="carouseltitle"
          prop="title"
          label="标题名称"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="homeForm.addcarousel.title"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          prop="description"
          label="内容"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="homeForm.addcarousel.description"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogcarousel = false">取 消</el-button>
        <el-button type="primary" @click="Carouseltrue()">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="更改标题" :visible.sync="dialogtitleone" width="60%">
      <el-form :model="homeForm" :rules="rules" ref="titleone">
        <el-form-item
          label="标题名称"
          :label-width="formLabelWidth"
          prop="titleone"
        >
          <el-input v-model="homeForm.titleone" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogtitleone = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('titleone')"
          >确 定</el-button
        >
      </div>
    </el-dialog>
    <el-dialog title="更改标题" :visible.sync="dialogtitletwo" width="60%">
      <el-form :model="homeForm" :rules="rules" ref="titletwo">
        <el-form-item
          label="标题名称"
          :label-width="formLabelWidth"
          prop="titletwo"
        >
          <el-input v-model="homeForm.titletwo" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogtitletwo = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('titletwo')"
          >确 定</el-button
        >
      </div>
    </el-dialog>
    <el-dialog title="添加模块链接" :visible.sync="dialoglink" width="60%">
      <el-form :model="homeForm.formlink" :rules="rules" ref="ruleForm">
        <el-form-item
          label="标题名称"
          :label-width="formLabelWidth"
          prop="title"
        >
          <el-input
            v-model="homeForm.formlink.title"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="连接类型"
          :label-width="formLabelWidth"
          prop="linkclass"
        >
          <el-radio-group v-model="homeForm.formlink.linkclass">
            <el-radio :label="0">站内链接</el-radio>
            <el-radio :label="1">站外链接</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item
          prop="in"
          label="站内链接"
          :label-width="formLabelWidth"
          v-if="homeForm.formlink.linkclass == 0"
        >
          <el-cascader
            :props="defaultParams"
            v-model="homeForm.formlink.in"
            :options="options"
            @change="handleChange"
          ></el-cascader>
        </el-form-item>
        <el-form-item
          prop="out"
          label="站外链接"
          :label-width="formLabelWidth"
          v-if="homeForm.formlink.linkclass == 1"
        >
          <el-input
            v-model="homeForm.formlink.out"
            placeholder="请输入链接"
          ></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialoglink = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >确 定</el-button
        >
      </div>
    </el-dialog>
    <el-dialog title="链接栏目" :visible.sync="dialoglinkcolumn" width="60%">
      <el-form :model="homeForm" :rules="rules" ref="linkcolumn">
        <el-form-item
          prop="linkcolumn"
          label="站内链接"
          :label-width="formLabelWidth"
        >
          <el-cascader
            :change-on-select="true"
            :props="defaultParams"
            :options="options"
            v-model="homeForm.linkcolumn"
            @change="handlecolumnChangeone"
            :clearable="true"
          ></el-cascader>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialoglinkcolumn = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('linkcolumn')"
          >确 定</el-button
        >
      </div>
    </el-dialog>
    <el-dialog title="链接栏目" :visible.sync="dialoglinkcolumntwo" width="60%">
      <el-form :model="homeForm" :rules="rules" ref="linkcolumntwo">
        <el-form-item
          prop="linkcolumntwo"
          label="站内链接"
          :label-width="formLabelWidth"
        >
          <el-cascader
            :change-on-select="true"
            :props="defaultParams"
            :options="options"
            v-model="homeForm.linkcolumntwo"
            @change="handlecolumnChangetwo"
            :clearable="true"
          ></el-cascader>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialoglinkcolumntwo = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('linkcolumntwo')"
          >确 定</el-button
        >
      </div>
    </el-dialog>
    <el-dialog title="添加种类" :visible.sync="dialogaddclassify" width="60%">
      <el-form :model="homeForm" :rules="rules" ref="addclassify">
        <el-form-item
          prop="addclassify"
          label="分类"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="homeForm.addclassify"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogaddclassify = false">取 消</el-button>
        <el-button type="primary" @click="classifytrue('addclassify')"
          >确 定</el-button
        >
      </div>
    </el-dialog>
    <el-dialog title="添加友情链接" :visible.sync="dialogaddlink" width="60%">
      <el-form :model="homeForm.addlink" :rules="rules" ref="addlink">
        <el-form-item
          prop="title"
          label="连接名"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="homeForm.addlink.title"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          prop="classifyId"
          label="连接分类"
          :label-width="formLabelWidth"
          class="classifyId"
        >
          <el-select
            v-model="homeForm.addlink.classifyId"
            placeholder="请选择分类"
          >
            <el-option
              v-for="item in optionslink"
              :key="item.id"
              :label="item.classifyName"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          prop="linkUrl"
          label="连接网址"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="homeForm.addlink.linkUrl"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogaddlink = false">取 消</el-button>
        <el-button type="primary" @click="classifytrue('addlink')"
          >确 定</el-button
        >
      </div>
    </el-dialog>
    <el-dialog title="修改种类" :visible.sync="dialogeditclassify" width="60%">
      <el-form :model="homeForm" :rules="rules" ref="editclassify">
        <el-form-item
          prop="editclassify"
          label="分类"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="homeForm.editclassify"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogeditclassify = false">取 消</el-button>
        <el-button type="primary" @click="classifytrue('editclassify')"
          >确 定</el-button
        >
      </div>
    </el-dialog>
    <el-dialog
      title="友情链接管理"
      :visible.sync="dialogfriendlink"
      width="60%"
    >
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="链接管理" name="first">
          <el-table
            ref="multipleTable"
            :data="homeForm.frinedlinktableData"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange"
            align="center"
          >
            <el-table-column label="编号" width="60" align="center">
              <template slot-scope="scope">{{ scope.$index + 1 }}</template>
            </el-table-column>
            <el-table-column label="标题" width="180" align="center">
              <template slot-scope="scope">
                <el-input
                  v-model="scope.row.title"
                  placeholder="请输入标题"
                ></el-input>
              </template>
            </el-table-column>
            <el-table-column label="分类" width="200" align="center">
              <template slot-scope="scope">
                <el-select
                  v-model="scope.row.classifyId"
                  placeholder="请选择分类"
                >
                  <el-option
                    v-for="item in scope.row.options"
                    :key="item.id"
                    :label="item.classifyName"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
              </template>
            </el-table-column>
            <el-table-column label="网址" width="200" align="center">
              <template slot-scope="scope">
                <el-input
                  v-model="scope.row.linkUrl"
                  placeholder="请输入网址"
                ></el-input>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="200" align="center">
              <template slot-scope="scope">
                <el-switch
                  v-model="scope.row.isShow"
                  active-value="0"
                  inactive-value="1"
                >
                </el-switch>
              </template>
            </el-table-column> </el-table
        ></el-tab-pane>
        <el-tab-pane label="分类管理" name="second">
          <el-table
            ref="multipleTable"
            :data="homeForm.frinedlinkmange"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange"
            align="center"
          >
            <el-table-column label="编号" width="60" align="center">
              <template slot-scope="scope">{{ scope.$index + 1 }}</template>
            </el-table-column>
            <el-table-column label="分类" width="420" align="center">
              <template slot-scope="scope">
                {{ scope.row.classifyName }}
              </template>
            </el-table-column>
            <el-table-column label="操作" width="250" align="center">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="danger"
                  @click="classEdit(scope.$index, scope.row)"
                  >修改</el-button
                >
                <el-button
                  size="mini"
                  type="danger"
                  @click="classDelete(scope.$index, scope.row)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <div id="add">
          <i class="el-icon-circle-plus-outline" @click="linkmange()"></i>
        </div>
      </el-tabs>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancellink()">取 消</el-button>
        <el-button type="primary" @click="linkclassify()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { joggle } from "@/apis/request.js";
import { getHomebanner } from "@/apis/request.js";
import { getHomecolumn } from "@/apis/request.js";
import { postHomebanner } from "@/apis/request.js";
import { getHomecarouse } from "@/apis/request.js";
import { addHomecarouse } from "@/apis/request.js";
import { getHomeheadline } from "@/apis/request.js";
import { allColumn } from "@/apis/request.js";
import { addHomeheadline } from "@/apis/request.js";
import { getColumnarticle } from "@/apis/request.js";
import { getHomeclassify } from "@/apis/request.js";
import { getHomefriendlink } from "@/apis/request.js";
import { addHomeclassify } from "@/apis/request.js";
import { addHomefriendlink } from "@/apis/request.js";
import { returnColumn } from "@/apis/request.js";
import { deleteHomecarouse } from "@/apis/request.js";
export default {
  data() {
    return {
      joggle,
      editindex: 0,
      carouseemptyimg: false,
      form: {
        name: "",
      },
      optionslink: [],
      tableDataclone: [],
      deletearr: [],
      deleteobj: [],
      defaultParams: {
        label: "columnName",
        value: "id",
        children: "children",
      },
      options: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致",
                },
                {
                  value: "fankui",
                  label: "反馈",
                },
                {
                  value: "xiaolv",
                  label: "效率",
                },
                {
                  value: "kekong",
                  label: "可控",
                },
              ],
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航",
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航",
                },
              ],
            },
          ],
        },
        {
          value: "ziyuan",
          label: "资源",
          children: [
            {
              value: "axure",
              label: "Axure Components",
            },
            {
              value: "sketch",
              label: "Sketch Templates",
            },
            {
              value: "jiaohu",
              label: "组件交互文档",
            },
          ],
        },
      ],
      addhomeForm: {
        bgImgId: 2,
        carouselIds: "1,2,3,4",
        headline1Id: 1,
        linkIds: "1,2,3,4",
        headline2Id: 2,
        columnIds: "1,2,3,4",
        friendshipLinkIds: "1,2,3,4",
      },
      activeName: "first",
      homeForm: {
        bannerurl: "",
        bgImgId: 0,
        editindex: 0,
        tableData: [
          {
            index: 1,
            title: "四川大学1",
            value1: true,
            url:
              "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
          },
          {
            index: 2,
            title: "四川大学2",
            value1: true,
            imageUrl:
              "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
          },
          {
            index: 3,
            title: "四川大学3",
            value1: true,
            imageUrl: "",
          },
        ],
        carouselIds: "",
        columnIds: [],
        frinedlinktableData: [
          {
            index: 1,
            title: "四川大学",
            class: "",
            value: true,
            address: "https://123",
            classifyId: 0,
            options: [
              {
                value: "选项1",
                label: "黄金糕",
              },
              {
                value: "选项2",
                label: "双皮奶",
              },
            ],
          },
        ],
        frinedlinkmange: [
          {
            index: 1,
            title: "四川大学",
            value: true,
          },
          {
            index: 1,
            title: "四川大学",
            value: true,
          },
        ],
        titleone: "",
        headline1Id: 0,
        headline2Id: 0,
        titletwo: "",
        formlink: {
          title: "",
          linkclass: "",
          out: "",
          in: [],
          options: [
            {
              value: "zhinan",
              label: "指南",
              children: [
                {
                  value: "shejiyuanze",
                  label: "设计原则",
                  children: [
                    {
                      value: "yizhi",
                      label: "一致",
                    },
                    {
                      value: "fankui",
                      label: "反馈",
                    },
                    {
                      value: "xiaolv",
                      label: "效率",
                    },
                    {
                      value: "kekong",
                      label: "可控",
                    },
                  ],
                },
                {
                  value: "daohang",
                  label: "导航",
                  children: [
                    {
                      value: "cexiangdaohang",
                      label: "侧向导航",
                    },
                    {
                      value: "dingbudaohang",
                      label: "顶部导航",
                    },
                  ],
                },
              ],
            },
            {
              value: "ziyuan",
              label: "资源",
              children: [
                {
                  value: "axure",
                  label: "Axure Components",
                },
                {
                  value: "sketch",
                  label: "Sketch Templates",
                },
                {
                  value: "jiaohu",
                  label: "组件交互文档",
                },
              ],
            },
          ],
        },
        linkcolumn: [],
        linkcolumntwo: [],
        columnarticletop: {},
        columnarticlebottom: {},
        addclassify: "",
        addclassifyid: 0,
        editclassify: "",
        addlink: {
          title: "",
          classifyId: 0,
          linkUrl: "",
        },
        addcarousel: {
          url: "",
          title: "",
          description: "",
        },
        editcarousel: {
          url:
            "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
          title: "",
          content: "",
        },
      },
      frinedlinkmangeclone: [],
      frinedlinktableDataclone: [],
      linkcolumn: 0,
      linkcolumntwo: 0,
      homeFormfirst: {
        bannerurl: "",
        tableData: [
          {
            index: 1,
            title: "四川大学1",
            value1: true,
            imageUrl:
              "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
          },
        ],
        frinedlinktableData: [
          {
            index: 1,
            title: "四川大学",
            class: "",
            value: true,
            address: "https://123",
            options: [
              {
                value: "选项1",
                label: "黄金糕",
              },
              {
                value: "选项2",
                label: "双皮奶",
              },
            ],
          },
          {
            index: 1,
            title: "四川大学",
            class: "",
            value: true,
            address: "https://123",
            options: [
              {
                value: "选项1",
                label: "黄金糕",
              },
              {
                value: "选项2",
                label: "双皮奶",
              },
            ],
          },
        ],
        frinedlinkmange: [
          {
            index: 1,
            title: "四川大学",
            value: true,
          },
          {
            index: 1,
            title: "四川大学",
            value: true,
          },
        ],
        titleone: "",
        titletwo: "",
        linkcolumn: [],
        linkcolumntwo: [],
        formlink: {
          title: "",
          linkclass: "",
          out: "",
          in: [],
          options: [
            {
              value: "zhinan",
              label: "指南",
              children: [
                {
                  value: "shejiyuanze",
                  label: "设计原则",
                  children: [
                    {
                      value: "yizhi",
                      label: "一致",
                    },
                    {
                      value: "fankui",
                      label: "反馈",
                    },
                    {
                      value: "xiaolv",
                      label: "效率",
                    },
                    {
                      value: "kekong",
                      label: "可控",
                    },
                  ],
                },
                {
                  value: "daohang",
                  label: "导航",
                  children: [
                    {
                      value: "cexiangdaohang",
                      label: "侧向导航",
                    },
                    {
                      value: "dingbudaohang",
                      label: "顶部导航",
                    },
                  ],
                },
              ],
            },
            {
              value: "ziyuan",
              label: "资源",
              children: [
                {
                  value: "axure",
                  label: "Axure Components",
                },
                {
                  value: "sketch",
                  label: "Sketch Templates",
                },
                {
                  value: "jiaohu",
                  label: "组件交互文档",
                },
              ],
            },
          ],
        },
        addcarousel: {
          url: "",
          title: "",
          description: "",
        },
        editcarousel: {
          imageUrl:
            "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
          title: "",
          content: "",
        },
        linkcolumnarticletop: {},
        linkcolumnarticlebottom: [],
      },
      imageshow: false,
      videoshow: false,
      isshowimage: false,
      isshowvideo: false,
      dialogFormVisible: false,
      dialogcarousel: false,
      dialogeditcarousel: false,
      dialogtitleone: false,
      dialogtitletwo: false,
      dialoglink: false,
      dialogfriendlink: false,
      dialoglinkcolumn: false,
      dialoglinkcolumntwo: false,
      dialogaddclassify: false,
      dialogeditclassify: false,
      dialogaddlink: false,
      formLabelWidth: "90px",
      a: false,
      changeCount: 0, // 判断表单数据是否改变过
      isPopup: false, // 判断提交事件不再弹出离开提示
      url: "1.jpeg",
      playerOptions: {
        playbackRates: [0.5, 1.0, 1.5, 2.0], //可选择的播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "",
            src: "1.mp4", //url地址
          },
        ],
        poster: "", //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true, //当前时间和持续时间的分隔符
          durationDisplay: true, //显示持续时间
          remainingTimeDisplay: false, //是否显示剩余时间功能
          fullscreenToggle: true, //全屏按钮
        },
      },
      rules: {
        title: [{ required: true, message: "请输入标题名称", trigger: "blur" }],
        titleone: [
          { required: true, message: "请输入标题名称", trigger: "blur" },
        ],
        titletwo: [
          { required: true, message: "请输入标题名称", trigger: "blur" },
        ],
        linkcolumn: [
          { required: true, message: "请输入站内连接栏目", trigger: "blur" },
        ],
        linkclass: [
          {
            required: true,
            message: "请至少选择一链接类型",
            trigger: "change",
          },
        ],
        addclassify: [
          { required: true, message: "请输入内容", trigger: "blur" },
        ],
        editclassify: [
          { required: true, message: "请输入内容", trigger: "blur" },
        ],
        description: [
          { required: true, message: "请输入内容", trigger: "blur" },
        ],
        classifyId: [
          { required: true, message: "请选择分类", trigger: "blur" },
        ],
        linkUrl: [
          { required: true, message: "请输入网址", trigger: "blur" },
        ],
        in: [{ required: true, message: "请选择站内链接", trigger: "change" }],
        out: [{ required: true, message: "请选择站外链接", trigger: "blur" }],
      },
    };
    //  console.log(that.homeForm)
  },
  methods: {
    getTreeData(data) {
      // 循环遍历json数据
      for (var i = 0; i < data.length; i++) {
        if (data[i].children.length < 1) {
          // children若为空数组，则将children设为undefined
          data[i].children = undefined;
        } else {
          // children若不为空数组，则继续 递归调用 本方法
          this.getTreeData(data[i].children);
        }
      }
      return data;
    },
    common() {
      allColumn().then((res) => {
        this.options = this.getTreeData(res);
        console.log(this.options);
      });
    },
    editCarousel() {
      this.dialogeditcarousel = false;
      this.homeForm.tableData[
        this.editindex
      ].url = this.homeForm.editcarousel.url;
      this.homeForm.tableData[
        this.editindex
      ].title = this.homeForm.editcarousel.title;
      this.homeForm.tableData[
        this.editindex
      ].description = this.homeForm.editcarousel.description;

      this.homeForm.tableData.splice(1, 0);
    },
    fun() {
      this.a = true;
    },
    remove() {
      this.a = false;
      this.changeCount = 0;
      this.initRequest();
    },
    changecolumn() {
      this.dialoglinkcolumn = true;
    },
    changecolumntwo() {
      this.dialoglinkcolumntwo = true;
    },
    submitForm(formName) {
      const that = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (formName == "titleone") {
            addHomeheadline({
              title: that.homeForm.titleone,
            }).then((res) => {
              this.homeForm.headline1Id = res.id;
            });
          }
          if (formName == "titletwo") {
            addHomeheadline({
              title: that.homeForm.titletwo,
            }).then((res) => {
              this.homeForm.headline2Id = res.id;
            });
          }
          if (formName == "linkcolumn") {
            this.homeForm.columnIds[0] = this.linkcolumn;
          }
          if (formName == "linkcolumntwo") {
            this.homeForm.columnIds[1] = this.linkcolumntwo;
          }

          that.dialoglink = false;
          that.dialogtitleone = false;
          that.dialogtitletwo = false;
          that.dialoglinkcolumn = false;
          that.dialoglinkcolumntwo = false;
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    handleEdit(index, row) {
      console.log(row);
      if (
        row.url.indexOf("jpeg") > -1 ||
        row.url.indexOf("jpg") > -1 ||
        row.url.indexOf("png") > -1
      ) {
        this.imageshow = true;
        this.videoshow = false;
      }
      if (
        row.url.indexOf("mp4") > -1 ||
        row.url.indexOf("ogg") > -1 ||
        row.url.indexOf("avi") > -1 ||
        row.url.indexOf("wmv") > -1
      ) {
        this.videoshow = true;
        this.imageshow = false;
      }
      this.editindex = index;
      this.homeForm.editcarousel.url = row.url;
      this.homeForm.editcarousel.title = row.title;
      this.homeForm.editcarousel.content = row.description;
      this.dialogeditcarousel = true;
    },
    handleDelete(index, row) {
      console.log(index, row, "o");
      this.homeForm.tableData.splice(index, 1);
      this.deleteobj.push(row);
      console.log(this.deleteobj, 9);
    },
    okone() {
      this.dialogFormVisible = false;
      this.tableDataclone = JSON.parse(JSON.stringify(this.homeForm.tableData));
      console.log(this.tableDataclone, 6);
    },
    cancel() {
      this.dialogFormVisible = false;
      this.homeForm.tableData = JSON.parse(JSON.stringify(this.tableDataclone));
      console.log(this.homeForm.tableData, 5);
    },
    open(id) {
      this.$confirm("此操作将永久删除, 是否继续?", "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          deleteHomecarouse(id).then((res) => {
            console.log(res, "1");
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    bottom(index) {
      var temp = {};
      temp = this.homeForm.tableData[index];
      this.homeForm.tableData[index] = this.homeForm.tableData[index + 1];
      this.homeForm.tableData[index + 1] = temp;
      this.homeForm.tableData.splice(1, 0);
      console.log(index);
    },
    top(index) {
      var temp = {};
      temp = this.homeForm.tableData[index];
      this.homeForm.tableData[index] = this.homeForm.tableData[index - 1];
      this.homeForm.tableData[index - 1] = temp;
      this.homeForm.tableData.splice(1, 0);
      console.log(index);
    },
    addcarousel() {
      this.dialogcarousel = true;
    },
    // 提交事件
    async submit() {
      this.isPopup = true;
      this.addhomeForm.bgImgId = this.homeForm.bgImgId;
      this.homeForm.carouselIds = this.homeForm.tableData.map((res) => {
        return res.id;
      });
      this.addhomeForm.carouselIds = this.homeForm.carouselIds.join(",");
      this.addhomeForm.headline1Id = this.homeForm.headline1Id;
      this.addhomeForm.headline2Id = this.homeForm.headline2Id;
      this.addhomeForm.columnIds = this.homeForm.columnIds;
    
  
    },
    changecarousel() {
      this.dialogFormVisible = true;
    },
    changetitle() {
      this.dialogtitleone = true;
    },
    changearticle() {
      this.dialogtitletwo = true;
    },
    changelink() {
      this.dialoglink = true;
    },
    changefriendlink() {
      this.dialogfriendlink = true;
    },
    handlecolumnChangeone(value) {
      let index = value.length - 1;
      this.linkcolumn = value[index];
      console.log(this.linkcolumn, 0);
    },
    handlecolumnChangetwo(value) {
      let index = value.length - 1;
      this.linkcolumntwo = value[index];
      console.log(this.linkcolumntwo, 0);
    },
    handleChange(value) {
      console.log(value);
    },
    handleAvatarSuccess(data) {
      this.homeForm.bannerurl = data.data.fileUrl;
      postHomebanner({
        imgUrl: data.data.fileUrl,
      }).then((res) => {
        console.log(res, 6666);
        this.homeForm.bgImgId = res.id;
      });
    },
    handlecarousel(data) {
      this.homeForm.addcarousel.url = data.data.fileUrl;
      console.log(this.homeForm.addcarousel.url, data, 0);
    },
    handleeditcarousel(data) {
      this.homeForm.editcarousel.url = data.data.fileUrl;
    },
    Carouseltrue() {
      if (this.homeForm.tableData.length == 5)
        this.$message({
          showClose: true,
          message: "警告！最多加五个轮播图",
          type: "warning",
        });
      else {
        addHomecarouse(this.homeForm.addcarousel).then((res) => {
          this.homeForm.tableData.unshift(res);
          // this.addhomeForm.carouselIds.unshift(res.id);
          // console.log(res, 66);
        });
      }
      this.dialogcarousel = false;
      this.carouseemptyimg = false;
    },
    beforebannerAvatarUpload(file) {
      const isJPG = file.type.indexOf("image") > -1;
      const isLt10M = file.size / 1024 / 1024 < 10;

      if (!isJPG) {
        this.$message.error("文件格式错误!");
      }
      if (!isLt10M) {
        this.$message.error("文件大小不能超过10MB!");
      }
      return isJPG && isLt10M;
    },
    beforeAvatarUpload(file) {
      console.log(file, 66);
      const isJPG =
        file.type.indexOf("image") > -1 || file.type.indexOf("video") > -1;
      // console.log(isJPG)
      const isLt100M = file.size / 1024 / 1024 < 100;
      if (file.type.indexOf("image") > -1) {
        this.imageshow = true;
        this.videoshow = false;
      } else if (file.type.indexOf("video") > -1) {
        this.videoshow = true;
        this.imageshow = false;
      }

      if (!isJPG) {
        this.$message.error("文件格式错误!");
      } else if (!isLt100M) {
        this.$message.error("文件大小不能超过100MB!");
      }
      return isJPG && isLt100M;
    },
    handleClick(tab, event) {
      console.log(tab, event);
      console.log(this.activeName);
    },
    classDelete(index) {
      this.homeForm.frinedlinkmange.splice(index, 1);
    },
    linkmange() {
      if (this.activeName == "first") {
        this.dialogaddlink = true;
        this.optionslink = JSON.parse(
          JSON.stringify(this.homeForm.frinedlinkmange)
        );
        this.optionslink.push({
          id: 0,
          classifyName: "无",
        });
      }
      if (this.activeName == "second") {
        this.dialogaddclassify = true;
      }
    },
    classEdit(index, row) {
      this.rowedit = row;
      this.dialogeditclassify = true;
      this.homeForm.editclassify = row.classifyName;
    },
    classifytrue(formName) {
      const that = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (formName == "addclassify") {
            addHomeclassify({
              classifyName: that.homeForm.addclassify,
            }).then((res) => {
              this.homeForm.frinedlinkmange.unshift(res);
            });
          }
          if (formName == "editclassify") {
            this.rowedit.classifyName = this.homeForm.editclassify;
          }
          if (formName == "addlink") {
           addHomefriendlink(this.homeForm.addlink).then(res=>{
             console.log(res,1)
           })
    
          }

          that.dialogaddclassify = false;
          that.dialogeditclassify = false;
          that.dialogaddlink = false;
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    linkclassify() {
      if (this.activeName == "second") {
        this.frinedlinkmangeclone = JSON.parse(
          JSON.stringify(this.homeForm.frinedlinkmange)
        );
      }
      if (this.activeName == "first") {
        this.frinedlinktableDataclone = JSON.parse(
          JSON.stringify(this.homeForm.frinedlinktableData)
        );
      }
          this.dialogfriendlink = false;
    },
    cancellink() {
      if (this.activeName == "second") {
        this.homeForm.frinedlinkmange = JSON.parse(
          JSON.stringify(this.frinedlinkmangeclone)
        );
      }
      if (this.activeName == "first") {
        this.homeForm.frinedlinktableData = JSON.parse(
          JSON.stringify(this.frinedlinktableDataclone)
        );
      }
          this.dialogfriendlink = false;
    },
    initRequest(){
        getHomecolumn().then((res) => {
      this.homeForm.bgImgId = res[0].bgImgId;
      // this.homeForm.carouselIds = res[0].carouselIds.split(",");
      this.homeForm.columnIds = res[0].columnIds.split(",");
      this.homeForm.headline1Id = res[0].headline1Id;
      this.homeForm.headline2Id = res[0].headline2Id;
      var m = [];
      m.push(Number(res[0].columnIds[0]));
      var n = [];
      n.push(Number(res[0].columnIds[2]));
      this.homeForm.linkcolumn = m;
      this.homeForm.linkcolumntwo = n;
      getHomebanner(res[0].bgImgId).then((res) => {
        this.homeForm.bannerurl = res[0].imgUrl;
        this.homeFormfirst.bannerurl = res[0].imgUrl;
      });
      getHomecarouse(res[0].carouselIds).then((res) => {
        if (res.length > 0) {
          this.homeFormfirst.tableData = res[0];
        }
        this.homeForm.tableData = res;
        this.tableDataclone = JSON.parse(JSON.stringify(res));
        console.log(this.tableDataclone, 66);
        if (this.homeForm.tableData == "") {
          this.carouseemptyimg = true;
        }
        if (
          this.homeFormfirst.tableData.url.indexOf("jpeg") > -1 ||
          this.homeFormfirst.tableData.url.indexOf("jpg") > -1 ||
          this.homeFormfirst.tableData.url.indexOf("png") > -1
        ) {
          this.isshowimage = true;
          this.isshowvideo = false;
        }
        if (
          this.homeFormfirst.tableData.url.indexOf("mp4") > -1 ||
          this.homeFormfirst.tableData.url.indexOf("ogg") > -1 ||
          this.homeFormfirst.tableData.url.indexOf("avi") > -1 ||
          this.homeFormfirst.tableData.url.indexOf("wmv") > -1
        ) {
          this.isshowimage = false;
          this.isshowvideo = true;
        }

        // console.log(this.homeForm.tableData, 9);
      });
      getHomeheadline(res[0].headline1Id).then((res) => {
        this.homeForm.titleone = res[0].title;
        this.homeFormfirst.titleone = res[0].title;
      });
      getHomeheadline(res[0].headline2Id).then((res) => {
        this.homeForm.titletwo = res[0].title;
        this.homeFormfirst.titletwo = res[0].title;
      });
      returnColumn(res[0].columnIds).then((res) => {
        this.homeFormfirst.linkcolumn = res[0].columnName;
        this.homeFormfirst.linkcolumntwo = res[1].columnName;
      });

      if (res[0].columnIds.length >= 1) {
        getColumnarticle(res[0].columnIds.split(",")[0], "").then((res) => {
          if (res) {
            this.homeFormfirst.linkcolumnarticletop = res.list[0];
            this.homeFormfirst.linkcolumnarticlebottom = res.list.splice(1, 4);
          }
        });
      }
      if (res[0].columnIds.length >= 2) {
        getColumnarticle(res[0].columnIds.split(",")[1], "").then((res) => {
          console.log(res);
        });
      }
      getHomeclassify().then((res) => {
        this.homeForm.frinedlinkmange = res;
        this.frinedlinkmangeclone = JSON.parse(JSON.stringify(res));
        getHomefriendlink().then((res) => {
          this.homeForm.frinedlinktableData = res.map((res) => {
            res.options = JSON.parse(
              JSON.stringify(this.homeForm.frinedlinkmange)
            );
            res.options.push({
              id: 0,
              classifyName: "无",
            });
            return res;
          });
          this.frinedlinktableDataclone = JSON.parse(
            JSON.stringify(
              res.map((res) => {
                res.options = JSON.parse(
                  JSON.stringify(this.homeForm.frinedlinkmange)
                );
                res.options.push({
                  id: 0,
                  classifyName: "无",
                });
                return res;
              })
            )
          );
        });
      });
    });
    }
  },

  // 监听表单数据变化
  watch: {
    homeForm: {
      handler(val) {
        val && this.changeCount++;
      },
      deep: true,
    },
  },
  beforeRouteLeave(to, from, next) {
    if (this.changeCount > 10 && !this.isPopup) {
      this.$confirm("你有内容正在编辑确定离开当前界面吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true,
      })
        .then(() => {
          next();
        })
        .catch(() => {
          next(false);
        });
    } else {
      next();
    }
  },
  mounted() {
    this.common();
    this.initRequest()
  },
};
</script>
<style lang="less">
#home {
  #carouseltitle {
    margin-bottom: 20px;
  }
  height: 100%;
  .top {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    padding-bottom: 30px;
    .el-button {
      margin-top: 16px;
    }
    .el-icon-s-home {
      margin-right: 10px;
    }
  }
  .title {
    color: blue;
    margin-top: 18px;
    font-size: 20px;
  }
  i {
    font-size: 20px;
  }
  .contain {
    margin-top: 50px;
    .carousel {
      width: 100%;
      height: 316px;
      margin-top: 60px;
      display: flex;
      justify-content: space-between;

      .left {
        width: 57%;
        height: 316px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .right {
        width: 400px;
        text-align: left;
        p {
          font-size: 18px;
          display: -webkit-box;
          overflow: hidden;
          white-space: normal !important;
          text-overflow: ellipsis;
          word-wrap: break-word;
          -webkit-line-clamp: 9;
          -webkit-box-orient: vertical;
          line-height: 30px;
        }
      }
    }
    .input_video .video-player {
      height: 100%;
    }
    .category {
      margin-top: 70px;

      img {
        width: 70px;
        height: 70px;
        border-radius: 35px;
      }
      h3 {
        width: 190px;
      }
    }
    .category > div {
      display: flex;
      justify-content: space-between;
      margin-top: 30px;
      div {
        width: 200px;
        height: 200px;
        text-align: center;
        transition: 1s;
        box-shadow: 1px 1px 4px #ccc;
        img {
          margin-top: 15px;
        }
      }
    }
    .box1 > div:hover {
      transform: scale(1.1);
    }
    .box2 > div:hover {
      transform: scale(1.1);
    }
    .box1 > div > p {
      margin-top: 10px;
    }
    .box2 > div > p {
      margin-top: 10px;
    }
    .article {
      margin-top: 70px;
      h3 {
        width: 190px;
      }
    }
    .articlelink {
      display: flex;
      justify-content: center;
      margin-top: 30px;
      margin-bottom: 40px;

      h3 {
        margin-right: 50px;
        font-size: 18px;
      }
    }
    .articledetails {
      display: flex;
      justify-content: space-between;
      img {
        width: 580px;
        height: 320px;
      }
      div {
        background: #e6e6e6;
        width: 400px;
        position: relative;
        p {
          text-align: left;
          width: 400px;
          display: -webkit-box;
          overflow: hidden;
          white-space: normal !important;
          text-overflow: ellipsis;
          word-wrap: break-word;
          -webkit-line-clamp: 8;
          -webkit-box-orient: vertical;
          color: #333;
          font-size: 16px;
          line-height: 30px;
        }
        .timebottom {
          color: #ccc;
          position: absolute;
          bottom: 10px;
          right: 10px;
        }
      }
    }
    .articledetailsitem {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      div {
        img {
          width: 180px;
          height: 120px;
        }
        p {
          font-size: 16px;
          color: #333;
          margin-top: 20px;
        }
        .time {
          margin-top: 10px;
        }
      }
    }
    .bottom {
      margin-top: 70px;
      background: #e6e6e6;
      height: 100px;
      text-align: center;
      line-height: 100px;
    }
    .front {
      position: relative;
      // text-align: center;
    }
    .back {
      width: 100%;
      height: 100%;

      position: absolute;
      background: rgba(24, 22, 22, 0.7);
      top: 0;
      left: 0;
      font-size: 20px;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .avatar-uploader .el-upload {
      // border: 1px dashed #ccc;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      width: 100%;
    }
    .avatar-uploader .el-upload:hover {
      border-color: #409eff;
    }
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 980px;
      height: 180px;
      line-height: 180px;
      text-align: center;
    }
    .avatar {
      width: 980px;
      height: 180px;
      display: block;
    }
  }
  .el-dialog__wrapper .el-dialog .el-dialog__header {
    text-align: center;
  }
  .el-dialog__header .el-dialog__title {
    border-bottom: 1px solid skyblue;
    display: block;
    width: 80%;
    margin: 0 auto;
    padding: 0px 0px 10px 0px;
  }
  .el-input__inner {
    width: 350px;
  }
  .el-table .el-input__inner {
    width: 160px;
  }
  .el-form-item {
    width: 400px;
    margin: 0 auto;
  }
  .dialog-footer {
    display: flex;
    justify-content: center;
  }
  .el-table td,
  .el-table .has-gutter th div {
    text-align: center;
  }
  .el-table .has-gutter th div {
    font-size: 18px;
    color: #fff;
    background: #68b6c9;
    height: 40px;
    line-height: 40px;
  }
  .el-table th > .cell {
    line-height: 40px;
    vertical-align: top;
  }
  #add {
    width: 50px;
    margin: 0 auto;
    margin-top: 10px;
    .el-icon-circle-plus-outline {
      font-size: 26px;
    }
  }
  .el-dialog {
    .avatar-uploader .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
      border-color: #409eff;
    }
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 178px;
      height: 178px;
      line-height: 178px;
      text-align: center;
    }
    .avatar {
      width: 300px;
      height: 170px;
      display: block;
    }
    .avatar-uploader-icon {
      width: 300px;
      height: 170px;
    }
  }
  .emptybox {
    .empty {
      width: 400px;
      height: 360px;
      display: block;
      margin: 0 auto;
    }
    p {
      font-size: 20px;
      width: 252px;
      margin: 0 auto;
      cursor: pointer;
    }
  }
  .classifyId {
    margin: 20px auto;
  }
  .el-icon-circle-plus-outline {
    cursor: pointer;
  }
}
</style>
