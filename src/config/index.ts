import dotenvExtended from 'dotenv-extended'
import dotenvParseVariables from 'dotenv-parse-variables'


type LogLevel = 'silent' | 'error' | 'warn' | 'info' | 'http' | 'verbose' | 'debug' | 'silly'

interface Config {
   Logger: boolean,
   Log_Level: string
}

const env = dotenvExtended.load({
    path: process.env.ENV_FILE,
    defaults: '../../.env.defaults',
    schema: '../../.env.example',
    includeProcessEnv: true,
    silent: false,
    errorOnMissing: true,
    errorOnExtra: false
})

  const parsedEnv = dotenvParseVariables(env)

  const config: Config = {
      Logger: parsedEnv.LOGGER as boolean,
      Log_Level: parsedEnv.LOG_LEVEL as LogLevel
  } 

  export default config