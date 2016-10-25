var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
	initializing: function () {
		this.log("   ____        __      _      ______    ______       ____        __      _   ______    ");
		this.log("  / __ \\      /  \\    / )    (_   _ \\  (   __ \\     (    )      /  \\    / ) (_  __ \\   ");
		this.log(" / /  \\ \\    / /\\ \\  / /       ) (_) )  ) (__) )    / /\\ \\     / /\\ \\  / /    ) ) \\ \\  ");
		this.log("( ()  () )   ) ) ) ) ) )       \\   _/  (    __/    ( (__) )    ) ) ) ) ) )   ( (   ) ) ");
		this.log("( ()  () )  ( ( ( ( ( (        /  _ \\   ) \\ \\  _    )    (    ( ( ( ( ( (     ) )  ) ) ");
		this.log(" \\ \\__/ /   / /  \\ \\/ /       _) (_) ) ( ( \\ \\_))  /  /\\  \\   / /  \\ \\/ /    / /__/ /  ");
		this.log("  \\____/   (_/    \\__/       (______/   )_) \\__/  /__(  )__\\ (_/    \\__/    (______/   ");
		this.log("                                                                                       ");
		this.log("<!!------------    Welcome To the On-Brand Boilerplate Generator!   ----------------!!>");
		this.log('');
	},
	prompting: function() {
		return this.prompt([{
			type	: 'input',
			name	: 'name',
			message	: 'What is the exact name of this folder? (dashes need to be re-added)',
			default	: this.appname //cwd
		}])
		.then(function(answers){
			this.config.set({ 
				name: answers.name
			});
		}.bind(this));

	},

	writing: function() {

		// Ye olde Javaßcript
		this.fs.copyTpl(
			this.templatePath('_inject.js'),
			this.destinationPath('./onbrand.js'),
			{ 
				name: this.config.get('name')
			}
		);

		// Includes
		this.fs.copy(
			this.templatePath('./includes/_header.html'),
			this.destinationPath('./includes/header.html')
		);
		this.fs.copy(
			this.templatePath('./includes/_footer.html'),
			this.destinationPath('./includes/footer.html')
		);

		// CSS
		this.fs.copy(
			this.templatePath('_on-brand.css'),
			this.destinationPath('./onbrand.css')
		);
		this.fs.copy(
			this.templatePath('_client.css'),
			this.destinationPath('./client/client.css')
		);

	// end writing
	},
	end: function() {

		this.log('');
		this.log('Ready to go, enjoy the Bacon!');
		this.log("          __      _.._      ");
		this.log("       .-'__`-._.'.--.'.__.,");
		this.log("      /--'  '-._.'    '-._./");
		this.log("     /__.--._.--._.'``-.__/ ");
		this.log("     '._.-'-._.-._.-''-..'  ");
		this.log('');

	}




});




























