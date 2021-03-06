/**
 CONFIG
 Software general settings.
 */

/**
 * ----------------------------------------------------------------------------
 * Init settings, saved on cookies
 * ----------------------------------------------------------------------------
 */

/**
 * Application language
 * @type {string}
 * @global
 */
let cfg_lang = 'en';

/**
 * Popup themes (bootstrap, dark, light, material, modern, supervan) {@link app_session}
 * @type {string}
 * @global
 */
let cfg_popup_theme = 'material';

/**
 * App theme
 * @type {string}
 * @global
 */
let cfg_app_theme = 'default';

/**
 * Show total messages on console
 * @type {boolean}
 * @const
 */
const show_console_total_messages = true;

/**
 * Enable console logging
 * @type {boolean}
 * @const
 */
const cfg_verbose = true;


/**
 * ----------------------------------------------------------------------------
 * Server settings
 * ----------------------------------------------------------------------------
 */

/**
 * Enables CORS (Cross-Domain)
 * @type {boolean}
 * @const
 */
const cfg_ajax_cors = true;

/**
 * Ajax timeout
 * @type {number}
 * @const
 */
const cfg_href_ajax_timeout = 10000;

/**
 * Milliseconds that the application waits when a library fails to download
 * @type {number}
 * @const
 */
const cfg_module_async_wait = 250;


/**
 * ----------------------------------------------------------------------------
 * Cookie settings
 * ----------------------------------------------------------------------------
 */

/**
 * Days before cookie expire
 * @type {number}
 * @const
 */
const cfg_cookie_expire_days = 14;

/**
 * Cookies ID {@link app_session}
 * @type {string}
 * @const
 */
const cfg_cookie_session_id = 'b5445bSr1';

/**
 * Only local cookies
 * @type {boolean}
 * @const
 */
const cfg_cookie_local = false;


/**
 * ----------------------------------------------------------------------------
 * UI settings
 * ----------------------------------------------------------------------------
 */

/**
 * Total messages on console after wipe
 * @type {int}
 * @const
 */
const cfg_total_console_messages_until_wipe = 1000;

/**
 * Maximum loading layer time (seconds)
 * @type {number}
 * @const
 */
const cfg_max_time_loading_layer = 60 * 10;

/**
 * Time before loading layer appears
 * @type {number}
 * @const
 */
const cfg_init_loading_layer_after = 150;


/**
 * ----------------------------------------------------------------------------
 * Notification settings
 * ----------------------------------------------------------------------------
 */

/**
 * Notification core (amaranjs, jquery-toast-plugin, toastr)
 * @type {string}
 * @const
 */
const cfg_notification_core = 'amaranjs';

/**
 * Notification enabled.
 * @type {boolean}
 * @const
 */
const cfg_notification_enabled = true;

/**
 * Maximum notifications on screen (jquery.toast, toastr)
 * @type {number}
 * @const
 */
const cfg_max_notification_stack = 3;

/**
 * Notification time life in milliseconds
 * @type {number}
 * @const
 */
const cfg_notification_timeout = 7500;


/**
 * ----------------------------------------------------------------------------
 * Date settings
 * ----------------------------------------------------------------------------
 */

/**
 * Public date format
 * @type {string}
 * @const
 */
const cfg_date_format_public_d = Date.getLocaleFormat();

/**
 * Public hour format
 * @type {string}
 * @const
 */
const cfg_date_format_public_h = 'HH:mm:ss';