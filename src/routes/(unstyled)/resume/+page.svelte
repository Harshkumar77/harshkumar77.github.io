<script>
    export let data;
</script>

{#if data.link}
    <meta http-equiv="refresh" content="0;url={data.link}" />
    <h1 class="p-2">Redirecting to {data.link}</h1>
{/if}


