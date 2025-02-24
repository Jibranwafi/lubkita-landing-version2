<script lang="ts">
    // You can add props or logic here if needed
    export let companyName = "Lubkita";
    export let year = new Date().getFullYear();
  </script>
  
  <footer class="bg-yellow-800 text-white p-6">
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0 text-center mx-auto">
          <p class="text-lg font-semibold">{companyName}</p>
          <p class="text-sm text-gray-200">© {year} All rights reserved.</p>
        </div>
        <!--
        <div class="flex space-x-6">
          <a href="/" class="hover:text-gray-300 transition-colors">Home</a>
          <a href="/about" class="hover:text-gray-300 transition-colors">About</a>
          <a href="/contact" class="hover:text-gray-300 transition-colors">Contact</a>
        </div>
        
        <div class="mt-4 md:mt-0">
          <div class="flex space-x-4">
            
            <a href="#" class="hover:text-gray-300 transition-colors">Twitter</a>
            <a href="#" class="hover:text-gray-300 transition-colors">LinkedIn</a>
            <a href="#" class="hover:text-gray-300 transition-colors">GitHub</a>
          </div>
        </div>
        -->
      </div>
    </div>
  </footer>