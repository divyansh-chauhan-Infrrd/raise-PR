import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('commands/new', () => {
  it('runs commands/new cmd', async () => {
    const {stdout} = await runCommand('commands/new')
    expect(stdout).to.contain('hello world')
  })

  it('runs commands/new --name oclif', async () => {
    const {stdout} = await runCommand('commands/new --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
