<template>
  <div class="completed">
    <div class="title">Your order is complete.</div>
    <div class="sub-title">We will send an email to confirm your order details.</div>
    <div class="content">
      <div class="receipt">Receipt</div>
      <div class="id-card">
        <div>#00001</div>
        <div>Date:07/31/2019</div>
      </div>
      <div class="items">
        <div class="item">
          <div>Item1</div>
          <div>3.5$</div>
        </div>
        <div class="item">
          <div>Item2</div>
          <div>9.5$</div>
        </div>
        <div class="item">
          <div>Tax</div>
          <div>0.5$</div>
        </div>
      </div>
      <div class="total">
        <div>Total</div>
        <div>13.5$</div>
      </div>
      <div class="set"><span>Name:</span>Chrispy</div>
      <div class="set"><span>Email:</span>chrispy@mail.com</div>
      <div class="set"><span>Tel:</span>091234567</div>
      <div class="set"><span>Payment Method:</span>Credit card</div>
      <div class="set setter"><span>Delivery to:</span>
      <div class="w-192">128 Academia Road, Section 2, Nankang, Taipei 115, Taiwan</div></div>
      <div class="appreciate">THANK YOU</div>
    </div>
    <div class="back" @click="back">Back to store</div>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$emit('back');
    },
  },
};
</script>

<style lang="scss" scoped>
.completed {
  width: 360px;
  margin: 0 auto;
  margin-top: 8px;
  text-align: center;
  .title {
    color: #999999;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .sub-title {
    font-size: 16px;
    color: #999999;
    width: 384px;
  }
  .content {
    width: 100%;
    box-shadow: 3px 3px 6px rgba(0, 0, 0, .16);
    padding: 18px 30px 20px 30px;
    .receipt {
      font-size: 24px;
      font-weight: bold;
      color: #999999;
      margin-bottom: 20px;
    }
    .id-card {
      display: flex;
      justify-content: space-between;
      font-weight: bold;
      font-size: 14px;
      color: #999999;
      padding-bottom: 18px;
      border-bottom: dotted 1px #999999;
    }
    .items {
      margin-top: 18px;
      padding-bottom: 18px;
      border-bottom: dotted 1px #999999;
      .item {
        display: flex;
        justify-content: space-between;
        color: #999999;
        font-size: 16px;
      }
    }
    .total {
      display: flex;
      justify-content: space-between;
      font-size: 20px;
      font-weight: bold;
      color: #999999;
      margin-top: 25px;
      margin-bottom: 30px;
    }
    .set {
      color: #999999;
      font-size: 14px;
      text-align: left;
      & > span {
        font-weight: bold;
        margin-right: 5px;
      }
      .w-192 {
        width: 192px;
      }
    }
    .setter {
      display: flex;
    }
    .appreciate {
      color: #999999;
      margin-top: 22px;
      font-size: 20px;
      font-weight: bold;
    }
  }
  .back {
    font-size: 12px;
    color: #999999;
    text-decoration: underline;
    margin-top: 20px;
    cursor: pointer;
  }
}
</style>
