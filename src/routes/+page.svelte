<script>
	import ProfileCard from '$lib/componenten/ProfileCard.svelte';

	const { data } = $props();
	const person = data.person;
</script>

<main>
	<ProfileCard person={person} />
</main>

<style>
	main {
		min-height: 100vh;

		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>