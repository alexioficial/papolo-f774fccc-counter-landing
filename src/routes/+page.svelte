<script lang="ts">
	import Counter from '$lib/Counter.svelte';
</script>

<main>
	<h1>Papolo Counter</h1>
	<p class="subtitle">A minimal SvelteKit counter</p>
	<Counter />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		font-family: system-ui, -apple-system, sans-serif;
		background: #f8fafc;
	}

	h1 {
		font-size: 2rem;
		font-weight: 700;
		color: #0f172a;
		margin: 0;
	}

	.subtitle {
		color: #64748b;
		margin: 0.25rem 0 0.5rem;
	}
</style>
