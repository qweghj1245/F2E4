<template>
  <div class="home">
    <div class="header">
      <div class="left">
        <img src="../assets/icon_LOGO.svg" />
        <div class="left-title">
          <div>Simple</div>
          <div>pay</div>
        </div>
      </div>
      <div class="center">Payment Details</div>
      <div class="right">
        <img src="../assets/Profilepicture@2x.png" class="chick" />
        <img src="../assets/button_profile.svg" />
      </div>
    </div>
    <div class="body">
      <div class="steps">
        <div class="step">
          <img src="../assets/icon_number1.svg" />
          <div>Account</div>
        </div>
        <div class="step">
          <img src="../assets/icon_number2.svg" />
          <div>Shipping</div>
        </div>
        <div class="step">
          <img :src="number3" />
          <div>Payment Details</div>
        </div>
        <div class="step">
          <img :src="number4" />
          <div>Order Complete</div>
        </div>
      </div>
      <div class="payment" v-show="payStatus === 'none'">
        <div class="title">Payment Method</div>
        <div class="pay-way">
          <div class="visa" :class="active === 'visa' ? 'active' : ''" @click="active = 'visa'">
            <div class="logo">
              <img src="../assets/icon_mastercardlogo.svg" />
              <img src="../assets/icon_visalogo.svg" />
            </div>
            <div class="card">
              <img src="../assets/card2.svg" />
              <img src="../assets/card1.svg" />
            </div>
          </div>
          <div
            class="paypal"
            :class="active === 'paypal' ? 'active' : ''"
            @click="active = 'paypal'"
          >
            <img src="../assets/icon_paypallogo@2x.png" />
            <img src="../assets/icon_paypal.svg" />
          </div>
        </div>
        <div v-show="active === 'visa'">
          <div class="info">
            <div class="set">
              <div class="titles">Card number</div>
              <cleave v-model="cardNumber"
              :options="options" class="form-control" name="card"></cleave>
              <div class="validate"
              v-show="cardLen < 15 && !cardValidate">Enter a 16-digit card number.</div>
              <img :src="cardValidate? checks : error" class="check" v-show="cardLen > 1" />
            </div>
            <div class="set">
              <div class="titles">Name on card</div>
              <input type="text" v-model="name" />
              <div class="validate"
              v-show="nameLen == 0 && !nameValidate">Name on card is required.</div>
              <img :src="nameValidate? checks : error" class="check" v-show="nameLen > 1" />
            </div>
            <div class="set setter">
              <div>
                <div class="titles">Expiry date</div>
                <cleave v-model="date"
                :options="dateOptions" class="form-control" name="date"></cleave>
                <div class="validate"
                v-show="dateLen == 0 && !dateValidate">Expiration date is required.</div>
              </div>
              <div>
                <div class="titles">Security code</div>
                <cleave
                  v-model="security"
                  :options="securityOptions"
                  class="form-control"
                  name="security"
                ></cleave>
              </div>
              <img :src="dateValidate? checks : error" v-show="dateLen > 1" />
            </div>
          </div>
        </div>
        <div class="total-part">
          <div class="top" @click="showTotal = !showTotal">
            <div>Total Payable</div>
            <div class="total-right">
              <div>13.5$</div>
              <img src="../assets/icon_open.svg"/>
            </div>
          </div>
          <slide-up-down :active="showTotal" :duration="500">
            <div class="dash">
              <div class="item">
                <div>Item1</div>
                <div>3.5$</div>
              </div>
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
              <div class="result">
                <div>Total Amount</div>
                <div>13.5$</div>
              </div>
            </div>
          </slide-up-down>
        </div>
        <div class="footer">
          <div>Back</div>
          <div @click="status('confirm')">Confirm</div>
        </div>
      </div>
      <complete v-show="payStatus === 'isPay'" @back="status('back')"></complete>
    </div>
  </div>
</template>

<script>
import SlideUpDown from 'vue-slide-up-down';
import Cleave from 'vue-cleave-component';
import Complete from '@/components/Complete.vue';
import check from '../assets/icon_check.svg';
import err from '../assets/icon_error.svg';
import num3 from '../assets/icon_number3.svg';
import num3blue from '../assets/icon_number3blue.svg';
import num4 from '../assets/icon_number4.svg';
import num4blue from '../assets/icon_number4blue.svg';

