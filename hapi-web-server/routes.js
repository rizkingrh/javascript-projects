const routes = [
    // request routing
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage';
        },
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About page';
        },
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method';
        },
    },

    // path parameter
    {
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {
            const { name = "stranger" } = request.params;
            // Query parameter
            const { lang } = request.query;

            if (lang === "id") {
                return `Hai, ${name}!`
            }
            // End Query parameter
            return `Hello, ${name}!`
        },
    },
    // end of path parameter

    // Response Toolkit
    {
        method: 'GET',
        path: '/userss',
        handler: (request, h) => {
            const response = h.response('success');
            response.type('text/plain');
            response.header('X-Custom', 'some-value');
            return response;
        },
    },
    // End Response Toolkit
    
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan';
        },
    },

    
];

module.exports = routes;