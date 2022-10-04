import { withModifiers, defineComponent } from 'vue'
import type { PropType } from 'vue'

export interface ITestProps {
  test: 'a' | 'b'
}

const App = defineComponent({
  props: {
    test: {
      type: String as PropType<ITestProps['test']>,
      required: true
    }
  },

  setup () {
    const count = ref(0)

    const inc = () => {
      count.value++
    }

    return () => (
      <div onClick={withModifiers(inc, ['self'])}>{count.value}</div>
    )
  }
})

export default App

export type VBtn = InstanceType<typeof App>
