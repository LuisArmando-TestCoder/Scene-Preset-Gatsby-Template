import os
import fnmatch
import re

def getIndexExportContent(directories, additional):
    importPrefix = ''
    exportSuffix = 'export {\n'

    for directory in directories:
        importPrefix += f'import {additional}{directory} from \'./{directory}\'\n'
        exportSuffix += f'   {directory},\n'

    exportSuffix += '}\n'

    content = f'{importPrefix}\n{exportSuffix}'

    return content

def createIndexExportFile(folderPath, additional = ''):
    for _, directories, _ in os.walk(folderPath):
        if len(directories) > 0:

            file = open(f'{folderPath}/index.ts',"w+")

            file.write(getIndexExportContent(directories, additional))

            file.close()
        break

def main():
    folderNames = [
        'state',
        'utils',
        'types/String',
        'types/Quark',
        'types/Atom',
        'types/Molecule',
        'scenes/String',
        'scenes/Quark',
        'scenes/Atom',
        'scenes/Molecule',
        'objects/String',
        'objects/Quark',
        'objects/Atom',
        'objects/Molecule',
        'components/String',
        'components/Quark',
        'components/Atom',
        'components/Molecule',
    ]

    print('Automatic export defaults: ', folderNames)

    for folderName in folderNames:
        folderPath = f'../src/{folderName}'

        createIndexExportFile(folderPath)

    folderNames = [
        'components',
        'objects',
        'scenes',
        'types'
    ]

    print('Automatic export all: ', folderNames)

    for folderName in folderNames:
        folderPath = f'../src/{folderName}'

        createIndexExportFile(folderPath, '* as ')

main()