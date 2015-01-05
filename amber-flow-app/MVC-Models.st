Smalltalk createPackage: 'MVC-Models'!
Object subclass: #Model
	instanceVariableNames: ''
	package: 'MVC-Models'!

Model subclass: #ListModel
	instanceVariableNames: 'list'
	package: 'MVC-Models'!

!ListModel methodsFor: 'accessing'!

first

	^ self list first
!

last

	^ self list last
!

list

	^ list
!

list: aCollection

	list := aCollection.
	
	self changed
!

size

	^ self list size
! !

!ListModel methodsFor: 'actions'!

add: anObject

	self list add: anObject.
	
	self changed
!

remove: anObject

	self list remove: anObject.
	
	self changed
!

remove: anObject ifAbsent: aBlock

	self list remove: anObject ifAbsent: aBlock.
	
	self changed
!

removeFirst

	self remove: self first
!

removeLast

	self remove: self last
! !

!ListModel methodsFor: 'testing'!

includes: anObject

	^ self list includes: anObject
!

isEmpty

	^ self list isEmpty
!

notEmpty

	^ self list notEmpty
! !

