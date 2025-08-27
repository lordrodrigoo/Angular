# ANGULAR 

# Install
npm install -g @angular/cli

# Powershell configuration
set-ExecutionPolicy - Scope CurrentUser
-ExecutionPolicy RemoteSigned

# Test enviroment 
ng version 

# Create Project 
ng new MYAPP

# Execute project 
cd MYAPP 
ng serve --open 

# Route 
-> I created app-2 with the inclusion of the routing of system 
ng new app-2 --routing

# Creating component
cd 'your app'
ng generate component 'Home'
ng generate component 'about'
