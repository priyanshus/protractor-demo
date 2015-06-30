# Installation Guide

1. Install Node JS on your machine. Check it by writing command `npm -version` in command prompt.

<Important>Before step-2 read next important section.</Important>

2. Install Protractor glabally by writing command `npm install -g protractor@1.8.0`. 

<Important>If you are on windows box then isntall older version of Protractor as latest version asks for Python.
In case of Linux or Mac you can install latest version by writing command `npm install -g protractor`.If you already have 
protractor on your windows box then uninstall it by writing `npm uninstall -g protractor` and reinstall as per my suggestion in 
step-2.</Important>

3. Check Protractor installatino by writting command `protractor --version` in command prompt.

4. Install mocha globally by writing command `npm install -g mocha`.

5. If you have already installed everything as per my suggestion then to run the first test navigate to root directory of this folder.
For e.g. 

cd protractor-demo
protractor conf.js

`protractor conf.js` will run the tests.

# Unit Testing Framework

The basic installation of Protractor installs Jasmin Framework. In case you need `Mocha` then install in globally as per setp-4. To use 
Mocha, you have to configure it in `cong.js`.

Otherwise Protractor will use Jasmine as default to run tests.


