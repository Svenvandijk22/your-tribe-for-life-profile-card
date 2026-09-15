export async function load({ fetch }) {
	const res = await fetch(
		'https://fdnd.directus.app/items/person?fields=*&filter[id][_eq]=253&filter[squads][squad_id][cohort][_eq]=2627'
	);

	const dataPerson = await res.json();

	return {
		person: dataPerson.data
	};
}