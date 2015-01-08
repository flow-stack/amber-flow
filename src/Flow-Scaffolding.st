Smalltalk createPackage: 'Flow-Scaffolding'!
Object subclass: #AbsrtactScaffolder
	instanceVariableNames: ''
	package: 'Flow-Scaffolding'!

AbsrtactScaffolder class instanceVariableNames: 'api'!

!AbsrtactScaffolder class methodsFor: 'accessing'!

api

	^ api ifNil:[ api := RESTfulAPI new ]
!

url

	^ window location asString,Mapless basePath,'/scaffold',self command,'/'
! !

!AbsrtactScaffolder class methodsFor: 'actions'!

scaffold: anObject
	"Scaffold what's relevnt to this scaffolder"
	
	^ self subclassResponsibility
! !

AbsrtactScaffolder subclass: #CRUDScaffolder
	instanceVariableNames: ''
	package: 'Flow-Scaffolding'!

!CRUDScaffolder class methodsFor: 'accessing'!

command

	^ '/crud'
! !

!CRUDScaffolder class methodsFor: 'actions'!

scaffold: aString 

	Transcript cr; show: 'CRUD scaffolding ', aString,'...'.

	self api
		post: self url  
		data: aString
		do: [ :res | Transcript cr; show: ' ...done']
		onError: [ :res | self error: res responseText ]
! !

AbsrtactScaffolder subclass: #MaplessScaffolder
	instanceVariableNames: ''
	package: 'Flow-Scaffolding'!

!MaplessScaffolder class methodsFor: 'accessing'!

command

	^ '/mapless'
!

parentClass

	^ Mapless
! !

!MaplessScaffolder class methodsFor: 'actions'!

backendScaffold: aString do: aBlock onError: anErrorBlock

	self api
		post: self url  
		data: aString
		do: aBlock
		onError: anErrorBlock
!

frontendScaffold: aString
	
	self parentClass 
		subclass: aString 
		instanceVariableNames: '' 
		package: Flow scaffolder packageName
!

scaffold: aString
	"Scaffold what's relevnt to this scaffolder"
	
	self backendScaffold: aString 
		do:[ :res | self frontendScaffold: aString ]
		onError:[ :res | 
			self error: res responseText ]
! !

MaplessScaffolder subclass: #ModelScaffolder
	instanceVariableNames: ''
	package: 'Flow-Scaffolding'!

!ModelScaffolder class methodsFor: 'accessing'!

command

	^ '/model'
!

parentClass

	^ MaplessModel
! !

Object subclass: #Scaffolder
	instanceVariableNames: ''
	package: 'Flow-Scaffolding'!

Scaffolder class instanceVariableNames: 'packageName'!

!Scaffolder class methodsFor: 'accessing'!

crudScaffolder

	^ CRUDScaffolder
!

maplessScaffolder

	^ MaplessScaffolder
!

modelScaffolder

	^ ModelScaffolder
!

packageName

	^ packageName
!

packageName: aString

	packageName := aString
! !

!Scaffolder class methodsFor: 'actions'!

crud: aMaplessClassOrName

	^ self crudModel: aMaplessClassOrName
!

crudMapless: aMaplessClassOrName

	self mapless: aMaplessClassOrName.

	^ self crudScaffolder scaffold: aMaplessClassOrName
!

crudModel: aMaplessClassOrName

	self model: aMaplessClassOrName.

	^ self crudScaffolder scaffold: aMaplessClassOrName
!

mapless: aMaplessName

	^ self maplessScaffolder scaffold: aMaplessName
!

model: aModelName

	^ self modelScaffolder scaffold: aModelName
! !

