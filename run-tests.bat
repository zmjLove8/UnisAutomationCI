set PATH=%PATH%;D:\nodejs\
echo %PATH%
node -v
echo %errorlevel%
npm -v
echo %errorlevel%
echo "Installing cypress..."
set CYPRESS_INSTALL_MIRROR=https://npm.taobao.org/mirrors/cypress
npm install cypress
echo %errorlevel%
echo "Installing dependencies..."
npm install
echo %errorlevel%
echo "Changing directory..."
cd D:\UnisAutomation || exit /b
echo %errorlevel%
echo "Running tests..."
npx cypress run --spec "cypress/e2e/cases/tripControl.cy.js"
echo %errorlevel%