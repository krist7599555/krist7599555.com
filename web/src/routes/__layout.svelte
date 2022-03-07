<script>
  import { dev } from '$app/env';
  import { page } from '$app/stores';
  import '../app.scss';
</script>

<svelte:head>
  <script
    async
    src="https://api.countapi.xyz/hit/{dev
      ? 'local.krist7599555.com'
      : 'krist7599555.com'}/visit-{$page.url.pathname.replace(/\//g, '-').replace(/^-/, '') ||
      'home'}"></script>
</svelte:head>

<slot />
