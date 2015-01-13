Smalltalk createPackage: 'Flow-Core'!
Object subclass: #Flow
	instanceVariableNames: ''
	package: 'Flow-Core'!

Flow class instanceVariableNames: 'app session'!

!Flow class methodsFor: 'accessing'!

activeController 
	"Returns the controller that is currently active"
	
	^ Router active
!

app 

	^ app
!

app: anApplication 

	app := anApplication
!

scaffold

	^ self scaffolder
!

scaffolder

	^ Scaffolder
!

session

	^ session ifNil:[ self initializeSession ]
!

session: aSession

	session := aSession
! !

!Flow class methodsFor: 'actions'!

install
	"Makes the foundation of a flow app to be ready for action."

	window at: 'flow' put: self.

	self resetOnBeforeUnload.

	"Make the router be sensible to URI changes"
	Router observeHash
!

resetOnBeforeUnload
	"Gets rid of any registered onbeforeunload handlers."
	
	<window.onbeforeunload = null>
!

start
	
	self triggerEvent: #started
! !

!Flow class methodsFor: 'initialization'!

initializeSession
	
	^ session := Session new
! !

Mapless subclass: #Session
	instanceVariableNames: ''
	package: 'Flow-Core'!

!Session methodsFor: 'accessing'!

api

	super api ifNil:[ 
		self api: APIClient new ].
		
	^ super api
! !

!Session methodsFor: 'actions'!

open

	self api connect
! !

Model subclass: #User
	instanceVariableNames: ''
	package: 'Flow-Core'!

