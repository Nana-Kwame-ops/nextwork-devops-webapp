# Java Web App Deployment with AWS CI/CD

Welcome to this project combining Java web app development and AWS CI/CD tools!

<br>

## Table of Contents
- [Introduction](#introduction)
- [Technologies](#technologies)
- [Setup](#setup)
- [Contact](#contact)
- [Conclusion](#conclusion)

<br>

## Introduction
This project is used for an introduction to creating and deploying a Java-based web app using AWS, especially their CI/CD tools.

The deployment pipeline I'm building around the Java web app in this repository is invisible to the end-user, but makes a big impact by automating the software release processes.

<br>

## Technologies
Here’s what I’m using for this project:

- **Amazon EC2**: I'm developing my web app on Amazon EC2 virtual servers, so that software development and deployment happens entirely on the cloud.
- **VSCode**: For my IDE, I chose Visual Studio Code. It connects directly to my development EC2 instance, making it easy to edit code and manage files in the cloud.
- **GitHub**: All my web app code is stored and versioned in this GitHub repository.
- **AWS CodeArtifact**: : I configured CodeArtifact to store and manage my project’s artifacts and dependencies, ensuring high availability and accelerating the build process.
- **AWS CodeBuild**: CodeBuild now manages my build process by automatically compiling source code, running tests, and producing deployment-ready packages.
- **AWS CodeDeploy**: CodeDeploy automates the deployment process across my EC2 instances, ensuring smooth and consistent software delivery.
- **AWS CloudFormation**: : I used CloudFormation to define and provision my infrastructure as code, simplifying resource management and enabling easy replication of environments.
- **[COMING SOON] AWS CodePipeline**: Once it's rolled out, CodePipeline will automate the entire process from GitHub to CodeDeploy, integrating build, test, and deployment steps into one efficient workflow.


<br>

## Setup
To get this project up and running on your local machine, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/Nana-Kwame-ops/nextwork-devops-webapp.git
    ```
2. Navigate to the project directory:
    ```bash
    cd nextwork-devops-webapp
    ```
3. Install dependencies:
    ```bash
    mvn install
    ```

<br>

## Contact
If you have any questions or comments about the NextWork Web Project, please contact:
Nana Kwame Aboagye - [Nka09@outlook.com](mailto:Nka09@outlook.com)

<br>

## Conclusion
Thank you for exploring this project! I'll continue to build this pipeline and apply my learnings to future projects.

A big shoutout to **[NextWork](https://learn.nextwork.org/app)** for their project guide and support. [You can get started with this DevOps series project too by clicking here.](https://learn.nextwork.org/projects/aws-devops-vscode?track=high)

