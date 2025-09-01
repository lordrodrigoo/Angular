# My config
    Angular CLI: 14.2.13
    Node: 16.20.2
    Package Manager: npm 8.19.4
    OS: win32 x64

### ⚠️ Node.js Compatibility
If you get TypeScript errors related to Node types (e.g., Symbol.dispose) when running the app:
1- Use a compatible Node version:

nvm install 18
nvm use 18

2- Or add this to tsconfig.json to skip library type checks:

"skipLibCheck": true

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

# To create service 
ng g s Produto --flat true --skip-tests true

-> We need a class for products
ng g class Produto --skip-tests true

# CanActivate
ng g s Login --flat true --skip-tests true
ng g class Usuario --skip-tests true

# We create a service for represent the server  (app-3-RX)

npm install angular-in-memory-web-api@0.14.0 --save

ng g s ProdutoServidor --flat --skip-tests true

# Server REST with Express 
npm install -g express-generator

# Create server
express -e ServidorLoja
cd ServidorLoja
npm install mongodb