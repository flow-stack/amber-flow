Smalltalk createPackage: 'Flow-Binding'!
TemplateController subclass: #BindingController
	instanceVariableNames: ''
	package: 'Flow-Binding'!
!BindingController commentStamp!
## BindingController is an abstraction
The concrete subclasses of BindingController are users of the two-way data binding mechanism loaded by flow.

Note that BindingController is a subclass of TemplateController so all subclasses of it follow the convention of loading a html template from the server using the keyword of the controller as the name of the template to be found at views/!

!BindingController methodsFor: 'actions'!

asBindArgument
	"Answers the model and this controller as rivets like it for binding."

	^ #{
	'model' -> self getModelAsArgument.
	'controller' -> self
	}
!

bind
	"Tells rivets.js to bind 
	the model of this controller to its view."
	
	RivetsJS rv
		bind: self view 
		to: self asBindArgument
!

configure
	"Sets some configurations for rivets"
	| conf |
	
	conf := self getConfiguration.
	
	RivetsJS rv configure: conf
!

configureAndBind

	(self hasModel not or: [
	self hasView not ]) ifTrue: [ ^ self ].

	self configure.
	
	self bind.
!

getConfiguration

	^ #{ #handler -> self getHandler }
!

getHandler
	"Answers the custom handler of flow controllers for rivets.
	We need it to be call on binding.model otherwhise 
	rivets would send the html element (target of the event)
	screwing the self instance of this controller"

	<return function( target, event, binding ){
		this.call(binding.model);
	}>
!

getModelAsArgument
	"Returns the model in a way that is appropiate for binding (usable by rivets).
	By default BindingController assumes you are using mapless as the controllers model
	so we send their data but subclasses might differ if they please to do so."
	^ model data
!

rebind

	self unbind; configureAndBind
!

silentRefresh

	self unbind.
	
	super silentRefresh
!

unbind
	"Tells rivets.js to unbind the view."
	
	view ifNotNil:[ view unbind ]
! !

!BindingController methodsFor: 'initialization'!

initialize

	super initialize.
	
	self 
		when: #onAfterView do: [ self configureAndBind ];
		when: #onAfterModel do: [ self rebind ];
		when: #onBeforeRemove do: [ self unbind ];
		yourself
! !

!BindingController methodsFor: 'reactions'!

onAfterBound: aRivetsBinding
	"Rivets has created a Binding instance with a view and the model and all its parts"
! !

!BindingController class methodsFor: 'testing'!

isAbstract
	"Answers true if the receiver is abstract."
	
	^ self = BindingController
! !

BindingController subclass: #ItemsController
	instanceVariableNames: 'getItemsBlock itemControllerClass newItemControllerBlock'
	package: 'Flow-Binding'!
!ItemsController commentStamp!
##IteratedController
##Sorry this one is not currently being supported
It requires a rivetjs hack to work and the ListController gives you the feature 
____

Like ListController except it relies on rivets.js to iterate  models' presentation.

It's rivets who triggers the creation, maintenance and destruction of the (sub)controllers of this controller.

