<?php
/** 
 * Configuración básica de WordPress.
 *
 * Este archivo contiene las siguientes configuraciones: ajustes de MySQL, prefijo de tablas,
 * claves secretas, idioma de WordPress y ABSPATH. Para obtener más información,
 * visita la página del Codex{@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} . Los ajustes de MySQL te los proporcionará tu proveedor de alojamiento web.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** Ajustes de MySQL. Solicita estos datos a tu proveedor de alojamiento web. ** //
/** El nombre de tu base de datos de WordPress */
define('DB_NAME', 'perros28');

/** Tu nombre de usuario de MySQL */
define('DB_USER', 'root');

/** Tu contraseña de MySQL */
define('DB_PASSWORD', '');

/** Host de MySQL (es muy probable que no necesites cambiarlo) */
define('DB_HOST', 'localhost');

/** Codificación de caracteres para la base de datos. */
define('DB_CHARSET', 'utf8');

/** Cotejamiento de la base de datos. No lo modifiques si tienes dudas. */
define('DB_COLLATE', '');

/**#@+
 * Claves únicas de autentificación.
 *
 * Define cada clave secreta con una frase aleatoria distinta.
 * Puedes generarlas usando el {@link https://api.wordpress.org/secret-key/1.1/salt/ servicio de claves secretas de WordPress}
 * Puedes cambiar las claves en cualquier momento para invalidar todas las cookies existentes. Esto forzará a todos los usuarios a volver a hacer login.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         ',~(.DTL@mDP|e[=5JbErTD,q&4]_)C8w9v%69Ox4MmFnIvs(ej6cWA-j8La1#84.');
define('SECURE_AUTH_KEY',  'RG},Cx@pe4It=uFAI-E--n3IB94L}8Ay^N?BD3@mG[(sbA?ctadF-L|jzBu~J(L?');
define('LOGGED_IN_KEY',    '}}AvXW.NnWU{D(Sz#3;[<q(I/FC9pTF{e1aJWH;r;HD8no^C@ThNHvBpZnH#< V~');
define('NONCE_KEY',        'fMvn#v{jCIO+?-+SF-=p91[`(9]P-SCH5hi<YF3*H9B7!9d!Z$wmLNgfCj1+qU>>');
define('AUTH_SALT',        'n^Il4{kN>Cu/rLV4o:Y-Q^*+./:pg|NYgscMvQ8fp>4Mz+!v(=;WKUtZmtd3XM F');
define('SECURE_AUTH_SALT', 'j8ng[u`?g?}7W+ECoS %b[y)dIb)@=I-It`hucAJ}%R:v+i`7R;eI$zDpNCZ1CD|');
define('LOGGED_IN_SALT',   '}4w_*++;67iNNWz1?;7]yY{UN$1w5}RfmFTeS#<IAPPl:>-EL+^w1+wK0F*TweqK');
define('NONCE_SALT',       '4tM6M(HI2T P{kQ_Gp.p`gIm]1)kk8u}uw% uT?DMzXOO-20)eP|#*3m<{f0PE&X');

/**#@-*/

/**
 * Prefijo de la base de datos de WordPress.
 *
 * Cambia el prefijo si deseas instalar multiples blogs en una sola base de datos.
 * Emplea solo números, letras y guión bajo.
 */
$table_prefix  = 'tdhfyhjghjtrfth_';


/**
 * Para desarrolladores: modo debug de WordPress.
 *
 * Cambia esto a true para activar la muestra de avisos durante el desarrollo.
 * Se recomienda encarecidamente a los desarrolladores de temas y plugins que usen WP_DEBUG
 * en sus entornos de desarrollo.
 */
define('WP_DEBUG', false);

/* ¡Eso es todo, deja de editar! Feliz blogging */

/** WordPress absolute path to the Wordpress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

