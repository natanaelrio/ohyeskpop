nightmare
    .goto('http://instagram.com')
    .wait('._b93kq')
    .click('._b93kq') // log in option
    .wait('input[name=username]')
    .insert('input[name=username]', username)
    .insert('input[name=password]', password)
    .click('button');