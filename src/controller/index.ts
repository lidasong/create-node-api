async function getList(ctx) {
    ctx.body = [{
        name: 1,
        done: false
    }, {
        name: 2,
        done: true
    }, {
        name: 3,
        done: false
    }]
}

export { getList }