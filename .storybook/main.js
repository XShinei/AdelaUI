module.exports = {
  "stories": [
    "../packages/**/doc/*.stories.mdx",
    '../packages/**/doc/*.stories.[tj]s'
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/vue3"
}