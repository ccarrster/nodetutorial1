const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('test', () => {
	console.log('Event Occurred');
});

eventEmitter.emit('test');

eventEmitter.on('test2', (num1, num2) => {
	console.log('Event Occurred ' + (num1 + num2) );
});

eventEmitter.emit('test2', 1, 2);

class HotDog extends EventEmitter{
	constructor(name){
		super();
		this._name = name;
	}

	get name(){
		return this._name;
	}
}

let mustard = new HotDog('Mustard');

mustard.on('name', () => {
	console.log('Hot Dog name is '+ mustard.name);
})

mustard.emit('name');