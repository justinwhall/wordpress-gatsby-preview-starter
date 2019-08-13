<?php
/**
 * Headers Functions
 *
 * @package wp-headless
 */

/**
 * Add Apollo headers
 *
 * @param array $headers existing headers.
 *
 * @return array
 */
function graphiql_playground_headers( $headers ) {
	$headers['Access-Control-Allow-Origin']      = 'http://localhost:8000';
	$headers['Access-Control-Allow-Credentials'] = 'true';
	$access_control                              = $headers['Access-Control-Allow-Headers'];

	$headers['Access-Control-Allow-Headers'] = implode(
		', ',
		array_merge(
			[
				'X-Insights-Include-Tracing',
				'X-Apollo-Tracing',
				'X-WP-Nonce',
				'Credentials',
			],
			explode(
				',',
				$access_control
			)
		)
	);

	return $headers;
}
add_filter( 'graphql_response_headers_to_send', 'graphiql_playground_headers' );

/**
 * Allow WordPress Nonce as header
 *
 * @param array $headers all allowed headers.
 *
 * @return array
 */
function graphql_filter_allowed_headers( $headers ) {
	return array_merge( $headers, [ 'x-wp-nonce' ] );
}
add_filter( 'graphql_access_control_allow_headers', 'graphql_filter_allowed_headers' );
