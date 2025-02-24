<script lang="ts">
</script>

<div class="bg-red-300 flex flex-col">
    
    <div class="border border-black bg-yellow-300">
        <div class="flex flex-col relative">
            <img 
                src="/paket-ldr2.png" 
                alt="LDR Wallpaper" 
                class="w-full object-cover h-[40vh] md:h-auto"
            >
            <div class="absolute inset-x-0 bottom-0 md:h-64 h-24 bg-gradient-to-t from-orange-100 to-transparent"></div>
            <div class="absolute inset-x-0 bottom-0 md:h-64 h-24 bg-gradient-to-t from-orange-100 to-transparent md:flex hidden"></div>
            <div class="absolute inset-x-0 bottom-0 md:h-64 h-24 bg-gradient-to-t from-orange-100 to-transparent md:flex hidden"></div>
        </div>
    </div>
    <div class="flex w-full flex-col">
        <!--
        <div class=" p-3 py-10 w-full flex flex-col bg-amber-200 space-y-4">
        
            <div class="text-center text-4xl font-bold">
                Featured Videos
            </div>
            <div class="flex p-3 space-x-4 justify-center w-full">
                <div class="flex flex-col justify-center bg-yellow-700 text-white p-2 px-4 rounded-full font-semibold">Beginner</div>
                <div class="flex flex-col justify-center text-black border-4 border-yellow-400 p-2 px-4 rounded-full font-semibold bg-yellow-100">Intermediate</div>
                <div class="flex flex-col justify-center text-black border-4 border-yellow-400 p-2 px-4 rounded-full font-semibold bg-yellow-100">Advanced</div>
            </div>
            <div class="flex">
                <div class="w-1/12 flex flex-col justify-center items-center border-2 border-black">arrow</div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 w-10/12">


                    <div class=" bg-white flex flex-col space-y-2">
                        <div class="h-56 flex flex-col justify-end bg-slate-700 border-b-8 border-red-200 border-l-8 border-t-8">
                            <div class=" bg-red-200 w-fit flex ml-auto rounded-tl-full px-5 text-xl border-l-8 border-t-8 border-red-200">Video • 100:30</div>
                        </div>  
                        <div class="p-4">
                            <div class="font-semibold text-2xl ">Title of the Video</div>
                            <div class="line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
                        </div>
                    </div>


                    <div class=" bg-white flex flex-col space-y-2">
                        <div class="h-56 flex flex-col justify-end bg-slate-700 border-b-8 border-teal-300 border-l-8 border-t-8 ">
                            <div class=" bg-teal-300 w-fit flex ml-auto rounded-tl-full px-5 text-xl border-teal-300 border-l-8 border-t-8">Materi</div>
                        </div>
                        <div class="p-4">
                            <div class="font-semibold text-2xl ">Title of the Materi</div>
                            <div class="line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
                        </div>
                    </div>


                    <div class=" bg-white flex flex-col space-y-2">
                        <div class="h-56 flex flex-col justify-end bg-slate-700 border-b-8 border-red-200 border-l-8 border-t-8">
                            <div class=" bg-red-200 w-fit flex ml-auto rounded-tl-full px-5 text-xl border-l-8 border-t-8 border-red-200">Video • 40:30</div>
                        </div>
                        <div class="p-4">
                            <div class="font-semibold text-2xl ">Title of the Video</div>
                            <div class="line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
                        </div>
                    </div>
                </div>
                <div class="w-1/12 flex flex-col justify-center items-center border-2 border-black">arrow</div>
            </div>
        </div>
            -->

        <div class=" flex bg-yellow-100 md:p-16 p-8 md:space-x-10 flex-col md:flex-row md:space-y-0 space-y-10">
                <div class=" bg-slate-700 w-full md:w-2/3 rounded-xl h-96">video</div>
                <div class="w-full md:w-1/3 flex flex-col space-y-4">
                    <div class="font-semibold text-4xl">Title of the video</div>
                    <div class="flex my-2">
                        <div class="bg-red-100 px-2 text-xl">Video</div>
                        <div class="bg-red-400 px-2 text-red-100 font-bold text-xl">0:30</div>
                    </div>
                    <div class="text-xl font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
                    <div class="text-xl font-semibold flex flex-col">
                        Share video ini
                        <div class="flex">
                            <div class="border-2 border-yellow-400 px-2">A</div>
                            <div class="border-2 border-yellow-400 px-2">B</div>
                            <div class="border-2 border-yellow-400 px-2">C</div>
                            <div class="border-2 border-yellow-400 px-2">D</div>
                        </div>
                    </div>
                </div>
            
        </div>
    </div>





    <div class="flex flex-col p-3 py-10 bg-amber-200">
        <div class="p-5">
            <div class="text-4xl font-bold text-center">Jelajahi Materi Pelatihan Digital Kami</div>
        </div>
        <div class=" bg-amber-200 p-5 flex justify-center w-full mx-auto">
            <div class=" rounded-l-full p-3 w-1/2 bg-white">search bar</div>
            <div class="p-2 w-fit rounded-r-full px-5 bg-orange-400 flex flex-col justify-center items-center font-bold">Cari</div>
            <div class="border-4 border-slate-400 w-fit mx-5 flex bg-slate-300 rounded-2xl">
                <div class=" p-2 w-fit flex flex-col justify-center items-center font-bold">Atur pencarian</div>
                <div class=" pr-2 w-fit flex flex-col justify-center items-center">
                    <img src="/page-videopelatihan-sort-icon.png" alt="filter" class="w-6 h-6">
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-3 bg-amber-200">


            <div class=" flex  bg-yellow-100 ">
                <div class="border border-black w-1/3 bg-slate-700"></div>
                <div class="flex flex-col w-2/3 p-5 space-y-2">
                    <div class="font-semibold text-2xl">Title of the Video</div>
                    <div class="flex">
                        <div class=" bg-red-200 px-2 font-light text-lg">Video</div>
                        <div class=" bg-red-400 px-2  text-lg font-bold text-red-100">0:30</div>
                    </div>
                    <div class="line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
                </div>
            </div>


            <div class=" flex  bg-yellow-100 ">
                <div class="border border-black w-1/3 bg-slate-700"></div>
                <div class="flex flex-col w-2/3 p-5 space-y-2">
                    <div class="font-semibold text-2xl">Title of the Video</div>
                    <div class=" bg-teal-300 px-2 font-light text-lg w-fit">Materi Pelatihan</div>
                    <div class="line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
                </div>
            </div>


            <div class=" flex  bg-yellow-100 ">
                <div class="border border-black w-1/3 bg-slate-700"></div>
                <div class="flex flex-col w-2/3 p-5 space-y-2">
                    <div class="font-semibold text-2xl">Title of the Video</div>
