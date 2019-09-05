<template>
  <div class="cx-el-timeline">
    <el-dialog :title="title"
               :visible.sync="isShow"
               @close="close"
               :width="width">

      <div class="timeline-content">
        <el-table :data="headerData"
                  v-show="headerShow"
                  :header-cell-style="headerRowStyle"
                  style="width: 100%">
          <el-table-column prop="orderNumber"
                           label="订单号">
          </el-table-column>
          <el-table-column prop="rounds"
                           label="轮次">
          </el-table-column>
          <el-table-column prop="driver"
                           label="司机">
          </el-table-column>
        </el-table>

        <div class="block-timeline">
          <el-timeline>
            <el-timeline-item v-for="(item, index) in bodyData"
                              :key="index"
                              :icon="item.icon"
                              :type="item.type"
                              :color="item.color"
                              :size="item.size"
                              :timestamp="item.timestamp"
                              placement="top">
              <div>
                <h4 v-if="item.description">{{ item.description }}</h4>

                <template v-if="item.content">
                  <a v-if="item.isOpen"
                     @click="handleOpen(index)"
                     class="open-down">收起
                    <i class="el-icon-arrow-up"></i>
                  </a>
                  <a v-else
                     @click="handleOpen(index)"
                     class="open-up">展开
                    <i class="el-icon-arrow-down"></i>
                  </a>
                  <transition name="fade">
                    <p v-show="item.isOpen"
                       v-html="item.content"></p>
                  </transition>
                </template>

              </div>
            </el-timeline-item>

          </el-timeline>
        </div>
      </div>

      <span slot="footer"
            class="dialog-footer">
        <el-button @click="$emit('update:dialogVisible', false)">知道了</el-button>
      </span>
    </el-dialog>
  </div>

</template>

<script>
export default {
  name: 'timeLine',
  props: {
    // 弹窗显示
    dialogVisible: {
      type: Boolean,
      default: false
    },
    // 是否显示时间线头
    headerShow: {
      type: Boolean,
      default: true
    },
    // 时间线头部数据
    headerData: {
      type: Array,
      default: () => {
        return []
      }
    },
    // 时间线数组
    bodyData: {
      type: Array,
      default: () => {
        return []
      }
    },
    // 弹窗标题
    title: String,
    // 弹窗宽度，默认长度600px
    width: {
      type: String,
      default: '600px'
    }
  },
  data () {
    return {
    }
  },
  computed: {
    isShow: {
      get () {
        return this.dialogVisible
      },
      set () {
      }
    }
  },
  created () {
  },
  methods: {
    close () {
      this.$emit('update:dialogVisible', false)
    },
    handleOpen (index) {
      this.bodyData[index].isOpen = !this.bodyData[index].isOpen
    },
    headerRowStyle ({ row, column, rowIndex }) {
      if (rowIndex === 0) {
        return 'background-color:rgba(243,245,247,1)'
      }
    }
  }
}
</script>
<style lang="less" scoped>
.cx-el-timeline {
  /deep/ .el-dialog__footer {
    border-top: 1px solid #ebebeb;
    text-align: center;
    padding-top: 20px;
  }
  .block-timeline {
    margin-top: 30px;
  }
  .timeline-content {
    height: 500px;
    overflow-y: scroll;
  }
  .el-timeline {
    padding-right: 30px;
    padding-left: 30px;
    .open-up,
    .open-down {
      display: inline-block;
      text-decoration: none;
      color: #3f82ff;
      cursor: pointer;
      margin: 8px 0;
    }
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}
</style>
