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
        <el-button size="mini" type="primary" v-show="a">取消</el-button>
      </div>
    </div>
    <div class="contain">
      <div class="front" style="height:180px;width:100%" v-if="!a">
        <el-image style="width: 100%; height:180px" :src="url"> </el-image>
      </div>
      <el-upload
        v-else
        class="avatar-uploader front"
        action="http://127.0.0.1:3000/product/upload"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
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
          <div class="input_video">
            <video-player
              class="video-player vjs-custom-skin"
              ref="videoPlayer"
              :playsinline="true"
              :options="playerOptions"
            ></video-player>
          </div>
        </div>
        <div class="right ">
          <h3>四川大学</h3>
          <p>
            四川大学大学巴适得板哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻呵呵呵呵呵呵哈哈哈红红火火恍恍惚惚红红火火恍恍惚惚红红火火恍恍惚惚哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊呵呵呵呵呵呵呵呵细细想想哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦
          </p>
        </div>
        <div class="back" v-show="a" @click="changecarousel()">
          <p>点击我更改视频图片文字描述</p>
        </div>
      </div>
      <div class="category">
        <h3 class="front">
          标题
          <div class="back" v-show="a" @click="changetitle()">
            <p>点击我更改标题</p>
          </div>
        </h3>
        <div class="box1">
          <div class="front">
            <img src="3.jpg" alt="" />
            <p>虚拟仿真</p>
            <p>biubiu</p>
            <div class="back" v-show="a">
              <p>点击我更改banner</p>
            </div>
          </div>
          <div class="front">
            <img src="3.jpg" alt="" />
            <p>虚拟仿真</p>
            <p>biubiu</p>
            <div class="back" v-show="a">
              <p>点击我更改banner</p>
            </div>
          </div>
          <div class="front">
            <img src="3.jpg" alt="" />
            <p>虚拟仿真</p>
            <p>biubiu</p>
            <div class="back" v-show="a">
              <p>点击我更改banner</p>
            </div>
          </div>
        </div>
        <div class="box2">
          <div class="front">
            <img src="3.jpg" alt="" />
            <p>虚拟仿真</p>
            <p>biubiu</p>
            <div class="back" v-show="a">
              <p>点击我更改banner</p>
            </div>
          </div>
          <div class="front">
            <img src="3.jpg" alt="" />
            <p>虚拟仿真</p>
            <p>biubiu</p>
            <div class="back" v-show="a">
              <p>点击我更改banner</p>
            </div>
          </div>
          <div class="front">
            <img src="3.jpg" alt="" />
            <p>虚拟仿真</p>
            <p>biubiu</p>
            <div class="back" v-show="a">
              <p>点击我更改banner</p>
            </div>
          </div>
        </div>
      </div>
      <div class="article">
        <h3 class="front">
          标题
          <div class="back" v-show="a" @click="changearticle()">
            <p>点击更改标题</p>
          </div>
        </h3>
        <div class="articlelink">
          <h3 class="front">
            站内文章栏目链接
            <div class="back" v-show="a" @click="changelink()">
              <p>点击更改栏目链接</p>
            </div>
          </h3>
          <h3 class="front">
            站内文章栏目链接
            <div class="back" v-show="a">
              <p>点击更改栏目链接</p>
            </div>
          </h3>
        </div>
        <div class="articledetails">
          <img src="2.jpg" alt="" />
          <div>
            1
          </div>
        </div>
        <div class="articledetailsitem">
          <div>
            <img src="2.jpg" alt="" />
            <p>标题1</p>
            <p class="time">标题1</p>
          </div>
          <div>
            <img src="2.jpg" alt="" />
            <p>标题1</p>
            <p>标题1</p>
          </div>
          <div>
            <img src="2.jpg" alt="" />
            <p>标题1</p>
            <p>标题1</p>
          </div>
          <div>
            <img src="2.jpg" alt="" />
            <p>标题1</p>
            <p>标题1</p>
          </div>
        </div>
      </div>

      <div class="bottom front">
        友情链接
        <div class="back" v-show="a" @click="changefriendlink()">
          <p>点击我更改banner</p>
        </div>
      </div>
    </div>
    <!-- 对话框 -->
    <el-dialog title="添加轮播" :visible.sync="dialogFormVisible" width="60%">
      <el-table
        ref="multipleTable"
        :data="homeForm.tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
        align="center"
      >
        <el-table-column label="编号" width="60" align="center">
          <template slot-scope="scope">{{ scope.row.index }}</template>
        </el-table-column>
        <el-table-column label="视频图片" width="120" align="center">
          <template slot-scope="scope">
            <div class="demo-image__placeholder">
              <div class="block">
                <el-image :src="scope.row.imageUrl"></el-image>
              </div>
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
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            &emsp;
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
            &emsp;<el-switch v-model="scope.row.value1"> </el-switch>
          </template>
        </el-table-column>
      </el-table>
      <div id="add">
        <i class="el-icon-circle-plus-outline" @click="addcarousel()"></i>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
    <el-dialog title="修改项目" :visible.sync="dialogeditcarousel" width="60%">
      <el-form :model="homeForm.editcarousel" :rules="rules">
        <el-form-item label="栏目图片" :label-width="formLabelWidth">
          <el-upload
            class="avatar-uploader"
            action="http://127.0.0.1:3000/product/upload"
            :show-file-list="false"
            :on-success="handlecarousel"
            :before-upload="beforeAvatarUpload"
          >
            <img
              v-if="homeForm.editcarousel.imageUrl"
              :src="homeForm.editcarousel.imageUrl"
              class="avatar"
            />
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
        <el-form-item label="栏目图片" :label-width="formLabelWidth">
          <el-upload
            class="avatar-uploader"
            action="http://127.0.0.1:3000/product/upload"
            :show-file-list="false"
            :on-success="handlecarousel"
            :before-upload="beforeAvatarUpload"
          >
            <img
              v-if="homeForm.addcarousel.imageUrl"
              :src="homeForm.addcarousel.imageUrl"
              class="avatar"
            />
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
        <el-form-item prop="content" label="内容" :label-width="formLabelWidth">
          <el-input
            v-model="homeForm.addcarousel.content"
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
            <el-radio label="站内链接"></el-radio>
            <el-radio label="站外链接"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item
          prop="in"
          label="站内链接"
          :label-width="formLabelWidth"
          v-if="homeForm.formlink.linkclass == '站内链接'"
        >
          <el-cascader
            v-model="homeForm.formlink.in"
            :options="homeForm.formlink.options"
            @change="handleChange"
          ></el-cascader>
        </el-form-item>
        <el-form-item
          prop="out"
          label="站外链接"
          :label-width="formLabelWidth"
          v-if="homeForm.formlink.linkclass == '站外链接'"
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
              <template slot-scope="scope">{{ scope.row.index }}</template>
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
                <el-select v-model="scope.row.class" placeholder="请选择分类">
                  <el-option
                    v-for="item in scope.row.options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </template>
            </el-table-column>
            <el-table-column label="网址" width="200" align="center">
              <template slot-scope="scope">
                <el-input
                  v-model="scope.row.adress"
                  placeholder="请输入网址"
                ></el-input>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="200" align="center">
              <template slot-scope="scope">
                <el-switch v-model="scope.row.value"> </el-switch>
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
              <template slot-scope="scope">{{ scope.row.index }}</template>
            </el-table-column>
            <el-table-column label="分类" width="420" align="center">
              <template slot-scope="scope">
                <el-input
                  v-model="scope.row.title"
                  placeholder="请输入网址"
                ></el-input>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="250" align="center">
              <template slot-scope="scope">
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
        <el-button @click="dialogfriendlink = false">取 消</el-button>
        <el-button type="primary" @click="dialogfriendlink = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      form: {
        name: "",
      },
      activeName: "first",
      homeForm: {
        bannerurl:
          "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
        tableData: [
          {
            index: 1,
            title: "四川大学1",
            value1: true,
            imageUrl:
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
          index: 1,
          imageUrl:
            "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
          title: "",
          content: "",
          value1: true,
        },
        editcarousel: {
          imageUrl:
            "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
          title: "",
          content: "",
        },
      },
      dialogFormVisible: false,
      dialogcarousel: false,
      dialogeditcarousel: false,
      dialogtitleone: false,
      dialogtitletwo: false,
      dialoglink: false,
      dialogfriendlink: false,
      formLabelWidth: "90px",
      a: false,
      changeCount: 0, // 判断表单数据是否改变过
      isPopup: false, // 判断提交事件不再弹出离开提示
      url:
        "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
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
        linkclass: [
          {
            required: true,
            message: "请至少选择一链接类型",
            trigger: "change",
          },
        ],
        content: [{ required: true, message: "请输入内容", trigger: "blur" }],
        in: [{ required: true, message: "请选择站内链接", trigger: "change" }],
        out: [{ required: true, message: "请选择站外链接", trigger: "blur" }],
      },
    };
    //  console.log(that.homeForm)
  },
  methods: {
    editCarousel() {
      this.dialogeditcarousel = false;
      this.homeForm.tableData[this.index] = {
        ...this.homeForm.tableData[this.index],
        ...this.homeForm.editcarousel,
      };
      this.homeForm.tableData.splice(1, 0);
    },
    Carouseltrue() {
      if (this.homeForm.tableData.length == 5)
        this.$message({
          showClose: true,
          message: "警告！最多加五个轮播图",
          type: "warning",
        });
      else {
        var index = this.homeForm.tableData.length + 1;
        var obj = JSON.parse(JSON.stringify(this.homeForm.addcarousel));
        obj.index = index;
        this.homeForm.tableData.push(obj);
      }
      this.dialogcarousel = false;
    },
    fun() {
      this.a = true;
    },
    submitForm(formName) {
      const that = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
          that.dialoglink = false;
          that.dialogtitleone = false;
          that.dialogtitletwo = false;
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    handleEdit(index, row) {
      console.log(index, row);
      this.index = index;
      this.dialogeditcarousel = true;
    },
    handleDelete(index, row) {
      console.log(index, row);
      this.homeForm.tableData.splice(index, 1);
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
    handleChange(value) {
      console.log(value, 6666);
      console.log();
    },
    handleAvatarSuccess(data) {
      if (data.success) {
        this.homeForm.bannerurl =
          "http://127.0.0.1:3000/upload/product/" + data.fileName;
      }
    },
    handlecarousel(data) {
      if (data.success) {
        this.homeForm.addcarousel.imageUrl =
          "http://127.0.0.1:3000/upload/product/" + data.fileName;
      }
    },
    beforeAvatarUpload(file) {
      console.log(file);
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
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
        this.homeForm.frinedlinktableData.push({
          index: 1,
          title: "",
          class: "",
          value: true,
          address: "",
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
        });
      }
      if(this.activeName == "second"){
        this.homeForm.frinedlinkmange.push(    {
            index: 1,
            title: "",
           
          },)
      }
    },
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
    if (this.changeCount && !this.isPopup) {
      // this.$confirm("数据尚未保存,确定要离开吗？")
      //   .then(() => {
      //     next();
      //   })
      //   .catch(() => {
      //     next(false);
      //   });
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
          -webkit-line-clamp: 10;
          -webkit-box-orient: vertical;
          line-height: 24px;
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
      }
    }
    .box1 > div:hover {
      transform: scale(1.1);
    }
    .box2 > div:hover {
      transform: scale(1.1);
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
        height: 240px;
      }
      div {
        background: #e6e6e6;
        width: 400px;
      }
    }
    .articledetailsitem {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      div {
        img {
          width: 180px;
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
      text-align: center;
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
  // .el-select .el-input__inner{
  //   width: 160px;
  // }
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
  .file {
    position: relative;
    display: inline-block;
    background: skyblue;
    padding: 4px 20px;
    overflow: hidden;
    text-decoration: none;
    text-indent: 0;
    line-height: 20px;
    border-radius: 20px;
    color: #fff;
    font-size: 13px;
    margin-left: 18px;
  }
  .file input {
    position: absolute;
    font-size: 100px;
    left: 0;
    top: 0;
    opacity: 0;
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
      width: 178px;
      height: 178px;
      display: block;
    }
  }
}
</style>
