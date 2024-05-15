class TripControl {

  visit() {
    cy.visit('https://stage.logisticsteam.com/client-portal/#/client-portal/tms-cp/trip-control');
  }

  getStatusDropdown() {
    return cy.xpath('//*[@id="el-id-6450-45"]');
  }

  getSelectAllStatus() {
    return cy.get('#el-id-6450-0 > div > div：first');
  }

  getSearchButton() {
    return cy.get('div[data-v-59ea1b52]').contains('Search');
  }

  getFirstTrip() {
    return cy.get('.text-14.text-006ED0.underline.cursor-pointer:first');
  }

  getFirstTripValue() {
    return this.getFirstTrip().invoke('text');
  }

  assertNewTabUrlContainsValue() {
    // 先获取动态的值
    this.getFirstTripValue().then((value) => {
      cy.window().then((win) => {
        // 存储原始的 window.open 方法
        const originalWindowOpen = win.open;

        // 重写 window.open 方法
        win.open = (url) => {
          // 在这里，你可以获取到新打开的 tab 的 URL
          // 你可以添加你的断言来检查 URL 是否包含动态的值
          expect(url).to.include(value);
        };

        // 在这里，你可以触发点击操作，例如：
        // cy.get('a[target="_blank"]').click();

        // 在测试结束后，恢复原始的 window.open 方法
        cy.on('window:before:unload', () => {
          win.open = originalWindowOpen;
        });
      });
    });
  }

  openTripDetail() {
    this.visit();
    cy.wait(10000);
    // this.getStatusDropdown().click({ force: true }); 
    //this.getSelectAllStatus().click({ force: true }); 
    this.getSearchButton().click({ force: true })
      .click()
      .then(() => {
        cy.get('.text-14.text-006ED0.underline.cursor-pointer:first')
          .should('be.visible');
      });
    this.getFirstTrip().click({ force: true });
    this.assertNewTabUrlContainsValue();
  }
}
export default TripControl;