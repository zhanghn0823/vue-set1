<template>
	<strong>
		{{$route.params | json}}
	</strong>
	<br>
	{{$route-query | json}}
</template>