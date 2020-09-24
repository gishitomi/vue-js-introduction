// JSONを返す関数
// この関数を用いて擬似的にWeb API経由で情報を取得したようにする

var getUsers = function(callback) {
    setTimeout(function() {
        callback(null, [{
                id: 1,
                name: 'Shota Gishitomi'
            },
            {
                id: 2,
                name: 'Yohei Noda'
            }
        ])
    }, 1000)
}

// UserListを監修
var UserList = {
    template: '#user-list',
    data: function() {
        return {
            loading: false,
            error: null,
            users: function() {
                return {}
                // 初期値の空配列
            },
        }
    },
    //初期化時にデータを取得する
    created: function() {
        this.fetchData()
    },

    // $routeの変更をwatchすることでルーティングが変更された時に再度データを取得
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData: function() {
            this.loading = true
                // 取得したデータの結果をusersに格納する
                // Function.prototype.bindはthisのスコープを渡すために利用
            getUsers((function(err, users) {
                this.loading = false
                if (err) {
                    this.error = err.toString()
                } else {
                    this.users = users
                }
            }).bind(this))
        }
    }
}

var router = new VueRouter({
    routes: [{
            path: '/top',
            component: {
                template: '<div>トップページやで</div>'
            }
        },
        {
            path: '/users',
            component: UserList
        }
    ]
})

var app = new Vue({
    router: router
}).$mount('#app')