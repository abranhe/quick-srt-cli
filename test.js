'use strict';
const execa = require('execa');
const test = require('ava');

test('There is output', async t => {
	const {stdout} = await execa('node', ['./cli.js', 'd h z a r b i']);
	t.true(stdout.length > 0);
});
