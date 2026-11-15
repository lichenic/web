<script>
	import { onMount } from 'svelte';
	import './styles/main.css';

	let { children } = $props();

	onMount(() => {
		const q = matchMedia('(prefers-color-scheme: dark)');
		const apply = () => document.body.classList.toggle('dark', q.matches);
		apply();
		q.addEventListener('change', apply);
		return () => q.removeEventListener('change', apply);
	});
</script>

{@render children()}