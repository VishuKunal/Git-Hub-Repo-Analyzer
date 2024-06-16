# Git-Hub-Repo-Analyzer
GitHub-Repo-Analyzer
📖 Introduction
Struggling to understand a new codebase? Want to streamline your documentation process? Introducing GitHub Repo Analyzer, your one-stop shop for analyzing and documenting your Git repositories!

This powerful tool empowers you to delve into the inner workings of your code, making it easier than ever to either finding the dependencies used, tracking commit history or generating documentation for your code to make easily readable.

📝 Table of Contents
Overview
Features
Benefits
Targeted Users
Getting Started
Usage
Future Goals
Contributing
Author
License
📝 Overview
GitHub-Repo-Analyzer is a comprehensive tool designed to simplify the process of understanding and documenting your Git repositories. It offers a suite of features that cater to both individual developers and collaborative teams.

✨ Features
Dependency Analysis: Identifies all external libraries and frameworks used in your project. This helps understand project requirements and potential compatibility issues.
Commit History Analysis: Gain a comprehensive view of your repository's historical changes, including author, date, files changed and commit message. This allows you to track code evolution and identify contributions.
DocString Generation: Automatically generate DocStrings within your codebase. DocStrings are comments that explain the functionality of functions, classes, and modules. This improves code readability and maintainability. It automatically creates a pull request to the user's respective project updated with DocStrings.
Documentation Generation (using Sphinx): Leveraging Sphinx, a popular documentation generation tool, to create comprehensive API documentation from extracted DocStrings. This provides a user-friendly way to understand project functionalities.
📈 Benefits
Improved Code Understanding: Sometimes the dependencies used in the project to run are not available and creates a lot of problem. With this, developers can quickly grasp dependencies and focus on main task.
Enhanced Maintainability: DocString generation and automatic documentation creation streamline the maintenance process.
Clearer Contribution Guidelines: DocStrings provide a clear understanding of existing functions, allowing developers to add their own with proper documentation.
Increased Readability: Tool generates a proper html documentation leaveraging Sphinix to increase the readability for general purpose.
🎯 Targeted Users
Individual developers working on personal or small projects.
Developer teams need to confront a project with least comments or doc strings explaining the project.
Open-source project maintainers aiming to improve contributor experience.
📲 Getting Started
Follow these steps to set up the GitHub-Repo-Analyzer on your system:

Clone the repository:

git clone https://github.com/VishuKunal/Git-Hub-Repo-Analyzer.git
Open two terminals, one for frontend and another for backend.

In first terminal, navigate to the frontend folder and install all dependencies. Then start the project.

cd frontend
npm install
npm start
Create file .env in the root folder of the project and populate it as follows:

GITHUB_NEW_TOKEN = <your-github-token-to-fork-repo>
GITHUB_PULL_TOKEN = <your-github-token-to-create-pull-request>
GEMINI_API_KEY = <your-gemini-api-key>
Then replace the written username with your GitHub username in line 623 in backend/repoanalyze/views.py.

In second terminal, navigate to the backend folder, create a virtual environment.

cd backend
python -m venv gitrepoanalyzer
Activate the virtual environmentm install all required dependencies and run the server.

gitrepoanalyzer\Scripts\activate.ps1
pip install -r requirements.txt
python manage.py runserver
Note:

The command given above are for windows.
Don't forget to close the virtual environment before closing the tool as a good practice. The command for the same is:
deactivate
🧑🏽‍💻 Usage
The tool basically contains four section:

Dependency Tracker

image

The use have to enter the Repository link and the branch for which the dependencies are to be fetched. By default, tool finds the dependencies of the main branch.

Version Control

image

The users are required to enter the repo link in the space provided. It fetches all the commit history and version control for the given repository link.

Comments/DocStrings Generator

image

The user is required to enter the Repository link for which the DocStrings need to be generated.
Then the tool lists down all the files in the repository, the user has to select for in which file the docstrings should be generated.
The DocStrings are generated and a pull request is created to the repository which link was provided with a new branch named "GenDocStr".
Documentation Generator

image

The user has to enter the repository link for which the documentation is to be generated.
The tool will generate the documentation for those directories only which contain __pycache__ folder. Others will be excluded.
By default behavior of Sphinix, any function name or class name starting with underscore will not be considered for documentation as it is considered private.
The documentation.zip can be downloaded from the tool. To open the documentation, open "docs/build/html/index".
⚽ Future Goals
Version Control can be displayed using GUI for better understanding.
DocString generation can be extended beyond python files.
Model generated DocStrings can be improved.
👷 Contributing
I welcome contributions from the community. Feel free to submit pull requests or bug reports to improve the GitHub-Repo-Analyzer.
