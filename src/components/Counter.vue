<script>
export default {
  name: "CounterAppComponent",  // ✅ 다중 단어 이름으로 변경
  props: {
    count: Number
  },
  data() {
    return {
      inputNumber: 1,
    };
  },
  methods: {
    increase() {
      this.$emit("updateCount", Number(this.inputNumber));
    },
    decrease() {
      this.$emit("updateCount", -Number(this.inputNumber));
    },
    reset() {
      this.$emit("resetCount");
    }
  }
};
</script>
