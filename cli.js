#!/usr/bin/env node
'use strict';
const meow = require('meow');
const quickSort = require('quick-srt');
const feedback = require('@abranhe/feedback');
const sta = require('str-to-arr');

const cli = meow(`
	Usage:
	 $ quick-srt <array>

	Options
		-f, --feedback  Send a feedback
		-h, --help      Show help message and close
		-v, --version   View package Version

	Example
	 $ quick-srt "d h z a r b i"
	 	[ 'a', 'b', 'd', 'h', 'i', 'r', 'z' ]
	 $ quick-srt "3 2 5 25 74"
	 	[ '2', '25', '3', '5', '74' ]
`,{
	flags: {
		help: {
			type: 'boolean',
			alias: 'h'
		},
		version: {
			type: 'boolean',
			alias: 'v'
		},
		feedback: {
			type: 'boolean',
			alias: 'f'
		}
	}
});

if(cli.flags.feedback) {
	feedback.project('quick-srt');
	feedback.description('Please specify if the issue is with the API project or the CLI. \n' +
	                      'You can also open an issue at: ');
	feedback.link(cli.pkg.bugs.url);
	feedback.message(feedback.defaultMessage);
	feedback.web();
}

console.log(cli.input.length > 0 ? quickSort(sta(cli.input[0])) : cli.showHelp())
