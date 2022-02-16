/**
 * @name plugin example
 * @param option: { data, filePath, config }
 * - data: module and generate code Data
 * - filePath: Pull file storage directory
 * - config: cli config
 */
const pluginHandler = async options => {
  const { data, filePath, config  } = options;
  if (!data.code) return null
  // {panelDisplay: {panelName: '', panelValue: '', panelType: ''}}
  const panelDisplay = data.code.panelDisplay || []
  for (const item of panelDisplay) {
    item.panelValue = item.panelValue.replace(/\.\/images\//g, function () {
      return '../../images/'
    })
  }

  return { data, filePath, config }
}

module.exports = (...args) => {
  return pluginHandler(...args).catch(err => {
    console.log(err)
  });
};
