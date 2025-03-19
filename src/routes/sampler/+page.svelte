<script>
    let greeting = "Welcome to Svelte + Tailwind!";
    const parties = [
      {
        title: 'PIHAK PERTAMA',
        name: 'Indri Victoria',
        position: '............... (jabatan)'
      },
      {
        title: 'PIHAK KEDUA',
        name: 'Farida Dewi Yanti',
        position: '............... (jabatan)'
      }
    ];
  </script>
  
  <style>
    /* Additional global styles can be added here */
  </style>
  
  <main class="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    <table class="w-full">
        <tbody>
        <tr>
            {#each parties as party}
            <td class="text-center">
                <b>{party.title}</b>
            </td>
            {/each}
        </tr>
        <tr>
            {#each parties as party}
            <td class="text-center h-20">&nbsp;</td>
            {/each}
        </tr>
        <tr>
            {#each parties as party}
            <td class="text-center">
                <b>{party.name}</b>
            </td>
            {/each}
        </tr>
        <tr>
            {#each parties as party}
            <td class="text-center">{party.position}</td>
            {/each}
        </tr>
        </tbody>
    </table>
</main>