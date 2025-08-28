# My config
    Angular CLI: 14.2.13
    Node: 16.20.2
    Package Manager: npm 8.19.4
    OS: win32 x64


# Install
npm install -g @angular/cli@14

# Powershell configuration
set-ExecutionPolicy - Scope CurrentUser
-ExecutionPolicy RemoteSigned

# Create Project 
ng new MYAPP

# Execute project 
cd MYAPP 
ng serve --open or ng serve

# Route 
-> I created app-2 with the inclusion of the routing of system 
ng new app-2 --routing

# Creating component
cd 'your app'
ng generate component 'Home'
ng generate component 'about'
