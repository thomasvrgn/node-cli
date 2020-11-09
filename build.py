from os import environ, listdir, system

def build():
  # Installing globally
  try:
    print('Installing globally CLI...')
    system('npm i -g')
  except:
    return

build()