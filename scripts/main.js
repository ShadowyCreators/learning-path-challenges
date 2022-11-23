import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import chalk from 'chalk'
import inquirer from 'inquirer'
import logo from 'asciiart-logo'

const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const executeExercise = (pathType, level) => {
  const tsconfigPath = path.resolve(path.dirname('.'), 'tsconfig.json')
  const exerciseFile = path.resolve(path.dirname('.'), pathType.toLowerCase(), `level-${level}/exercise.spec.ts`)

  try {
    const exists = fs.existsSync(exerciseFile, 'utf8')
    if (!exists) throw new Error()
    try {
      execSync(`npx ts-mocha -p ${tsconfigPath} ${exerciseFile}`, {
        stdio: 'inherit'
      })
      console.log(chalk.green('Exercise completed!'))
    } catch (e) {
      console.log(chalk.red('Whoops! Exercise failed.'))
    }
  } catch (error) {
    console.log(chalk.red(`Exercise ${pathType.toLowerCase()} for level ${level} not found.`))
    process.exit(1)
  }
}

const main = async () => {
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
    choices: pathLevels.map(l => capitalizeFirstLetter(l.replace('-', ' ')))
  })
  executeExercise(pathType.toLowerCase(), level.split(' ')[1])
}

main()
