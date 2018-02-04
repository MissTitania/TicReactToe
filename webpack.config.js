const path = require('path')

module.exports =
{
	entry: './javascript/main.jsx',
	output:
	{
		path: path.resolve('built'),
		filename: 'bundle.js'
	},
	module:
	{
		loaders:
		[
			{
				test: [/\.jsx?$/, /\.js?$/],
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query:
				{
					presets: ['env', 'react']
				}
			}
		]
	}
}
