const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const inquirer = require('inquirer')
const logo = require('asciiart-logo')

const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const executeExercise = (pathType, level) => {
  const tsconfigPath = path.resolve(path.dirname('.'), 'tsconfig.json')
  const vueTsconfigPath = path.resolve(path.dirname('.'), 'vue-tsconfig.json')

  if (pathType.toLowerCase() === 'contracts') {
    execSync('npx hardhat typechain', { stdio: 'inherit' })
  }

  switch (level) {
    case 'all':
      const exercisesFolder = path.resolve(path.dirname('.'), `${pathType.toLowerCase()}/**/*.ts`)
      try {
        if (pathType.toLowerCase() === 'contracts') {
          execSync('npx hardhat test', { stdio: 'inherit' })
        } else {
          execSync(
            `npx ts-mocha -n loader=ts-node/esm -p ${
              pathType === 'frontend' ? vueTsconfigPath : tsconfigPath
            } ${exercisesFolder}`,
            {
              stdio: 'inherit'
            }
          )
        }
        console.log(chalk.green(`Path ${pathType} completed!`))
      } catch (e) {
        console.log(chalk.red('Whoops! One or more exercises failed.'))
      }
      break
    default:
      const exerciseFile = path.resolve(path.dirname('.'), pathType.toLowerCase(), `level-${level}/exercise.spec.ts`)

      try {
        const exists = fs.existsSync(exerciseFile, 'utf8')
        if (!exists) throw new Error()
        try {
          if (pathType.toLowerCase() === 'contracts') {
            execSync(`npx hardhat test ${exerciseFile}`, { stdio: 'inherit' })
          } else {
            execSync(
              `npx ts-mocha -n loader=ts-node/esm -p ${
                pathType === 'frontend' ? vueTsconfigPath : tsconfigPath
              } ${exerciseFile}`,
              {
                stdio: 'inherit'
              }
            )
          }
          console.log(chalk.green('Exercise completed!'))
        } catch (e) {
          console.log(chalk.red('Whoops! Exercise failed.'))
        }
      } catch (error) {
        console.log(chalk.red(`Exercise ${pathType.toLowerCase()} for level ${level} not found.`))
        process.exit(1)
      }
      break
  }
}

const main = async () => {
  const [, , pathName, levelNumber] = process.argv
  if (
    pathName &&
    levelNumber &&
    !isNaN(levelNumber) &&
    ['contracts', 'backend', 'frontend'].includes(pathName.toLowerCase())
  ) {
    executeExercise(pathName, levelNumber.toLowerCase() === 'all' ? 'all' : levelNumber)
  } else {
    console.clear()
    console.log(logo({ name: 'Shadowy' }).render())
    const { pathType } = await inquirer.prompt({
      name: 'pathType',
      message: 'Choose the path from the choices below:',
      type: 'list',
      choices: ['Backend', 'Contracts', 'Frontend']
    })
    const pathLevels = await fs.promises.readdir(path.resolve('.', pathType.toLowerCase()))
    const { level } = await inquirer.prompt({
      name: 'level',
      message: 'Choose a level from the available ones:',
      type: 'list',
      choices: ['All', ...pathLevels.map(l => capitalizeFirstLetter(l.replace('-', ' ')))]
    })
    executeExercise(pathType.toLowerCase(), level === 'All' ? 'all' : level.split(' ')[1])
  }
}

main()
