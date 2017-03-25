/* eslint-disable no-console */
const chalk = require('chalk')

const divider = chalk.gray('\n-----------------------------------')

const logger = {
  error: err => console.error(chalk.red(err)),
  appStarted: (port, host, tunnelStarted) => {
    console.log(`Server started ! ${chalk.green('✓')}`)

    if (tunnelStarted) {
      console.log(`Tunnel initialised ${chalk.green('✓')}`)
    }

    console.log(`
Localhost: ${chalk.magenta(`http://${host}:${port}`)}${divider}
${chalk.blue(`Press ${chalk.italic('CTRL-C')} to stop`)}
    `)
  },
}

module.exports = logger
