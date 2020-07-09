<template>
  <!-- 全部商品 -->
  <div class="All_All">
    <div class="All">
      <div class="title">
        <div class="titleOne">
          <div>综合排序</div>
          <div>价格从低到高</div>
          <div>价格从高到低</div>
        </div>
        <div class="titleTwo">
          <div>
            <Input v-model="value" type="number" placeholder="价格" style="width: 58px" />
          </div>
          <div>-</div>
          <div>
            <Input v-model="value" type="number" placeholder="价格" style="width: 58px" />
          </div>
          <div>
            <Button type="primary">确定</Button>
          </div>
        </div>
      </div>

      <div class="baby">
        <div v-for="item in list" :key="item.id" class="babyItem">
          <div class="imgAll">
            <img :src="item.productImageBig" alt class="img" />
          </div>
          <div class="productName">{{item.productName}}</div>
          <div class="subTitle">{{item.subTitle}}</div>
          <div class="salePrice">{{item.salePrice | fixed}}</div>
          <div class="btn">
            <span class="see">
              <Button>查看详情</Button>
            </span>
            <span>
              <Button type="primary">加入购物车</Button>
            </span>
          </div>
        </div>
      </div>
      <Page
        :total="total"
        show-total
        show-elevator
        show-sizer
        :page-size-opts="[8, 20, 40, 80]"
        @on-change="onChange"
        @on-page-size-change="onPageSizeChange"
      />
      
    </div>
    
  </div>
  <Last></Last>
</template>

<script>
import Last from "../components/home/Last"; //首页底部
export default {
  name: "",
  props: {},
  components: {
    Last,
  },
  data() {
    return {
      page: 1,
      size: 8,
      total:0,
      value: "",
      list: [],
    };
  },
  methods: {
    onChange(val) {
      this.page = val
      this.getData()
      console.log(`当前页: ${val}`);
    },
    onPageSizeChange(val) {
      this.size = val
      this.getData()
      console.log(`每页 ${val} 条`);
    },
    getData(){
      this.$api
      .allGoods(this.page, this.size)
      .then(res => {
        this.list = res.data;
        this.total = res.total
				console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    }
  },
  mounted() {
    this.getData()
  },
  //过滤器 对数字进行操作就用这个
  filters: {
    fixed(val) {
      return "￥" + Number(val).toFixed(2);
    }
  },
  watch: {},
  computed: {
    
  }
};
</script>

<style scoped lang='scss'>
.All_All {
  background: rgb(237, 237, 237);
  width: 100%;
  // height: 2500px;
  display: flex;
  justify-content: center;
}
.All {
  width: 1240px;
  // height: 2500px;
  padding: 0 20px 0 20px;
  // background: burlywood;
  //   display: flex;
}
.title {
  display: flex;
  width: 50%;
  display: flex;
  // justify-content: space-between;
  align-items: center;
}
.titleOne {
  width: 50%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.titleTwo {
  width: 40%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 30px;
}
.imgAll {
  width: 70%;
  height: 50%;
}
.img {
  width: 200px;
  height: 200px;
}
.baby {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.babyItem {
  width: 24.7%;
  height: 440px;
  margin-bottom: 3px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 15px #999;
    transform: translateY(-3px);
    transition: all 0.5s;
    .salePrice {
      display: none;
    }
    .btn {
      display: block;
    }
  }
}
.productName {
  font-size: 16px;
  font-weight: 540;
  width: 98%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.subTitle {
  font-size: 13px;
  color: #999;
  margin: 10px 0 30px 0;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 95%;
}
.salePrice {
  font-size: 18px;
  font-weight: 600;
  color: red;
}
.btn {
  display: none;
}
.see {
  margin-right: 10px;
}
.ivu-btn {
  width: 100px !important;
}
</style>