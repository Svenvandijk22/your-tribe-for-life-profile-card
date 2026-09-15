<script>
	let { person } = $props();
</script>

<article class="profile-card">
	<h1>{person.name}</h1>

	{#if person.mugshot}
		<img
			src={`https://fdnd.directus.app/assets/${person.mugshot}`}
			alt={`Foto van ${person.name}`}
		/>
	{/if}
</article>

<style>
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');
	.profile-card {
		position: relative;
        display: flex;

		width: min(80vw, 500px);
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

        h1{
         
	font-family: "Archivo Black", sans-serif;
	font-size: 4rem;
	font-weight: 400;
	line-height: 0.9;
	text-transform: uppercase;
}


        

        img{

            width: 340px;
            height: 300px;
            border-radius: 20px;
        }
	}
</style>