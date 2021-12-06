/**
 STORE
 Stores module.
 */
"use strict";

/**
 * Store module.
 *
 * @class
 * @extends {Module}
 */
function StoreModule() {

    Module.call(this);

    /**
     * Object pointer
     * @type {StoreModule}
     */
    let self = this;

    /**
     * Inits the module.
     */
    this.init = function () {
        app_console.info('Initializing store module');

        // Load DOM objects
        let $contents = $('#contents');
        let $products = $('#products');

        // Init header
        self.initBasicHeader('{0} — Tienda'.format(self._bazar_main_title));
        self._header.registerToolPopupCloseElement($contents);

        self.initBasicFooter();

        // Update contents height to fit window height
        self.extendDivToMaxHeight($products);

    };

}

app_module.registerModule('store', new StoreModule());