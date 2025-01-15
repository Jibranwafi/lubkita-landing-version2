<script lang="ts">
  import { writable, derived } from 'svelte/store';

  // Sample video data - replace with your actual video data
  const videos = writable([
    { 
      id: 1, 
      title: 'Cara daftar penjual di Lubkita.com', 
      duration: '0:30', 
      url: '/lubkita-animasi.mp4', 
      thumbnail: '/page-videopelatihan-thumbnail.png' 
    }
  ]);

  type Video = {
    id: number;
    title: string;
    duration: string;
    url: string;
    thumbnail: string;
  };

  let selectedVideo: Video | null = null;
  let searchTerm = '';

  // Filter videos based on search term
  $: filteredVideos = $videos.filter(video => 
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function playVideo(video: Video) {
    selectedVideo = video;
  }
</script>

<div class="min-h-screen bg-gray-50">
  <div class="flex w-full flex-col lg:flex-row">
    <div class="w-full lg:w-4/5 flex flex-col p-3 bg-yellow-200">
      <div class="bg-slate-100 rounded-xl mx-5">
        <div class="p-5 flex">
          <div class="rounded-xl p-3 w-full">
            <input 
              type="text"
              bind:value={searchTerm}
              placeholder="Search videos..."
              class="w-full rounded-lg border-gray-300 focus:border-purple-500 focus:ring-purple-500"
            />
          </div>
        </div>

        <div class="rounded-xl p-10 min-h-[300px] flex items-center justify-center">
          {#if selectedVideo}
            <div class="w-full">
              <video 
                src={selectedVideo.url} 
                controls 
                class="w-full"
              >
                <track kind="captions">
                Your browser does not support the video tag.
              </video>
            </div>
          {:else}
            <div class="text-gray-500">
              Select a video to play
            </div>
          {/if}
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 p-5 bg-white-200 mt-5 rounded-t-3xl">
        {#each filteredVideos as video (video.id)}
          <button 
            class="flex flex-col bg-white p-3 cursor-pointer hover:bg-slate-100 transition-colors rounded-3xl"
            on:click={() => playVideo(video)}
            on:keydown={(e) => e.key === 'Enter' && playVideo(video)}
          >
            <div class="w-full aspect-video bg-gray-200 rounded-t-3xl">
              <img 
                src={video.thumbnail} 
                alt={video.title}
                class="w-full h-full object-cover rounded-t-3xl"
              />
            </div>
            <div class="flex">
              <div class="flex flex-col w-3/4 p-2 rounded-bl-3xl bg-yellow-200">
                <div class="font-bold mx-5">{video.title}</div>
                <div class="mx-5">{video.duration}</div>
              </div>
              <div class="w-1/4 p-2 flex items-center justify-center hover:bg-slate-500 bg-slate-300 rounded-br-3xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </button>
        {/each}
      </div>
    </div>

    <div class="w-full lg:w-1/5 flex flex-col p-3 bg-slate-200">
      <div class="bg-white p-5 lg:p-10 flex flex-col rounded-3xl">
        <div class="flex justify-center">
          <img src="/page-videopelatihan-selamatdatang.png" alt="Selamat Datang" class="w-full max-w-[300px] h-auto">
        </div>
        <div class="text-center mt-6 font-bold text-xl lg:text-2xl">Selamat Datang</div>
      </div>
      
      <div class="p-3 justify-center flex py-5 lg:py-10">
        <a href="/pendaftaran" class="bg-yellow-200 w-5/6 rounded-full text-center font-bold py-3 lg:py-4 text-xl lg:text-2xl hover:bg-yellow-400 shadow-lg">
          Pendaftaran
        </a>
      </div>

      <div class="p-3 flex flex-col rounded-3xl bg-white">
        <div class="text-center font-bold text-2xl lg:text-3xl my-3 lg:my-5">
          Kontak kami
        </div>

        <!-- Social Media Links -->
        {#each [
          { 
            href: 'https://www.instagram.com/lubkita.id',
            icon: '/page-videopelatihan-instagram-icon.png',
            alt: 'Instagram',
            title: 'lubkita.id',
            text: 'Follow Us On Instagram!!'
          },
          {
            href: 'https://www.tiktok.com/@lubkita.id',
            icon: '/page-videopelatihan-tiktok-icon.png',
            alt: 'TikTok',
            title: 'lubkita.id',
            text: 'Follow Us On TikTok!!'
          },
          {
            href: 'https://wa.me/6282177726868',
            icon: '/page-videopelatihan-whatsappcolor-icon.png',
            alt: 'Whatsapp',
            title: '+62 82177726868',
            text: 'Chat Us On Whatsapp!!'
          },
          {
            href: 'https://www.lubkita.com',
            icon: '/page-videopelatihan-website-icon.png',
            alt: 'website',
            title: 'lubkita.com',
            text: 'Visit Us On Our Platform!!'
          }
        ] as link} link
          <a 
            href={link.href}
            target="_blank" 
            rel="noopener noreferrer" 
            class="flex px-2 py-4 lg:py-6 cursor-pointer hover:bg-gray-50 transition-all transform hover:-translate-y-1"
          >
            <div class="aspect-square w-1/3">
              <img src={link.icon} alt={link.alt} class="w-full h-full object-cover">
            </div>
            <div class="flex flex-col justify-center ml-3 w-2/3">
              <div class="font-bold text-lg">{link.title}</div>
              <div class="text-lg">{link.text}</div>
            </div>
          </a>
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  input, textarea {
    @apply p-3;
  }
</style>