
<script>
	const { data } = $props();
	const person = data.person;
    import ProfileCard from '$lib/componenten/ProfileCard.svelte';

</script>

<ProfileCard person={person} />




