# Installation Guide

1. Install Node JS on your machine. Check it by writing command `npm -version` in command prompt.

2. Since windows box does not support latest version of Protractor so we have to install an older version but before that make sure you have uninstalled existing Protractor(if you ever installed it, otherwise skip) by writing command:

```
npm uninstall -g protractor
```

To install an older version write command:

```
npm install -g protractor@1.8.0
```

On Linux or Mac you can install Protractor by writing command

```
npm install -g protractor
```

3. Check Protractor installation by writting command `protractor --version` in command prompt. It should not show any error.

4. Install mocha globally by writing command `npm install -g mocha`. This is only required if you want to use Mocha as test framework.Otherwise you can skip this step.

5. If you have installed everything as per instructaions then to run the first test by navigating to root directory of project. For e.g. 

```
cd protractor-demo
protractor conf.js
```

`protractor conf.js` will run the tests.

# Unit Testing Framework

The basic installation of Protractor installs Jasmin Framework. In case you need `Mocha` then install it globally as per step-4. To use Mocha, you have to configure it in `cong.js`.

Otherwise Protractor will use Jasmine as default to run tests.
