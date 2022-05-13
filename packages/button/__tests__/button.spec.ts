import { mount } from '@vue/test-utils';
import Button from '../src/index.vue';

const DEFAULT_TEXT = 'Hello World!';

describe('Button.vue', () => {
  test('render test', () => {
    const instance = mount(Button, {
      slots: {
        default: DEFAULT_TEXT
      },
    });

    expect(instance.text()).toEqual(DEFAULT_TEXT);
  });

  test('handle click', async () => {
    const instance = mount(Button, {
      slots: {
        default: DEFAULT_TEXT
      },
    });

    await instance.trigger('click');
    expect(instance.emitted()).toBeDefined();
  });
});