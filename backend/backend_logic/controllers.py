import json
from django.http import JsonResponse
import os
import subprocess

# Cloning the Repository into the local system
def repo_cloning(git_repo_link: str) -> str:
    repo_file_path = os.path.basename(git_repo_link)

    # Checking if the repo already exists at the desired place
    if os.path.exists(repo_file_path):
        return os.path.abspath(repo_file_path)
    subprocess.check_call(f"git clone {git_repo_link} {repo_file_path}")
    return os.path.abspath(repo_file_path)

# Reading the requirements file
def read_dependencies(repo_path: str) -> str:
    dependencies_file = os.path.join(repo_path, "requirements.txt")
    depend_command = f"pipreqs {repo_path} --force --savepath {dependencies_file}"
    output = subprocess.check_output(depend_command, shell=True, stderr=subprocess.STDOUT)
    
    # Reading requierements.txt file
    with open(dependencies_file, "r") as file:
        dependencies = file.read()
    return dependencies

# Getting the dependencies used in a GitHub repo
def get_dependencies(request):
    req=json.loads(request.body)
    git_repo_link = req["input"]

    # print(f"Received input: {git_repo_link}")  # Debugging print statement
    if git_repo_link is not None:
        print("repo link: ", git_repo_link)
        repo_path = repo_cloning(git_repo_link)
        print(repo_path)
        output_dependencies = read_dependencies(repo_path)
        print(output_dependencies)
        return JsonResponse({'output': output_dependencies})
    else:
        return JsonResponse({'error': 'No input provided'})