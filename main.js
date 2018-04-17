
fallback.load({
    global_css: ['assets/css/style.css'],

    bootstrap_css: [
        "/node_modules/bootstrap/dist/css/bootstrap.min.css",
        "//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    ],

    bootstrap_js: [
        "/node_modules/bootstrap/dist/js/bootstrap.min.js",
        "//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
    ],

    jQuery: [
        'node_modules/jquery/dist/jquery.slim.min.js',
        '//code.jquery.com/jquery-3.2.1.slim.min.js'
    ],
}, {
    shim: {
        'bootstrap_js': ['jQuery']
    },

    /*callback: function(success, failed) {
        console.log(success, failed);
    }*/
});

fallback.ready(function() {
    console.log("All loaded!");
});