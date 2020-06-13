import { mount, createLocalVue } from '@vue/test-utils';
import VueCardFooter from '@/components/VueCard/VueCardFooter/VueCardFooter.vue';

const localVue = createLocalVue();

describe('VueCardFooter.vue', () => {
  test('renders component', () => {
    const wrapper = mount(VueCardFooter, { localVue });

    expect(wrapper.findAll(`.vueCardFooter`)).toHaveLength(1);
  });
});