<div class=" bg-teal-300 px-2 font-light text-lg w-fit">Materi Pelatihan</div>
                    <div class="line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
                </div>
            </div>


            <div class=" flex  bg-yellow-100 ">
                <div class="border border-black w-1/3 bg-slate-700"></div>
                <div class="flex flex-col w-2/3 p-5 space-y-2">
                    <div class="font-semibold text-2xl">Title of the Video</div>
                    <div class="flex">
                        <div class=" bg-red-200 px-2 font-light text-lg">Video</div>
                        <div class=" bg-red-400 px-2  text-lg font-bold text-red-100">0:30</div>
                    </div>
                    <div class="line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
                </div>
            </div>


            
        </div>


        <div class=" bg-amber-200 flex justify-center py-5 space-x-2">
            <div class="border border-black px-2 w-fit rounded-full">1</div>
            <div class="border border-black px-2 w-fit rounded-full">2</div>
            <div class="border border-black px-2 w-fit rounded-full">3</div>
            <div class="border border-black px-2 w-fit rounded-full">4</div>
            <div class="border border-black px-2 w-fit rounded-full">5</div>
        </div>
    </div>
    <!--
    <div class="border border-black">aaaaa</div>
    -->
</div>

<style>
input, textarea {
    @apply p-3;
}
</style>