[This is how you use it in the template/view](http://rivetsjs.com/docs/reference/#each-[item])!

!ItemsController methodsFor: 'accessing'!

getItems

	^ getItemsBlock numArgs isZero
		ifTrue: [ getItemsBlock value ]
		ifFalse: [ getItemsBlock value: model ]
!

getItemsBlock

	^ getItemsBlock
!

getItemsBlock: aBlock

	getItemsBlock := aBlock
!

itemControllerClass

	^ itemControllerClass
!

itemControllerClass: aBlock

	itemControllerClass := aBlock
!

newItemControllerBlock

	^ newItemControllerBlock
!

newItemControllerBlock: aBlock

	newItemControllerBlock := aBlock
! !

!ItemsController methodsFor: 'actions'!

newItemControllerOn: aView for: aModel

	^ itemControllerClass isNil
		ifFalse:[ itemControllerClass 
					for: aModel 
					on: self 
					appendingTo: aView ] 
		ifTrue:[ self newItemControllerBlock 
						value: aView 
						value: aModel 
						value: self ]
! !

!ItemsController methodsFor: 'reactions'!

onAfterBound: aRivetsBinding
	"Rivets has created a Binding instance with a view and the model and all its parts"

	| boundItemView boundItemModel |
	
	super onAfterBound: aRivetsBinding.

	boundItemModel := self getItems at: aRivetsBinding model index + 1.

	self ifAbsentAt: boundItemModel put: [
		boundItemView := aRivetsBinding view els first.
		self newItemControllerOn: boundItemView for: boundItemModel ].
		
	(self controllerAt: boundItemModel) render
! !

BindingController subclass: #IteratedController
	instanceVariableNames: 'itemControllerClass newItemControllerBlock'
	package: 'Flow-Binding'!
!IteratedController commentStamp!
##IteratedController
##Sorry this one is not currently being supported
It requires a rivetjs hack to work and the ListController gives you the feature 
____

Like ListController except it relies on rivets.js to iterate  models' presentation.

It's rivets who triggers the creation, maintenance and destruction of the (sub)controllers of this controller.

[This is how you use it in the template/view](http://rivetsjs.com/docs/reference/#each-[item])!

!IteratedController methodsFor: 'accessing'!

itemControllerClass

	^ itemControllerClass
!

itemControllerClass: aBlock

	itemControllerClass := aBlock
!

newItemControllerBlock

	^ newItemControllerBlock
!

newItemControllerBlock: aBlock

	newItemControllerBlock := aBlock
!

parentElement: anHtmlElement
	"Sets the parent elment for the list.
	It can be anything but, in the case of lists, the parent element usually is a <ul>
	The thing is to treat it like an <ul> full of <li> children."
	parentElement := view := anHtmlElement
! !

!IteratedController methodsFor: 'actions'!

configureAndBind

	self configure.

	self makeCustomBinder.
	
	self bind
!

getCustomBindFor: theEachBind

	<return function(el){
		this.view.onViewCreated = function(aView, aModel){ self._onViewCreated_for_(aView, aModel) };
		this.view.onViewDestroyed = function(aView, aModel){ self._onViewDestroyed_for_(aView, aModel) };
		theEachBind.call(this,el);		
		}>
!

getCustomRoutineFor: theEachRoutine

	<return function(el, collection){
		var results = theEachRoutine.call(this, el, collection);
		self._onRoutine_value_(el, collection);
		return results;
		}>
!

makeCustomBinder
	"Answers the rivetjs configuration needed for this controller to maintain subcontrollers
	in sync with the lifecicly of the elements maintained by rivets via the each-* directive"
	
	| theEachBind theEachRoutine |
	
	self rivets binders 
		at: 'iterated-*'
		put: (self rivets binders at: 'each-*').
		
	theEachBind := (self rivets binders at: 'each-*') at: #bind.
	theEachRoutine := (self rivets binders at: 'each-*') at: #routine.
	
	(self rivets binders at: 'iterated-*') at: #bind put: (self getCustomBindFor: theEachBind).
	(self rivets binders at: 'iterated-*') at: #routine put: (self getCustomRoutineFor: theEachRoutine)
!

newItemControllerOn: aRivetJSView for: aModel

	^ itemControllerClass isNil
		ifFalse:[ itemControllerClass 
					for: aModel 
					on: self 
					appendingTo: (jQuery value: aRivetJSView els first) ] 
		ifTrue:[ self newItemControllerBlock 
						value: aRivetJSView 
						value: aModel 
						value: self ]
! !

!IteratedController methodsFor: 'reactions'!

onRoutine: anElement value: aValue
	"Rivetjs has executed the routing of the iterated-* binder."

	"no-op"
!

onViewCreated: aRivetJSView for: aModel
	"aRivetJSView was ceated for aModel by rivetsjs iterated-* and 
	we make sure we have a controller for it."

	self ifAbsentAt: aModel id put:[ self newItemControllerOn: aRivetJSView for: aModel].
		
	(self controllerAt: aModel id) render
!

onViewDestroyed: aView for: aModel
	"The view for aModel was revoved by rivetjs, 
	so we make sure we remove the controller as well"
	
	self removeControllerAt: aModel id
! !

BindingController subclass: #ModalController
	instanceVariableNames: ''
	package: 'Flow-Binding'!

!ModalController methodsFor: 'accessing'!

message: aString

	self basicAt: #message put: aString
!

modalOptions

	^ self class defaultModalOptions
!

title: aString

	self basicAt: #title put: aString
! !

!ModalController methodsFor: 'actions'!

close

	self view modal: 'hide'.
	
	self trigger: #modalClosed
!

createModal
	"Creates the bootstrap modal on the view of this controller."

	(jQuery value: view) modal: self modalOptions
!

open

	self view modal: 'show'.
	
	self trigger: #modalOpened
!

toggle

	self view modal: 'toggle'
! !

!ModalController methodsFor: 'initialization'!

initialize

	super initialize.
	
	self when: #onAfterView do: [ self createModal ]
! !

!ModalController class methodsFor: 'accessing'!

defaultModalOptions
	"Answers the default options for the modal controllers.
	For details on options check:
	http://getbootstrap.com/javascript/"

	^ #{
		#backdrop -> true.
		#keyboard -> true.
		#show -> false
	}
! !

!ModalController class methodsFor: 'testing'!

isAbstract
	"Answers true if the receiver is abstract."
	
	^ self = ModalController
! !

ModalController subclass: #AlertController
	instanceVariableNames: ''
	package: 'Flow-Binding'!

!AlertController methodsFor: 'accessing'!

buttonLabel: aString

	self basicAt: #buttonLabel put: aString
!

onConfirmBlock: aBlock

	self when: #confirm do: aBlock
! !

ModalController subclass: #ConfirmController
	instanceVariableNames: ''
	package: 'Flow-Binding'!
!ConfirmController commentStamp!
##ConfirmController
This controller asks the user for confirmation of a given action. It has a reject and accept customizable callback!

!ConfirmController methodsFor: 'accessing'!

accept

	self trigger: #accept
!

acceptBlock: aBlock

	self when: #accept do: aBlock
!

acceptButtonLabel: aString

	self basicAt: #acceptButtonLabel put: aString
!

reject

	self trigger: #reject
!

rejectBlock: aBlock

	self when: #reject do: aBlock
!

rejectButtonLabel: aString

	self basicAt: #rejectButtonLabel put: aString
! !

Object subclass: #RivetsJS
	instanceVariableNames: ''
	package: 'Flow-Binding'!

!RivetsJS class methodsFor: 'accessing'!

afterBoundCallback
	"Returns a callback used when rivets had bound an element"
	
	<return function(el, val){
		this.model.controller._onAfterBound_(this);
		return this;
	}>
!

bindCallbackUsing: originalBind
	"Returns a callback used when rivets had bound an element"
	
	<return function(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10){
		var answer;
		debugger
		answer = originalBind();
		return answer;
	}>
!

binderCallback
	"Returns a callback to bind whoBinds."
	
	<return function(){
		var args = Array.prototype.slice.call(arguments);
		var fn = args.shift();
		var whoBinds = args.shift();

		if (typeof fn === 'function') {
			return function() {
				fn.apply(self, args);
			}
		}
		
		return fn;
	}>
!

rv
	"Answers the rivets accessor.
	http://rivetsjs.com/docs/guide/"

	^ require value: 'rivets'
!

utilFormatters

	^ Dictionary new 
		at: #at put: [ :object :key | object basicAt: key ];
		"at: #onBound put: [ :controller :arg | controller onBound: arg ];"
		at: #reversed put: [ :aCollection | aCollection reversed ];
		at: #sorted put: [ :aCollection | aCollection sorted ];
		at: #size put: [ :anObject | anObject size ];
		at: #rounded put: [ :aNumber | aNumber rounded ];
		at: #capitalized put: [ :aString | aString capitalized ];
		at: #currency put: [ :aNumber :aCurrencySymbol | aCurrencySymbol asString, (aNumber printShowingDecimalPlaces: 2) ];
		at: #decimalPlaces put: [ :aNumber :decimalPlaces | aNumber printShowingDecimalPlaces: decimalPlaces ];
		at: #asLowercase put: [ :aString | aString asString asLowercase ];
		at: #asUppercase put: [ :aString | aString asString asUppercase ];
		at: #bind put: self binderCallback;
		yourself
! !

!RivetsJS class methodsFor: 'actions'!

addFormatter: aBlock at: aName
	"Tells rivets.js to add aBlock callback as a formatter under aName."
	
	self rv formatters at: aName put: aBlock
!

installBinders
	"Installs custom binders."
	
	| originalBind |
	
	originalBind := self rv binders at: #bind.
	
	self rv binders 
		at: #bind put: (self bindCallbackUsing: originalBind);
		"at: #bind
		put: #{
				#bind -> (self bindCallbackUsing: originalBind).
				#priority -> 4000
			};"
		at: 'after-bound' 
		put: #{
				#bind -> self afterBoundCallback.
				#priority -> 4000
			};
		yourself. 

	"original := (self rv binders at: 'each-*') at: #routine.
	(self rv binders at: 'each-*')
		at: #routine 
		put: [ :el :val | | result |
			console log: 'each-* routine: '.
			console log: el.
			console log: val.
			result := original value: el value: val.
			console log: result.
			result ]"
!

installUtils

	self utilFormatters keysAndValuesDo: [ :key :value |
		self addFormatter: value at: key ]
! !

!RivetsJS class methodsFor: 'initialization'!

initialize

	self installUtils.
	self installBinders.
! !

