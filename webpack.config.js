const config = {
	mode: 'production',
	entry: {
		main: './src/js/main.js',
        // feedbacks: './src/js/feedbacks.js',
        // slider: './src/js/slider.js',
		// contacts: './src/js/contacts.js',
		// about: './src/js/about.js',
	},
	output: {
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};

module.exports = config;
