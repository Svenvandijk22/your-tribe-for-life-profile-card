export async function load({ fetch }) {
	const res = await fetch(
		'https://fdnd.directus.app/items/person/253?fields=name,mugshot,birthdate'
	);

	const dataPerson = await res.json();

	return {
		person: dataPerson.data
	};
}