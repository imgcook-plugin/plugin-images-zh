# @imgcook/plugin-images-zh

When using imgcook to generate export code, we take into account the requirements of processing code products (template + style + JS) generated by imgcook platform (such as automatically uploading pictures to our own image space, file directory conversion, etc.), so we open plugin ecological mechanism to provide these capabilities for you to use, and hope to be interested We can build together.

## Develop

```javascript
/**
 * @name plugin example
 * @param option: { data, filePath, config }
 * - data: module and generate code Data
 * - filePath: Pull file storage directory
 * - config: cli config
 */

const pluginHandler = async options => {
  let { data } = options;
  // body...
  return data;
};

module.exports = (...args) => {
  return pluginHandler(...args).catch(err => {
    console.log(err);
  });
};
```

## Reference Example

- Example 1：https://github.com/imgcook-plugin/plugin-react-mod-add
- Example 2：https://github.com/imgcook-plugin/plugin-generate
- Example 3: https://github.com/imgcook-plugin/plugin-images
