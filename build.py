from os import environ, listdir, system

def build():
  # Checking and getting NPM path.
  print('Checking for NPM Paths...')
  npmPath = list(filter(lambda x: x.__contains__('npm'), environ['PATH'].split(';')))
  if len(npmPath) == 0:
    print('No NPM installations found. Aborting...')
    return
  # Installing globally
  try:
    print('Installing globally CLI...')
    system('npm i -g')
  except:
    return

build()