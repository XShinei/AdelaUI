import AdButton from '../src/index.vue';

export default {
  title: 'Button',
  component: AdButton,
};

export const NormalButton = () => ({
  components: { AdButton },
  template: '<ad-button>Normal Button</ad-button>'
});

export const PrimaryButton = () => ({
  components: { AdButton },
  template: '<ad-button type="primary">Primary Button</ad-button>'
});