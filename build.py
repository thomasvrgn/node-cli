from os import environ, listdir, system

def build():
  # Checking and getting NPM path.
  print('Checking for NPM Paths...')
  npmPath = list(filter(lambda x: x.__contains__('npm'), environ['PATH'].split(';')))
  if len(npmPath) == 0:
    print('No NPM installations found. Aborting...')
    return
  # Listing and filtering commands in NPM path
  files = listdir(npmPath[0])
  commands = list(filter(lambda x: not x.__contains__('.'), files))
  if len(commands) == 0:
    print('No NPM installations found. Aborting...')
    return
  # Choosing installation command
  print('Checking for Yarn installation...')
  shellCommand = 'yarn' if commands.__contains__('yarn') else 'npm'
  # Installing modules
  print('Installing needed modules...')
  system(shellCommand + ' install')
  # Compiling project
  print('Compiling project into javascript...')
  system(shellCommand + ' tsc')
  # Installing globally
  try:
    open('./dist/main.js')
    print('Installing globally CLI...')
    system('npm i -g')
  except:
    print('No compiled output found. Aborting...')
    return

build()