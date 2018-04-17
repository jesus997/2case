var host = window.location.href;

fallback.load({
    global_css: [host+"assets/css/style.css"],
    global_js: [host+"assets/js/app.js"],

    bootstrap_css: [
        host+"node_modules/bootstrap/dist/css/bootstrap.min.css",
        //"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    ],

    bootstrap_js: [
        host+"node_modules/bootstrap/dist/js/bootstrap.min.js",
        //"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
    ],

    jQuery: [
        host+"node_modules/jquery/dist/jquery.slim.min.js",
        //'//code.jquery.com/jquery-3.2.1.slim.min.js'
    ],

    vue: [
        host+"node_modules/vue/dist/vue.min.js",
        //'//cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js'
    ]
}, {
    shim: {
        'bootstrap_js': ['jQuery'],
        'global_js': ['Vue']
    },

    callback: function(success, failed) {
    
    }
});

fallback.ready(function() {
    console.log("All loaded!");
});