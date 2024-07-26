import {defineComponent} from 'vue';
import HelloWorld from '/@/components/hello';
import Logo from '/@/assets/logo.svg';

export default defineComponent({
  name: 'about',
  setup() {
    return () => (
      <div class={'app-about'}>
        <h1 class={'app-about__title'}>About</h1>
        <img src={Logo} />
        <HelloWorld />
      </div>
    );
  },
});
