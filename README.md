# Project URL: https://roadmap.sh/projects/task-tracker

# How to Run in Terminal:

## Step - 1 : Clone the GitHub Repository
`git clone https://github.com/galibhaskar/task-tracker-cli.git`

## Step - 2 : Install all the required node modules
`npm install`

## Step - 3 : Install the Task CLI globally
`npm install -g .`

## Step - 4 : Use the following commands
### Commands:
- ### Adding a new task
    `task-cli add "Buy groceries"`

- ### Updating tasks
    `task-cli update 1 "Buy groceries and cook dinner"`

- ### Deleting tasks
    `task-cli delete 1`

- ### Marking a task as in progress or done
   ` task-cli mark-in-progress 1`
    `task-cli mark-done 1`

- ### Listing all tasks
   ` task-cli list`

- ### Listing tasks by status
   - ` task-cli list done`
   -  `task-cli list todo`
   - ` task-cli list in-progress`
