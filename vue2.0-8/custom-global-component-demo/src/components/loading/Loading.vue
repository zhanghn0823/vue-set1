<template>
	
	<div class="loader"><div class="ball-scale-ripple-multiple"><div></div><div></div><div></div></div></div>
</template>

<style scope>
.loader{
	width: 50px;
	height: 50px;
	margin: 50px auto;
}
@keyframes ball-scale-ripple-multiple {
    0% {
        -webkit-transform: scale(.1);
        transform: scale(.1);
        opacity: 1
    }

    70% {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: .7
    }

    100% {
        opacity: 0
    }
}

.ball-scale-ripple-multiple {
    position: relative;
    -webkit-transform: translateY(-25px);
    transform: translateY(-25px)
}

.ball-scale-ripple-multiple>div:nth-child(0) {
    -webkit-animation-delay: -.8s;
    animation-delay: -.8s
}

.ball-scale-ripple-multiple>div:nth-child(1) {
    -webkit-animation-delay: -.6s;
    animation-delay: -.6s
}

.ball-scale-ripple-multiple>div:nth-child(2) {
    -webkit-animation-delay: -.4s;
    animation-delay: -.4s
}

.ball-scale-ripple-multiple>div:nth-child(3) {
    -webkit-animation-delay: -.2s;
    animation-delay: -.2s
}

.ball-scale-ripple-multiple>div {
    position: absolute;
    top: -2px;
    left: -26px;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 2px solid aqua;
    -webkit-animation: ball-scale-ripple-multiple 1.25s 0s infinite cubic-bezier(.21,.53,.56,.8);
    animation: ball-scale-ripple-multiple 1.25s 0s infinite cubic-bezier(.21,.53,.56,.8)
}

</style>


