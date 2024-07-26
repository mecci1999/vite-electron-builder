import {defineComponent} from 'vue';

export default defineComponent({
  name: 'app',
  setup() {
    return () => (
      <>
        <h1>Home</h1>
        <h1>{123}</h1>
      </>
    );
  },
});
