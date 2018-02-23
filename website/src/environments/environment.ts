// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyBDWLy2u57YkJJ4z1de8j5S9emky8ODTe0',
        authDomain: 'thewirralwheelers.firebaseapp.com',
        databaseURL: 'https://thewirralwheelers.firebaseio.com',
        projectId: 'thewirralwheelers',
        storageBucket: 'thewirralwheelers.appspot.com',
        messagingSenderId: '268968338479'
    }
};
