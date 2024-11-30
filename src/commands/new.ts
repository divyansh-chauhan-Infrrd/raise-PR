import {Args, Command, Flags} from '@oclif/core'
import { CommandError } from '@oclif/core/interfaces';
import {simpleGit} from 'simple-git';
const git = simpleGit();

export default class New extends Command {
  static override args = {
    branch: Args.string({description: 'This is the branch name', required: false})
  }

  static override description = 'Raise a PR'

  static override examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static override flags = {
    message: Flags.string({char: 'm', description: 'This is the commit message', required: true})
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(New)

    const branchName = args.branch
    const commitMessage = flags.message;

    if(args.branch === undefined){
      const currentBranch = (await git.status()).current?.toString();
      console.log(`You are working on ${currentBranch}`);
      await git.add(`.`);
      console.log(`Saving your changes`);
      await git.commit(commitMessage);
      console.log(`Committing your changes with the commit Message ${commitMessage}`);
      await git.push(`origin`,currentBranch);
      console.log(`Pushing your changes`);
      
    }
    else{
      await git.checkoutLocalBranch(branchName?? `Default`);
      console.log(`Creating a branch called ${branchName}`);
      await git.add(`.`);
      console.log(`Saving your changes on ${branchName}`);
      await git.commit(commitMessage);
      console.log(`Committing your changes with the commit Message ${commitMessage}`);
      await git.push(`origin`,branchName);
      console.log(`Pushing your changes`);
    }
    const pRNum = getLastPR();
    console.log(`https://github.com/infer-ai/test-tools-CIDC/pull/${pRNum}`);
    console.log(`The branch name is ${branchName} and the commit Message is ${commitMessage}`)
  }

  public async catch(err: CommandError): Promise<any> 
  {

    if(err.message.includes(`Missing required flag message`))
    {
      this.log(`The commit Message is required`)
      process.exit(1)
    }
    else
    {
      super.catch(err)
    }
  }
}

async function getLastPR() {
  try {
    // Fetch the Git log, limiting to the most recent 10 commits
    const log = await git.log({ n: 10 });

    // Iterate over the commits to find the first one with a PR number (e.g., #123)
    for (let commit of log.all) {
      const prNumber = commit.message.match(/#(\d+)/);  // Regex to match #PR_NUMBER
      if (prNumber) {
        console.log(`The last PR number is: #${prNumber[1]}`);
        return `#${prNumber[1]}`;
      }
    }

    console.log('No PR found in the recent commits.');
  } catch (err) {
    console.error('Error retrieving Git log:', err);
  }
}
