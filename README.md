# Simple Angular Azure B2C login

This project is test sample that shows how to call an API with an user that authenticates through Azure AD B2C.

## Setting up
First, get the source code using git
```Bash
git clone https://github.com/Gimly/simpleAngularAzureB2C.git
```

Then, go to the folder where the code was downloaded to and run npm install
```Bash
cd simpleAngularAzureB2C
npm install
```

Open the source code (for example using Visual Studio Code) and modify the environments/environment.ts file to match your own Azure B2C subscription.

```TypeScript
export const environment = {
  production: false,
  tenant: 'fabrikamb2c.onmicrosoft.com', // The name of your Azure AD B2C Tenant
  clientID: 'e760cab2-b9a1-4c0d-86fb-ff7084abd902', // The application ID
  signUpSignInPolicy: 'b2c_1_susi', // The name of the Sign-up or sign-in policy
  b2cScopes: ['https://fabrikamb2c.onmicrosoft.com/demoapi/demo.read'], // A scope that you will setup in the Application 
  webApi: 'https://fabrikamb2chello.azurewebsites.net/hello' // URL of a web api
};
```
Don't forget to add the URL and port on which you'll be running the sample in the application properties as a Reply URL, otherwise it won't work.

You can also just run the sample with the fabrikamb2c tenant, but make sure to run the app with the port 6420, as it's the reply URL configured for that clientID.

## Running the sample
Before you begin, make sure you have Node.js installed and updated. You'll also need Angular CLI if you want to run the sample.

Once you're ready, you can run the sample using Angular CLI with

```Bash
ng serve --port 6420
```
