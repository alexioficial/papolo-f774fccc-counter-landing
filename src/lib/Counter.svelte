<script lang="ts">
	let count = $state(0);

	function increment() {
		count += 1;
	}

	function decrement() {
		count -= 1;
	}
</script>

<div class="counter">
	<button class="btn" onclick={decrement} aria-label="Decrement">−</button>
	<span class="display">{count}</span>
	<button class="btn" onclick={increment} aria-label="Increment">+</button>
</div>

<style>
	.counter {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		padding: 2rem;
	}

	.btn {
		width: 64px;
		height: 64px;
		border-radius: 12px;
		border: 2px solid #3b82f6;
		background: transparent;
		color: #3b82f6;
		font-size: 2rem;
		font-weight: 700;
		cursor: pointer;
		transition: all 0.15s ease;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.btn:hover {
		background: #3b82f6;
		color: white;
	}

	.btn:active {
		transform: scale(0.93);
	}

	.display {
		font-size: 3rem;
		font-weight: 800;
		min-width: 80px;
		text-align: center;
		font-variant-numeric: tabular-nums;
		color: #1e293b;
	}
</style>
