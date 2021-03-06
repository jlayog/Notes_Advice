# Continuous Integration
Software development practice where engineers/developers is continuously integrating small code changes back into the code 
base.
Each change made there is a suite of tests that run automatically that checks code for any bugs or errors.


Example:
Github

Step 1: Make a change (creating a new branch, push it, submit a pull request)

Step 2: tests run automatically

Pass or Fail
Pass = changes go through
Fail = Fix Code

CI ensures that everyone's changes on the development team integrate, catches bugs, and reduces merge conflicts.

A team will practice CI in conjunction with automated testing using a dedicated server or CI service.
Whenever a developer adds new work to branch, the server will automatically build and test the code to determine whether it 
works and can be integrated with the code on the main development branch.

The CI server will produce output containing the results of the build and an indictation of whether or not the branch passes 
all the requirements for integration into the main development branch.

By exposing build and test information for every commit on every branch, CI progresses towards continuous delivery, or CD, as
well as a related process called 'Continuous Deployment'.

# Difference between Continuous Delivery and Continuous Deployment

- Continuous Delivery - the pracitce of developing software in such a way that you could release it at any time. 
  When coupled with CI, continuous delivery lets you develop features with modular code in more manageable increments.

- Coninuous Deployment - An extension of Continuous Delivery. It's a process that allows you to actually deploy newly 
  developed features into production immediately and experience little downtime.

Github Example:
Developers make changes locally, and push those changes to GitHub when they want to share them with others. With Continuous 
Integration, all these changes need to get to the CI server, so it can determine whether or not they will integrate with the 
current main development branch.

GitHub uses webhooks to send messsages to external systems about activity in your projects. For each event/activity type, you
can specify who receives notification about any changes or any time someone pushes code to a branch or opens a pull request 
on Github. 
By using a CI server to subscribe to the Github project, the CI server will parse the message from Github, grab the current
copy of the project, build the branch, and run the tests.
When the CI server finishes its processes for the current commit, it sends a message to GitHub status API, containing
status information about the commit.

Github then uses that message to display info about the commit and can even link back to more detailed info on the CI server.
This will let you know which changes can be integrated into the main branch, and which ones need to be fixed. [Pass or Fail].

Continuous deployment works in a similar way, by configuring your CI server to deploy branches as part of its processes.
In a simple setup, anytime the master branch receives a new commit, the CI provider grabs a current copy of the project, 
and deploys the master branch to production.


































































