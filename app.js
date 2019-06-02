const xpresser = require("xpresser");

xpresser({
    name: "Xjs App",
    project: {
        theme: "bulma"
    },
    paths: {
        // The only Required config.
        base: __dirname,

        /**
         * In Xpresser we have special path strings
         * and base:// simply means xpresser should
         * use base path.
         *
         * See file: xpresser/src/config.ts
         * For all default Config options.
         */
        backend: 'base://',

        /**
         * By default if not set xjs will use base://backend/routes.js
         * Since this is not a framework app..
         */
        routesFile: 'base://routes.js'
    },

    /**
     * By default xjs sets this for you.
     */
    server: {
        domain: 'localhost',
        port: 3000,
        includePortInUrl: true,
    },
});