set PATH=%PATH%;D:\nodejs\
echo %PATH%
node -v
npm -v
echo "Installing cypress..."
set CYPRESS_INSTALL_MIRROR=https://npm.taobao.org/mirrors/cypress
npm install cypress

echo "Installing dependencies..."
npm install

echo "Changing directory..."
cd D:\UnisAutomation || exit /b

echo "Running tests..."
npx cypress run --spec "cypress/e2e/cases/tripControl.cy.js"