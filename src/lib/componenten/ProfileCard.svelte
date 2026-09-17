<script>
	let { person } = $props();
</script>

<div class="card-wrapper">

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

	</article>

</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');


	/* Wrapper om de hele kaart */
	.card-wrapper {
		position: relative;

		width: 650px;
		min-height: 600px;

		animation: float 7s ease-in-out infinite;


		/* Groene kaart achter de grijze kaart */
		&::before {
			content: "";

			position: absolute;
			inset: 0;

			background-color: #caffb8;
			border-radius: 1.5rem;

			transform: translate(-12px, 12px);

			z-index: 0;
		}
	}


	/* De echte grijze kaart */
	.profile-card {
		position: relative;
		z-index: 1;

		min-height: 600px;
		padding: 2rem;

		background-color: #505050;
		border-radius: 1.5rem;


		.upper-card {
			display: flex;
			align-items: flex-start;
		}


		h1 {
			position: relative;
			z-index: 2;

			margin-right: -3rem;

			font-family: "Archivo Black", sans-serif;
			font-size: 4rem;
			font-weight: 400;
			line-height: 0.9;
			text-transform: uppercase;

			animation: kaartin 0.6s ease-out;
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


	/* Animatie waarmee de naam binnenkomt */
	@keyframes kaartin {
		from {
			opacity: 0;
			transform: translateY(20px);
		}

		to {
			opacity: 1;
			transform: translateY(0);
		}
	}


	/* Animatie waarmee de hele kaart zweeft */
	@keyframes float {
		0% {
			transform: translate(0, 0);
		}

		25% {
			transform: translate(6px, -5px);
		}

		50% {
			transform: translate(-4px, -8px);
		}

		75% {
			transform: translate(-7px, 3px);
		}

		100% {
			transform: translate(0, 0);
		}
	}
</style>