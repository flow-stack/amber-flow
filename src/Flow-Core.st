Smalltalk createPackage: 'Flow-Core'!
Object subclass: #Router
	instanceVariableNames: ''
	package: 'Flow-Core'!
!Router commentStamp!
This router observes changes in the URI and reacts accordingly.

The strategy is to ignore what should be rote where in advance by collaborating intensively with controllers that understands #isValidFor: 
That way this router will flexibly route thigs with a pontentially complex URI!

Router class instanceVariableNames: 'active'!

!Router class methodsFor: 'accessing'!

active

	^ active
!

parameterAt: aKey
	"Answers the value found in the parameter aKey found in the current URL.
	Returns nil if there is no parameter at aKey."
	
	^  self parameterAt: aKey in: window location href
!

parameterAt: aKey in: anURL
	"Answers the value found in the parameter aKey found in anURL.
	Returns nil if there is no parameter at aKey."

	<var re = new RegExp('.*[?&]' + aKey + '=([^&]+)(&|$)');
    var match = anURL.match(re);
    return(match ? decodeURIComponent(match[1]) : nil);>
!

route
	"Answers the current route."
	
	^ self uri replace: '^#/' with: ''
!

uri

	^ window location hash
! !

!Router class methodsFor: 'actions'!

goBack
	"Makes the browser go back one page in its navigation history.
	Same effect as user pressing back button"

	window history go: -1
!

observeHash

	window onhashchange:[ self onHashChanged ]
!

refresh
	
	self trigger: #beforeRouting.
	
	active ifNotNil:[ active remove ].
	active := RouteableController routeFor: self route.

	active refresh.
	
	self trigger: #afterRouting.
! !

!Router class methodsFor: 'reactions'!

onHashChanged
	
	active ifNotNil:[ active destroy ].	
	self refresh
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

