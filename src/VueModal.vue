<template>
  <transition name="modal-mask" @after-leave="afterLeave">
  <div
    class="modal-mask"
    v-show="value"
    tabindex="999"
    @click="clickBackdrop"
    :class="{ 'modal-transparent':  !backdrop}"
  >
    <transition name="modal">
      <div v-show="value" @click.stop class="modal-content">
        <slot
        ></slot>
      </div>
    </transition>
	</div>
  </transition>
</template>

<script>
  export default {
    data () {
      return {
        timer: null
      }
    },

    props: {
      value: {
        type: Boolean,
        default: false
      },
      timeout: {
        type: Number
      },
      backdrop: {
        type: Boolean,
        default: true
      }
    },

    watch: {
      'value' (val) {
        if (val) {
          this.$emit('show')
          this.showHandler()
        } else {
          this.$emit('hide')
        }
      }
    },

    methods: {
      close () {
        this.$emit('input', false)
      },

      showHandler () {
        clearTimeout(this.timer)

        this.$nextTick(() => {
          let $input = this.$el.querySelector('input')
          if ($input) {
            $input.focus()
          } else {
            this.$el.focus()
          }

          if (this.timeout) {
            this.timer = setTimeout(() => {
              this.close()
            }, this.timeout)
          }
        })
      },

      afterLeave () {
        this.$emit('afterLeave')
      },

      clickBackdrop () {
        this.close()
      }
    },

    created () {
      this.showHandler()
    }
  }
</script>
