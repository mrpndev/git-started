// git
// git is a version control system used to track changes in your files. Used most notably by developers.
// Git commits are checksumed using SHA-1, meaning no corrupt files go unnoticed without user's knowledge.
// Three States of Git
// - modified
// file changed, but it has not yet been commited (ex: normal work, or saving a file)
// - staging
// files that are marked to go into the next commit snapshot (utilizing git add <file_name> or git add . to add every file in the folder)
// - commit state
// data safely stored in the local database (such as vm box, docker, computer, etc.)

// to start version/track control
// git init
// creates new project
// your project should never be inside another project folder in order to avoid inverse tree tracking issues

// stage our files for a commit
// git add <file>

// use git status to check on file staging

// to commit your files, use git commit -m "your message here"

// to see all of your commit history, use git log

// to create new branch, use git branch <new_branch_name>
// OR
// to create new branch and switch to it, use git checkout -b <branch_name>

// to switch between branches, use git checkout <branch_name>

// to delete a branch, use use git branch -D <branch_name>

// to remove an unstaged commit, use git reset <file_name>
// to remove an entire commit, use git reset --hard <commit hash BEFORE the ones you want removed>

