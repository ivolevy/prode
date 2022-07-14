const express = require('express')

app.listen(3000, () => { console.log('Server working on http://localhost:3000') })
app.use((req, res, next) => {
    res.status(404).send('Not Found')
})