export default {
  name: 'home',
  data() {
    return {
      checks: check,
      error: err,
      active: 'visa',
      showTotal: false,
      cardNumber: '',
      name: '',
      date: '',
      security: null,
      options: {
        creditCard: true,
      },
      dateOptions: {
        date: true,
        dateMax: '28-12',
        datePattern: ['m', 'y'],
      },
      securityOptions: {
        blocks: [3],
        delimiterLazyShow: true,
      },
      cardValidate: true,
      nameValidate: true,
      dateValidate: true,
      payStatus: 'none',
    };
  },
  methods: {
    status(t) {
      if (this.cardLen === 0 || this.nameLen === 0 || this.dateLen === 0) return;
      switch (t) {
        case 'confirm':
          this.payStatus = 'isPay';
          break;
        case 'back':
          this.payStatus = 'none';
          break;
        default:
          break;
      }
    },
  },
  computed: {
    cardLen() {
      return this.cardNumber.length;
    },
    nameLen() {
      return this.name.length;
    },
    dateLen() {
      return this.date.length;
    },
    number3() {
      return this.payStatus === 'none' ? num3blue : num3;
    },
    number4() {
      return this.payStatus === 'none' ? num4 : num4blue;
    },
  },
  watch: {
    cardNumber(val) {
      this.cardValidate = val.length >= 15;
    },
    name(val) {
      this.nameValidate = val.length > 1;
    },
    date(val) {
      this.dateValidate = val.length > 1;
    },
  },
  components: {
    SlideUpDown,
    Cleave,
    Complete,
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  min-width: 1366px;
  .header {
    background-color: #efefef;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 26px 0 50px;
    .left {
      display: flex;
      align-items: center;
      img {
        height: 75px;
      }
      .left-title {
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        & > div:first-child {
          color: #495c85;
        }
        & > div:last-child {
          color: #ffc400;
        }
      }
    }
    .center {
      color: #495c85;
      font-size: 28px;
      font-weight: bold;
      padding-right: 76px;
    }
    .right {
      display: flex;
      cursor: pointer;
      .chick {
        width: 50px;
        margin-right: 9px;
      }
    }
  }
  .body {
    position: relative;
    padding: 28px 0 30px 0;
    .payment {
      width: 469px;
      margin: 0 auto;
      .title {
        font-size: 16px;
        color: #999999;
        margin-bottom: 15px;
      }
      .pay-way {
        width: 100%;
        height: 168px;
        padding: 9px 10px;
        border-radius: 5px;
        background-color: #e8e8e8;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
        .active {
          background-color: #fff;
        }
        & > div {
          width: 220px;
          height: 150px;
          border-radius: 5px;
          cursor: pointer;
        }
        .visa {
          margin-right: 9px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .logo {
            & > img:first-child {
              margin-right: 10.6px;
            }
          }
          .card {
            position: relative;
            & > img:first-child {
              margin-right: 40px;
            }
            & > img:last-child {
              position: absolute;
              transform: translate(-50%, -50%);
              top: 68%;
              left: 67%;
            }
          }
        }
        .paypal {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          & > img:first-child {
            width: 69px;
          }
          & > img:last-child {
            width: 39px;
          }
        }
      }
    }
    .info {
      width: 469px;
      border-radius: 5px;
      box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.16);
      padding: 19px 121px 14px 123px;
      .validate {
        position: absolute;
        color: #c83838;
        font-size: 12px;
      }
      .set {
        margin-bottom: 25px;
        position: relative;
        .titles {
          font-size: 12px;
          color: #cccccc;
          margin-bottom: 5px;
        }
        & > input {
          width: 225px;
          border-radius: 3px;
          border: solid 1px #cccccc;
          height: 30px;
          padding: 5.01px 0 3.99px 8px;
          font-size: 16px;
          color: #999999;
        }
        .check {
          position: absolute;
        }
      }
      .setter {
        display: flex;
        & > div {
          & > input {
            width: 100%;
            height: 30px;
            border: solid 1px #cccccc;
            padding: 5.01px 0 3.99px 8px;
            font-size: 16px;
            color: #999999;
          }
          .date {
            border-right: 0;
            border-radius: 3px 0 0 3px;
          }
          .code {
            border-radius: 0 3px 3px 0;
          }
        }
        & > img {
          transform: translateY(27%);
        }
      }
    }
    .total-part {
      .top {
        display: flex;
        justify-content: space-between;
        padding: 10px 26.58px 9px 12px;
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.0899);
        margin-top: 20px;
        & > div:first-child {
          font-size: 16px;
          color: #999999;
        }
        .total-right {
          display: flex;
          & > div {
            font-weight: bold;
            font-size: 16px;
            color: #999999;
            margin-right: 35px;
          }
          & > img {
            width: 14px;
            cursor: pointer;
          }
        }
      }
      .dash {
        border: dashed 1px #e6e6e6;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
        padding: 10px 0px 12.24px 0px;
        .item,
        .result {
          display: flex;
          justify-content: space-between;
          font-size: 16px;
          color: #999999;
        }
        .item {
          padding: 0 75.18px 9px 66.12px;
        }
        .result {
          border-top: dashed 1px #e6e6e6;
          width: 383px;
          margin-left: 12px;
          padding-top: 5.5px;
        }
      }
    }
    .footer {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      & > div:first-child {
        font-weight: bold;
        font-size: 16px;
        color: #495c85;
        padding: 13px 0;
        cursor: pointer;
      }
      & > div:last-child {
        font-weight: bold;
        font-size: 16px;
        color: white;
        width: 235px;
        height: 47px;
        text-align: center;
        line-height: 47px;
        border-radius: 5px;
        background-color: #495c85;
        cursor: pointer;
      }
    }
    .steps {
      position: absolute;
      transform: translate(53%, 23%);
      .step {
        & > img {
          margin-right: 20px;
        }
        &:last-child {
          &::after {
            display: none;
          }
        }
        & > div {
          color: #cccccc;
          font-size: 14px;
          font-weight: bold;
          display: inline-block;
          vertical-align: top;
          margin-top: 2px;
        }
        &::after {
          content: "";
          display: block;
          width: 1px;
          height: 30px;
          border-left: dashed 1px #cccccc;
          margin-left: 10px;
          margin-top: -4px;
        }
      }
    }
  }
}
</style>
