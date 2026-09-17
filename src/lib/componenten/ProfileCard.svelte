<script>
	let { person } = $props();
</script>

<article class="profile-card">

	<div class="upper-card">
	<h1>{person.name}</h1>

	{#if person.mugshot}
		<img
			src={`https://fdnd.directus.app/assets/${person.mugshot}`}
			alt={`Foto van ${person.name}`}
		/>
	{/if}
	</div>

	<p class="bio">{person.bio}</p>
	<p></p>
</article>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');

	.profile-card {
		position: relative;
		
		align-items: flex-start;

		width:  650px;
		min-height: 600px;

		padding: 2rem;

		background-color: #505050;
		border-radius: 1.5rem;

		&::before {
			content: "";

			position: absolute;
			inset: 0;

			background-color: #caffb8;
			border-radius: 1.5rem;

			transform: translate(-12px, 12px);

			z-index: -1;
		}

		.upper-card{

			display: flex;
		}

		h1 {
			position: relative;
			z-index: 2;
			animation: kaartin 0.6s ease-out;


			margin-right: -3rem;

			font-family: "Archivo Black", sans-serif;
			font-size: 4rem;
			font-weight: 400;
			line-height: 0.9;
			text-transform: uppercase;
		}




		img {
			position: relative;
			z-index: 1;

			width: 340px;
			height: 300px;

			object-fit: cover;
			border-radius: 20px;
		}
	}

		@keyframes kaartin {
	
	from {opacity: 0;
	transform: translateY(20px)}

	to {
		opacity: 1;
		transform: translateY(0);
	}}
</style>