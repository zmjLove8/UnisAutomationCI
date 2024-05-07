describe('Login Test', () => {
    it('should login successfully', () => {
        cy.visit('https://example.com/login') // 替换为你的登录页面URL

        cy.get('input[name="username"]').type('your_username') // 替换为你的用户名
        cy.get('input[name="password"]').type('your_password') // 替换为你的密码

        cy.get('button[type="submit"]').click()

        cy.url().should('include', '/dashboard') // 替换为登录成功后的页面URL
        cy.contains('Welcome, your_username') // 替换为登录成功后的欢迎消息
    })
})