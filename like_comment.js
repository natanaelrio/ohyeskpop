nightmare
    .wait('._mck9w')
    .click('._mck9w a') // click post
    .wait('._eszkz');

for (let i = 0; i < posts; i++) {
    nightmare.wait(1000)
        .click('._eszkz') // like
        .insert('._bilrf', comment) // comment
        .type('._bilrf', '\u000d')
        .click('._3a693'); // next
}

nightmare
    .wait(1000)
    .end()
    .then(function () {
        console.log('success');
    })
    .catch(function (err) {
        console.log(err);
    });