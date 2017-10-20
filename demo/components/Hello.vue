<template>
  <div>
    <MdButton
      @click.native="showModal1 = true"
      class="blue"
    >
      Modal1 (default)
    </MdButton>
    <vue-modal
      v-model="showModal1"
    >
      <div style="position: relative;">
        <iframe src="https://red.xunlei.com" width="700" height="400" frameborder="0"></iframe>
        <h2 style="position: absolute; bottom: 5px; width: 100%;">click backdrop to close</h2>
      </div>
    </vue-modal>

    <MdButton
      @click.native="showModal2 = true"
      class="blue"
    >
      Modal2（no backdrop)
    </MdButton>
    <vue-modal
      v-model="showModal2"
      :backdrop="false"
    >
      <div class="modal-2">
        <iframe src="https://red.xunlei.com/" width="320" height="500" frameborder="0"></iframe>
        <MdButton
          @click.native="showModal2 = false"
          class="red"
        >
          click here to close
        </MdButton>
      </div>
    </vue-modal>

    <MdButton
      @click.native="showModal3 = true"
      class="blue"
    >
      Modal3 (auto hide)
    </MdButton>
    <vue-modal
      v-model="showModal3"
      :backdrop="false"
      :timeout="2000"
    >
      <h3>Hi, this modal will hide in 2 seconds.</h3>
      <iframe src="https://m.seniverse.com/city/CHGD050000" width="360" height="310" frameborder="0"></iframe>
    </vue-modal>

    <MdButton
      @click.native="showModal4 = true"
      class="blue"
    >
      Modal4 (everything)
    </MdButton>
    <vue-modal
      v-model="showModal4"
    >
     <div class="modal-4">
      <h2>Like this 😊</h2>
      <h1>YOU CAN PUT ANYTHING IN THE MODAL</h1>
      <MdButton @click.native="showModal4 = false" class="red">close</MdButton>
     </div>
    </vue-modal>
  </div>
</template>

<script>
import VueModal from '../../src/VueModal.vue';
import '../../src/vue-modal.css';

import MdButton from '@/components/MdButton.vue';

export default {
  name: 'hello',
  components: {
    VueModal,
    MdButton,
  },
  data() {
    return {
      showModal1: false,
      showModal2: false,
      showModal3: false,
      showModal4: false,
    };
  },
};
</script>

<style>

.modal-2 {
  background: #000;
  padding: 2em .5em;
  border-radius: 1em;
}
.modal-2 .button {
  display: block;
}

.modal-4 {
  border: 1px solid #fff;
  padding: 3em;
  border-radius: 1em;
  background: rgba(255, 255, 255, 0.01);
}
</style>

