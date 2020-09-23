var router = new VueRouter({
    routes: [{
            path: '/top',
            component: {
                template: `<div>トップページだよ</div>`
            }
        },
        {
            path: '/users',
            component: {
                template: `<div>ユーザーページだよ</div>`
            }
        }
    ]
})

var app = new Vue({
    el: '#app',
    router: router,
})